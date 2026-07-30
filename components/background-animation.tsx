import { Sparkles, Star, Moon, Sun } from "lucide-react"

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Animated gradient backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[120px] animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-accent/5 blur-[90px] animate-pulse-slow" style={{ animationDelay: "4s" }}></div>

      {/* Floating decorative elements */}
      <div className="absolute top-[15%] left-[10%] opacity-20 animate-float" style={{ animationDelay: "0s" }}>
        <div className="w-4 h-4 rounded-full bg-primary/40"></div>
      </div>
      <div className="absolute top-[25%] right-[15%] opacity-20 animate-float" style={{ animationDelay: "1.5s" }}>
        <Sparkles className="h-8 w-8 text-secondary" />
      </div>
      <div className="absolute top-[60%] left-[20%] opacity-20 animate-float" style={{ animationDelay: "3s" }}>
        <div className="w-6 h-6 rounded-full border-2 border-accent/40"></div>
      </div>
      <div className="absolute top-[75%] right-[25%] opacity-10 animate-float" style={{ animationDelay: "2s" }}>
        <div className="w-12 h-12 rounded-full bg-primary/20"></div>
      </div>
      <div className="absolute bottom-[10%] left-[30%] opacity-15 animate-float" style={{ animationDelay: "4.5s" }}>
        <Star className="h-6 w-6 text-accent" />
      </div>
    </div>
  )
}
