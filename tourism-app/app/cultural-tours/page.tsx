"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronDown,
  Building2,
  Landmark,
  Palette,
  MapPin,
  Users,
  BookOpen,
  Heart,
  Leaf,
} from "lucide-react"

export default function CulturalToursPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const journeys = [
    {
      title: "Kingdoms & Sacred Sites",
      subtitle: "Cultural Triangle Expedition",
      image: "/sigiriya-rock-fortress-sunrise.jpg",
      highlights: [
        { icon: Building2, text: "Ancient Cities" },
        { icon: Landmark, text: "Temple Rituals" },
        { icon: Palette, text: "Traditional Arts" },
      ],
      description:
        "Walk through the layers of Sri Lanka's ancient kingdoms, visit sacred temples where rituals continue unchanged for centuries, and witness the living traditions of Buddhist and Hindu cultures.",
    },
    {
      title: "Dambulla & Kandy",
      subtitle: "Spiritual Heritage Journey",
      image: "/dambulla-cave-temple.jpg",
      highlights: [
        { icon: Landmark, text: "Cave Temples" },
        { icon: Palette, text: "Sacred Arts" },
        { icon: Users, text: "Monastery Life" },
      ],
      description:
        "Explore the sacred caves of Dambulla with intricate murals, visit the Temple of the Tooth in Kandy, and connect with Buddhist monks who share insights into spiritual practice and philosophy.",
    },
  ]

  const uniqueElements = [
    {
      icon: BookOpen,
      title: "Expert Cultural Historians",
      description:
        "Our guides are historians and cultural scholars who bring ancient kingdoms and traditions to life with deep knowledge and storytelling that connects past to present.",
    },
    {
      icon: Heart,
      title: "Respectful & Immersive",
      description:
        "We follow local customs, dress appropriately at sacred sites, participate in ceremonies where welcomed, and support local artisans and cultural preservation projects.",
    },
    {
      icon: Leaf,
      title: "Living Traditions",
      description:
        "Beyond monuments, we engage with living culture—meet artisans, attend festivals, taste traditional cuisine prepared by local families, and understand how heritage shapes daily life.",
    },
  ]

  const faqs = [
    {
      question: "What is the best time to visit cultural sites in Sri Lanka?",
      answer:
        "Year-round, but December to March offers the most pleasant weather. Timing can be aligned with Buddhist festivals like Vesak (May) or Hindu Deepavali (October) for enhanced cultural experiences.",
    },
    {
      question: "What should I wear when visiting temples?",
      answer:
        "Wear modest, respectful clothing that covers shoulders and knees. Remove shoes before entering sacred spaces. We provide guidance on appropriate attire for each site.",
    },
    {
      question: "Can I participate in temple ceremonies?",
      answer:
        "Many temples welcome respectful visitors to observe and sometimes participate in evening prayers and rituals. Our guides facilitate introductions and explain the significance of ceremonies.",
    },
    {
      question: "Are these tours suitable for photography enthusiasts?",
      answer:
        "Yes, but we respect local customs regarding photography in sacred spaces. Our guides know the best angles and timing for stunning shots while maintaining cultural sensitivity.",
    },
    {
      question: "Can I meet local artisans and learn traditional crafts?",
      answer:
        "Absolutely. We can arrange visits to batik artisans, mask makers, and traditional craftspeople. Many offer hands-on workshops in their studios.",
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
            backgroundImage: "url('/sigiriya-rock-fortress-sunrise.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            Walk Through Living History
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-100 text-balance">
            Uncover the layers of ancient kingdoms, spiritual traditions, and living arts that have shaped Sri Lanka's soul across millennia. Experience culture not as a museum, but as a breathing, evolving heritage.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            Explore Our Cultural Journeys
          </Button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
              Culture as a Living Conversation
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Sri Lanka's cultural heritage is not locked in the past—it thrives in daily rituals, artistic traditions, and the hearts of its people. We believe authentic cultural tourism means dialogue, not observation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our journeys connect you with historians, monks, artisans, and families who carry these traditions forward, helping you understand not just what happened, but what it means to live within this rich cultural tapestry.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Journeys Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Signature Cultural Expeditions
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
              What Makes Our Cultural Tours Unique
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
              Planning Your Cultural Adventure
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
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300  ml-4 ${
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
          backgroundImage: "url('/jungle-scene.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center text-white px-4 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Ready to Step Into History?
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Connect with our cultural travel specialists to design a journey that resonates with your interests, from ancient archaeology to living traditions.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
          >
            Plan Your Cultural Journey
          </Button>
        </div>
      </section>
    </main>
      <Footer />
    </>
  )
}
