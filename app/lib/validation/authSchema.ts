import * as z from 'zod'
import { validateEmail } from './utils'

export const signInSchema = z.object({
  email: z.string()
    .min(1, 'Email is required')
    .email('Invalid email format')
    .refine((email) => validateEmail(email), {
      message: 'Please enter a valid email address'
    }),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must not exceed 50 characters')
      .regex(
        /^[a-zA-Z\s]*$/,
        'Name can only contain letters and spaces'
      ),
    email: z.string()
      .min(1, 'Email is required')
      .email('Invalid email format')
      .refine((email) => validateEmail(email), {
        message: 'Please enter a valid email address'
      }),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })
