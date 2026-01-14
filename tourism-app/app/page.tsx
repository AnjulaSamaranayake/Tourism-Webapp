import { HeroSection } from "@/components/hero-section"
import { PillarsSection } from "@/components/pillars-section"
import { JourneysGallery } from "@/components/journeys-gallery"
import { TestimonialsSection } from "@/components/testimonials-section"
import { DifferenceSection } from "@/components/difference-section"
import { PlanningProcess } from "@/components/planning-process"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PillarsSection />
      <JourneysGallery />
      <TestimonialsSection />
      <DifferenceSection />
      <PlanningProcess />
      <ContactSection />
      <Footer />
    </main>
  )
}
