"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronDown, Wand2, Users, Lightbulb, Mail, Heart, Compass } from "lucide-react"

export default function CustomizeToursPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    duration: "",
    interests: [] as string[],
    message: "",
  })

  const whyCustomize = [
    {
      icon: Wand2,
      title: "Tailored to Your Desires",
      description:
        "Forget cookie-cutter itineraries. Tell us your dreams, and we'll craft a journey that perfectly matches your interests, pace, and budget.",
    },
    {
      icon: Users,
      title: "Travel Your Way",
      description:
        "Whether you want luxury resorts, homestays, adventure camps, or a mix—we design every detail. Group tours, solo expeditions, family adventures, romantic escapes—we handle it all.",
    },
    {
      icon: Lightbulb,
      title: "Hidden Gems & Insider Access",
      description:
        "Our network reaches beyond guidebooks. We'll connect you with local craftspeople, secret viewpoints, family-run restaurants, and off-the-map experiences that define true Sri Lankan immersion.",
    },
  ]

  const faqs = [
    {
      question: "How does the customization process work?",
      answer:
        "It's simple! You'll schedule a consultation with our travel curators. Share your travel dates, budget, interests, and any specific requests. We'll design a draft itinerary, refine it based on feedback, and finalize every detail until it's perfect.",
    },
    {
      question: "What if I have a very specific or unusual request?",
      answer:
        "That's exactly what we love! We've arranged vegan cooking retreats with monks, photography expeditions with leading naturalists, multi-generational family trips, wellness escapes, and more. No request is too unique.",
    },
    {
      question: "What happens if I want to change things during the trip?",
      answer:
        "Flexibility is built in. We provide 24/7 support during your journey. Want to extend a location, skip something, or explore a new direction? We'll adapt on the fly.",
    },
    {
      question: "How far in advance should I plan a custom tour?",
      answer:
        "Ideally, 2-3 months gives us time to source unique accommodations and arrange special experiences. But we can accommodate shorter timelines—sometimes even 3-4 weeks for simpler journeys.",
    },
    {
      question: "What does the custom tour cost?",
      answer:
        "It varies based on duration, group size, accommodation preferences, and experiences chosen. We work with all budgets—from budget-conscious adventures to luxury expeditions. Consultation is free.",
    },
  ]

  const interests = [
    "Wildlife & Nature",
    "Cultural & History",
    "Beach & Relaxation",
    "Food & Culinary",
    "Adventure Sports",
    "Wellness & Yoga",
    "Photography",
    "Family-Friendly",
  ]

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would send the form data to your backend
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/collage-experiences.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
            Your Journey, Forged by You
          </h1>
          <p className="text-xl sm:text-2xl mb-8 text-gray-100 text-balance">
            Tired of standard itineraries? Let's collaborate. Your Sri Lanka doesn't have to look like anyone else's. We'll craft a journey that's entirely, perfectly yours.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            onClick={() =>
              document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-8">
              One-of-a-Kind, Just Like You
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At our core, we believe no two travelers are alike. Whether you're seeking solitude in sacred spaces, adrenaline on mountain peaks, flavor-forward culinary journeys, or a blend of everything—customization isn't an upgrade, it's the only way we work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This isn't a transaction; it's a conversation. We listen, we dream alongside you, and we execute with precision.
            </p>
          </div>
        </div>
      </section>

      {/* Why Customize Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Why Go Custom?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyCustomize.map((item, index) => (
              <Card
                key={index}
                className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <item.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section id="consultation-form" className="py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Let's Build Your Dream Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Share your vision, and our curators will design something spectacular.
              </p>
            </div>

            <Card className="p-8 border-none shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Preferred Duration
                    </label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select duration</option>
                      <option value="3-5">3-5 Days</option>
                      <option value="6-8">6-8 Days</option>
                      <option value="9-12">9-12 Days</option>
                      <option value="13+">13+ Days</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    What interests you? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {interests.map((interest) => (
                      <label
                        key={interest}
                        className="flex items-center p-3 border border-border rounded-lg hover:bg-muted cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.interests.includes(interest)}
                          onChange={() => handleInterestToggle(interest)}
                          className="mr-2 w-4 h-4 cursor-pointer"
                        />
                        <span className="text-sm font-medium text-foreground">{interest}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Tell us about your dream journey *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Share your vision, budget considerations, travel dates, any specific requests or must-see experiences..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Schedule Consultation
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Customization FAQs
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
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4 ${
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

      {/* Final CTA Section */}
      <section
        className="relative py-24 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/sunset-palm-tree.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 text-center text-white px-4 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">
            Let's Create Something Extraordinary Together
          </h2>
          <p className="text-xl text-gray-100 mb-8">
            Your Sri Lanka awaits. Let's design it together.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            onClick={() =>
              document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Start Your Consultation
          </Button>
        </div>
      </section>
    </main>
  )
}
