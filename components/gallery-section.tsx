"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, X, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReliableImage from "./reliable-image"
import type { cdnImages } from "@/lib/image-data"
import { getImagePath } from "@/lib/utils/image-path"
import { galleryPlusImages } from "@/lib/gallery-plus-images"

interface GallerySectionProps {
  dict: any
}

// Combine original gallery images with the new ones
const galleryImages = [
  {
    src: "/images/gallery/fish-carpaccio-olive-oil.jpg",
    alt: "Fresh fish carpaccio with olive oil drizzle and herbs",
    title: "Fish Carpaccio with Olive Oil",
    category: "Crudo",
    cdnFallback: "fishCarpaccio" as keyof typeof cdnImages,
  },

  {
    src: "/images/gallery/bistecca-fiorentina-sliced.jpg",
    alt: "Bistecca alla Fiorentina sliced and served on cast iron plate",
    title: "Bistecca alla Fiorentina",
    category: "Secondi",
    cdnFallback: "bisteccaFiorentina" as keyof typeof cdnImages,
  },
  {
    src: "/images/gallery/bistecca-fiorentina-wine.jpg",
    alt: "Sliced Bistecca alla Fiorentina with wine and colorful sauces",
    title: "Bistecca alla Fiorentina with Wine",
    category: "Secondi",
    cdnFallback: "bisteccaFiorentina" as keyof typeof cdnImages,
  },

  {
    src: "/images/gallery/fresh-mussels-clams.jpg",
    alt: "Fresh mussels and clams in white bowl with shells",
    title: "Fresh Mussels and Clams",
    category: "Antipasti",
    cdnFallback: "freshMussels" as keyof typeof cdnImages,
  },
  {
    src: "/images/GALLERIA PLUS per 3forketet/ANIPASTTT.jpg",
    alt: "Antipasti Mastery - Exquisite Italian appetizers",
    title: "Antipasti Selection",
    category: "Antipasti",
    cdnFallback: "antipastiSelection" as keyof typeof cdnImages,
  },
  {
    src: "/images/gallery/baked-fish-pan.jpg",
    alt: "Whole baked fish in a cast iron pan with herbs and lemon",
    title: "Baked Fish",
    category: "Secondi",
    cdnFallback: "bakedFish" as keyof typeof cdnImages,
  },
  {
    src: "/images/gallery/fresh-prawns.jpg",
    alt: "Fresh prawns elegantly arranged with garnishes",
    title: "Fresh Prawns",
    category: "Crudo",
    cdnFallback: "freshPrawns" as keyof typeof cdnImages,
  },
  {
    src: "/images/gallery/grilled-steak.jpg",
    alt: "Perfectly grilled steak with rosemary and seasoning",
    title: "Grilled Steak",
    category: "Secondi",
    cdnFallback: "grilledSteak" as keyof typeof cdnImages,
  },
  {
    src: "/images/gallery/lobster-pasta.jpg",
    alt: "Luxurious lobster pasta with rich sauce",
    title: "Lobster Pasta",
    category: "Primi",
    cdnFallback: "lobsterPasta" as keyof typeof cdnImages,
  },
  {
    src: "/images/gallery/octopus-artistry.jpg",
    alt: "Artistically presented octopus dish with colorful garnishes",
    title: "Octopus Artistry",
    category: "Secondi",
    cdnFallback: "octopusArtistry" as keyof typeof cdnImages,
  },
  {
    src: "/images/gallery/seafood-antipasti-variety.jpg",
    alt: "Variety of seafood antipasti beautifully presented",
    title: "Seafood Antipasti Variety",
    category: "Antipasti",
    cdnFallback: "seafoodAntipasti" as keyof typeof cdnImages,
  },
  // Add all the new gallery images from GALLERIA PLUS per 3forketet folder
  ...galleryPlusImages,
  {
    src: "/images/gallery/seafood-pasta.jpg",
    alt: "Rich seafood pasta with mussels, clams and prawns",
    title: "Seafood Pasta",
    category: "Primi",
    cdnFallback: "seafoodPasta" as keyof typeof cdnImages,
  },
  {
    src: "/images/gallery/whole-fish-baked.jpg",
    alt: "Whole fish baked to perfection with Mediterranean herbs",
    title: "Whole Baked Fish",
    category: "Secondi",
    cdnFallback: "wholeFishBaked" as keyof typeof cdnImages,
  },
  {
    src: "/images/gallery/restaurant-steak-ambiance.jpg",
    alt: "Elegant restaurant ambiance with perfectly cooked steak",
    title: "Steak & Ambiance",
    category: "Dining Experience",
    cdnFallback: "restaurantSteakAmbiance" as keyof typeof cdnImages,
  },
]

export default function GallerySection({ dict }: GallerySectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || selectedImage !== null) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, selectedImage])

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const goToNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return
      setIsTransitioning(true)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 500)
    },
    [currentIndex, isTransitioning],
  )

  const openLightbox = useCallback((index: number) => {
    setSelectedImage(index)
    setIsAutoPlaying(false)
  }, [])

  const closeLightbox = useCallback(() => {
    setSelectedImage(null)
    setIsAutoPlaying(true)
  }, [])

  return (
    <section id="gallery" className="section-padding bg-gray-50">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold font-playfair text-gray-900 mb-4">{dict.gallery.title}</h2>
          <p className="text-xl text-red-800 font-medium mb-8">{dict.gallery.subtitle}</p>
        </div>

        {/* Main Carousel Display */}
        <div className="relative max-w-5xl mx-auto mb-4">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-white">
            <div
              className={`w-full h-full transition-all duration-500 ease-in-out ${
                isTransitioning ? "scale-105 opacity-90" : "scale-100 opacity-100"
              }`}
              onClick={() => openLightbox(currentIndex)}
            >
              <ReliableImage
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                width={1200}
                height={800}
                cdnFallback={galleryImages[currentIndex].cdnFallback}
                priority={true}
              />
            </div>

            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <div className="flex items-center justify-end">
                <div className="text-white/80 text-sm">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/40 text-white backdrop-blur-sm border border-white/20 transition-all duration-200 w-10 h-10 rounded-full shadow-lg"
              onClick={goToPrevious}
              disabled={isTransitioning}
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/40 text-white backdrop-blur-sm border border-white/20 transition-all duration-200 w-10 h-10 rounded-full shadow-lg"
              onClick={goToNext}
              disabled={isTransitioning}
            >
              <ChevronRight size={24} />
            </Button>

            {/* Auto-play Control */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-white/30 hover:bg-white/40 text-white backdrop-blur-sm border border-white/20 w-8 h-8 rounded-full"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            </Button>
          </div>
        </div>


        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-7xl max-h-full w-full">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10 bg-white/10 backdrop-blur-sm"
                onClick={closeLightbox}
              >
                <X size={24} />
              </Button>

              {/* Main Image */}
              <div className="relative">
                <ReliableImage
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="max-w-full max-h-[80vh] object-contain mx-auto rounded-lg"
                  width={1200}
                  height={800}
                  cdnFallback={galleryImages[selectedImage].cdnFallback}
                />

                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  <div className="text-center">
                    <p className="text-gray-400 text-xs">
                      {selectedImage + 1} of {galleryImages.length}
                    </p>
                  </div>
                </div>
              </div>

              {/* Lightbox Navigation */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                onClick={() => setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)}
              >
                <ChevronLeft size={24} />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
                onClick={() => setSelectedImage((selectedImage + 1) % galleryImages.length)}
              >
                <ChevronRight size={24} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
