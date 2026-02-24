"use client"

import { useState } from "react"
import Link from "next/link"
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
  Binoculars,
  Landmark,
} from "lucide-react"

export default function BeachToursPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const signaturePlaces = [
    {
      title: "Mirissa",
      slug: "mirissa",
      subtitle: "Whale watching, chill vibes",
      image: "/coastal-fishing-village-with-boats-at-sunset.jpg",
      highlights: [
        { icon: Binoculars, text: "Whale Watching" },
        { icon: MapPin, text: "Coconut Hill" },
        { icon: Waves, text: "Laidback Vibes" },
      ],
      description:
        "A tropical paradise famous for its crescent-shaped beach, whale watching excursions, and legendary sunset views at Coconut Tree Hill.",
    },
    {
      title: "Arugam Bay",
      slug: "arugam-bay",
      subtitle: "Surfing capital",
      image: "/sri-lanka-fishing-stilt-fishermen-sunset-beach-gal.jpg",
      highlights: [
        { icon: Waves, text: "Pro Surfing" },
        { icon: MapPin, text: "Main Point" },
        { icon: Wind, text: "Surf Culture" },
      ],
      description:
        "The ultimate destination for surfers, Arugam Bay offers world-class waves, a vibrant traveler community, and a unique moon-shaped bay.",
    },
    {
      title: "Hikkaduwa",
      slug: "hikkaduwa",
      subtitle: "Coral reefs, nightlife",
      image: "/coastal-fishing-village-with-boats-at-sunset.jpg",
      highlights: [
        { icon: Waves, text: "Coral Reefs" },
        { icon: Turtle, text: "Giant Turtles" },
        { icon: Landmark, text: "Nightlife" },
      ],
      description:
        "Known for its shallow-water coral reefs and giant sea turtles that visit the shore, Hikkaduwa is a vibrant hub for snorkeling and beach parties.",
    },
    {
      title: "Unawatuna",
      slug: "unawatuna",
      subtitle: "Calm swimming beach",
      image: "/coastal-fishing-village-with-boats-at-sunset.jpg",
      highlights: [
        { icon: Waves, text: "Safe Swimming" },
        { icon: MapPin, text: "Jungle Beach" },
        { icon: Landmark, text: "Peace Pagoda" },
      ],
      description:
        "A beautiful, protected bay with calm waters perfect for swimming, surrounded by cafes and the iconic Japanese Peace Pagoda.",
    },
    {
      title: "Bentota",
      slug: "bentota",
      subtitle: "Resorts & water sports",
      image: "/coastal-fishing-village-with-boats-at-sunset.jpg",
      highlights: [
        { icon: Waves, text: "Jet Skiing" },
        { icon: MapPin, text: "Bentota River" },
        { icon: Heart, text: "Luxury Resorts" },
      ],
      description:
        "A prime location for luxury resorts and adrenaline-pumping water sports, where the Bentota River meets the sparkling Indian Ocean.",
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
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/beach-palm-sunset.jpg"
          >
            <source src="/beach_life.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
              className="bg-primary/50 text-primary-foreground hover:bg-primary rounded-full text-lg px-8 py-6"
              onClick={() => {
                const element = document.getElementById('signature-expeditions')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Signature Beach Journies
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
        <section id="signature-expeditions" className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Signature Places
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {signaturePlaces.map((place, index) => (
                <Card
                  key={index}
                  className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                >
                  <div className="relative h-64 bg-muted overflow-hidden group">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundImage: `url('${place.image}')`,
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>

                  <div className="p-8 space-y-6 flex-grow flex flex-col">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground leading-tight">
                        {place.title}
                      </h3>
                      <p className="text-base text-primary font-medium mt-2">{place.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {place.highlights.map((highlight, i) => (
                        <div key={i} className="text-center">
                          <highlight.icon className="h-7 w-7 mx-auto mb-2 text-primary/80" />
                          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{highlight.text}</p>
                        </div>
                      ))}
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-base flex-grow">
                      {place.description}
                    </p>

                    <Link href={`/beach/${place.slug}`} className="mt-4">
                      <Button variant="outline" className="w-full border-primary/20 hover:border-primary hover:bg-primary/5">
                        More Info
                      </Button>
                    </Link>
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
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ml-4 ${expandedFaq === index ? "rotate-180" : ""
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
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              >
                Start to Plan Your Beach Getaway
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
