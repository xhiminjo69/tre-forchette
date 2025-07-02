"use client"

import { useState } from "react"
import { imageUrls } from "@/lib/image-urls"

interface ImageWithFallbackProps {
  src: string
  alt: string
  className?: string
  fallbackText?: string
  width?: number
  height?: number
}

export default function ImageWithFallback({
  src,
  alt,
  className = "",
  fallbackText = "Restaurant Image",
  width = 400,
  height = 300,
}: ImageWithFallbackProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  const handleImageLoad = () => {
    setIsLoading(false)
  }

  if (imageError) {
    return (
      <img
        src={imageUrls.placeholder(width, height, fallbackText) || "/placeholder.svg"}
        alt={alt}
        className={className}
      />
    )
  }

  return (
    <div className="relative">
      {isLoading && <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`} />}
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className={className}
        onError={handleImageError}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  )
}
