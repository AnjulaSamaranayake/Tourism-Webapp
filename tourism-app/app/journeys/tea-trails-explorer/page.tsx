'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Calendar, Users, Zap, Leaf, Coffee, Factory, CloudRain, Droplets, Mountain } from 'lucide-react';

export default function TeaTrailsExplorerPage() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const highlights = [
    {
      title: 'Tea Plantations',
      description: 'Tour lush green tea estates and learn traditional tea production methods.',
      icon: '🍃',
    },
    {
      title: 'Tea Factory Tour',
      description: 'Visit working tea factories and taste freshly produced teas.',
      icon: '☕',
    },
    {
      title: 'Highland Scenery',
      description: 'Experience breathtaking hill country vistas and scenic walking trails.',
      icon: '🏔️',
    },
  ];

  const galleryImages = [
    { title: "Tea Plantations", description: "Vast emerald fields of tea plants rolling across hills", icon: Leaf },
    { title: "Tea Picking", description: "Learn traditional hand-picking methods from workers", icon: Coffee },
    { title: "Tea Factory Tour", description: "Witness the complete tea processing from leaf to cup", icon: Factory },
    { title: "Mountain Scenery", description: "Breathtaking views among misty highland peaks", icon: Mountain },
    { title: "Tea Tasting", description: "Expert tasting of fine Ceylon teas", icon: Coffee },
    { title: "Highland Waterfalls", description: "Cascading waters in lush plantation landscapes", icon: Droplets },
  ];

  const faqs = [
    {
      question: 'Do I need experience to pick tea?',
      answer: 'No experience needed! We do it as a cultural experience with professional pickers. It\'s physically moderate - involves bending and walking on slopes.',
    },
    {
      question: 'What is the best season for tea tours?',
      answer: 'December to February is ideal. After monsoons, tea is freshest. Weather is cooler in highlands. Main tea production season.',
    },
    {
      question: 'Can I purchase tea directly?',
      answer: 'Yes! You can buy directly from estates and factories at better prices than retail. We help arrange shipping for large purchases.',
    },
    {
      question: 'How high are the tea plantations?',
      answer: 'Tea is grown between 600-2000 meters altitude. You\'ll experience cool highland climate. Minimal altitude sickness risk due to moderate elevation.',
    },
    {
      question: 'Is there vegetarian food available?',
      answer: 'Yes, traditional hill country cuisine is largely vegetarian. We can accommodate any dietary requirements with advance notice.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 text-6xl">🍃</div>
          <div className="absolute bottom-10 left-10 text-5xl">☕</div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">The Tea Trails Explorer</h1>
          <p className="text-xl mb-8 max-w-2xl">Discover the world of Ceylon tea in the verdant highlands</p>
          <Link href="/contact">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-2 text-lg font-semibold">
              Book This Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Journey Details */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 text-center border-0 shadow-sm bg-gradient-to-br from-green-50 to-emerald-50">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-sm text-gray-600">Duration</p>
            <p className="text-xl font-bold text-gray-900">7 Days</p>
          </Card>
          <Card className="p-6 text-center border-0 shadow-sm bg-gradient-to-br from-emerald-50 to-teal-50">
            <Users className="w-8 h-8 mx-auto mb-2 text-emerald-600" />
            <p className="text-sm text-gray-600">Group Size</p>
            <p className="text-xl font-bold text-gray-900">4-10 People</p>
          </Card>
          <Card className="p-6 text-center border-0 shadow-sm bg-gradient-to-br from-teal-50 to-cyan-50">
            <Zap className="w-8 h-8 mx-auto mb-2 text-teal-600" />
            <p className="text-sm text-gray-600">Difficulty</p>
            <p className="text-xl font-bold text-gray-900">Easy to Moderate</p>
          </Card>
          <Card className="p-6 text-center border-0 shadow-sm bg-gradient-to-br from-cyan-50 to-blue-50">
            <MapPin className="w-8 h-8 mx-auto mb-2 text-cyan-600" />
            <p className="text-sm text-gray-600">Best Season</p>
            <p className="text-xl font-bold text-gray-900">Dec-Feb</p>
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
      <section className="bg-gradient-to-r from-green-600 to-emerald-500 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for the Tea Trails?</h2>
          <p className="text-lg mb-6 opacity-90">Experience the authentic flavors and culture of Ceylon tea country</p>
          <Link href="/contact">
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-2 text-lg font-semibold">
              Book Your Journey Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
