"use client"

import { useState, useEffect } from "react"

export default function ImageDebugger() {
  const [imageTests, setImageTests] = useState<Array<{ url: string; status: string; error?: string }>>([])

  const testImages = [
    "/images/tre-forchette-logo.png",
    "/images/hero-seafood-platter.jpg",
    "/images/gallery/pasta-dishes.jpg",
    "/images/about-tasting-menu.jpg",
  ]

  useEffect(() => {
    const testImageUrls = async () => {
      const results = await Promise.all(
        testImages.map(async (url) => {
          try {
            const response = await fetch(url, { method: "HEAD" })
            return {
              url,
              status: response.ok ? "✅ SUCCESS" : `❌ FAILED (${response.status})`,
            }
          } catch (error) {
            return {
              url,
              status: "❌ ERROR",
              error: error instanceof Error ? error.message : "Unknown error",
            }
          }
        }),
      )
      setImageTests(results)
    }

    testImageUrls()
  }, [])

  // Only show in development
  if (process.env.NODE_ENV === "production") return null

  return (
    <div className="fixed bottom-4 left-4 bg-white border border-gray-300 rounded-lg p-4 shadow-lg max-w-md z-50">
      <h3 className="font-bold text-sm mb-2">🔍 Image Debug Status</h3>
      <div className="space-y-1 text-xs">
        {imageTests.map((test, index) => (
          <div key={index} className="flex justify-between">
            <span className="truncate mr-2">{test.url.split("/").pop()}</span>
            <span className={test.status.includes("SUCCESS") ? "text-green-600" : "text-red-600"}>{test.status}</span>
          </div>
        ))}
      </div>
      <div className="mt-2 pt-2 border-t border-gray-200 text-xs text-gray-500">
        Open DevTools → Network to see detailed requests
      </div>
    </div>
  )
}
