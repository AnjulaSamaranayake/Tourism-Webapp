"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronDown,
  Bike,
  Footprints,
  Waves,
  MapPin,
  Users,
  Zap,
  Heart,
  Mountain,
} from "lucide-react"

export default function AdventureToursPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const journeys = [
    {
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
    },
    {
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
    },
  ]

  const uniqueElements = [
    {
      icon: Zap,
      title: "Certified Adventure Guides",
      description:
        "All our guides are certified in their respective sports—rock climbing, whitewater, mountain biking—with extensive experience in safe, exhilarating adventures tailored to your skill level.",
    },
    {
      icon: Heart,
      title: "Safety First, Always",
      description:
        "We use top-quality equipment, follow strict safety protocols, provide comprehensive briefings, and maintain small group sizes. Your wellbeing is our absolute priority.",
    },
    {
      icon: Mountain,
      title: "Off-the-Beaten-Path Adventures",
      description:
        "We take you beyond tourist zones to remote trails, hidden rivers, and pristine natural areas where adventure feels genuine and the rewards are extraordinary.",
    },
  ]

  const faqs = [
    {
      question: "What is the minimum fitness level required?",
      answer:
        "It depends on the activity. We offer beginner-friendly adventures and advanced expeditions. We'll match you with the right experience based on your fitness and skill level.",
    },
    {
      question: "Can beginners participate in adventure sports?",
      answer:
        "Absolutely. Many of our adventures are beginner-friendly with expert instruction. Rock climbing, white-water rafting, and mountain biking all have options for first-timers.",
    },
    {
      question: "What equipment is provided?",
      answer:
        "We provide all necessary safety equipment and specialized gear. You'll need to bring comfortable athletic clothing, waterproof bag, and personal items. A detailed equipment list is provided upon booking.",
    },
    {
      question: "How are adventure tours different from regular hiking tours?",
      answer:
        "Adventure tours involve active, engaging sports and physical challenges. While hiking is included, you'll also experience rock climbing, biking, rafting, or other adrenaline-raising activities.",
    },
    {
      question: "Are adventure tours suitable for families with teenagers?",
      answer:
        "Yes, we have family-friendly adventure packages designed for teenagers. We can customize activities based on age and skill level to ensure fun and safety for everyone.",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/mountain-biking-trail.jpg"
          >
            <source src="/Adventure.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center text-white px-4 max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
              Pulse-Raising, Soul-Stirring
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-100 text-balance">
              For those who crave more than sightseeing. Our adventure tours combine adrenaline-pumping sports with Sri Lanka's most spectacular landscapes—rock climbing, biking, rafting, and trekking all wrapped into transformative journeys.
            </p>
            <Button
              size="lg"
              className="bg-primary/50 text-primary-foreground hover:bg-primary rounded-full text-lg px-8 py-6"
              onClick={() => {
                const element = document.getElementById('signature-expeditions')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Signature Adventure Journies
            </Button>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
                Adventure Beyond the Ordinary
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Adventure isn't about recklessness—it's about stepping outside your comfort zone safely and experiencing the profound joy of challenging yourself in stunning natural settings.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our adventures are designed to test your limits, build confidence, and create memories that will define your travels. Whether you're a seasoned adventurer or a curious beginner, we craft experiences that feel thrilling yet achievable.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Journeys Section */}
        <section id="signature-expeditions" className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Signature Adventure Expeditions
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
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                        {journey.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2">{journey.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {journey.highlights.map((highlight, i) => (
                        <div key={i} className="text-center">
                          <highlight.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                          <p className="text-sm font-medium text-foreground">{highlight.text}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-base">
                      {journey.description}
                    </p>

                    {/* <Link href={journey.title === "Highlands Adventure" ? "/journeys/highlands-adventure" : "/journeys/full-island-explorer"}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                      Explore This Journey
                    </Button>
                  </Link> */}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Immersive Elements Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                What Makes Our Adventure Tours Unique
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {uniqueElements.map((element, index) => (
                <Card
                  key={index}
                  className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <element.icon className="h-12 w-12 text-primary mb-6" />
                  <h3 className="text-xl font-bold text-foreground mb-4">{element.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{element.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Planning Your Adventure
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
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300  ml-4 ${expandedFaq === index ? "rotate-180" : ""
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
              Ready to Push Your Limits?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Our adventure specialists will help you find the perfect challenge—whether you're a thrill-seeker or someone ready to discover your inner adventurer.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              >
                Start to Plan Your Adventure
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
