"use client"

import { useEffect, useState } from "react"

/**
 * Hook to get the correct base path for assets based on environment
 * This is needed for GitHub Pages deployment where assets are served from a subdirectory
 */
export function useBasePath() {
  const [basePath, setBasePath] = useState("")

  useEffect(() => {
    // Check if we're in production (GitHub Pages deployment)
    const isProd = process.env.NODE_ENV === "production"
    
    // Set the base path according to the environment
    // This should match the basePath in next.config.mjs
    setBasePath(isProd ? "/tre-forchette" : "")
  }, [])

  return basePath
}
