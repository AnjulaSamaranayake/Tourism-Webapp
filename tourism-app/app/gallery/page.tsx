import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"

export const metadata = {
  title: "Tour Memories | Gallery",
  description: "View our wonderful tour memories and guests from around the world.",
}

export default async function GalleryPage() {
  const query = `*[_type == "galleryImage"]{
    image,
    guestName,
    country
  }`
  const galleryImages: any[] = await client.fetch(query)

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 bg-background min-h-[80vh]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              Tour Memories
            </h1>
            <p className="text-lg text-muted-foreground">
              Capturing beautiful moments with our wonderful guests from around the world. This is the joy of travel, shared.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 auto-rows-max">
            {galleryImages.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative bg-muted overflow-hidden aspect-square">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${item.image ? urlForImage(item.image).width(800).height(800).url() : ''}')`,
                    }}
                  />
                  {/* Subtle bottom gradient for text only */}
                  <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Guest Info Overlay */}
                  <div className="absolute bottom-0 inset-x-0 flex flex-col p-5 text-white">
                    <h3 className="text-base font-bold drop-shadow">{item.guestName}</h3>
                    <p className="text-xs text-gray-200">{item.country}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center max-w-2xl mx-auto mt-24">
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to create your own unforgettable memories?
            </h3>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground text-lg px-8 py-6"
              >
                Start Planning Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
