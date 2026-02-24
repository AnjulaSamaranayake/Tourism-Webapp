"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  ChevronDown,
  Train,
  Leaf,
  Footprints,
  MapPin,
  Users,
  Cloud,
  Heart,
  Mountain,
  Landmark,
  Binoculars,
} from "lucide-react"

export default function HillCountryToursPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const signaturePlaces = [
    {
      title: "Ella",
      subtitle: "Scenic hikes, Nine Arch Bridge",
      image: "/hiking-through-sri-lanka-tea-plantations-ella-rock.jpg",
      highlights: [
        { icon: Mountain, text: "Ella Rock" },
        { icon: MapPin, text: "Nine Arch Bridge" },
        { icon: Footprints, text: "Scenic Hikes" },
      ],
      description:
        "A mountain town famous for its iconic railway bridge, dramatic peak views, and some of the most beautiful hiking trails in the country.",
    },
    {
      title: "Nuwara Eliya",
      subtitle: "Tea country, cool climate",
      image: "/sri-lanka-hill-country-tea-plantations-nuwara-eliy.jpg",
      highlights: [
        { icon: Leaf, text: "Tea Estates" },
        { icon: Cloud, text: "Cool Climate" },
        { icon: Train, text: "Heritage Rail" },
      ],
      description:
        "Known as 'Little England', this highland retreat offers mist-covered tea plantations, colonial architecture, and refreshing mountain air.",
    },
    {
      title: "Haputale",
      subtitle: "Stunning viewpoints (Lipton’s Seat)",
      image: "/mountain-highlands-landscape-with-traditional-vill.jpg",
      highlights: [
        { icon: Cloud, text: "Misty Ridges" },
        { icon: MapPin, text: "Lipton's Seat" },
        { icon: Mountain, text: "Stunning Views" },
      ],
      description:
        "Perched on the edge of the highlands, Haputale offers breathtaking views that stretch to the south coast on clear days.",
    },
    {
      title: "Kandy",
      subtitle: "Cultural + hill country gateway",
      image: "/ancient-temple-with-local-historian-guide.jpg",
      highlights: [
        { icon: Landmark, text: "Spiritual Hub" },
        { icon: Users, text: "Living Heritage" },
        { icon: Mountain, text: "Gateway Town" },
      ],
      description:
        "The sacred city by the lake, Kandy is the cultural capital of Sri Lanka and the gateway to the breathtaking hill country.",
    },
    {
      title: "Horton Plains National Park",
      subtitle: "World’s End trek",
      image: "/travelers-hiking-through-misty-mountain-landscape-.jpg",
      highlights: [
        { icon: Footprints, text: "World's End" },
        { icon: Leaf, text: "Cloud Forest" },
        { icon: Binoculars, text: "Endemic Birds" },
      ],
      description:
        "A high-altitude plateau of surreal beauty, featuring the dramatic World's End cliff and unique cloud forest ecosystems.",
    },
  ]

  const uniqueElements = [
    {
      icon: Train,
      title: "Heritage & Nature Guides",
      description:
        "Our guides are tea estate experts, mountain naturalists, and colonial history enthusiasts who share the stories of the highlands—from British planters to modern sustainable practices.",
    },
    {
      icon: Heart,
      title: "Sustainable Tea Tourism",
      description:
        "We partner with ethical tea estates, support fair-trade initiatives, visit conservation forests, and ensure your experience directly benefits highland communities and biodiversity protection.",
    },
    {
      icon: Cloud,
      title: "Immersive Highland Culture",
      description:
        "Stay in heritage bungalows, participate in tea picking with plantation workers, join cooking classes featuring hill country cuisine, and experience the colonial charm and modern resilience of mountain towns.",
    },
  ]

  const faqs = [
    {
      question: "When is the best time to visit the Hill Country?",
      answer:
        "December to March is ideal for clear skies and hiking. June to September is equally good with lush green landscapes. Avoid April to May and October to November due to heavy rains.",
    },
    {
      question: "What is the best way to travel through the highlands?",
      answer:
        "The mountain railway from Ella to Nuwara Eliya is iconic and scenic. We also arrange private vehicle tours and combine both rail and road travel for the most immersive experience.",
    },
    {
      question: "Can I try tea plucking myself?",
      answer:
        "Yes! Many estates welcome visitors to learn and participate in tea picking. It's more difficult than it looks but incredibly rewarding. You'll gain respect for the skill and hard work of tea pickers.",
    },
    {
      question: "Are the hikes in the Hill Country challenging?",
      answer:
        "They range from easy to moderate. World's End is more of a nature walk on established trails. We customize hiking itineraries based on your fitness level and preferences.",
    },
    {
      question: "What should I pack for the cool highlands?",
      answer:
        "Bring layers, as temperatures drop significantly at elevation. Include a light jacket, rain jacket, comfortable walking shoes, and sun protection. We provide a detailed packing list upon booking.",
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
            poster="/tea-plantations-nuwara-eliya.jpg"
          >
            <source src="/Hill_country.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 text-center text-white px-4 max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
              Find Your Elevation
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-gray-100 text-balance">
              Escape to the cool heights of Sri Lanka's central highlands, where mist-cloaked tea estates, colonial charm, and iconic mountain railways blend into unforgettable journeys.
            </p>
            <Button
              size="lg"
              className="bg-primary/50 text-primary-foreground hover:bg-primary rounded-full text-lg px-8 py-6"
              onClick={() => {
                const element = document.getElementById('signature-expeditions')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Signature Hill Country Journies
            </Button>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
                Where Cool Breezes Meet Timeless Charm
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The Hill Country isn't just a destination—it's an escape into a different world. Here, colonial heritage, living tea traditions, and pristine mountain landscapes create a unique atmosphere that has captivated visitors for centuries.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe these highlands are best experienced slowly, with respect for both the landscape and the communities that call it home. Let us guide you through tea estates, mountain trails, and hidden valleys that most tourists never discover.
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
                What Makes Our Hill Country Tours Unique
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
                Planning Your Hill Country Adventure
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
            backgroundImage: "url('/misty-mountains.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 text-center text-white px-4 max-w-2xl">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
              Ready to Ascend to the Highlands?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Our Hill Country specialists are ready to design your perfect mountain escape—from scenic train journeys to intimate tea estate experiences.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
              >
                Start to Plan Your Hill Country Journey
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
