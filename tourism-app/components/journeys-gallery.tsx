import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { GalleryCarousel } from "@/components/gallery-carousel"

export async function JourneysGallery() {
  const query = `*[_type == "galleryImage"]{
    image,
    guestName,
    country
  }`
  const galleryImages: any[] = await client.fetch(query)

  const images = galleryImages.map((item) => ({
    imageUrl: item.image ? urlForImage(item.image).width(800).height(800).url() : "",
    guestName: item.guestName ?? "",
    country: item.country ?? "",
  }))

  return (
    <section id="tour-memories" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Tour Memories
          </h2>
          <p className="text-lg text-muted-foreground">
            Capturing beautiful moments with our wonderful guests from around the world. This is the joy of travel, shared.
          </p>
        </div>

        {/* Auto-playing Carousel — 3 images per slide */}
        <GalleryCarousel images={images} />

        {/* CTA Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Ready to create your own unforgettable memories?
          </h3>
          <Link href="/contact">
            <button className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 rounded-md font-semibold transition-colors duration-200">
              Start Planning Your Journey
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
