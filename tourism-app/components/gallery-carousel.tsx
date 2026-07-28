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
  const [paused, setPaused] = useState(false)

  const slides: GalleryImage[][] = Array.from({ length: totalSlides }, (_, i) =>
    images.slice(i * ITEMS_PER_SLIDE, i * ITEMS_PER_SLIDE + ITEMS_PER_SLIDE)
  )

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentSlide((index + totalSlides) % totalSlides)
    },
    [totalSlides]
  )

  const next = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide])
  const prev = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide])

  useEffect(() => {
    if (paused || totalSlides <= 1) return
    const timer = setInterval(next, AUTO_PLAY_INTERVAL)
    return () => clearInterval(timer)
  }, [paused, next, totalSlides])

  return (
    <div>
      {/* Sliding strip */}
      <div className="overflow-hidden rounded-xl mb-10">
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: "transform 700ms cubic-bezier(0.4, 0, 0.2, 1)",
            willChange: "transform",
          }}
        >
          {slides.map((slideItems, slideIndex) => (
            <div
              key={slideIndex}
              className="w-full flex-none grid grid-cols-1 md:grid-cols-3 gap-6 px-1"
            >
              {slideItems.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
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
          ))}
        </div>
      </div>

      {/* Controls */}
      {totalSlides > 1 && (
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={prev}
            aria-label="Previous"
            className="rounded-full p-2.5 border border-border bg-background hover:bg-accent transition-colors duration-200"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-500 ${i === currentSlide
                  ? "w-7 h-2.5 bg-primary"
                  : "w-2.5 h-2.5 bg-muted-foreground/35 hover:bg-muted-foreground/60"
                  }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            aria-label="Next"
            className="rounded-full p-2.5 border border-border bg-background hover:bg-accent transition-colors duration-200"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>
        </div>
      )}

      {/* Load More Button */}
      <div className="text-center mb-16 mt-5">
        <Link href="/gallery">
          <Button
            size="lg"
            className="bg-primary text-primary-foreground text-lg px-10 py-8"
          >
            Load More Memories
          </Button>
        </Link>
      </div>
    </div>
  )
}
