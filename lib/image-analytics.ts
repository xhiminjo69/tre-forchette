interface ImageLoadEvent {
  src: string
  alt: string
  loadType: "local" | "cdn" | "base64" | "placeholder"
  success: boolean
  loadTime: number
  timestamp: number
  userAgent: string
  viewport: { width: number; height: number }
  section: string
  error?: string
}

interface ImageStats {
  totalLoads: number
  successfulLoads: number
  failedLoads: number
  averageLoadTime: number
  loadTypeBreakdown: Record<string, number>
  sectionBreakdown: Record<string, { success: number; failed: number }>
  recentEvents: ImageLoadEvent[]
}

class ImageAnalytics {
  private events: ImageLoadEvent[] = []
  private readonly maxEvents = 1000
  private readonly storageKey = "tre-forchette-image-analytics"

  constructor() {
    // Load existing data from localStorage
    this.loadFromStorage()
  }

  private loadFromStorage() {
    if (typeof window === "undefined") return

    try {
      const stored = localStorage.getItem(this.storageKey)
      if (stored) {
        const data = JSON.parse(stored)
        this.events = data.events || []
      }
    } catch (error) {
      console.warn("Failed to load image analytics from storage:", error)
    }
  }

  private saveToStorage() {
    if (typeof window === "undefined") return

    try {
      localStorage.setItem(
        this.storageKey,
        JSON.stringify({
          events: this.events.slice(-this.maxEvents), // Keep only recent events
          lastUpdated: Date.now(),
        }),
      )
    } catch (error) {
      console.warn("Failed to save image analytics to storage:", error)
    }
  }

  trackImageLoad(event: Omit<ImageLoadEvent, "timestamp" | "userAgent" | "viewport">) {
    const fullEvent: ImageLoadEvent = {
      ...event,
      timestamp: Date.now(),
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "unknown",
      viewport:
        typeof window !== "undefined"
          ? { width: window.innerWidth, height: window.innerHeight }
          : { width: 0, height: 0 },
    }

    this.events.push(fullEvent)

    // Keep only recent events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents)
    }

    this.saveToStorage()

    // Send to external analytics if configured
    this.sendToExternalAnalytics(fullEvent)
  }

  private async sendToExternalAnalytics(event: ImageLoadEvent) {
    // Send to Google Analytics, Vercel Analytics, or custom endpoint
    try {
      // Example: Send to custom analytics endpoint
      if (process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT) {
        await fetch(process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "image_load",
            data: event,
          }),
        })
      }

      // Google Analytics 4 example
      if (typeof window !== "undefined" && (window as any).gtag) {
        ;(window as any).gtag("event", "image_load", {
          custom_parameter_1: event.loadType,
          custom_parameter_2: event.success ? "success" : "failed",
          custom_parameter_3: event.section,
          value: event.loadTime,
        })
      }
    } catch (error) {
      console.warn("Failed to send analytics:", error)
    }
  }

  getStats(timeRange?: { start: number; end: number }): ImageStats {
    let filteredEvents = this.events

    if (timeRange) {
      filteredEvents = this.events.filter(
        (event) => event.timestamp >= timeRange.start && event.timestamp <= timeRange.end,
      )
    }

    const totalLoads = filteredEvents.length
    const successfulLoads = filteredEvents.filter((e) => e.success).length
    const failedLoads = totalLoads - successfulLoads

    const loadTimes = filteredEvents.filter((e) => e.success && e.loadTime > 0).map((e) => e.loadTime)

    const averageLoadTime = loadTimes.length > 0 ? loadTimes.reduce((sum, time) => sum + time, 0) / loadTimes.length : 0

    const loadTypeBreakdown = filteredEvents.reduce(
      (acc, event) => {
        acc[event.loadType] = (acc[event.loadType] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    const sectionBreakdown = filteredEvents.reduce(
      (acc, event) => {
        if (!acc[event.section]) {
          acc[event.section] = { success: 0, failed: 0 }
        }
        if (event.success) {
          acc[event.section].success++
        } else {
          acc[event.section].failed++
        }
        return acc
      },
      {} as Record<string, { success: number; failed: number }>,
    )

    return {
      totalLoads,
      successfulLoads,
      failedLoads,
      averageLoadTime,
      loadTypeBreakdown,
      sectionBreakdown,
      recentEvents: filteredEvents.slice(-50), // Last 50 events
    }
  }

  getFailureRate(): number {
    const stats = this.getStats()
    return stats.totalLoads > 0 ? (stats.failedLoads / stats.totalLoads) * 100 : 0
  }

  getTopFailingImages(limit = 10): Array<{ src: string; failures: number; section: string }> {
    const failures = this.events
      .filter((e) => !e.success)
      .reduce(
        (acc, event) => {
          const key = `${event.src}|${event.section}`
          if (!acc[key]) {
            acc[key] = { src: event.src, failures: 0, section: event.section }
          }
          acc[key].failures++
          return acc
        },
        {} as Record<string, { src: string; failures: number; section: string }>,
      )

    return Object.values(failures)
      .sort((a, b) => b.failures - a.failures)
      .slice(0, limit)
  }

  clearData() {
    this.events = []
    this.saveToStorage()
  }

  exportData(): string {
    return JSON.stringify(
      {
        events: this.events,
        stats: this.getStats(),
        exportedAt: new Date().toISOString(),
      },
      null,
      2,
    )
  }
}

// Singleton instance
export const imageAnalytics = new ImageAnalytics()
