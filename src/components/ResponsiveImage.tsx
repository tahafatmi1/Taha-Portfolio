import type { ImgHTMLAttributes } from 'react'
import type { ResponsiveImageAsset } from '../data/imageAssets'

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet' | 'width' | 'height'> & {
  image: ResponsiveImageAsset
}

export function ResponsiveImage({ image, sizes = image.sizes, ...imageProps }: ResponsiveImageProps) {
  return (
    <picture className="responsive-picture">
      <source type="image/avif" srcSet={image.avifSrcSet} sizes={sizes} />
      <img
        {...imageProps}
        src={image.src}
        srcSet={image.webpSrcSet}
        sizes={sizes}
        width={image.width}
        height={image.height}
      />
    </picture>
  )
}
