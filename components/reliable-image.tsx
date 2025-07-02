"use client"

import { useState } from "react"
import Image from "next/image"
import { imageData, cdnImages } from "@/lib/image-data"

interface ReliableImageProps {
  src: string
  alt: string
  className?: string
  width: number
  height: number
  fallbackType?: "dish" | "logo"
  cdnFallback?: keyof typeof cdnImages
  priority?: boolean
}

export default function ReliableImage({
  src,
  alt,
  className = "",
  width,
  height,
  fallbackType = "dish",
  cdnFallback,
  priority = false,
}: ReliableImageProps) {
  const [imageError, setImageError] = useState(false)
  const [cdnError, setCdnError] = useState(false)

  // If both local and CDN images fail, show base64 fallback
  if (imageError && cdnError) {
    if (fallbackType === "logo") {
      return (
        <img
          src={imageData.logo || "/placeholder.svg"}
          alt={alt}
          className={className}
          style={{ width: `${width}px`, height: `${height}px` }}
        />
      )
    }
    return (
      <img
        src={imageData.fallbackDish || "/placeholder.svg"}
        alt={alt}
        className={className}
        style={{ width: `${width}px`, height: `${height}px` }}
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
        onError={() => setCdnError(true)}
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
      onError={() => setImageError(true)}
      priority={priority}
      quality={85}
    />
  )
}
