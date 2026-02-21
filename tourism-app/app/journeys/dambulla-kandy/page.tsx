'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Calendar, Users, Zap, Building, Gem, Flower, Waves, Leaf, Theater } from 'lucide-react';

export default function DambullaKandyPage() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const highlights = [
    {
      title: 'Dambulla Cave Temple',
      description: 'Sri Lanka\'s largest and oldest cave temple complex with stunning Buddha statues.',
      icon: '⛩️',
    },
    {
      title: 'Kandy Lake & City',
      description: 'Historic cultural capital with the sacred Temple of the Tooth Relic.',
      icon: '💎',
    },
    {
      title: 'Botanical Gardens',
      description: 'Explore beautiful botanical gardens featuring rare plant species.',
      icon: '🌺',
    },
  ];

  const galleryImages = [
    { title: "Cave Temples", description: "Ancient cave complex with stunning Buddha statues", icon: Building },
    { title: "Golden Stupas", description: "Gleaming golden domes and religious monuments", icon: Gem },
    { title: "Temple of the Tooth", description: "Sri Lanka's most sacred Buddhist shrine", icon: Building },
    { title: "Kandy Lake", description: "Serene sacred lake surrounded by verdant gardens", icon: Waves },
    { title: "Botanical Gardens", description: "Lush tropical gardens with exotic plants", icon: Flower },
    { title: "Cultural Performances", description: "Traditional dance, music, and fire walking", icon: Theater },
  ];

  const faqs = [
    {
      question: 'How many caves are in Dambulla?',
      answer: 'There are 5 major caves with different purposes - meditation chambers, assembly halls, and storage rooms. Each contains unique Buddha statues and artwork.',
    },
    {
      question: 'Can I participate in temple ceremonies?',
      answer: 'Yes! Many ceremonies are open to respectful visitors. Evening puja ceremonies at the Temple of the Tooth are particularly spiritual and moving.',
    },
    {
      question: 'What is the best time to visit?',
      answer: 'November to March is ideal for weather. The temple is at its most active during March (Kandy Esala Perahera festival) and other Buddhist holidays.',
    },
    {
      question: 'What should I expect at the Temple of the Tooth?',
      answer: 'It\'s Sri Lanka\'s most sacred temple, home to a Buddha tooth relic. Expect reverent crowds, beautiful architecture, and spiritual atmosphere. Dress modestly.',
    },
    {
      question: 'Is the pace too fast for seniors?',
      answer: 'No, we offer a relaxed itinerary with rest days. Cave climb is moderate, and guides are happy to go at your pace.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-yellow-600 to-amber-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 text-6xl">⛩️</div>
          <div className="absolute bottom-10 left-10 text-5xl">💎</div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Dambulla & Kandy</h1>
          <Link href="/contact">
            <Button className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-2 text-lg font-semibold">
              Book This Journey
            </Button>
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About This Journey</h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Explore sacred temples and cultural heritage. Immerse yourself in the spiritual heart of Sri Lanka, journeying from the ancient rock fortress of Sigiriya to the sacred Temple of the Tooth in Kandy. Discover the intricate beauty of the Dambulla Cave Temples and the serenity of the Royal Botanical Gardens.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gray-900">Journey Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-yellow-100 to-amber-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <image.icon className="w-20 h-20 text-yellow-600 opacity-80" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">{image.title}</h3>
                  <p className="text-gray-600">{image.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Details */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-yellow-50 to-amber-50 hover:shadow-lg transition-shadow">
            <Calendar className="w-10 h-10 mx-auto mb-4 text-yellow-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Duration</p>
            <p className="text-2xl font-bold text-gray-900">7 Days</p>
          </Card>
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-lg transition-shadow">
            <Users className="w-10 h-10 mx-auto mb-4 text-amber-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Group Size</p>
            <p className="text-2xl font-bold text-gray-900">6-12 People</p>
          </Card>
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-lg transition-shadow">
            <Zap className="w-10 h-10 mx-auto mb-4 text-orange-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Difficulty</p>
            <p className="text-2xl font-bold text-gray-900">Easy to Moderate</p>
          </Card>
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-red-50 to-rose-50 hover:shadow-lg transition-shadow">
            <MapPin className="w-10 h-10 mx-auto mb-4 text-red-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Best Season</p>
            <p className="text-2xl font-bold text-gray-900">Nov-Mar</p>
          </Card>
        </div>

        {/* Highlights */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 font-serif">Journey Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-8 border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <div className="text-5xl mb-4">{highlight.icon}</div>
                <h3 className="font-bold text-xl text-gray-900 mb-3">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 font-serif">Frequently Asked Questions</h2>
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
      <section className="bg-gradient-to-r from-yellow-600 to-amber-500 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Dambulla & Kandy?</h2>
          <p className="text-lg mb-6 opacity-90">Discover spiritual heritage in Sri Lanka's most sacred cities</p>
          <Link href="/contact">
            <Button className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-2 text-lg font-semibold">
              Book Your Journey Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
