import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Footprints, Building2, UtensilsCrossed, Heart, Camera, Globe, Star } from "lucide-react"

export function JourneysGallery() {
  const galleryImages = [
    {
      image: "/guest-cooking-kandy.jpg",
      guestName: "Sarah & Mark",
      country: "Australia",
      icon: UtensilsCrossed,
      activity: "Culinary",
      story: "Sarah and Mark experiencing their first traditional cooking lesson with a local family in Kandy.",
    },
    {
      image: "/guests-hiking-horton.jpg",
      guestName: "Elena",
      country: "Spain",
      icon: Footprints,
      activity: "Adventure",
      story: "Elena's awestruck moment at the edge of World's End, Horton Plains. 2,000 meters of pure magic.",
    },
    {
      image: "/guests-safari-yala.jpg",
      guestName: "James & Lisa",
      country: "Canada",
      icon: Camera,
      activity: "Wildlife",
      story: "James and Lisa spotting a leopard on their first safari drive in Yala National Park.",
    },
    {
      image: "/guest-temple-ceremony.jpg",
      guestName: "Priya",
      country: "USA",
      icon: Building2,
      activity: "Cultural",
      story: "Priya participating in an evening prayer ceremony at a sacred Buddhist temple in Kandy.",
    },
    {
      image: "/guests-market-colombo.jpg",
      guestName: "Ahmed & Fatima",
      country: "UAE",
      icon: UtensilsCrossed,
      activity: "Culinary",
      story: "Ahmed and Fatima exploring the vibrant spice markets of Colombo with our guide.",
    },
    {
      image: "/guests-sunset-mirissa.jpg",
      guestName: "Tom",
      country: "UK",
      icon: Heart,
      activity: "Joy",
      story: "Tom's magical sunset moment on Mirissa Beach with a glass of fresh juice.",
    },
    {
      image: "/guest-artisan-workshop.jpg",
      guestName: "Yuki",
      country: "Japan",
      icon: Building2,
      activity: "Cultural",
      story: "Yuki learning traditional batik-making techniques from a local artisan in Matara.",
    },
    {
      image: "/guests-whale-watching.jpg",
      guestName: "David & Sophie",
      country: "France",
      icon: Camera,
      activity: "Adventure",
      story: "David and Sophie spotting a blue whale off the coast of Mirissa—a moment of pure wonder.",
    },
    {
      image: "/guide-with-guests-tea.jpg",
      guestName: "The Complete Experience",
      country: "Multiple Countries",
      icon: Heart,
      activity: "Connection",
      story: "Our guide sharing tea stories with guests at a working tea plantation in Nuwara Eliya.",
    },
  ]

  const stats = [
    { icon: Camera, label: "Moments Captured", value: "5,000+" },
    { icon: Globe, label: "Guests from Countries", value: "50+" },
    { icon: Star, label: "Experience Rating", value: "4.9/5" },
  ]

  return (
    <section id="tour-memories" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Tour Memories
          </h2>
          <p className="text-lg text-muted-foreground">
            Capturing beautiful moments with our wonderful guests from around the world. This is the joy of travel, shared.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <stat.icon className="h-10 w-10 text-primary mx-auto mb-4" />
              <p className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 auto-rows-max">
          {galleryImages.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative bg-muted overflow-hidden aspect-square">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Guest Info Overlay */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <item.icon className="h-8 w-8 mb-2" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold">{item.guestName}</h3>
                    <p className="text-sm text-gray-200">{item.country}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to create your own unforgettable memories?
          </h3>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            Start Planning Your Journey
          </Button>
        </div>
      </div>
    </section>
  )
}
