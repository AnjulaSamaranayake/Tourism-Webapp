"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  const [formData, setFormData] = useState({
    destination: "",
    pillar: "",
    pace: "",
    dates: "",
    groupSize: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Begin Crafting Your Journey
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Schedule a consultation with our curator to start designing your transformative experience.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto p-8 shadow-lg border-border">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="destination">What destination calls to you?</Label>
              <Input
                id="destination"
                placeholder="e.g., Highlands, Coastal regions, Mountain valleys"
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="pillar">Which of our three pillars most excites you?</Label>
              <select
                id="pillar"
                value={formData.pillar}
                onChange={(e) => setFormData({ ...formData, pillar: e.target.value })}
                className="w-full h-10 px-3 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select a pillar</option>
                <option value="culinary">The Table (Culinary)</option>
                <option value="adventure">The Trail (Eco-Adventure)</option>
                <option value="cultural">The Narrative (Cultural History)</option>
                <option value="all">All three equally</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pace">What's your ideal travel pace?</Label>
              <Input
                id="pace"
                placeholder="e.g., Relaxed, Moderate, Active"
                value={formData.pace}
                onChange={(e) => setFormData({ ...formData, pace: e.target.value })}
                className="border-border"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dates">Approximate travel dates</Label>
                <Input
                  id="dates"
                  type="text"
                  placeholder="e.g., Spring 2025"
                  value={formData.dates}
                  onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                  className="border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="groupSize">Group size</Label>
                <Input
                  id="groupSize"
                  placeholder="e.g., 2 people, Solo, 4 people"
                  value={formData.groupSize}
                  onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                  className="border-border"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Tell us more about your interests</Label>
              <Textarea
                id="message"
                placeholder="What are you hoping to experience? Any specific interests or requirements?"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="border-border resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-accent text-foreground hover:bg-secondary hover:text-secondary-foreground transition-colors text-lg py-6"
            >
              Schedule Consultation
            </Button>
          </form>
        </Card>
      </div>
    </section>
  )
}
