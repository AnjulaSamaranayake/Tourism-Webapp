'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Calendar, Users, Zap, Baby, Users as UsersIcon, Car, Globe, Camera } from 'lucide-react';

export default function ElephantGatheringPage() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const highlights = [
    {
      title: 'Large Elephant Herds',
      description: 'Witness magnificent herds of Asian elephants in their natural habitat.',
      icon: '🐘',
    },
    {
      title: 'Expert Naturalists',
      description: 'Learn from experienced wildlife experts about elephant behavior and conservation.',
      icon: '🔭',
    },
    {
      title: 'Photography Paradise',
      description: 'Capture stunning images of wildlife with professional photography guidance.',
      icon: '📸',
    },
  ];

  const galleryImages = [
    { title: "Elephant Herds", description: "Magnificent herds grazing across the savanna", icon: Zap },
    { title: "Baby Elephants", description: "Adorable calves learning from their mothers", icon: Baby },
    { title: "Herd Gatherings", description: "Social interactions and family dynamics", icon: UsersIcon },
    { title: "Safari Drives", description: "Expert guided experiences through protected lands", icon: Car },
    { title: "Conservation Efforts", description: "Learn about elephant protection and habitat restoration", icon: Globe },
    { title: "Wildlife Photography", description: "Capture moments with professional photography guide", icon: Camera },
  ];

  const faqs = [
    {
      question: 'Is it safe to see wild elephants?',
      answer: 'Yes, all safaris are conducted with experienced guides following strict safety protocols. We maintain safe distances from wildlife and our guides have extensive experience.',
    },
    {
      question: 'What photographic experience is needed?',
      answer: 'No prior experience required! We offer guidance for all skill levels. Professional camera rental available if needed.',
    },
    {
      question: 'What is the physical fitness requirement?',
      answer: 'Moderate fitness level recommended. Early morning drives require early waking. Some walking on uneven terrain. We can accommodate individuals with limited mobility.',
    },
    {
      question: 'When is the best time to see elephants?',
      description: 'December to June is peak season. Elephants gather near water sources during dry season. We schedule trips during optimal viewing periods.',
    },
    {
      question: 'Are there other animals besides elephants?',
      answer: 'Yes! You\'ll see leopards, buffalo, sambar deer, monitor lizards, hornbills, and many other species. This is a comprehensive wildlife experience.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-amber-600 to-orange-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 text-6xl">🐘</div>
          <div className="absolute bottom-10 left-10 text-5xl">🦁</div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">The Elephant Gathering</h1>
          <Link href="/contact">
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-2 text-lg font-semibold">
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
            Witness majestic herds in their natural habitat. The Elephant Gathering is a spectacular wildlife phenomenon where hundreds of Asian elephants congregate around ancient reservoirs. Experience this awe-inspiring social gathering, observe mother-calf bonds, and learn about conservation efforts directly from expert naturalists.
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
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <image.icon className="w-20 h-20 text-amber-600 opacity-80" />
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
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-amber-50 to-orange-50 hover:shadow-lg transition-shadow">
            <Calendar className="w-10 h-10 mx-auto mb-4 text-amber-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Duration</p>
            <p className="text-2xl font-bold text-gray-900">7 Days</p>
          </Card>
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-lg transition-shadow">
            <Users className="w-10 h-10 mx-auto mb-4 text-orange-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Group Size</p>
            <p className="text-2xl font-bold text-gray-900">4-8 People</p>
          </Card>
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-red-50 to-rose-50 hover:shadow-lg transition-shadow">
            <Zap className="w-10 h-10 mx-auto mb-4 text-red-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Difficulty</p>
            <p className="text-2xl font-bold text-gray-900">Moderate</p>
          </Card>
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-rose-50 to-pink-50 hover:shadow-lg transition-shadow">
            <MapPin className="w-10 h-10 mx-auto mb-4 text-rose-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Best Season</p>
            <p className="text-2xl font-bold text-gray-900">Dec-Jun</p>
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
      <section className="bg-gradient-to-r from-amber-600 to-orange-500 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Witness the Elephant Gathering?</h2>
          <p className="text-lg mb-6 opacity-90">Experience wildlife in its most magnificent form</p>
          <Link href="/contact">
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-2 text-lg font-semibold">
              Book Your Journey Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
