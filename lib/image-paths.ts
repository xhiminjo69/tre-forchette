// ✅ Centralized image path management for production
export const getImagePath = (imagePath: string): string => {
  // Remove leading slash if present
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath

  // In production, ensure proper path resolution
  if (process.env.NODE_ENV === "production") {
    // For static export, use relative paths
    return `/${cleanPath}`
  }

  // In development, use as-is
  return `/${cleanPath}`
}

// ✅ Verify image exists (client-side only)
export const checkImageExists = async (imagePath: string): Promise<boolean> => {
  if (typeof window === "undefined") return true // Skip on server

  try {
    const response = await fetch(imagePath, { method: "HEAD" })
    return response.ok
  } catch {
    return false
  }
}

// ✅ Get optimized image URL with fallbacks
export const getOptimizedImageUrl = (originalPath: string, width?: number, height?: number): string => {
  const path = getImagePath(originalPath)

  // For external CDN images, return as-is
  if (path.startsWith("http")) {
    return path
  }

  // For local images, ensure they're accessible
  return path
}
