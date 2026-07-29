import { createClient } from "next-sanity"
import { apiVersion, dataset, projectId } from "@/sanity/env"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"

const fallbackTestimonials = [
  {
    story:
      "The combination was incredible—one day we were foraging for herbs with a chef, the next we were on a silent hike at dawn learning about local ecology from our guide. This trip engaged all our senses.",
    fullName: "Alex R.",
    country: "Canada",
    tour: "Coastal Immersion",
    rating: 5,
  },
  {
    story:
      "Not just another tour. We ate at family tables, walked ancient paths with historians, and understood the land in a way we never could have alone. Truly transformative.",
    fullName: "Maria & James K.",
    country: "United Kingdom",
    tour: "Highlands Expedition",
    rating: 5,
  },
  {
    story:
      "Every detail was thoughtful. The way food, adventure, and culture wove together felt seamless. We came home changed, with stories we'll treasure forever.",
    fullName: "David L.",
    country: "Australia",
    tour: "Valley of Artisans",
    rating: 5,
  },
]

interface SanityTestimonial {
  fullName: string
  country: string
  tour: string
  rating: number
  story: string
}

export async function TestimonialsSection() {
  const query = `*[_type == "testimonial"] | order(_createdAt desc) {
    fullName,
    country,
    tour,
    rating,
    story
  }`

  // Use a non-CDN client with no-store so published testimonials appear immediately
  const freshClient = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  })

  let testimonials: SanityTestimonial[] = []

  try {
    const fetched: SanityTestimonial[] = await freshClient.fetch(
      query,
      {},
      { cache: 'no-store' }
    )
    testimonials = fetched.length > 0 ? fetched : fallbackTestimonials
  } catch {
    testimonials = fallbackTestimonials
  }

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            More Than a Vacation: Traveler Transformations
          </h2>
        </div>

        <TestimonialsCarousel testimonials={testimonials} />
      </div>
    </section>
  )
}
