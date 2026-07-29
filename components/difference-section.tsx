import { BookOpen, Key, Leaf, Sparkles } from "lucide-react"

export function DifferenceSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Seamless Storytelling",
      description:
        "Your culinary, active, and historical experiences are woven into one continuous narrative, not separate items on an itinerary.",
    },
    {
      icon: Key,
      title: "Access, Not Just Admission",
      description: "We secure private workshops, family meals, and trail access that independent travelers cannot.",
    },
    {
      icon: Leaf,
      title: "Mindful Footprint",
      description:
        "We partner with local suppliers, limit group sizes, and follow strict ethical guidelines for cultural and environmental respect.",
    },
    {
      icon: Sparkles,
      title: "Your Journey, Refined",
      description:
        "Every itinerary is a starting point. We refine it in-depth with you pre-trip to match your pace and passions.",
    },
  ]

  return (
    <section id="difference" className="py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Guided by Curators, Not Just Guides
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-4 rounded-sm">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed pl-16">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
