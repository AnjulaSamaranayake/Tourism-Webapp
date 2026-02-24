"use client"

import { useState } from "react"
import Link from "next/link"
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

  const signaturePlaces = [
    {
      title: "Sigiriya",
      slug: "sigiriya",
      subtitle: "UNESCO rock fortress",
      image: "/sigiriya-rock-fortress-sri-lanka-misty-sunrise-aer.jpg",
      highlights: [
        { icon: Landmark, text: "Rock Fortress" },
        { icon: Leaf, text: "Royal Gardens" },
        { icon: BookOpen, text: "Ancient Mirror Wall" },
      ],
      description:
        "The iconic 'Lion Rock' is a majestic palace and fortress complex that rises 200 meters above the jungle, featuring world-famous frescoes.",
    },
    {
      title: "Anuradhapura",
      slug: "anuradhapura",
      subtitle: "Ancient capital ruins",
      image: "/sri-lanka-ancient-city-anuradhapura-buddhist-stupa.jpg",
      highlights: [
        { icon: Building2, text: "Sacred Stupas" },
        { icon: Landmark, text: "Ancient Irrigation" },
        { icon: Heart, text: "Spiritual Roots" },
      ],
      description:
        "One of the longest-inhabited cities in the world, this UNESCO site was the center of Ceylon's Theravada Buddhism for centuries.",
    },
    {
      title: "Polonnaruwa",
      slug: "polonnaruwa",
      subtitle: "Archaeological wonders",
      image: "/ancient-temple-with-local-historian-guide.jpg",
      highlights: [
        { icon: Building2, text: "Royal Palace" },
        { icon: Landmark, text: "Rock Sculptures" },
        { icon: BookOpen, text: "Medieval History" },
      ],
      description:
        "The second capital of Sri Lanka, Polonnaruwa features incredibly preserved ruins of palaces, temples, and the magnificent Gal Vihara rock statues.",
    },
    {
      title: "Temple of the Sacred Tooth Relic",
      slug: "temple-of-the-tooth",
      subtitle: "Sacred Buddhist site",
      image: "/ancient-buddhist-temple-sri-lanka-dambulla-cave-pa.jpg",
      highlights: [
        { icon: Landmark, text: "Spiritual Rituals" },
        { icon: Users, text: "Royal Heritage" },
        { icon: Heart, text: "Living Devotion" },
      ],
      description:
        "Located in Kandy, this golden-roofed temple houses Sri Lanka's most important Buddhist relic—the sacred tooth of the Buddha.",
    },
    {
      title: "Dambulla Cave Temple",
      slug: "dambulla-cave-temple",
      subtitle: "Cave murals & statues",
      image: "/ancient-buddhist-temple-sri-lanka-dambulla-cave-pa.jpg",
      highlights: [
        { icon: Palette, text: "Ancient Murals" },
        { icon: Landmark, text: "Golden Temple" },
        { icon: Leaf, text: "Cave Sanctuaries" },
      ],
      description:
        "The largest and best-preserved cave temple complex in Sri Lanka, featuring over 150 Buddha statues and vivid ceiling paintings.",
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
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/sigiriya-rock-fortress-sunrise.jpg"
          >
            <source src="/Cultural_vid.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
              className="bg-primary/50 text-primary-foreground hover:bg-primary rounded-full text-lg px-8 py-6"
              onClick={() => {
                const element = document.getElementById('signature-expeditions')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Signature Cultural Journies
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

                    <Link href={`/culture/${place.slug}`} className="mt-4">
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
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              >
                Start to Plan Your Cultural Journey
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
