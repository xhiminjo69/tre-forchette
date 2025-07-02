"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { imageData, cdnImages } from "@/lib/image-data"
import { getImagePath } from "@/lib/utils/image-path"

interface ReliableImageProps {
  src: string
  alt: string
  className?: string
  width: number
  height: number
  fallbackType?: "dish" | "logo"
  cdnFallback?: keyof typeof cdnImages
  priority?: boolean
  fallbackText?: string
  unoptimized?: boolean
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
  fallbackText = "TRE FORCHETTE",
  unoptimized = false,
}: ReliableImageProps) {
  const [imageError, setImageError] = useState(false)
  const [cdnError, setCdnError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Handle successful image load
  const handleImageLoad = () => {
    setIsLoading(false)
  }

  // Handle image error
  const handleImageError = () => {
    setImageError(true)
    setIsLoading(false)
  }

  // Handle CDN image error
  const handleCdnError = () => {
    setCdnError(true)
    setIsLoading(false)
  }
  
  // Always process the image source through getImagePath to ensure it works correctly on GitHub Pages
  const processedSrc = src.startsWith("http") ? src : getImagePath(src)
  
  // Pre-load the image to check if it exists
  useEffect(() => {
    if (!processedSrc.startsWith("http")) {
      const img = new window.Image()
      img.src = processedSrc
      img.onload = handleImageLoad
      img.onerror = handleImageError
    }
  }, [processedSrc])

  // If both local and CDN images fail, show fallback
  if (imageError && (cdnError || !cdnFallback)) {
    // Use base64 encoded fallback
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
    
    // Use either base64 fallback or a styled div with text
    return (
      <div
        className={`bg-gradient-to-br from-red-800 to-red-900 flex items-center justify-center text-white ${className}`}
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div className="text-center p-4">
          <div className="text-2xl sm:text-3xl lg:text-4xl mb-2">🍽️</div>
          <div className="text-sm sm:text-base font-bold font-playfair">{fallbackText}</div>
          <div className="text-xs sm:text-sm opacity-80 mt-1">Authentic Italian Cuisine</div>
        </div>
      </div>
    )
  }

  // If local image fails but we have a CDN fallback, try CDN
  if (imageError && cdnFallback && !cdnError) {
    return (
      <div className="relative">
        {isLoading && <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`} />}
        <Image
          src={cdnImages[cdnFallback] || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={className}
          onError={handleCdnError}
          onLoad={handleImageLoad}
          priority={priority}
          quality={85}
          unoptimized={unoptimized}
          loading="eager"
          style={{ display: isLoading ? "none" : "block" }}
        />
      </div>
    )
  }

  // Try local image first
  return (
    <div className="relative">
      {isLoading && <div className={`absolute inset-0 bg-gray-200 animate-pulse ${className}`} />}
      <Image
        src={processedSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className={className}
        onError={handleImageError}
        onLoad={handleImageLoad}
        priority={priority}
        quality={85}
        unoptimized={unoptimized}
        loading="eager"
        style={{ display: isLoading ? "none" : "block" }}
      />
    </div>
  )
}
