"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { getImagePath, checkImageExists } from "@/lib/image-paths"
import { cdnImages, imageData } from "@/lib/image-data"

interface ProductionImageProps {
  src: string
  alt: string
  className?: string
  width: number
  height: number
  fallbackType?: "dish" | "logo"
  cdnFallback?: keyof typeof cdnImages
  priority?: boolean
  section?: string
}

export default function ProductionImage({
  src,
  alt,
  className = "",
  width,
  height,
  fallbackType = "dish",
  cdnFallback,
  priority = false,
  section = "unknown",
}: ProductionImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(getImagePath(src))
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [fallbackLevel, setFallbackLevel] = useState<"local" | "cdn" | "base64">("local")

  // Check if image exists on mount
  useEffect(() => {
    const verifyImage = async () => {
      const imagePath = getImagePath(src)
      const exists = await checkImageExists(imagePath)

      if (!exists && cdnFallback) {
        console.warn(`Local image not found: ${imagePath}, using CDN fallback`)
        setCurrentSrc(cdnImages[cdnFallback])
        setFallbackLevel("cdn")
      } else if (!exists) {
        console.warn(`Local image not found: ${imagePath}, using base64 fallback`)
        setHasError(true)
        setFallbackLevel("base64")
      }
    }

    verifyImage()
  }, [src, cdnFallback])

  const handleError = () => {
    console.error(`Image failed to load: ${currentSrc}`)

    if (fallbackLevel === "local" && cdnFallback) {
      // Try CDN fallback
      console.log(`Trying CDN fallback for: ${src}`)
      setCurrentSrc(cdnImages[cdnFallback])
      setFallbackLevel("cdn")
      setHasError(false)
    } else {
      // Use base64 fallback
      console.log(`Using base64 fallback for: ${src}`)
      setHasError(true)
      setFallbackLevel("base64")
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
    console.log(`Image loaded successfully: ${currentSrc} (${fallbackLevel})`)
  }

  // Show base64 fallback
  if (hasError || fallbackLevel === "base64") {
    const fallbackSrc = fallbackType === "logo" ? imageData.logo : imageData.fallbackDish

    return (
      <div className="relative">
        {isLoading && <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`} />}
        <img
          src={fallbackSrc || "/placeholder.svg"}
          alt={alt}
          className={className}
          style={{ width: `${width}px`, height: `${height}px` }}
          onLoad={handleLoad}
          onError={() => console.error("Base64 fallback failed")}
        />
        {process.env.NODE_ENV === "development" && (
          <div className="absolute top-0 left-0 bg-red-500 text-white text-xs px-1">BASE64</div>
        )}
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`} />}
      <Image
        src={currentSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
        priority={priority}
        quality={85}
        unoptimized={process.env.NODE_ENV === "production"}
        style={{ display: isLoading ? "none" : "block" }}
      />
      {process.env.NODE_ENV === "development" && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-1">{fallbackLevel.toUpperCase()}</div>
      )}
    </div>
  )
}
