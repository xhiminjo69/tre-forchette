"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import ReliableImage from "./reliable-image"
import { getImagePath } from "@/lib/utils/image-path"

interface HeroSectionProps {
  dict: any
}

export default function HeroSection({ dict }: HeroSectionProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.onload = () => setImageLoaded(true)
    img.onerror = () => setImageLoaded(false)
    img.src = getImagePath('/images/hero-seafood-spectacular.jpg')
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden w-full max-w-full">
      {/* Background Image with production-ready fallback */}
      <div className="absolute inset-0">
        {imageLoaded ? (
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url('${getImagePath('/images/hero-seafood-spectacular.jpg')}')`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-red-800 via-red-900 to-red-950 relative">
            {/* Elegant pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.2'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>
        )}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Content - Mobile Optimized */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pt-16 sm:pt-20 w-full overflow-x-hidden">
        {/* Logo - Prominent fork design as shown in the image */}
        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="filter-glow">
            <ReliableImage
              src="/images/tre-forchette-logo.png"
              alt="Tre Forchette Logo"
              className="h-32 sm:h-40 lg:h-48 w-auto drop-shadow-xl"
              width={200}
              height={200}
              priority={true}
              fallbackText="TRE FORCHETTE"
              fallbackType="logo"
              unoptimized={true}
            />
          </div>
        </div>

        {/* Title - Mobile optimized typography */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-playfair mb-3 sm:mb-4 tracking-tight drop-shadow-2xl leading-tight break-words">
          {dict.hero.title}
        </h1>

        {/* Subtitle - Responsive text */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 font-light drop-shadow-lg text-yellow-100 leading-relaxed break-words">
          {dict.hero.subtitle}
        </p>

        {/* Tagline - Mobile friendly */}
        <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto opacity-95 drop-shadow-md text-gray-100 leading-relaxed px-2 break-words">
          {dict.hero.tagline}
        </p>

        {/* CTA Buttons - Mobile optimized */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 sm:mb-6 px-4">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-red-800/90 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-red-700/50 shadow-2xl min-h-[48px]"
            onClick={() => {
              const reservationSection = document.getElementById("reservation")
              if (reservationSection) {
                reservationSection.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
          >
            {dict.hero.cta_reservation}
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-white/90 text-white hover:bg-white hover:text-red-800 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 bg-white/15 backdrop-blur-sm shadow-2xl min-h-[48px]"
            onClick={() => {
              const menuSection = document.getElementById("menu")
              if (menuSection) {
                menuSection.scrollIntoView({ behavior: "smooth", block: "start" })
              }
            }}
          >
            {dict.hero.cta_menu}
          </Button>
        </div>

        {/* Specialties - Mobile friendly */}
        <div className="text-center text-yellow-100 text-xs sm:text-sm font-medium opacity-90 drop-shadow-md px-4 leading-relaxed">
          <span className="block sm:inline">🐟 Fresh Seafood Daily</span>
          <span className="hidden sm:inline"> • </span>
          <span className="block sm:inline">🦐 Authentic Italian</span>
          <span className="hidden sm:inline"> • </span>
          <span className="block sm:inline">🍋 Mediterranean Flavors</span>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
