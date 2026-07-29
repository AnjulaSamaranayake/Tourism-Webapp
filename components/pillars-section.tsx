import { Utensils, Mountain, Building2 } from "lucide-react"

export function PillarsSection() {
  const pillars = [
    {
      icon: Utensils,
      title: "The Table",
      subtitle: "Culinary",
      headline: "Savor the Story on a Plate",
      description:
        'Go beyond restaurants. Cook with families, visit morning markets with chefs, understand the "why" behind each flavor.',
      image: "/food_img.avif",
    },
    {
      icon: Mountain,
      subtitle: "Eco-Adventure",
      title: "The Trail",
      headline: "Connect with the Land",
      description:
        "Respectful exploration. Guided hikes to secret viewpoints, wildlife spotting with naturalists, kayaking to hidden coves—activities that connect you to the environment.",
      image: "/hiking-through-sri-lanka-tea-plantations-ella-rock.jpg",
    },
    {
      icon: Building2,
      subtitle: "Cultural History",
      title: "The Narrative",
      headline: "Walk Through Living History",
      description:
        "Stories, not just dates. Access to local artisans, private talks with historians, exploring off-hours at sites to understand the people and events that shaped the place.",
      image: "/ancient-buddhist-temple-sri-lanka-dambulla-cave-pa.jpg",
    },
  ]

  return (
    <section id="pillars" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Approach: The Three Pillars of a True Journey
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="group relative overflow-hidden rounded-sm">
              <div
                className="aspect-[4/5] bg-muted"
                style={{
                  backgroundImage: `url('${pillar.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute rounded-full inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <pillar.icon className="h-12 w-12 text-accent mb-4" />
                  <p className="text-sm uppercase tracking-widest text-accent mb-2">{pillar.subtitle}</p>
                  <h3 className="text-3xl font-bold text-background mb-4">{pillar.title}</h3>
                  <p className="text-xl font-semibold text-background mb-3">{pillar.headline}</p>
                  <p className="text-background/90 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
