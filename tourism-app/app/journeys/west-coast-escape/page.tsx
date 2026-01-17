'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Calendar, Users, Zap, Sun, Mountain, Waves as WavesIcon, Droplets, Home, Sunset } from 'lucide-react';

export default function WestCoastEscapePage() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const highlights = [
    {
      title: 'Pristine Beaches',
      description: 'Golden sands and turquoise waters perfect for relaxation and water activities.',
      icon: '🏖️',
    },
    {
      title: 'Sunset Cruises',
      description: 'Experience magical sunsets while cruising along the stunning coastline.',
      icon: '⛵',
    },
    {
      title: 'Local Culture',
      description: 'Interact with local fishing communities and enjoy authentic cuisine.',
      icon: '🏘️',
    },
  ];

  const galleryImages = [
    { title: "Pristine Beaches", description: "Endless stretches of sand and clear turquoise waves", icon: Sun },
    { title: "Coastal Cliffs", description: "Dramatic rock formations rising from the sea", icon: Mountain },
    { title: "Hidden Coves", description: "Secluded beaches perfect for relaxation", icon: WavesIcon },
    { title: "Water Sports", description: "Surfing, diving, and watersports adventures", icon: Droplets },
    { title: "Local Villages", description: "Experience authentic fishing communities", icon: Home },
    { title: "Sunset Bliss", description: "Golden hour magic on the west coast", icon: Sunset },
  ];

  const faqs = [
    {
      question: 'What should I pack for the West Coast Escape?',
      answer: 'Pack light, breathable clothing, swimwear, sunscreen, hat, and water shoes. Bring a light jacket for evenings. Waterproof bag for beach activities is recommended.',
    },
    {
      question: 'Is swimming safe in these waters?',
      answer: 'Yes, designated swimming areas are well-maintained and safe. We provide guidance on currents and optimal swimming conditions during orientation.',
    },
    {
      question: 'Can I extend my stay?',
      answer: 'Absolutely! We offer flexible extension packages. Contact us for customized longer stays with additional beach activities.',
    },
    {
      question: 'Are meals included?',
      answer: 'Yes, daily breakfast is included. Many lunches and dinners featuring local cuisine are included. We can accommodate dietary restrictions with advance notice.',
    },
    {
      question: 'What about water sports experience required?',
      answer: 'No prior experience needed! All activities include professional instruction and guidance suitable for beginners to intermediate levels.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 text-6xl">🌊</div>
          <div className="absolute bottom-10 left-10 text-5xl">🏝️</div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">West Coast Escape</h1>
          <p className="text-xl mb-8 max-w-2xl">A perfect blend of beach relaxation and coastal adventures</p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-2 text-lg font-semibold">
              Book This Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Journey Details */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 text-center border-0 shadow-sm bg-gradient-to-br from-blue-50 to-cyan-50">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <p className="text-sm text-gray-600">Duration</p>
            <p className="text-xl font-bold text-gray-900">7 Days</p>
          </Card>
          <Card className="p-6 text-center border-0 shadow-sm bg-gradient-to-br from-cyan-50 to-teal-50">
            <Users className="w-8 h-8 mx-auto mb-2 text-cyan-600" />
            <p className="text-sm text-gray-600">Group Size</p>
            <p className="text-xl font-bold text-gray-900">4-10 People</p>
          </Card>
          <Card className="p-6 text-center border-0 shadow-sm bg-gradient-to-br from-teal-50 to-green-50">
            <Zap className="w-8 h-8 mx-auto mb-2 text-teal-600" />
            <p className="text-sm text-gray-600">Difficulty</p>
            <p className="text-xl font-bold text-gray-900">Easy to Moderate</p>
          </Card>
          <Card className="p-6 text-center border-0 shadow-sm bg-gradient-to-br from-green-50 to-emerald-50">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-sm text-gray-600">Best Season</p>
            <p className="text-xl font-bold text-gray-900">Oct-Apr</p>
          </Card>
        </div>

        {/* Highlights */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Journey Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{highlight.icon}</div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Journey Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center hover:scale-110 transition-transform">
                  <image.icon className="w-16 h-16 text-secondary" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg text-gray-900">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg border-gray-200">
                <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 transition-colors">{faq.question}</AccordionTrigger>
                <AccordionContent className="px-4 py-3 text-gray-600 border-t">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for Your West Coast Escape?</h2>
          <p className="text-lg mb-6 opacity-90">Let us help you plan the perfect beach getaway</p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-2 text-lg font-semibold">
              Book Your Journey Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
