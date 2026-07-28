'use server'

import { writeClient } from '@/sanity/lib/write-client'

export interface TestimonialFormData {
  fullName: string
  country: string
  tour: string
  travelDate: string
  rating: number
  story: string
}

export async function submitTestimonial(data: TestimonialFormData) {
  try {
    // Prefixing _id with "drafts." saves it as an unpublished draft in Sanity.
    // The admin must manually publish it in the Studio for it to appear on the site.
    await writeClient.create({
      _id: `drafts.${crypto.randomUUID()}`,
      _type: 'testimonial',
      fullName: data.fullName,
      country: data.country,
      tour: data.tour,
      travelDate: data.travelDate,
      rating: data.rating,
      story: data.story,
    })

    return { success: true }
  } catch (error) {
    console.error('Failed to submit testimonial:', error)
    return { success: false, error: 'Failed to submit. Please try again.' }
  }
}
