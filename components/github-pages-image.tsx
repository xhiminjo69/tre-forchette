"use client"

import { useState } from "react"
import Image from "next/image"
import { getImagePath } from "@/lib/utils/image-path"

interface GitHubPagesImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  quality?: number
}

/**
 * Custom Image component that handles paths correctly for GitHub Pages
 * Use this component instead of Next.js Image component for local images
 */
export default function GitHubPagesImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 85
}: GitHubPagesImageProps) {
  const [error, setError] = useState(false)
  
  // Process the image source to ensure it works on GitHub Pages
  const processedSrc = error 
    ? getImagePath("placeholder.svg") 
    : getImagePath(src)

  return (
    <Image
      src={processedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      onError={() => setError(true)}
    />
  )
}
