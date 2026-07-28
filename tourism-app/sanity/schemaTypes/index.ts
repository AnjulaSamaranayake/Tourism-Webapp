import type { SchemaTypeDefinition } from 'sanity'
import { galleryImage } from './galleryImage'
import { testimonial } from './testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [galleryImage, testimonial],
}
