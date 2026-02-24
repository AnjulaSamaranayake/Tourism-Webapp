"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronDown,
  Binoculars,
  Leaf,
  Heart,
  MapPin,
  Users,
} from "lucide-react"

export default function WildlifeToursPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const signaturePlaces = [
    {
      title: "Yala National Park",
      subtitle: "Best for leopard sightings",
      image: "/yala-leopard-national-park.jpg",
      highlights: [
        { icon: Binoculars, text: "Leopard Tracking" },
        { icon: MapPin, text: "Safari Drives" },
        { icon: Heart, text: "Wildlife Hub" },
      ],
      description:
        "Sri Lanka's most famous park, home to the world's highest density of leopards and a vast array of mammals and birds.",
    },
    {
      title: "Udawalawe National Park",
      subtitle: "Famous for elephants",
      image: "/minneriya-elephant-gathering.jpg",
      highlights: [
        { icon: Users, text: "Elephant Herds" },
        { icon: MapPin, text: "Open Plains" },
        { icon: Leaf, text: "Conservation" },
      ],
      description:
        "A sanctuary for elephants, offering guaranteed sightings and a landscape reminiscent of the African savanna.",
    },
    {
      title: "Bundala National Park",
      subtitle: "Birdwatching hotspot (Ramsar wetland)",
      image: "/jungle-scene.jpg",
      highlights: [
        { icon: Leaf, text: "Migratory Birds" },
        { icon: MapPin, text: "Wetlands" },
        { icon: Binoculars, text: "Rich Biodiversity" },
      ],
      description:
        "A UNESCO Biosphere Reserve and Ramsar site, perfect for observing flamingos and thousands of migratory waterbirds.",
    },
    {
      title: "Minneriya National Park",
      subtitle: "“The Gathering” of elephants",
      image: "/minneriya-elephant-gathering.jpg",
      highlights: [
        { icon: Users, text: "The Gathering" },
        { icon: MapPin, text: "Lake Views" },
        { icon: Binoculars, text: "Seasonal Spectacle" },
      ],
      description:
        "Witness the largest seasonal gathering of wild elephants in Asia, a truly awe-inspiring natural phenomenon.",
    },
    {
      title: "Wilpattu National Park",
      subtitle: "Largest park, unique lakes",
      image: "/jungle-scene.jpg",
      highlights: [
        { icon: MapPin, text: "Natural Lakes" },
        { icon: Binoculars, text: "Unspoiled Wilderness" },
        { icon: Leaf, text: "Endemic Flora" },
      ],
      description:
        "Known for its unique 'Villu' (natural lakes), Wilpattu is the largest and oldest national park in Sri Lanka, offering a raw wilderness experience.",
    },
  ]

  const uniqueElements = [
    {
      icon: Binoculars,
      title: "Expert Naturalist Guides",
      description:
        "Our guides are wildlife biologists or passionate naturalists who interpret animal behavior, track signs, and share profound ecological insights.",
    },
    {
      icon: Heart,
      title: "Ethical & Responsible Practices",
      description:
        "We strictly follow park guidelines, maintain safe distances, and partner with lodges and conservation projects that prioritize animal welfare and habitat protection.",
    },
    {
      icon: Leaf,
      title: "Beyond the Jeep",
      description:
        "We incorporate nature walks (where permitted), visits to conservation centers, and evening discussions to build a complete picture of Sri Lanka's wildlife story.",
    },
  ]

  const faqs = [
    {
      question: "What is the best time of year for wildlife tours in Sri Lanka?",
      answer:
        "The best time depends on the region. Yala and Wilpattu are excellent from May to September, while Minneriya's elephant gathering peaks from July to September. Each destination has its own optimal season.",
    },
    {
      question: "What should I pack for a safari?",
      answer:
        "We recommend lightweight, neutral-colored clothing, binoculars, a good camera with a zoom lens, sun protection (hat, sunscreen), insect repellent, and comfortable walking shoes. A detailed packing list will be provided upon booking.",
    },
    {
      question: "How do you ensure ethical animal encounters?",
      answer:
        "We strictly adhere to national park guidelines, maintain appropriate distances from wildlife, use experienced guides trained in responsible tourism, and support conservation initiatives. We never engage in activities that stress or harm animals.",
    },
    {
      question: "Are these tours suitable for children and photographers?",
      answer:
        "Yes! Our tours are family-friendly with adjustable itineraries for younger children. We also offer specialized photography packages with extended shooting times and expert guidance from our naturalist guides.",
    },
    {
      question: "Can I combine a wildlife tour with a beach stay?",
      answer:
        "Absolutely. Many of our guests extend their journey with beach relaxation. We can customize itineraries that combine wildlife experiences with coastal retreats in destinations like Mirissa or Tangalle.",
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
            poster="/yala-leopard-national-park.jpg"
          >
            <source src="/Wild_life.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center text-white px-4 max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
              Where the Wild Soul Roams
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-100 text-balance">
              Go beyond the safari jeep. Join our naturalist-guided journeys for ethical wildlife
              encounters, deep conservation insights, and the untold stories of Sri Lanka's incredible
              biodiversity.
            </p>
            <Button
              size="lg"
              className="bg-primary/50 text-primary-foreground hover:bg-primary rounded-full text-lg px-8 py-6"
              onClick={() => {
                const element = document.getElementById('signature-expeditions')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Signature Wildlife Journies
            </Button>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
                A Deeper Connection with the Wild
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We believe a true wildlife tour is a dialogue with nature, not a spectator sport.
                Our journeys are designed with patience, respect, and the guidance of experts who
                will help you listen to the forest's whispers and understand the delicate balance of
                life here.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It's not just about seeing animals; it's about understanding ecosystems, learning
                conservation challenges, and feeling a part of the landscape.
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
                What Makes Our Wildlife Tours Unique
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
                Planning Your Wildlife Adventure
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
            backgroundImage: "url('/jungle-scene.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 text-center text-white px-4 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Ready to Answer the Call of the Wild?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Contact our travel curators to discuss your dream wildlife itinerary, preferred travel
              dates, and any special interests like birding or photography.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              >
                Start Planning Your Safari
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
