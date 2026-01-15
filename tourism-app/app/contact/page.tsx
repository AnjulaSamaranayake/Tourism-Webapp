"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MessageSquare, Send, MapPin, Clock, Instagram, Facebook, Youtube, Star, CheckCircle, Compass, Leaf, Zap, Sparkles, Globe, Heart, Camera, Plane, Footprints, Mountain } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    tourType: "",
    travelDates: "",
    travelers: "",
    vision: "",
    foundUs: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.country.trim()) newErrors.country = "Country is required"
    if (!formData.tourType) newErrors.tourType = "Please select a tour type"
    if (!formData.travelers) newErrors.travelers = "Please select number of travelers"
    if (!formData.vision.trim()) newErrors.vision = "Please tell us about your travel vision"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Here you would typically send to an API endpoint:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      console.log("Form submitted:", formData)
      setSubmitStatus("success")

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        country: "",
        tourType: "",
        travelDates: "",
        travelers: "",
        vision: "",
        foundUs: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setTimeout(() => setSubmitStatus("idle"), 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactChannels = [
    {
      icon: Phone,
      title: "Call or WhatsApp",
      details: ["+94 77 123 4567"],
      description: "Immediate questions, urgent inquiries, or if you prefer to talk.",
      link: "tel:+94771234567",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@immersivejourneys.com"],
      description: "Detailed itinerary requests, formal proposals, and reference materials.",
      link: "mailto:info@immersivejourneys.com",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      details: ["Available during business hours"],
      description: "Quick, pre-booking questions to get instant clarification.",
      link: "#chat",
    },
    {
      icon: Send,
      title: "Contact Form",
      details: ["Below on this page"],
      description: "The structured starting point for all new travel inquiries.",
      link: "#form",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background pt-24">
      {/* Hero Section */}
      <section className="relative from-primary/20 via-background to-secondary/20 py-16 md:py-32 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-15">
          <Compass className="h-16 w-16 text-primary" />
        </div>
        <div className="absolute top-20 left-1/4 opacity-10">
          <Camera className="h-12 w-12 text-primary rotate-45" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-12">
          <Sparkles className="h-14 w-14 text-secondary" />
        </div>
        <div className="absolute top-32 right-20 opacity-8">
          <Globe className="h-20 w-20 text-primary rotate-45" />
        </div>
        <div className="absolute bottom-10 left-1/3 opacity-10">
          <Heart className="h-10 w-10 text-secondary" />
        </div>
        <div className="absolute top-1/2 right-1/4 opacity-8">
          <Plane className="h-12 w-12 text-primary -rotate-12" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Let's Start Your Journey
            </h1>
            <p className="text-lg text-muted-foreground">
              Planning a meaningful trip is a conversation. Reach out to our team of travel curators through your preferred channel. We're here to listen, inspire, and meticulously craft the Sri Lanka experience you're dreaming of.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/1 via-accent/4 to-primary/6 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10">
            <Zap className="h-16 w-16 text-primary" />
          </div>
          <div className="absolute bottom-10 left-10">
            <Leaf className="h-20 w-20 text-secondary" />
          </div>
          <div className="absolute top-1/3 right-1/4">
            <Mountain className="h-14 w-14 text-primary opacity-60" />
          </div>
          <div className="absolute bottom-1/3 right-20">
            <Footprints className="h-12 w-12 text-secondary opacity-50" />
          </div>
          <div className="absolute top-1/4 left-1/3">
            <Camera className="h-10 w-10 text-primary opacity-40" />
          </div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">
            Get in Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the channel that works best for you, and we'll be happy to help craft your perfect Sri Lankan adventure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactChannels.map((channel, index) => {
              const IconComponent = channel.icon
              return (
                <a
                  key={index}
                  href={channel.link}
                  className="p-8 border border-border rounded-lg hover:shadow-lg hover:border-primary/50 transition-all bg-card group relative overflow-hidden"
                >
                  {/* Background Icon */}
                  <div className="absolute top-0 right-0 opacity-5 group-hover:opacity-10 transition-opacity">
                    <IconComponent className="h-40 w-40" />
                  </div>
                  
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors ">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {channel.title}
                      </h3>
                      <div className="mb-3">
                        {channel.details.map((detail, i) => (
                          <p key={i} className="text-sm font-medium text-primary">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {channel.description}
                      </p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16 md:py-24 from-muted/50 to-background overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-5 opacity-10">
          <Sparkles className="h-16 w-16 text-primary" />
        </div>
        <div className="absolute bottom-20 right-5 opacity-12">
          <Compass className="h-14 w-14 text-secondary" />
        </div>
        <div className="absolute top-1/3 left-1/4 opacity-8">
          <Globe className="h-12 w-12 text-primary rotate-90" />
        </div>
        <div className="absolute top-1/2 right-1/3 opacity-9">
          <Heart className="h-10 w-10 text-secondary" />
        </div>
        <div className="absolute bottom-1/3 left-1/2 opacity-7">
          <Leaf className="h-12 w-12 text-primary" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                Send Us Your Details
              </h2>
              <p className="text-center text-muted-foreground mt-4">
                Tell us about your travel dreams and we'll craft the perfect itinerary for you. The more details, the better we can customize your experience.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-lg border border-border">
              {/* Success Message */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 " />
                  <div>
                    <p className="text-sm font-medium text-green-900">
                      Thank you for your inquiry!
                    </p>
                    <p className="text-sm text-green-800">
                      Our team will be in touch within 24 hours.
                    </p>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm font-medium text-red-900">
                    Something went wrong. Please try again or contact us directly.
                  </p>
                </div>
              )}

              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className={errors.fullName ? "border-red-500" : ""}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone and Country */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Including country code"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
                    Country of Residence <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Your country"
                    value={formData.country}
                    onChange={handleInputChange}
                    required
                    className={errors.country ? "border-red-500" : ""}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                  )}
                </div>
              </div>

              {/* Tour Type and Travel Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="tourType" className="block text-sm font-medium text-foreground mb-2">
                    I'm Interested In <span className="text-red-500">*</span>
                  </label>
                  <Select value={formData.tourType} onValueChange={(value: string) => handleSelectChange("tourType", value)}>
                    <SelectTrigger className={errors.tourType ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select tour type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wildlife">Wildlife Tours</SelectItem>
                      <SelectItem value="cultural">Cultural Tours</SelectItem>
                      <SelectItem value="beach">Beach Tours</SelectItem>
                      <SelectItem value="hill-country">Hill Country Tours</SelectItem>
                      <SelectItem value="adventure">Adventure Tours</SelectItem>
                      <SelectItem value="custom">Customize Tours</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.tourType && (
                    <p className="text-red-500 text-xs mt-1">{errors.tourType}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="travelDates" className="block text-sm font-medium text-foreground mb-2">
                    Approx. Travel Dates
                  </label>
                  <Input
                    id="travelDates"
                    name="travelDates"
                    type="text"
                    placeholder="e.g., December 2024, or Flexible"
                    value={formData.travelDates}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Travelers and Source */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="travelers" className="block text-sm font-medium text-foreground mb-2">
                    Number of Travelers <span className="text-red-500">*</span>
                  </label>
                  <Select value={formData.travelers} onValueChange={(value: string) => handleSelectChange("travelers", value)}>
                    <SelectTrigger className={errors.travelers ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select number of travelers" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 Travelers</SelectItem>
                      <SelectItem value="3-4">3-4 Travelers</SelectItem>
                      <SelectItem value="5-6">5-6 Travelers</SelectItem>
                      <SelectItem value="7+">7+ Travelers</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.travelers && (
                    <p className="text-red-500 text-xs mt-1">{errors.travelers}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="foundUs" className="block text-sm font-medium text-foreground mb-2">
                    How did you find us?
                  </label>
                  <Select value={formData.foundUs} onValueChange={(value: string) => handleSelectChange("foundUs", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="google">Google</SelectItem>
                      <SelectItem value="social-media">Social Media</SelectItem>
                      <SelectItem value="friend">Friend Recommendation</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Vision Textarea */}
              <div>
                <label htmlFor="vision" className="block text-sm font-medium text-foreground mb-2">
                  Your Travel Vision <span className="text-red-500">*</span>
                </label>
                <Textarea
                  id="vision"
                  name="vision"
                  placeholder="Briefly tell us your dreams, interests, or any special requests..."
                  rows={5}
                  value={formData.vision}
                  onChange={handleInputChange}
                  required
                  className={errors.vision ? "border-red-500" : ""}
                />
                {errors.vision && (
                  <p className="text-red-500 text-xs mt-1">{errors.vision}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90"
                disabled={isSubmitting || submitStatus === "success"}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : submitStatus === "success" ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Sent Successfully!
                  </div>
                ) : (
                  "Send My Inquiry to a Curator"
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-secondary/5 via-accent/4 to-primary/5 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-20">
            <Globe className="h-24 w-24 text-primary rotate-12" />
          </div>
          <div className="absolute bottom-10 left-10">
            <Leaf className="h-20 w-20 text-secondary" />
          </div>
          <div className="absolute top-1/3 left-1/4">
            <Compass className="h-14 w-14 text-primary opacity-60" />
          </div>
          <div className="absolute bottom-1/4 right-1/4">
            <Plane className="h-12 w-12 text-secondary opacity-50" />
          </div>
          <div className="absolute top-2/3 right-10">
            <Camera className="h-10 w-10 text-primary opacity-40" />
          </div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Join Our Travel Community
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Follow our journey for daily inspiration, traveler stories, and a glimpse behind the scenes of unforgettable experiences.
            </p>

            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 border border-border rounded-lg hover:bg-muted transition-colors hover:text-primary group overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <Instagram className="h-8 w-8 mx-auto group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium mt-2">Instagram</p>
                </div>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 border border-border rounded-lg hover:bg-muted transition-colors hover:text-primary group overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <Facebook className="h-8 w-8 mx-auto group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium mt-2">Facebook</p>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 border border-border rounded-lg hover:bg-muted transition-colors hover:text-primary group overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <Youtube className="h-8 w-8 mx-auto group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium mt-2">YouTube</p>
                </div>
              </a>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 border border-border rounded-lg hover:bg-muted transition-colors hover:text-primary group overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <Star className="h-8 w-8 mx-auto group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium mt-2">TripAdvisor</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Practical Info */}
      <section className="relative py-16 md:py-24 from-primary/5 via-secondary/5 to-primary/5 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 opacity-10">
          <MapPin className="h-14 w-14 text-primary" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-12">
          <Clock className="h-16 w-16 text-secondary rotate-45" />
        </div>
        <div className="absolute top-1/3 right-1/4 opacity-8">
          <Compass className="h-12 w-12 text-primary" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 opacity-9">
          <Leaf className="h-11 w-11 text-secondary" />
        </div>
        <div className="absolute top-1/2 left-20 opacity-7">
          <Heart className="h-10 w-10 text-primary" />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Our Base
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We're located in the heart of Sri Lanka, ready to create unforgettable experiences for travelers from around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Location */}
            <div className="relative p-8 bg-background border border-border rounded-lg group overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <MapPin className="h-40 w-40 absolute -top-10 -right-10 text-primary" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Our Location
                  </h3>
                </div>
                <p className="text-muted-foreground mb-2">
                  <span className="font-medium text-foreground">Colombo, Sri Lanka</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  We are proudly based in Colombo. Our tours operate nationwide across all regions of Sri Lanka, from the beaches to the mountains.
                </p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="relative p-8 bg-background border border-border rounded-lg group overflow-hidden hover:shadow-lg transition-shadow">
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <Clock className="h-40 w-40 absolute -bottom-10 -right-10 text-secondary" />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-secondary/10 rounded-lg">
                    <Clock className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Office Hours
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  <span className="font-medium text-foreground">Sri Lanka Time (GMT+5:30)</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  We respond to emails and forms 24/7, because your dream travel deserves immediate attention.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
