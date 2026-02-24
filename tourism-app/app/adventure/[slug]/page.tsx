"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
    Trophy,
    MapPin,
    Heart,
    Users,
    Leaf,
    Camera,
    Clock,
    Calendar,
    ChevronLeft,
    CheckCircle2,
    Info,
    ShieldCheck,
    Mountain,
    Compass
} from "lucide-react"
import { adventurePlaces } from "@/lib/data/adventure"

export default function AdventureDetailPage() {
    const params = useParams()
    const slug = params.slug as string
    const place = adventurePlaces[slug as keyof typeof adventurePlaces]

    if (!place) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold mb-4">Place not found</h1>
                <Link href="/adventure-tours">
                    <Button>Back to Adventure Tours</Button>
                </Link>
            </div>
        )
    }

    return (
        <>
            <Navigation />
            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
                        style={{ backgroundImage: `url('${place.image}')` }}
                    />
                    <div className="absolute inset-0 bg-black/50" />

                    <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                        <Link href="/adventure-tours" className="inline-flex items-center text-sm font-medium mb-6 hover:text-primary transition-colors">
                            <ChevronLeft className="h-4 w-4 mr-1" />
                            Back to Adventure Tours
                        </Link>
                        <h1 className="text-5xl sm:text-7xl font-bold mb-4 tracking-tight">
                            {place.title}
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-200 font-medium italic">
                            {place.subtitle}
                        </p>
                    </div>
                </section>

                {/* Overview Section */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-3xl font-bold mb-6 flex items-center">
                                        <Info className="mr-3 text-primary h-8 w-8" />
                                        Adventure Overview
                                    </h2>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        {place.description}
                                    </p>
                                </div>

                                <div className="p-8 bg-muted rounded-2xl border border-primary/10">
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">Why Seek This Thrill?</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {place.whySpecial}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-muted p-8 rounded-3xl space-y-8 sticky top-24">
                                <h3 className="text-2xl font-bold border-b border-primary/20 pb-4">Key Thrills</h3>
                                <ul className="space-y-4">
                                    {place.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle2 className="h-6 w-6 text-primary mr-3 shrink-0" />
                                            <span className="text-lg text-foreground font-medium">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="py-20 bg-muted">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 text-center">Capture the Action</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {place.gallery.map((img, index) => (
                                <div key={index} className="relative h-72 rounded-xl overflow-hidden group cursor-pointer shadow-md">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url('${img}')` }}
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Information Section */}
                <section className="py-20 bg-background">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <Card className="p-8 border-none shadow-lg bg-muted/50 hover:bg-muted transition-colors">
                                <Calendar className="h-10 w-10 text-primary mb-4" />
                                <h4 className="text-lg font-bold mb-2">Best Season</h4>
                                <p className="text-muted-foreground">{place.details.bestTime}</p>
                            </Card>
                            <Card className="p-8 border-none shadow-lg bg-muted/50 hover:bg-muted transition-colors">
                                <Mountain className="h-10 w-10 text-primary mb-4" />
                                <h4 className="text-lg font-bold mb-2">Environment</h4>
                                <p className="text-muted-foreground">{place.details.keyAnimals}</p>
                            </Card>
                            <Card className="p-8 border-none shadow-lg bg-muted/50 hover:bg-muted transition-colors">
                                <Compass className="h-10 w-10 text-primary mb-4" />
                                <h4 className="text-lg font-bold mb-2">Activities</h4>
                                <p className="text-muted-foreground">{place.details.activities}</p>
                            </Card>
                            <Card className="p-8 border-none shadow-lg bg-muted/50 hover:bg-muted transition-colors">
                                <Clock className="h-10 w-10 text-primary mb-4" />
                                <h4 className="text-lg font-bold mb-2">Active Time</h4>
                                <p className="text-muted-foreground">{place.details.duration}</p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Travel Tips Section */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-12 flex items-center justify-center">
                            <ShieldCheck className="mr-3 text-primary h-8 w-8" />
                            Safety & Adventure Prep
                        </h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-primary italic">Adventure Gear</h4>
                                <p className="text-muted-foreground leading-relaxed">{place.travelTips.packing}</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-primary italic">Logistics & Safety</h4>
                                <p className="text-muted-foreground leading-relaxed">{place.travelTips.entry}</p>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-xl font-bold text-primary italic">Wildlife & Nature Ethics</h4>
                                <p className="text-muted-foreground leading-relaxed">{place.travelTips.ethical}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 bg-primary text-primary-foreground">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-4xl sm:text-5xl font-bold mb-8">Ready to push your limits at {place.title}?</h2>
                        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
                            Our adventure specialists provide world-class equipment and certified guides to ensure your safety while you conquer Sri Lanka's wildest terrains.
                        </p>
                        <Link href="/contact">
                            <Button size="lg" variant="secondary" className="rounded-full text-lg px-12 py-8 bg-white text-primary hover:bg-white/90">
                                Plan This Adventure
                            </Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
