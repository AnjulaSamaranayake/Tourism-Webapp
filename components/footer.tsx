export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4">Immersive Journeys</h3>
            <p className="text-background/80 leading-relaxed max-w-md">
              Curated travel experiences blending authentic cuisine, adventure in nature, and profound cultural history
              into seamless, transformative itineraries.
            </p>
          </div>

          <div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-8 md:gap-12">
            <div>
              <h4 className="font-semibold mb-4 text-accent">Explore</h4>
              <ul className="space-y-3 md:space-y-2 text-sm text-background/80">
                <li>
                  <a href="/#pillars" className="hover:text-accent transition-colors block py-1 md:py-0">
                    Our Approach
                  </a>
                </li>
                <li>
                  <a href="/#tour-memories" className="hover:text-accent transition-colors block py-1 md:py-0">
                    Journeys
                  </a>
                </li>
                <li>
                  <a href="/#difference" className="hover:text-accent transition-colors block py-1 md:py-0">
                    Why Choose Us
                  </a>
                </li>
                <li>
                  <a href="/customize-tours" className="hover:text-accent transition-colors block py-1 md:py-0">
                    Customize Tours
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-accent">Resources</h4>
              <ul className="space-y-3 md:space-y-2 text-sm text-background/80">
                <li>
                  <a href="/#faq" className="hover:text-accent transition-colors block py-1 md:py-0">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/share-your-story" className="hover:text-accent transition-colors block py-1 md:py-0">
                    Share Your Story
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="hover:text-accent transition-colors block py-1 md:py-0">
                    Tour Gallery
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-accent transition-colors block py-1 md:py-0">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60 text-center md:text-left">
          <p>&copy; 2026 Immersive Journeys. All rights reserved. Crafted with care for discerning travelers.</p>
          <p>Developed by <a href="https://soultris.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors">Soultris</a></p>
        </div>
      </div>
    </footer>
  )
}
