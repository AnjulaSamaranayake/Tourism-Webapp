import { Button } from "@/components/ui/button"
import { Star, Check } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/tourism_vid%20-%20Trim01.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-background leading-tight text-balance">
            Journey Beyond the Sightseeing.
            <br />
            <span className="text-accent">Immerse in the Soul.</span>
          </h1>

          <p className="text-xl sm:text-2xl text-background/95 leading-relaxed max-w-3xl mx-auto text-pretty">
            We craft seamless itineraries where you'll savor authentic cuisine, trek through breathtaking landscapes,
            and uncover hidden histories with our expert guides.
          </p>

          {/* <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-background">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-medium">Rated 4.9★ for Depth & Detail</span>
            </div>
            <div className="flex items-center gap-2 text-background">
              <Check className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Curated, Not Crowded</span>
            </div>
            <div className="flex items-center gap-2 text-background">
              <Check className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium">Local Culinary & History Experts</span>
            </div>
          </div> */}

          {/* <div className="pt-8">
            <a href="/contact" className="inline-block">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-accent text-foreground hover:bg-secondary hover:text-secondary-foreground transition-all shadow-xl"
              >
                Begin Your Journey
              </Button>
            </a>
          </div> */}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-background rounded-full" />
        </div>
      </div>
    </section>
  )
}
