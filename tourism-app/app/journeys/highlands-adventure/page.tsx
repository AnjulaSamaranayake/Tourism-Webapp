"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Bike, Footprints, Waves, MapPin, Users, Clock, Heart, Mountain, TreePine, Coffee, Sunrise, Eye } from "lucide-react"

export default function HighlandsAdventurePage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const journey = {
    title: "Highlands Adventure",
    subtitle: "Biking, Trekking & Exploring",
    image: "/mountain-biking-trail.jpg",
    highlights: [
      { icon: Bike, text: "Mountain Biking" },
      { icon: Footprints, text: "World's End Trek" },
      { icon: Waves, text: "River Rafting" },
    ],
    description:
      "Push your limits on mountain bike trails through tea country, trek to dramatic cliff viewpoints, and run the rapids of pristine hill country rivers. Perfect for adrenaline seekers and nature lovers alike.",
  }

  const details = [
    { icon: Clock, label: "Duration", value: "5-7 days" },
    { icon: Users, label: "Group Size", value: "4-12 people" },
    { icon: MapPin, label: "Difficulty", value: "Moderate to High" },
    { icon: Heart, label: "Best Season", value: "Dec - Apr" },
  ]

  const galleryImages = [
    { title: "Mountain Biking", description: "Thrilling rides through scenic highland trails", icon: Bike },
    { title: "World's End Trek", description: "Hike to dramatic cliff viewpoints with stunning vistas", icon: Mountain },
    { title: "River Rafting", description: "Adventure down crystal clear mountain rivers", icon: Waves },
    { title: "Tea Plantations", description: "Explore lush tea estates and learn the craft", icon: TreePine },
    { title: "Sunrise Trek", description: "Experience magical highland sunrises from mountain peaks", icon: Sunrise },
    { title: "Highland Vistas", description: "Breathtaking panoramic views across the mountains", icon: Eye },
  ]

  const faqs = [
    {
      question: "What is the minimum fitness level required?",
      answer:
        "Good to excellent fitness level is required. We recommend regular cardio exercise and some hiking experience before joining.",
    },
    {
      question: "Do I need my own mountain bike?",
      answer:
        "No, we provide high-quality mountain bikes. However, you can bring your own if you prefer. Let us know in advance.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring athletic clothing, waterproof bag, sun protection, insect repellent, comfortable hiking boots, and a camera. A detailed packing list will be provided upon booking.",
    },
    {
      question: "Is the river rafting dangerous?",
      answer:
        "Safety is our top priority. All activities include professional guides, safety equipment, and are matched to your skill level. No experience necessary.",
    },
    {
      question: "Can I join if I have some experience but am not expert?",
      answer:
        "Absolutely! We cater to different experience levels. Our guides can adjust activities to match your comfort and ability.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${journey.image}')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center text-white px-4 max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
              {journey.title}
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-100 text-balance">
              {journey.description}
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              >
                Book This Journey
              </Button>
            </Link>
          </div>
        </section>

        {/* Journey Details */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {details.map((detail, index) => (
                <Card
                  key={index}
                  className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <detail.icon className="h-10 w-10 text-primary mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">{detail.label}</p>
                  <p className="text-lg font-semibold text-foreground">{detail.value}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                What's Included
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {journey.highlights.map((highlight, index) => (
                <Card
                  key={index}
                  className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <highlight.icon className="h-12 w-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-foreground">{highlight.text}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Journey Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                  <div className="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center hover:scale-110 transition-transform">
                    <image.icon className="w-16 h-16 text-secondary" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg text-foreground">{image.title}</h3>
                    <p className="text-sm text-muted-foreground">{image.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-background hover:bg-muted transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground text-left">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ml-4 ${
                        expandedFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-muted border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="relative py-24 flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url('/adventure-action.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 text-center text-white px-4 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Ready for the Adventure?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Start your journey today and create unforgettable memories in Sri Lanka's highlands.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              >
                Book Your Adventure
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
