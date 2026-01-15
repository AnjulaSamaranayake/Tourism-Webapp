export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Immersive Journeys</h3>
            <p className="text-background/80 leading-relaxed max-w-md">
              Curated travel experiences blending authentic cuisine, adventure in nature, and profound cultural history
              into seamless, transformative itineraries.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Explore</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="#pillars" className="hover:text-accent transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#journeys" className="hover:text-accent transition-colors">
                  Journeys
                </a>
              </li>
              <li>
                <a href="#difference" className="hover:text-accent transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Resources</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <a href="/#faq" className="hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/share-your-story" className="hover:text-accent transition-colors">
                  Travel Guide
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  Packing Tips
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-accent transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2026 Immersive Journeys. All rights reserved. Crafted with care for discerning travelers.</p>
          <p>Developed by Soultris.ai</p>
        </div>
      </div>
    </footer>
  )
}
