"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, AlertTriangle, Eye } from "lucide-react"

export default function ImageVerificationGuide() {
  const [isVisible, setIsVisible] = useState(false)

  const checklistItems = [
    {
      section: "Header",
      items: ["TRE FORCHETTE logo displays (not text fallback)", "Logo is clear and not pixelated"],
    },
    {
      section: "Hero Section",
      items: [
        "Background seafood image displays",
        "Logo in center displays correctly",
        "No solid color background fallback",
      ],
    },
    {
      section: "About Section",
      items: ["Tasting menu image displays on right side", "Image is high quality and clear"],
    },
    {
      section: "Gallery Section",
      items: [
        "Main carousel image displays",
        "Thumbnail images display below",
        "Images change when clicking thumbnails",
        "No broken image icons",
      ],
    },
    {
      section: "Blog Section",
      items: [
        "Chef cutting steak image displays",
        "Antipasti selection images display",
        "Background images in article sections",
      ],
    },
  ]

  const troubleshootingSteps = [
    {
      step: "Open Browser DevTools",
      action: "Press F12 or right-click → Inspect",
      lookFor: "Network tab to see failed requests",
    },
    {
      step: "Check Console Tab",
      action: "Look for red error messages",
      lookFor: "404 errors or 'Failed to load' messages",
    },
    {
      step: "Check Network Tab",
      action: "Reload page and watch requests",
      lookFor: "Red/failed image requests (should be green/200)",
    },
    {
      step: "Test Direct Image URLs",
      action: "Try opening image URLs directly",
      lookFor: "Images should load, not redirect to /en/images/...",
    },
  ]

  if (!isVisible) {
    return (
      <div className="fixed top-4 right-4 z-50">
        <Button onClick={() => setIsVisible(true)} variant="outline" size="sm" className="bg-blue-50 border-blue-200">
          <Eye size={16} className="mr-2" />
          Image Verification Guide
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">🔍 Image Verification Checklist</h2>
            <p className="text-gray-600">Use this guide to verify all images are loading correctly</p>
          </div>
          <Button onClick={() => setIsVisible(false)} variant="ghost" size="sm">
            ×
          </Button>
        </div>

        <div className="p-6 space-y-6">
          {/* Verification Checklist */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <CheckCircle className="text-green-500 mr-2" size={20} />
              Visual Verification Checklist
            </h3>
            <div className="space-y-4">
              {checklistItems.map((section, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-2">{section.section}</h4>
                  <div className="space-y-1">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-4 h-4 border border-gray-300 rounded mr-2 flex-shrink-0"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Troubleshooting Steps */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <AlertTriangle className="text-orange-500 mr-2" size={20} />
              Troubleshooting Steps
            </h3>
            <div className="space-y-3">
              {troubleshootingSteps.map((step, index) => (
                <div key={index} className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800">{step.step}</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        <strong>Action:</strong> {step.action}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Look for:</strong> {step.lookFor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Test URLs */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Eye className="text-blue-500 mr-2" size={20} />
              Quick Test URLs
            </h3>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 mb-3">
                <strong>Test these URLs directly in your browser:</strong>
              </p>
              <div className="space-y-2 font-mono text-sm">
                <div className="bg-white p-2 rounded border">
                  <span className="text-blue-600">http://localhost:3000/images/tre-forchette-logo.png</span>
                  <span className="text-gray-500 ml-2">→ Should show logo image</span>
                </div>
                <div className="bg-white p-2 rounded border">
                  <span className="text-blue-600">http://localhost:3000/images/hero-seafood-platter.jpg</span>
                  <span className="text-gray-500 ml-2">→ Should show seafood image</span>
                </div>
                <div className="bg-white p-2 rounded border">
                  <span className="text-blue-600">http://localhost:3000/en</span>
                  <span className="text-gray-500 ml-2">→ Should show full website with all images</span>
                </div>
              </div>
            </div>
          </div>

          {/* Success/Failure Indicators */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                <CheckCircle className="text-green-600 mr-2" size={16} />✅ Success Indicators
              </h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• All images display clearly</li>
                <li>• No broken image icons</li>
                <li>• No 404 errors in console</li>
                <li>• Images load quickly</li>
                <li>• Gallery carousel works</li>
              </ul>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                <XCircle className="text-red-600 mr-2" size={16} />❌ Problem Indicators
              </h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Broken image icons (🖼️ with X)</li>
                <li>• Gray placeholder boxes</li>
                <li>• "TRE FORCHETTE" text instead of logo</li>
                <li>• 404 errors in browser console</li>
                <li>• Solid color backgrounds</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
