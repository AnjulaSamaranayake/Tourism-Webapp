'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MapPin, Calendar, Users, Zap, Mountain, Cloud, Flower, Waves, Trophy, Bird } from 'lucide-react';

export default function HortonPlainsPage() {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const highlights = [
    {
      title: 'World\'s End Plateau',
      description: 'Experience breathtaking views from the dramatic cliff edge overlooking endless valley vistas.',
      icon: '🏔️',
    },
    {
      title: 'Alpine Cloud Forests',
      description: 'Trek through ethereal cloud-draped mountains and pristine wildflower meadows.',
      icon: '☁️',
    },
    {
      title: 'Endemic Wildlife',
      description: 'Spot Sambar deer, wild boar, and rare mountain birds in their natural habitat.',
      icon: '🦌',
    },
  ];

  const galleryImages = [
    { title: "World's End Plateau", description: "Dramatic cliff edge with breathtaking sheer drops", icon: Mountain },
    { title: "Cloud Forests", description: "Misty ethereal forests with unique vegetation", icon: Cloud },
    { title: "Wildflower Meadows", description: "Colorful alpine meadows in pristine condition", icon: Flower },
    { title: "Mountain Lakes", description: "Pristine alpine lakes reflecting sky and mountains", icon: Waves },
    { title: "Highest Peak", description: "Stand at Sri Lanka's mountain summit", icon: Trophy },
    { title: "Endemic Wildlife", description: "Unique animals found nowhere else on Earth", icon: Bird },
  ];

  const faqs = [
    {
      question: 'What is altitude sickness risk?',
      answer: 'Horton Plains is at 2,240m. Most people adapt within a day. We provide slow acclimatization and rest. Altitude sickness is rare at this elevation.',
    },
    {
      question: 'How difficult are the treks?',
      answer: 'Moderate difficulty. Trails are well-maintained but involve elevation gain and varied terrain. Good fitness recommended but not essential.',
    },
    {
      question: 'When is the best time to visit?',
      answer: 'December to March for clear skies and best visibility. Early morning hikes essential to beat afternoon clouds.',
    },
    {
      question: 'What weather should I expect?',
      answer: 'Cool temperatures (10-20°C). Bring warm layers and rain gear. Mist and clouds common, creating dramatic landscapes.',
    },
    {
      question: 'Will we see World\'s End clearly?',
      answer: 'Visibility depends on weather. Early morning usually offers the best views. If clouds obstruct views, you experience the magical misty landscape instead.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-slate-600 to-slate-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 text-6xl">🏔️</div>
          <div className="absolute bottom-10 left-10 text-5xl">☁️</div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Horton Plains & Cloud Gardens</h1>
          <Link href="/contact">
            <Button className="bg-white text-slate-600 hover:bg-gray-100 px-8 py-2 text-lg font-semibold">
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
            Explore misty mountains and breathtaking alpine plateaus. Horton Plains National Park is a hauntingly beautiful highland plateau at 2,100 meters, where montane evergreen forests, cloud forests, and grasslands converge. Journey to the edge of the world at World's End, a precipice with a sheer drop of nearly 900 meters, offering one of the most stunning views in Sri Lanka.
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
                <div className="aspect-square bg-gradient-to-br from-slate-100 to-gray-50 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <image.icon className="w-20 h-20 text-slate-600 opacity-80" />
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
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-slate-50 to-gray-50 hover:shadow-lg transition-shadow">
            <Calendar className="w-10 h-10 mx-auto mb-4 text-slate-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Duration</p>
            <p className="text-2xl font-bold text-gray-900">7 Days</p>
          </Card>
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-gray-50 to-stone-50 hover:shadow-lg transition-shadow">
            <Users className="w-10 h-10 mx-auto mb-4 text-gray-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Group Size</p>
            <p className="text-2xl font-bold text-gray-900">4-8 People</p>
          </Card>
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-stone-50 to-neutral-50 hover:shadow-lg transition-shadow">
            <Zap className="w-10 h-10 mx-auto mb-4 text-stone-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Difficulty</p>
            <p className="text-2xl font-bold text-gray-900">Moderate to High</p>
          </Card>
          <Card className="p-8 text-center border-0 shadow-md bg-gradient-to-br from-neutral-50 to-zinc-50 hover:shadow-lg transition-shadow">
            <MapPin className="w-10 h-10 mx-auto mb-4 text-neutral-600" />
            <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">Best Season</p>
            <p className="text-2xl font-bold text-gray-900">Dec-Mar</p>
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
      <section className="bg-gradient-to-r from-slate-600 to-slate-500 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale the Heights?</h2>
          <p className="text-lg mb-6 opacity-90">Experience the dramatic beauty of Sri Lanka\'s highest mountains</p>
          <Link href="/contact">
            <Button className="bg-white text-slate-600 hover:bg-gray-100 px-8 py-2 text-lg font-semibold">
              Book Your Journey Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
