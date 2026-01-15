"use client"

import { useState } from "react"
import { ChevronDown, Facebook, MessageCircle, Instagram, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How far in advance should I book my tour?",
      answer: "We recommend booking 3-6 months in advance for the best availability and pricing. However, we can accommodate last-minute bookings depending on our schedule. Contact us for current availability.",
    },
    {
      question: "What is the best time to visit Sri Lanka?",
      answer: "The best time depends on which region you want to explore. The southwest coast is best from November to April, while the northeast coast is ideal from May to September. Our team can help you find the perfect timing for your interests.",
    },
    {
      question: "Are your tours suitable for families with children?",
      answer: "Absolutely! We customize our itineraries for families with children of all ages. We can adjust activity intensity, pacing, and accommodation to ensure everyone has a memorable experience.",
    },
    {
      question: "What's included in your tour packages?",
      answer: "Our packages typically include accommodation, meals, guided tours, entrance fees to attractions, and transportation. Specific inclusions depend on your custom itinerary. We'll provide a detailed breakdown during planning.",
    },
    {
      question: "Do you offer group discounts?",
      answer: "Yes, we offer special rates for groups of 6 or more travelers. The more people in your group, the better the discount. Contact us to discuss your group size and get a custom quote.",
    },
    {
      question: "What if I have dietary restrictions or special needs?",
      answer: "We take dietary restrictions and special needs seriously. Please inform us during the planning stage, and we'll ensure accommodations are made for vegetarian, vegan, gluten-free, and other dietary requirements.",
    },
    {
      question: "Is travel insurance necessary?",
      answer: "While not mandatory, we strongly recommend travel insurance covering medical emergencies, trip cancellation, and baggage loss. We can provide recommendations for suitable providers.",
    },
    {
      question: "How do I stay safe while traveling in Sri Lanka?",
      answer: "Sri Lanka is a safe destination for tourists. Our guides are experienced and familiar with all safe routes. We follow all local regulations and provide comprehensive briefings on cultural sensitivities and safety practices.",
    },
  ]

  const socialLinks = [
    { icon: Facebook, label: "Facebook", url: "https://facebook.com/immersivejourneys", color: "hover:text-blue-600" },
    { icon: Instagram, label: "Instagram", url: "https://instagram.com/immersivejourneys", color: "hover:text-pink-600" },
    { icon: MessageCircle, label: "WhatsApp", url: "https://wa.me/94771234567", color: "hover:text-green-600" },
    { icon: Mail, label: "Email", url: "mailto:info@immersivejourneys.com", color: "hover:text-red-600" },
    { icon: Phone, label: "Call", url: "tel:+94771234567", color: "hover:text-purple-600" },
  ]

  return (
    <section className="py-24 from-background via-primary/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Got questions about planning your Sri Lankan adventure? We've answered the most common ones below. If you need more information, reach out to us directly.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-start justify-between gap-4 text-left hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground text-lg flex-1">{faq.question}</h3>
                <ChevronDown
                  className={`h-6 w-6 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0 border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Social Media and Contact */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-8">
              Connect with us on social media or reach out directly. We're here to help craft your perfect journey!
            </p>
          </div>

          {/* Social Links */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-border rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-3 p-4 rounded-lg bg-background hover:bg-card border border-border transition-all group ${social.color}`}
                  >
                    <IconComponent className="h-8 w-8 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-foreground text-center">{social.label}</span>
                  </a>
                )
              })}
            </div>

            <div className="text-center pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">
                Or visit our dedicated contact page for a detailed inquiry form:
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="/contact">Go to Contact Page</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
