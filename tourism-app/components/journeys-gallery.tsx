import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Crown,
  Binoculars,
  Waves,
  Train,
  Leaf,
  Mountain,
  Eye,
  Building2,
  Compass,
  Wind,
  Map,
} from "lucide-react"

export function JourneysGallery() {
  const journeys = [
    {
      title: "The Classic Triangle & Coast",
      image: "/sigiriya-rock-fortress-sunrise.jpg",
      highlights: [
        { icon: Crown, text: "Ancient Kingdoms" },
        { icon: Binoculars, text: "Wildlife Safari" },
        { icon: Waves, text: "Golden Beaches" },
      ],
      caption:
        "From the ancient palaces of the cultural heartland to thrilling elephant safaris and relaxing on sun-drenched western beaches.",
    },
    {
      title: "The Hill Country & Tea Trails",
      image: "/sri-lanka-hill-country-tea-plantations-nuwara-eliy.jpg",
      highlights: [
        { icon: Train, text: "Scenic Train Ride" },
        { icon: Leaf, text: "Tea Estate Experience" },
        { icon: Mountain, text: "Mountain Vistas" },
      ],
      caption:
        "Journey through misty mountains on a legendary train, explore working tea estates, and hike to iconic viewpoints in the island's cool highlands.",
    },
    {
      title: "The Southern Safari & Culture",
      image: "/yala-leopard-national-park.jpg",
      highlights: [
        { icon: Eye, text: "Leopard Tracking" },
        { icon: Building2, text: "Galle Fort Exploration" },
        { icon: Binoculars, text: "Whale Watching" },
      ],
      caption:
        "Combine the thrill of searching for leopards on safari with the historic charm of Galle Fort and the wonder of spotting blue whales in the deep sea.",
    },
    {
      title: "The East Coast Adventure",
      image: "/arugam-bay-turquoise-waters.jpg",
      highlights: [
        { icon: Wind, text: "Surf & Serenity" },
        { icon: Map, text: "Secret Beaches" },
        { icon: Compass, text: "Lesser-Known Culture" },
      ],
      caption:
        "Discover Sri Lanka's sunrise coast, famous for its endless beaches, surf culture, and a slower, deeply authentic pace of life.",
    },
  ]

  return (
    <section id="journeys" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Our Signature Sri Lanka Journeys
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {journeys.map((journey, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80 bg-muted overflow-hidden group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${journey.image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              <div className="p-8 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  {journey.title}
                </h3>

                <div className="grid grid-cols-3 gap-4">
                  {journey.highlights.map((highlight, i) => (
                    <div key={i} className="text-center">
                      <highlight.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium text-foreground">{highlight.text}</p>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed text-base">
                  {journey.caption}
                </p>

                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Explore This Journey
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
