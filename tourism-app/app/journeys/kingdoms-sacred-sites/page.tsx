'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Calendar, Users, Zap, Building2, Crown, Building, Scroll, Mountain, Theater } from 'lucide-react';

export default function KingdomsSacredSitesPage() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const highlights = [
    {
      title: 'Ancient Kingdoms',
      description: 'Explore the capital cities and royal palaces of ancient Sri Lankan kingdoms.',
      icon: '👑',
    },
    {
      title: 'Sacred Temples',
      description: 'Visit revered temples and spiritual sites with deep historical significance.',
      icon: '🏛️',
    },
    {
      title: 'Cultural Heritage',
      description: 'Immerse yourself in Buddhist traditions and Sri Lankan cultural customs.',
      icon: '🙏',
    },
  ];

  const galleryImages = [
    { title: "Ancient Temples", description: "Intricately carved temples with spiritual significance", icon: Building },
    { title: "Royal Palaces", description: "Majestic remains of ancient kingdoms", icon: Crown },
    { title: "Giant Statues", description: "Towering Buddha and deity sculptures", icon: Building2 },
    { title: "Sacred Artifacts", description: "Precious historical treasures and relics", icon: Scroll },
    { title: "Mountain Temples", description: "Pilgrimages to sacred mountain sanctuaries", icon: Mountain },
    { title: "Ceremonies & Culture", description: "Experience authentic cultural celebrations", icon: Theater },
  ];

  const faqs = [
    {
      question: 'Do I need religious beliefs to visit temples?',
      answer: 'No, these sites are open to visitors of all faiths. We respect local customs and teach appropriate temple etiquette.',
    },
    {
      question: 'What should I wear to temples?',
      answer: 'Dress modestly: covered shoulders and knees. We provide sarongs if needed. Remove shoes when entering sanctum areas.',
    },
    {
      question: 'How much walking is involved?',
      answer: 'Moderate to extensive. Most sites involve walking on uneven terrain and climbing stairs. Comfortable walking shoes essential.',
    },
    {
      question: 'What is the cultural significance of these sites?',
      answer: 'These are among the world\'s oldest continuously worshipped Buddhist sites with 2000+ years of history and continuous spiritual practice.',
    },
    {
      question: 'Are guides fluent in English?',
      answer: 'Yes, all guides are certified and fluent in English with deep knowledge of history, archaeology, and culture.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-purple-600 to-indigo-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 text-6xl">🏛️</div>
          <div className="absolute bottom-10 left-10 text-5xl">👑</div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Kingdoms & Sacred Sites</h1>
          <Link href="/contact">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-2 text-lg font-semibold">
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
            Journey through ancient kingdoms and spiritual heritage. This cultural odyssey takes you deep into the heart of Sri Lanka's historic triangle. Explore the majestic ruins of Anuradhapura and Polonnaruwa, climb the iconic Sigiriya rock fortress, and pay your respects at the sacred Temple of the Tooth. A truly immersive experience into the island's 2,500-year-old living history.
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
                <div className="aspect-square bg-gradient-to-br from-purple-100 to-indigo-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <image.icon className="w-20 h-20 text-purple-600 opacity-80" />
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
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-purple-50 to-indigo-50 hover:shadow-lg transition-shadow">
            <Calendar className="w-10 h-10 mx-auto mb-4 text-purple-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Duration</p>
            <p className="text-2xl font-bold text-gray-900">7 Days</p>
          </Card>
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-indigo-50 to-blue-50 hover:shadow-lg transition-shadow">
            <Users className="w-10 h-10 mx-auto mb-4 text-indigo-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Group Size</p>
            <p className="text-2xl font-bold text-gray-900">6-12 People</p>
          </Card>
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-lg transition-shadow">
            <Zap className="w-10 h-10 mx-auto mb-4 text-blue-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Difficulty</p>
            <p className="text-2xl font-bold text-gray-900">Moderate</p>
          </Card>
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-cyan-50 to-teal-50 hover:shadow-lg transition-shadow">
            <MapPin className="w-10 h-10 mx-auto mb-4 text-cyan-600" />
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
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore Kingdoms & Sacred Sites?</h2>
          <p className="text-lg mb-6 opacity-90">Discover the spiritual and historical heart of Sri Lanka</p>
          <Link href="/contact">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-2 text-lg font-semibold">
              Book Your Journey Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
