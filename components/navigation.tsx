"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [journeyDropdownOpen, setJourneyDropdownOpen] = useState(false)

  const journeyTypes = [
    { label: "Wildlife Tours", href: "/wildlife-tours" },
    { label: "Cultural Tours", href: "/cultural-tours" },
    { label: "Beach Tours", href: "/beach-tours" },
    { label: "Hill Country Tours", href: "/hill-country-tours" },
    { label: "Adventure Tours", href: "/adventure-tours" },
    { label: "Customize Tours", href: "/customize-tours" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-sm border-b border-border" suppressHydrationWarning>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="shrink-0">
            <a href="/" className="text-2xl font-bold text-foreground tracking-tight hover:text-primary transition-colors">
              Immersive Journeys
            </a>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 text-lg font-medium text-foreground hover:text-primary transition-colors">
                Journeys
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-background border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {journeyTypes.map((journey) => (
                  <a
                    key={journey.href}
                    href={journey.href}
                    className="block px-4 py-3 text-lg font-medium text-foreground hover:bg-muted hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {journey.label}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/share-your-story"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Share Your Story
            </a>
            <a
              href="/contact"
              className="text-lg font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>

            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-secondary rounded-full transition-colors">
              <a href="/contact">
              Book Consultation
              </a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 py-6 space-y-4">
            <a
              href="/"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Home
            </a>
            <div>
              <button
                onClick={() => setJourneyDropdownOpen(!journeyDropdownOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Journeys
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${journeyDropdownOpen ? "rotate-180" : ""}`}
                />
              </button>
              {journeyDropdownOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {journeyTypes.map((journey) => (
                    <a
                      key={journey.href}
                      href={journey.href}
                      className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      {journey.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a

              href="/share-your-story"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Share Your Story
            </a>
            <a
              href="/contact"
              className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
            <Button
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-secondary transition-colors"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
  

