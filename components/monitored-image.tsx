"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { imageData, cdnImages } from "@/lib/image-data"
import { useImageMonitoring } from "@/hooks/use-image-monitoring"

interface MonitoredImageProps {
  src: string
  alt: string
  className?: string
  width: number
  height: number
  fallbackType?: "dish" | "logo"
  cdnFallback?: keyof typeof cdnImages
  priority?: boolean
  section: string
}

export default function MonitoredImage({
  src,
  alt,
  className = "",
  width,
  height,
  fallbackType = "dish",
  cdnFallback,
  priority = false,
  section,
}: MonitoredImageProps) {
  const [imageError, setImageError] = useState(false)
  const [cdnError, setCdnError] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  const monitoring = useImageMonitoring({ src, alt, section })

  // Handle local image load success
  const handleLocalLoad = () => {
    monitoring.handleSuccess("local")
  }

  // Handle local image error
  const handleLocalError = () => {
    setImageError(true)
    monitoring.handleError("local", "Local image failed to load")
  }

  // Handle CDN image load success
  const handleCdnLoad = () => {
    monitoring.handleSuccess("cdn")
  }

  // Handle CDN image error
  const handleCdnError = () => {
    setCdnError(true)
    monitoring.handleError("cdn", "CDN image failed to load")
  }

  // Handle base64/fallback load
  const handleFallbackLoad = () => {
    monitoring.handleSuccess("base64")
  }

  // If both local and CDN images fail, show base64 fallback
  if (imageError && cdnError) {
    const fallbackSrc = fallbackType === "logo" ? imageData.logo : imageData.fallbackDish

    return (
      <img
        ref={imageRef}
        src={fallbackSrc || "/placeholder.svg"}
        alt={alt}
        className={className}
        style={{ width: `${width}px`, height: `${height}px` }}
        onLoad={handleFallbackLoad}
        onError={() => monitoring.handleError("base64", "Base64 fallback failed")}
      />
    )
  }

  // If local image fails but we have a CDN fallback, try CDN
  if (imageError && cdnFallback && !cdnError) {
    return (
      <Image
        src={cdnImages[cdnFallback] || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onLoad={handleCdnLoad}
        onError={handleCdnError}
        priority={priority}
        quality={85}
      />
    )
  }

  // Try local image first
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={className}
      onLoad={handleLocalLoad}
      onError={handleLocalError}
      priority={priority}
      quality={85}
    />
  )
}
