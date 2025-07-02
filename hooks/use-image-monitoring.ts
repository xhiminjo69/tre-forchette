"use client"

import { useState, useEffect, useRef } from "react"
import { imageAnalytics } from "@/lib/image-analytics"

interface UseImageMonitoringProps {
  src: string
  alt: string
  section: string
}

interface ImageMonitoringState {
  loadType: "local" | "cdn" | "base64" | "placeholder" | null
  isLoading: boolean
  hasError: boolean
  loadTime: number
  retryCount: number
}

export function useImageMonitoring({ src, alt, section }: UseImageMonitoringProps) {
  const [state, setState] = useState<ImageMonitoringState>({
    loadType: null,
    isLoading: true,
    hasError: false,
    loadTime: 0,
    retryCount: 0,
  })

  const startTimeRef = useRef<number>(0)
  const retryTimeoutRef = useRef<NodeJS.Timeout>()

  const trackLoad = (loadType: "local" | "cdn" | "base64" | "placeholder", success: boolean, error?: string) => {
    const loadTime = startTimeRef.current > 0 ? Date.now() - startTimeRef.current : 0

    imageAnalytics.trackImageLoad({
      src,
      alt,
      section,
      loadType,
      success,
      loadTime,
      error,
    })

    setState((prev) => ({
      ...prev,
      loadType,
      isLoading: false,
      hasError: !success,
      loadTime,
    }))
  }

  const startMonitoring = () => {
    startTimeRef.current = Date.now()
    setState((prev) => ({ ...prev, isLoading: true, hasError: false }))
  }

  const handleSuccess = (loadType: "local" | "cdn" | "base64" | "placeholder") => {
    trackLoad(loadType, true)
  }

  const handleError = (loadType: "local" | "cdn" | "base64" | "placeholder", error: string) => {
    trackLoad(loadType, false, error)
  }

  const retry = () => {
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current)
    }

    setState((prev) => ({
      ...prev,
      retryCount: prev.retryCount + 1,
      isLoading: true,
      hasError: false,
    }))

    retryTimeoutRef.current = setTimeout(() => {
      startMonitoring()
    }, 1000 * Math.pow(2, state.retryCount)) // Exponential backoff
  }

  useEffect(() => {
    startMonitoring()

    return () => {
      if (retryTimeoutRef.current) {
        clearTimeout(retryTimeoutRef.current)
      }
    }
  }, [src])

  return {
    ...state,
    startMonitoring,
    handleSuccess,
    handleError,
    retry,
  }
}
