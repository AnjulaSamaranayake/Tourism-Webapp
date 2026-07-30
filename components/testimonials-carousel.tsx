"use client"

import { useEffect, useState, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  fullName: string
  country: string
  tour: string
  rating: number
  story: string
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

const AUTO_PLAY_INTERVAL = 4500

function useItemsPerSlide() {
  const [items, setItems] = useState(3)

  useEffect(() => {
    function update() {
      setItems(window.innerWidth < 768 ? 1 : 3)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return items
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const itemsPerSlide = useItemsPerSlide()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [paused, setPaused] = useState(false)

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide)

  // Chunk testimonials into groups
  const slides: Testimonial[][] = Array.from({ length: totalSlides }, (_, i) =>
    testimonials.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide)
  )

  // Reset to first slide when layout changes
  useEffect(() => {
    setCurrentSlide(0)
  }, [itemsPerSlide])

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
              {slideItems.map((testimonial, itemIndex) => (
                <Card
                  key={itemIndex}
                  className="p-8 border-border shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default select-none"
                  onMouseEnter={() => setPaused(true)}
                  onMouseLeave={() => setPaused(false)}
                >
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 transition-colors ${
                          i < (testimonial.rating ?? 5)
                            ? "fill-accent text-accent"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-foreground leading-relaxed mb-6 italic">
                    "{testimonial.story}"
                  </blockquote>

                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.fullName}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                    {testimonial.tour && (
                      <p className="text-sm text-primary mt-1">'{testimonial.tour}' Journey</p>
                    )}
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

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`rounded-full transition-all duration-500 ${
                  i === currentSlide
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
    </div>
  )
}
