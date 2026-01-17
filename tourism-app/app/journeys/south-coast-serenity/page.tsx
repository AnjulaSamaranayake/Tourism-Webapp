"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Waves, Turtle, UtensilsCrossed, MapPin, Users, Clock, Heart, Sun, Sunset, Fish, Wind, Home, Zap } from "lucide-react"

export default function SouthCoastSerenityPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const journey = {
    title: "South Coast Serenity",
    subtitle: "Mirissa & Tangalle",
    image: "/beach-turquoise-waters-mirissa.jpg",
    highlights: [
      { icon: Waves, text: "Secluded Beaches" },
      { icon: Turtle, text: "Turtle Conservation" },
      { icon: UtensilsCrossed, text: "Sunset Seafood Feast" },
    ],
    description:
      "Sink into tranquility on pristine southern beaches, snorkel in coral-rich waters, support sea turtle conservation efforts, and feast on the freshest seafood as the sun paints the ocean gold.",
  }

  const details = [
    { icon: Clock, label: "Duration", value: "5-7 days" },
    { icon: Users, label: "Group Size", value: "4-8 people" },
    { icon: MapPin, label: "Difficulty", value: "Easy" },
    { icon: Heart, label: "Best Season", value: "Nov - Apr" },
  ]

  const galleryImages = [
    { title: "Pristine Beaches", description: "Golden sands and turquoise waters await", icon: Sun },
    { title: "Sunset Magic", description: "Paint the sky with colors over the Indian Ocean", icon: Sunset },
    { title: "Dolphin Watching", description: "Encounter playful dolphins on morning boat trips", icon: Fish },
    { title: "Coral Snorkeling", description: "Explore vibrant underwater coral gardens", icon: Wind },
    { title: "Beach Villages", description: "Connect with local fishing communities", icon: Home },
    { title: "Wellness Retreats", description: "Rejuvenate with yoga and spa treatments", icon: Zap },
  ]

  const faqs = [
    {
      question: "Is snorkeling experience necessary?",
      answer: "No, beginners are welcome. We provide full instruction and equipment for all skill levels.",
    },
    {
      question: "What marine life will we see?",
      answer: "You may see tropical fish, sea turtles, rays, and various coral species in their natural habitat.",
    },
    {
      question: "Is it safe for children?",
      answer: "Yes, we have family-friendly options with calm beach areas and supervised activities for kids.",
    },
    {
      question: "What's the weather like?",
      answer: "November to April is the dry season with sunny days and calm seas, perfect for beach activities.",
    },
    {
      question: "Are meals included?",
      answer: "Breakfast and dinner are included. Lunches can be at local restaurants or beach picnics.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${journey.image}')` }} />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center text-white px-4 max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">{journey.title}</h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-100 text-balance">{journey.description}</p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Book This Journey
              </Button>
            </Link>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {details.map((detail, index) => (
                <Card key={index} className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <detail.icon className="h-10 w-10 text-primary mb-4" />
                  <p className="text-sm text-muted-foreground mb-2">{detail.label}</p>
                  <p className="text-lg font-semibold text-foreground">{detail.value}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">What's Included</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {journey.highlights.map((highlight, index) => (
                <Card key={index} className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <highlight.icon className="h-12 w-12 text-primary mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-foreground">{highlight.text}</h3>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Journey Gallery</h2>
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

        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-2xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-background hover:bg-muted transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground text-left">{faq.question}</h3>
                    <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ml-4 ${expandedFaq === index ? "rotate-180" : ""}`} />
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

        <section className="relative py-24 flex items-center justify-center overflow-hidden" style={{ backgroundImage: "url('/beach-sunset.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-4 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Ready for Beach Serenity?</h2>
            <p className="text-xl text-gray-100 mb-8">Experience pristine beaches and tropical tranquility.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Book Your Beach Escape
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
