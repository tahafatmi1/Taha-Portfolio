export type ResponsiveImageAsset = {
  src: string
  avifSrcSet: string
  webpSrcSet: string
  sizes: string
  width: number
  height: number
}

function createSrcSet(directory: string, name: string, widths: number[], format: 'avif' | 'webp') {
  return widths.map((width) => `/optimized/${directory}/${name}-${width}.${format} ${width}w`).join(', ')
}

export function projectImage(name: string): ResponsiveImageAsset {
  const widths = [640, 1200]
  return {
    src: `/optimized/projects/${name}-1200.webp`,
    avifSrcSet: createSrcSet('projects', name, widths, 'avif'),
    webpSrcSet: createSrcSet('projects', name, widths, 'webp'),
    sizes: '(max-width: 680px) calc(100vw - 48px), (max-width: 1180px) calc(50vw - 40px), 570px',
    width: 1200,
    height: 600,
  }
}

export function certificateImage(name: string, sourceWidth = 1, sourceHeight = 1): ResponsiveImageAsset {
  const width = 480
  const height = Math.round(width * (sourceHeight / sourceWidth))
  return {
    src: `/optimized/certificates/${name}-480.webp`,
    avifSrcSet: `/optimized/certificates/${name}-480.avif 480w`,
    webpSrcSet: `/optimized/certificates/${name}-480.webp 480w`,
    sizes: '(max-width: 680px) 76vw, 235px',
    width,
    height,
  }
}

export function portraitImage(name: string): ResponsiveImageAsset {
  const widths = [480, 800, 1120]
  return {
    src: `/optimized/portraits/${name}-1120.webp`,
    avifSrcSet: createSrcSet('portraits', name, widths, 'avif'),
    webpSrcSet: createSrcSet('portraits', name, widths, 'webp'),
    sizes: '(max-width: 680px) 76vw, (max-width: 900px) 67vw, 545px',
    width: 1120,
    height: 1185,
  }
}
