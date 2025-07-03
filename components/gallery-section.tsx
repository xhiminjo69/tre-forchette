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
    src: "/images/gallery/beef-carpaccio-arugula.jpg",
    alt: "Beef carpaccio with arugula, parmesan, and sun-dried tomatoes",
    title: "Beef Carpaccio with Arugula",
    category: "Antipasti",
    cdnFallback: "beefCarpaccio" as keyof typeof cdnImages,
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
    src: "/images/gallery/grilled-squid-lemon.jpg",
    alt: "Perfectly grilled squid with lemon wedges",
    title: "Grilled Mediterranean Squid",
    category: "Secondi",
    cdnFallback: "grilledSquid" as keyof typeof cdnImages,
  },
  {
    src: "/images/gallery/fresh-mussels-clams.jpg",
    alt: "Fresh mussels and clams in white bowl with shells",
    title: "Fresh Mussels and Clams",
    category: "Antipasti",
    cdnFallback: "freshMussels" as keyof typeof cdnImages,
  },
  {
    src: "/images/gallery/fresh-pasta-tomato-basil.jpg",
    alt: "Fresh pasta with tomato sauce, basil, and parmesan",
    title: "Fresh Pasta with Tomato and Basil",
    category: "Primi",
    cdnFallback: "freshPasta" as keyof typeof cdnImages,
  },
  {
    src: "/images/gallery/seafood-risotto-scallop.jpg",
    alt: "Seafood risotto with decorative scallop shell",
    title: "Seafood Risotto",
    category: "Primi",
    cdnFallback: "seafoodRisotto" as keyof typeof cdnImages,
  },
  {
    src: "/images/gallery/antipasti-selection-golden-tray.jpg",
    alt: "Elegant selection of antipasti served on a golden tray",
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
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, selectedImage])

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1))
    setTimeout(() => setIsTransitioning(false), 300)
  }, [isTransitioning])

  const goToNext = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)
    setTimeout(() => setIsTransitioning(false), 300)
  }, [isTransitioning])

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return
      setIsTransitioning(true)
      setCurrentIndex(index)
      setTimeout(() => setIsTransitioning(false), 300)
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
        <div className="relative max-w-5xl mx-auto mb-8">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl bg-white">
            <div
              className={`w-full h-full transition-all duration-300 ease-in-out ${
                isTransitioning ? "scale-105 opacity-90" : "scale-100 opacity-100"
              }`}
              onClick={() => openLightbox(currentIndex)}
            >
              <ReliableImage
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-500"
                width={800}
                height={500}
                cdnFallback={galleryImages[currentIndex].cdnFallback}
                priority={true}
              />
            </div>

            {/* Image Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-red-800 text-white text-xs font-semibold rounded-full mb-2">
                    {galleryImages[currentIndex].category}
                  </span>
                  <h3 className="text-white text-xl font-semibold">{galleryImages[currentIndex].title}</h3>
                </div>
                <div className="text-white/80 text-sm">
                  {currentIndex + 1} / {galleryImages.length}
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20 transition-all duration-200"
              onClick={goToPrevious}
              disabled={isTransitioning}
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20 transition-all duration-200"
              onClick={goToNext}
              disabled={isTransitioning}
            >
              <ChevronRight size={20} />
            </Button>

            {/* Auto-play Control */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/20"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              {isAutoPlaying ? <Pause size={16} /> : <Play size={16} />}
            </Button>
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  index === currentIndex
                    ? "ring-3 ring-red-800 scale-105 shadow-lg"
                    : "hover:scale-105 hover:shadow-md opacity-80 hover:opacity-100"
                }`}
                onClick={(e) => {
                  // If holding Ctrl/Cmd key, open lightbox directly
                  if (e.ctrlKey || e.metaKey) {
                    openLightbox(index);
                  } else {
                    // Otherwise, change the main image first
                    goToSlide(index);
                    // Then open lightbox after a short delay to allow the main image to update
                    setTimeout(() => openLightbox(index), 300);
                  }
                }}
              >
                <ReliableImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  width={200}
                  height={200}
                  cdnFallback={image.cdnFallback}
                  priority={true}
                  unoptimized={false}
                />
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-red-800/20 border-2 border-red-800 rounded-lg"></div>
                )}
                <div className="absolute bottom-1 left-1 right-1">
                  <span className="inline-block px-1.5 py-0.5 bg-black/60 text-white text-xs rounded text-center w-full truncate">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mt-6">
          <div className="flex space-x-1">
            {galleryImages.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-red-800" : "w-2 bg-gray-300"
                }`}
              />
            ))}
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
                    <span className="inline-block px-3 py-1 bg-red-800 text-white text-sm font-semibold rounded-full mb-2">
                      {galleryImages[selectedImage].category}
                    </span>
                    <h3 className="text-white text-2xl font-semibold mb-1">{galleryImages[selectedImage].title}</h3>
                    <p className="text-gray-300 text-sm">{galleryImages[selectedImage].alt}</p>
                    <p className="text-gray-400 text-xs mt-2">
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
