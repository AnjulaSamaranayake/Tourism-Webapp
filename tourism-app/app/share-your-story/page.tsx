'use client'

import { useState } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Star, Camera, Globe, Compass, Heart, MapPin, Plane } from 'lucide-react'

const tours = [
  'Wildlife Tours',
  'Cultural Tours',
  'Beach Tours',
  'Hill Country Tours',
  'Adventure Tours',
  'Customize Your Tour'
]

export default function ShareYourStory() {
  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    tour: '',
    travelDate: '',
    rating: 0,
    story: '',
    photo: null as File | null,
    permission: false
  })

  const [hoverRating, setHoverRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        photo: e.target.files![0]
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        fullName: '',
        country: '',
        tour: '',
        travelDate: '',
        rating: 0,
        story: '',
        photo: null,
        permission: false
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent" />
        
        {/* Decorative Icons - Top Left */}
        <Camera className="absolute top-20 left-10 h-16 w-16 text-primary/20 -rotate-12" />
        <Globe className="absolute top-40 left-32 h-12 w-12 text-primary/15 rotate-45" />
        
        {/* Decorative Icons - Top Right */}
        <Heart className="absolute top-24 right-20 h-14 w-14 text-primary/20 rotate-12" />
        <Plane className="absolute top-48 right-40 h-10 w-10 text-primary/15 -rotate-6" />
        
        {/* Decorative Icons - Bottom */}
        <MapPin className="absolute bottom-20 left-1/4 h-12 w-12 text-primary/20 -rotate-45" />
        <Compass className="absolute bottom-32 right-1/4 h-14 w-14 text-primary/15 rotate-90" />
        <Camera className="absolute bottom-16 right-16 h-10 w-10 text-primary/20 rotate-25" />
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
              Share Your Journey. Inspire Others.
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Your stories are what make our community special. By sharing your favorite moments—whether it was a dish that surprised you, a guide who made history come alive, or a view that took your breath away—you help create authentic inspiration for the next adventurer. We deeply appreciate your voice.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="relative py-20 bg-muted/30 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/5" />
        
        {/* Decorative Icons - Top Left */}
        <Plane className="absolute top-10 left-8 h-14 w-14 text-primary/20 -rotate-12" />
        <MapPin className="absolute top-32 left-24 h-10 w-10 text-primary/15 rotate-45" />
        
        {/* Decorative Icons - Top Right */}
        <Compass className="absolute top-16 right-16 h-16 w-16 text-primary/20 -rotate-45" />
        <Globe className="absolute top-40 right-32 h-12 w-12 text-primary/15 rotate-12" />
        
        {/* Decorative Icons - Bottom Left */}
        <Heart className="absolute bottom-24 left-20 h-12 w-12 text-primary/20 rotate-25" />
        <Camera className="absolute bottom-8 left-1/3 h-14 w-14 text-primary/15 -rotate-15" />
        
        {/* Decorative Icons - Bottom Right */}
        <Plane className="absolute bottom-20 right-24 h-10 w-10 text-primary/20 rotate-45" />
        <MapPin className="absolute bottom-10 right-12 h-12 w-12 text-primary/15 -rotate-25" />
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto">
            {submitted && (
              <Card className="mb-8 p-6 bg-green-50 border-green-200">
                <p className="text-green-800 font-semibold text-center">
                  ✓ Thank you for sharing your story! We'll review it soon and feature it on our site.
                </p>
              </Card>
            )}

            <Card className="p-8 sm:p-10 border-none shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-semibold">
                    Your Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="e.g., Sarah Johnson"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="border-muted-foreground/20 focus:border-primary"
                  />
                </div>

                {/* Country */}
                <div className="space-y-2">
                  <Label htmlFor="country" className="text-foreground font-semibold">
                    Your Country <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Where are you from?"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="border-muted-foreground/20 focus:border-primary"
                  />
                </div>

                {/* Tour Selection */}
                <div className="space-y-2">
                  <Label htmlFor="tour" className="text-foreground font-semibold">
                    Tour You Joined <span className="text-red-500">*</span>
                  </Label>
                  <select
                    id="tour"
                    name="tour"
                    value={formData.tour}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-muted-foreground/20 bg-background text-foreground focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="">Select your tour...</option>
                    {tours.map(tour => (
                      <option key={tour} value={tour}>
                        {tour}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Travel Date */}
                <div className="space-y-2">
                  <Label htmlFor="travelDate" className="text-foreground font-semibold">
                    Travel Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="travelDate"
                    name="travelDate"
                    type="month"
                    value={formData.travelDate}
                    onChange={handleChange}
                    required
                    className="border-muted-foreground/20 focus:border-primary"
                  />
                </div>

                {/* Rating */}
                <div className="space-y-2">
                  <Label className="text-foreground font-semibold">
                    Overall Rating <span className="text-red-500">*</span>
                  </Label>
                  <div className="flex gap-3">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star
                          className={`h-8 w-8 transition-colors ${
                            star <= (hoverRating || formData.rating)
                              ? 'fill-primary text-primary'
                              : 'text-muted-foreground'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Story */}
                <div className="space-y-2">
                  <Label htmlFor="story" className="text-foreground font-semibold">
                    Your Story <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="story"
                    name="story"
                    placeholder="Tell us about your favorite moment, the food, the guide, or the history you discovered... What made this trip special for you?"
                    value={formData.story}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="border-muted-foreground/20 focus:border-primary resize-none"
                  />
                </div>

                {/* Photo Upload */}
                <div className="space-y-2">
                  <Label htmlFor="photo" className="text-foreground font-semibold">
                    Upload a Photo
                  </Label>
                  <div className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <input
                      id="photo"
                      name="photo"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <label htmlFor="photo" className="cursor-pointer block">
                      <p className="text-sm text-muted-foreground">
                        Share your best photo from the trip <span className="text-xs">(Optional)</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">Max size 5MB</p>
                      {formData.photo && (
                        <p className="text-sm text-primary mt-2 font-semibold">
                          ✓ {formData.photo.name}
                        </p>
                      )}
                    </label>
                  </div>
                </div>

                {/* Permission Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    id="permission"
                    name="permission"
                    type="checkbox"
                    checked={formData.permission}
                    onChange={handleChange}
                    required
                    className="mt-1 cursor-pointer"
                  />
                  <label htmlFor="permission" className="text-sm text-muted-foreground cursor-pointer">
                    I grant Immersive Journeys permission to use this review and photo on their website, social media, and marketing materials. <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold py-6"
                >
                  Submit Your Story
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
