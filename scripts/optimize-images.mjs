import { createHash } from 'node:crypto'
import { readdir, readFile, rm, mkdir, stat, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const repositoryRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const sourceRoot = path.join(repositoryRoot, 'source-images')
const publicRoot = path.join(repositoryRoot, 'public')
const outputRoot = path.join(publicRoot, 'optimized')
const cacheFile = path.join(outputRoot, '.image-cache.json')
const supportedImage = /\.(png|jpe?g|webp)$/i
const pipelineVersion = 'responsive-images-v1-project-2x1-avif54-webp78'

if (!outputRoot.startsWith(`${publicRoot}${path.sep}`)) {
  throw new Error('Refusing to write optimized images outside the public directory.')
}

sharp.cache(false)

async function listImages(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  return entries
    .filter((entry) => entry.isFile() && supportedImage.test(entry.name))
    .map((entry) => ({
      name: path.parse(entry.name).name,
      source: path.join(directory, entry.name),
    }))
    .sort((left, right) => left.name.localeCompare(right.name))
}

async function writeVariant(source, destination, resize, format) {
  const pipeline = sharp(source, { sequentialRead: true }).rotate().resize(resize)

  if (format === 'avif') {
    await pipeline.avif({ quality: 54, effort: 4, chromaSubsampling: '4:4:4' }).toFile(destination)
    return
  }

  await pipeline.webp({ quality: 78, alphaQuality: 90, effort: 4, smartSubsample: true }).toFile(destination)
}

async function optimizeCollection({ sourceDirectory, outputDirectory, widths, resizeForWidth }) {
  const images = await listImages(sourceDirectory)
  await mkdir(outputDirectory, { recursive: true })

  for (const image of images) {
    for (const width of widths) {
      const resize = resizeForWidth(width)
      for (const format of ['avif', 'webp']) {
        const destination = path.join(outputDirectory, `${image.name}-${width}.${format}`)
        await writeVariant(image.source, destination, resize, format)
      }
    }
  }

  return images.length
}

async function directoryBytes(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  let total = 0

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name)
    total += entry.isDirectory() ? await directoryBytes(entryPath) : (await stat(entryPath)).size
  }

  return total
}

async function sourceFingerprint() {
  const hash = createHash('sha256').update(pipelineVersion)
  const sourceDirectories = ['projects', 'certificates', 'portraits']

  for (const directory of sourceDirectories) {
    const images = await listImages(path.join(sourceRoot, directory))
    for (const image of images) {
      hash.update(`${directory}/${path.basename(image.source)}`)
      hash.update(await readFile(image.source))
    }
  }

  return hash.digest('hex')
}

async function cacheIsCurrent(fingerprint) {
  try {
    const cache = JSON.parse(await readFile(cacheFile, 'utf8'))
    return cache.fingerprint === fingerprint
  } catch {
    return false
  }
}

async function optimizeImages() {
  const fingerprint = await sourceFingerprint()
  if (await cacheIsCurrent(fingerprint)) {
    console.log('Responsive images are already up to date.')
    return
  }

  await rm(outputRoot, { recursive: true, force: true })

  const projectCount = await optimizeCollection({
    sourceDirectory: path.join(sourceRoot, 'projects'),
    outputDirectory: path.join(outputRoot, 'projects'),
    widths: [640, 1200],
    resizeForWidth: (width) => ({ width, height: Math.round(width / 2), fit: 'cover', position: 'top' }),
  })

  const certificateCount = await optimizeCollection({
    sourceDirectory: path.join(sourceRoot, 'certificates'),
    outputDirectory: path.join(outputRoot, 'certificates'),
    widths: [480],
    resizeForWidth: (width) => ({ width, fit: 'inside' }),
  })

  await optimizeCollection({
    sourceDirectory: path.join(sourceRoot, 'portraits'),
    outputDirectory: path.join(outputRoot, 'portraits'),
    widths: [480, 800, 1120],
    resizeForWidth: (width) => ({ width, fit: 'inside', withoutEnlargement: true }),
  })

  await writeFile(cacheFile, `${JSON.stringify({ fingerprint }, null, 2)}\n`)

  const originalBytes = await directoryBytes(sourceRoot)
  const optimizedBytes = await directoryBytes(outputRoot)
  const reduction = 100 - (optimizedBytes / originalBytes) * 100

  console.log(`Optimized ${projectCount} project screenshots and ${certificateCount} certificate images.`)
  console.log(`Source assets: ${(originalBytes / 1024 / 1024).toFixed(2)} MB`)
  console.log(`Generated responsive assets: ${(optimizedBytes / 1024 / 1024).toFixed(2)} MB (${reduction.toFixed(1)}% smaller)`)
}

await optimizeImages()
