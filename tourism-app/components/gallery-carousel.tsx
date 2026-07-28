"use client"

import { useEffect, useState, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface GalleryImage {
  imageUrl: string
  guestName: string
  country: string
}

interface GalleryCarouselProps {
  images: GalleryImage[]
}

const ITEMS_PER_SLIDE = 3
const AUTO_PLAY_INTERVAL = 4000

export function GalleryCarousel({ images }: GalleryCarouselProps) {
  const totalSlides = Math.ceil(images.length / ITEMS_PER_SLIDE)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [animating, setAnimating] = useState(false)

  const goToSlide = useCallback(
    (index: number) => {
      if (animating) return
      setAnimating(true)
      setCurrentSlide((index + totalSlides) % totalSlides)
      setTimeout(() => setAnimating(false), 500)
    },
    [animating, totalSlides]
  )

  const next = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide])
  const prev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide])

  useEffect(() => {
    if (isHovered || totalSlides <= 1) return
    const timer = setInterval(next, AUTO_PLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [isHovered, next, totalSlides])

  const visibleImages = images.slice(
    currentSlide * ITEMS_PER_SLIDE,
    currentSlide * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE
  )

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Grid */}
      <div
        key={currentSlide}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-opacity duration-500"
        style={{ opacity: animating ? 0 : 1 }}
      >
        {visibleImages.map((item, index) => (
          <Card
            key={index}
            className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
          >
            <div className="relative bg-muted overflow-hidden aspect-square">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${item.imageUrl}')` }}
              />

              {/* Subtle bottom gradient for text only */}
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Guest Info Overlay */}
              <div className="absolute bottom-0 inset-x-0 flex flex-col p-5 text-white">
                <h3 className="text-base font-bold drop-shadow">{item.guestName}</h3>
                <p className="text-xs text-gray-200">{item.country}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Controls Row */}
      <div className="flex items-center justify-center gap-6 mb-10">
        {/* Prev */}
        <button
          onClick={prev}
          className="rounded-full p-2 border border-border bg-background hover:bg-accent transition-colors duration-200 disabled:opacity-30"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "w-6 h-2.5 bg-primary"
                  : "w-2.5 h-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={next}
          className="rounded-full p-2 border border-border bg-background hover:bg-accent transition-colors duration-200"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>

      {/* Load More Button */}
      <div className="text-center mb-16">
        <Link href="/gallery">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            Load More Memories
          </Button>
        </Link>
      </div>
    </div>
  )
}
