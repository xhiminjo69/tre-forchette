import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-800 to-red-900">
      <div className="text-center text-white p-8">
        <div className="text-6xl font-bold mb-4">404</div>
        <h1 className="text-2xl font-bold mb-4">Page Not Found</h1>
        <p className="text-lg mb-8 opacity-90">The page you're looking for doesn't exist.</p>
        <div className="space-y-4">
          <Button asChild className="bg-white text-red-800 hover:bg-gray-100">
            <Link href="/en">Go to Homepage</Link>
          </Button>
          <div className="text-sm opacity-75">
            <p>🍽️ TRE FORCHETTE</p>
            <p>Authentic Italian Restaurant</p>
          </div>
        </div>
      </div>
    </div>
  )
}
