"use client"

import { useState } from "react"
import Image from "next/image"

interface ImageFallbackProps {
  src: string
  alt: string
  className?: string
  width: number
  height: number
  priority?: boolean
  fallbackText?: string
}

export default function ImageFallback({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  fallbackText = "TRE FORCHETTE",
}: ImageFallbackProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Create absolute path for production
  const imageSrc = src.startsWith("/") ? src : `/${src}`

  if (imageError) {
    return (
      <div
        className={`bg-gradient-to-br from-red-800 to-red-900 flex items-center justify-center text-white ${className}`}
      >
        <div className="text-center p-4">
          <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">🍽️</div>
          <div className="text-sm sm:text-base font-bold font-playfair">{fallbackText}</div>
          <div className="text-xs sm:text-sm opacity-80 mt-1">Authentic Italian Cuisine</div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {isLoading && <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`} />}
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onError={() => {
          setImageError(true)
          setIsLoading(false)
        }}
        onLoad={() => setIsLoading(false)}
        priority={priority}
        unoptimized={true} // Required for static export
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  )
}
