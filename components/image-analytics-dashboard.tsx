"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Download, RefreshCw, AlertTriangle, CheckCircle, Clock, ImageIcon } from "lucide-react"
import { imageAnalytics } from "@/lib/image-analytics"

const COLORS = ["#10B981", "#F59E0B", "#EF4444", "#8B5CF6"]

export default function ImageAnalyticsDashboard() {
  const [stats, setStats] = useState(imageAnalytics.getStats())
  const [timeRange, setTimeRange] = useState<"1h" | "24h" | "7d" | "all">("24h")
  const [isVisible, setIsVisible] = useState(false)

  const refreshStats = () => {
    const now = Date.now()
    let start = 0

    switch (timeRange) {
      case "1h":
        start = now - 60 * 60 * 1000
        break
      case "24h":
        start = now - 24 * 60 * 60 * 1000
        break
      case "7d":
        start = now - 7 * 24 * 60 * 60 * 1000
        break
      default:
        start = 0
    }

    setStats(imageAnalytics.getStats(timeRange === "all" ? undefined : { start, end: now }))
  }

  useEffect(() => {
    refreshStats()
  }, [timeRange])

  useEffect(() => {
    const interval = setInterval(refreshStats, 30000) // Refresh every 30 seconds
    return () => clearInterval(interval)
  }, [timeRange])

  const successRate = stats.totalLoads > 0 ? (stats.successfulLoads / stats.totalLoads) * 100 : 0
  const failureRate = 100 - successRate

  const loadTypeData = Object.entries(stats.loadTypeBreakdown).map(([type, count]) => ({
    name: type.charAt(0).toUpperCase() + type.slice(1),
    value: count,
    percentage: stats.totalLoads > 0 ? (count / stats.totalLoads) * 100 : 0,
  }))

  const sectionData = Object.entries(stats.sectionBreakdown).map(([section, data]) => ({
    section: section.charAt(0).toUpperCase() + section.slice(1),
    success: data.success,
    failed: data.failed,
    total: data.success + data.failed,
    successRate: data.success + data.failed > 0 ? (data.success / (data.success + data.failed)) * 100 : 0,
  }))

  const topFailingImages = imageAnalytics.getTopFailingImages(5)

  const exportData = () => {
    const data = imageAnalytics.exportData()
    const blob = new Blob([data], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `tre-forchette-image-analytics-${new Date().toISOString().split("T")[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Show dashboard only in development or when specifically enabled
  if (process.env.NODE_ENV === "production" && !isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button onClick={() => setIsVisible(true)} variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
          <ImageIcon size={16} className="mr-2" />
          Image Analytics
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Image Analytics Dashboard</h2>
            <p className="text-gray-600">Monitor image loading performance and success rates</p>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value as any)}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm"
            >
              <option value="1h">Last Hour</option>
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="all">All Time</option>
            </select>
            <Button onClick={refreshStats} variant="outline" size="sm">
              <RefreshCw size={16} className="mr-2" />
              Refresh
            </Button>
            <Button onClick={exportData} variant="outline" size="sm">
              <Download size={16} className="mr-2" />
              Export
            </Button>
            <Button onClick={() => setIsVisible(false)} variant="ghost" size="sm">
              ×
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Total Loads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900">{stats.totalLoads}</div>
                <div className="flex items-center mt-1">
                  <ImageIcon size={16} className="text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">Images processed</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{successRate.toFixed(1)}%</div>
                <div className="flex items-center mt-1">
                  <CheckCircle size={16} className="text-green-500 mr-1" />
                  <span className="text-xs text-gray-500">{stats.successfulLoads} successful</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Failure Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{failureRate.toFixed(1)}%</div>
                <div className="flex items-center mt-1">
                  <AlertTriangle size={16} className="text-red-500 mr-1" />
                  <span className="text-xs text-gray-500">{stats.failedLoads} failed</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">Avg Load Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{stats.averageLoadTime.toFixed(0)}ms</div>
                <div className="flex items-center mt-1">
                  <Clock size={16} className="text-blue-500 mr-1" />
                  <span className="text-xs text-gray-500">Average response</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Load Type Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle>Load Type Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={loadTypeData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percentage }) => `${name}: ${percentage.toFixed(1)}%`}
                    >
                      {loadTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Section Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Performance by Section</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={sectionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="section" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="success" fill="#10B981" name="Success" />
                    <Bar dataKey="failed" fill="#EF4444" name="Failed" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Top Failing Images */}
          {topFailingImages.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="text-red-500 mr-2" size={20} />
                  Top Failing Images
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topFailingImages.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">
                          {item.src.split("/").pop() || item.src}
                        </div>
                        <div className="text-xs text-gray-500">Section: {item.section}</div>
                      </div>
                      <Badge variant="destructive">{item.failures} failures</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recent Events */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Events</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-60 overflow-y-auto">
                {stats.recentEvents
                  .slice(-10)
                  .reverse()
                  .map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded text-sm">
                      <div className="flex items-center space-x-2">
                        {event.success ? (
                          <CheckCircle size={16} className="text-green-500" />
                        ) : (
                          <AlertTriangle size={16} className="text-red-500" />
                        )}
                        <span className="font-medium">{event.loadType}</span>
                        <span className="text-gray-600 truncate max-w-xs">
                          {event.src.split("/").pop() || event.src}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{event.section}</span>
                        <span>{event.loadTime}ms</span>
                        <span>{new Date(event.timestamp).toLocaleTimeString()}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleTimeString()}</div>
            <div className="space-x-2">
              <Button onClick={() => imageAnalytics.clearData()} variant="outline" size="sm">
                Clear Data
              </Button>
              <Button onClick={exportData} variant="outline" size="sm">
                <Download size={16} className="mr-2" />
                Export JSON
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
