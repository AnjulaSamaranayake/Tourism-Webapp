"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Binoculars, MapPin, Leaf, Users, Clock, Heart, Binoculars as BinocularsIcon, Eye, Bird, Sunset, Zap, Camera } from "lucide-react"

export default function LeopardsTrailPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const journey = {
    title: "The Leopard's Trail",
    subtitle: "Yala & Bundala",
    image: "/yala-leopard-national-park.jpg",
    highlights: [
      { icon: Binoculars, text: "Leopard Tracking" },
      { icon: MapPin, text: "Ethical Safari Drives" },
      { icon: Leaf, text: "Birdwatching" },
    ],
    description:
      "A focused safari experience searching for Sri Lanka's iconic leopard, complemented by rich birdlife in coastal national parks.",
  }

  const details = [
    { icon: Clock, label: "Duration", value: "4-6 days" },
    { icon: Users, label: "Group Size", value: "4-6 people" },
    { icon: MapPin, label: "Difficulty", value: "Easy to Moderate" },
    { icon: Heart, label: "Best Season", value: "May - Sep" },
  ]

  const galleryImages = [
    { title: "Leopard Spotting", description: "Encounter the elusive leopards in their natural habitat", icon: BinocularsIcon },
    { title: "Sambar Deer", description: "Watch herds of majestic sambar deer across the plains", icon: Eye },
    { title: "Crocodile Watch", description: "Observe ancient reptiles along water sources", icon: Zap },
    { title: "Birdwatching", description: "Over 200 endemic bird species to discover", icon: Bird },
    { title: "Savanna Landscapes", description: "Pristine wilderness and dramatic natural vistas", icon: Sunset },
    { title: "Wildlife Photography", description: "Capture unforgettable moments with expert guidance", icon: Camera },
  ]

  const faqs = [
    {
      question: "Will we definitely see a leopard?",
      answer: "While leopards are elusive, May to September offers good sightings. No wildlife encounter is guaranteed, but we use expert tracking techniques.",
    },
    {
      question: "What other animals will we see?",
      answer: "Elephants, sloth bears, sambar deer, wild boar, crocodiles, and over 200 bird species are common in these parks.",
    },
    {
      question: "Is it safe?",
      answer: "Yes, safaris are conducted safely in vehicles with experienced guides who know animal behavior and park regulations.",
    },
    {
      question: "What should I bring for photography?",
      answer: "Bring a good zoom lens (200mm+), binoculars, and extra batteries. Mornings and late afternoons offer best lighting.",
    },
    {
      question: "Are the drives uncomfortable?",
      answer: "Drives are in 4x4 vehicles with comfortable seating. Early starts mean cooler temperatures and better wildlife activity.",
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
                {journey.description} Track the legendary leopards of Yala National Park. This journey takes you through the arid scrublands and coastal lagoons of Sri Lanka's most famous wildlife sanctuary. Led by expert trackers, you'll venture deep into the wilderness to witness these magnificent predators in their natural habitat, alongside elephants, bears, and exotic birds.
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Highlights */}
        <section className="py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">What's Included</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

        <section className="relative py-24 flex items-center justify-center overflow-hidden" style={{ backgroundImage: "url('/jungle-scene.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-4 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Ready for the Safari?</h2>
            <p className="text-xl text-gray-100 mb-8">Track the legendary leopards of Sri Lanka's national parks.</p>
            <Link href="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
                Book Your Safari
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
