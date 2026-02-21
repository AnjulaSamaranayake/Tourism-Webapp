"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Mountain, Waves, Zap, MapPin, Users, Clock, Heart, TrendingUp, Droplets, Waves as WavesIcon, Footprints, Save, Landmark, Coffee, Star } from "lucide-react"

export default function FullIslandExplorerPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const journey = {
    title: "Full Island Explorer",
    subtitle: "Multi-Sport Adventure Quest",
    image: "/adventure-sports-composite.jpg",
    highlights: [
      { icon: Mountain, text: "Peak Climbing" },
      { icon: Waves, text: "Coastal Water Sports" },
      { icon: Zap, text: "Rock Climbing" },
    ],
    description:
      "Combine multiple adventure disciplines across the island. Rock climb ancient formations, kiteboard in coastal lagoons, white-water raft challenging rapids, and trek remote mountain trails. A truly transformative adventure.",
  }

  const details = [
    { icon: Clock, label: "Duration", value: "10-12 days" },
    { icon: Users, label: "Group Size", value: "4-10 people" },
    { icon: MapPin, label: "Difficulty", value: "High" },
    { icon: Heart, label: "Best Season", value: "Nov - Apr" },
  ]

  const galleryImages = [
    { title: "Rock Climbing", description: "Scale dramatic cliff faces and granite formations", icon: TrendingUp },
    { title: "Water Sports", description: "Surfing, snorkeling, and diving in crystal waters", icon: Droplets },
    { title: "Whitewater Rafting", description: "Navigate thrilling rapids through jungle rivers", icon: WavesIcon },
    { title: "Mountain Trekking", description: "Trek through cloud forests and misty highlands", icon: Footprints },
    { title: "Cave Systems", description: "Explore ancient caves and sacred temples", icon: Save },
    { title: "Island Exploration", description: "Visit offshore islands with unique ecosystems", icon: Landmark },
    { title: "Tea Heritage", description: "Discover legendary tea plantations and culture", icon: Coffee },
    { title: "Summit Views", description: "Stand on mountain peaks with panoramic vistas", icon: Star },
  ]

  const faqs = [
    {
      question: "What experience level is required?",
      answer:
        "Intermediate to advanced fitness is required. Some activities need prior experience, but we provide expert instruction for all activities.",
    },
    {
      question: "Are all activities mandatory?",
      answer:
        "No, you can choose which activities to participate in. Our guides will help you customize the itinerary based on your interests and comfort level.",
    },
    {
      question: "What safety measures are in place?",
      answer:
        "All activities include professional guides, certified instructors, high-quality equipment, and comprehensive safety briefings.",
    },
    {
      question: "Can beginners participate?",
      answer:
        "While this is an advanced tour, beginners with good fitness can participate with modifications. Please discuss with our team during booking.",
    },
    {
      question: "What's included in the package?",
      answer:
        "Accommodation, all meals, professional guides, equipment rental, and activities are included. International flights are not included.",
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
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Book This Journey
              </Button>
            </Link>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-24 bg-background border-b border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">About This Journey</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {journey.description} Explore the diverse landscapes of Sri Lanka, from the northern tip to the southern coast. This comprehensive explorer's quest takes you through ancient ruins, lush tea country, and pristine wildlife sanctuaries, offering a complete perspective of the island's rich heritage and natural beauty.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Journey Gallery</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <Card key={index} className="group border-none shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-background">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <image.icon className="w-20 h-20 text-primary opacity-60" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-foreground mb-2">{image.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{image.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Details */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {details.map((detail, index) => (
                <Card key={index} className="p-8 border-none shadow-md hover:shadow-xl transition-all duration-300 bg-muted/20">
                  <detail.icon className="h-12 w-12 text-primary mb-6" />
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold mb-2">{detail.label}</p>
                  <p className="text-2xl font-bold text-foreground">{detail.value}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted/50 text-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">What's Included</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {journey.highlights.map((highlight, index) => (
                <Card key={index} className="p-10 border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center bg-background">
                  <highlight.icon className="h-16 w-16 text-primary mx-auto mb-8" />
                  <h3 className="text-2xl font-bold text-foreground">{highlight.text}</h3>
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

        <section className="relative py-24 flex items-center justify-center overflow-hidden" style={{ backgroundImage: "url('/adventure-action.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-4 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Ready to Explore the Whole Island?</h2>
            <p className="text-xl text-gray-100 mb-8">Experience the ultimate multi-sport adventure across Sri Lanka.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
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
