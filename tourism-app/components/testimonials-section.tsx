import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "The combination was incredible—one day we were foraging for herbs with a chef, the next we were on a silent hike at dawn learning about local ecology from our guide. This trip engaged all our senses.",
      author: "Alex R.",
      location: "Canada",
      journey: "Coastal Immersion",
    },
    {
      quote:
        "Not just another tour. We ate at family tables, walked ancient paths with historians, and understood the land in a way we never could have alone. Truly transformative.",
      author: "Maria & James K.",
      location: "United Kingdom",
      journey: "Highlands Expedition",
    },
    {
      quote:
        "Every detail was thoughtful. The way food, adventure, and culture wove together felt seamless. We came home changed, with stories we'll treasure forever.",
      author: "David L.",
      location: "Australia",
      journey: "Valley of Artisans",
    },
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            More Than a Vacation: Traveler Transformations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-border shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed mb-6 italic">"{testimonial.quote}"</blockquote>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                <p className="text-sm text-primary mt-1">'{testimonial.journey}' Journey</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
