import { z } from 'zod'

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name is required.' })
    .min(2, { message: 'Name must be at least 2 characters.' }),
  email: z
    .string()
    .min(1, { message: 'Email is required.' })
    .email({ message: 'Invalid email address.' }),
  message: z.string().min(1, { message: 'Message is required.' })
})

export const NewsletterFormSchema = z.object({
  email: z.string().email('Invalid email.')
})
