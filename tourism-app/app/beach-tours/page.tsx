"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronDown,
  Waves,
  Turtle,
  UtensilsCrossed,
  MapPin,
  Users,
  Wind,
  Heart,
  Leaf,
} from "lucide-react"

export default function BeachToursPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const journeys = [
    {
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
    },
    {
      title: "West Coast Escape",
      subtitle: "Negombo & Beyond",
      image: "/beach-palm-sunset.jpg",
      highlights: [
        { icon: UtensilsCrossed, text: "Fishing Village Tours" },
        { icon: Waves, text: "Lagoon Activities" },
        { icon: MapPin, text: "Water Sports" },
      ],
      description:
        "Experience the vibrant fishing culture of Negombo, explore serene lagoons by boat, indulge in water sports, and relax in beach resorts where ocean breezes and local hospitality reign.",
    },
  ]

  const uniqueElements = [
    {
      icon: Wind,
      title: "Coastal Experts & Naturalists",
      description:
        "Our guides are marine biologists and coastal culture specialists who share insights into ocean ecosystems, fishing traditions, and conservation efforts protecting these precious shores.",
    },
    {
      icon: Heart,
      title: "Sustainable & Responsible",
      description:
        "We partner with turtle conservation centers, support sustainable fishing communities, use eco-friendly water sports, and ensure tourism benefits local coastal populations.",
    },
    {
      icon: Leaf,
      title: "Beyond the Beach",
      description:
        "Combine swimming and sunbathing with cultural immersion—visit fishing villages, participate in cooking classes, attend beachside ceremonies, and understand the rhythm of coastal life.",
    },
  ]

  const faqs = [
    {
      question: "When is the best time to visit Sri Lanka's beaches?",
      answer:
        "The west and south coasts are best from November to April. Eastern beaches like Arugam Bay are ideal from May to September. We can guide you to the perfect beach for your preferred season.",
    },
    {
      question: "What water activities are available?",
      answer:
        "Snorkeling, surfing, diving, whale watching (seasonal), paddleboarding, fishing trips, and traditional outrigger canoe rides. All can be arranged based on your interest and local conditions.",
    },
    {
      question: "How can I support sea turtle conservation?",
      answer:
        "We partner with turtle hatcheries and conservation centers where you can learn about sea turtles, contribute to breeding programs, and support the protection of nesting beaches.",
    },
    {
      question: "Are beach tours suitable for families?",
      answer:
        "Yes, absolutely. We offer family-friendly itineraries with calm beaches for younger children, snorkeling adventures, cultural experiences, and kid-safe water activities.",
    },
    {
      question: "Can I enjoy water sports without prior experience?",
      answer:
        "Of course. All our water sports providers offer beginner-friendly instruction. We ensure safety and fun at every skill level.",
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
            backgroundImage: "url('/beach-palm-sunset.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            Where the Ocean Meets Serenity
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-100 text-balance">
            Escape to palm-fringed shores and turquoise waters. Our beach journeys blend sublime relaxation with coastal culture, marine adventures, and unforgettable seafood experiences.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            Explore Our Beach Journeys
          </Button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
              Relaxation with Purpose
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Your beach escape doesn't have to be disconnected from the world. We believe in blending sun, sand, and soul—where every moment of relaxation is enriched by connection to coastal communities, ocean conservation, and the authentic rhythm of island life.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're seeking solitude, adventure, or cultural immersion, our beaches offer all of it—and then some.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Journeys Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Signature Beach Expeditions
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

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                    Explore This Journey
                  </Button>
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
              What Makes Our Beach Tours Unique
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
              Planning Your Beach Escape
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
          backgroundImage: "url('/beach-sunset.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white px-4 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Ready to Feel the Sand Between Your Toes?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Let our beach specialists craft your perfect coastal escape—whether you crave adventure, relaxation, or a blend of both.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            Plan Your Beach Getaway
          </Button>
        </div>
      </section>
    </main>
      <Footer />
    </>
  )
}
