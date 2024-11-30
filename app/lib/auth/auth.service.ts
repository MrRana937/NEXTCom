import User from '@/app/models/User'
import dbConnect from '@/app/lib/db'
import { UserRegistration, UserLogin, AuthResponse } from './auth.types'
import { validateEmail } from '@/app/lib/validation/utils'
import jwt from 'jsonwebtoken'

export class AuthService {
  static async register({
    name,
    email,
    password,
  }: UserRegistration): Promise<AuthResponse> {
    await dbConnect()

    try {
      console.log('Creating user with:', { name, email })

      const existingUser = await User.findOne({ email })
      if (existingUser) {
        return {
          success: true,
          type: 'EXISTING_USER',
          message: 'Email already registered',
          email,
        }
      }

      const user = await User.create({
        name,
        email,
        password,
      })

      console.log('Created user:', user)

      return {
        success: true,
        type: 'SUCCESS',
        message: 'Registration successful',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          image: user.image,
        },
      }
    } catch (error) {
      console.error('User creation error:', error)
      throw error
    }
  }

  static async login({ email, password }: UserLogin): Promise<AuthResponse> {
    await dbConnect()

    const user = await User.findOne({ email }).select('+password')
    if (!user) {
      throw new Error('Invalid credentials')
    }

    const isPasswordValid = await user.comparePassword(password)
    if (!isPasswordValid) {
      throw new Error('Invalid credentials')
    }

    return {
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        image: user.image,
      },
    }
  }

  static async verifyEmail(token: string): Promise<{ success: boolean; message: string }> {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }
      
      const user = await User.findByIdAndUpdate(
        decoded.userId,
        { emailVerified: true },
        { new: true }
      )

      if (!user) {
        throw new Error('User not found')
      }

      return {
        success: true,
        message: 'Email verified successfully',
      }
    } catch (error) {
      throw new Error('Invalid or expired verification token')
    }
  }

  private static async sendVerificationEmail(email: string, token: string) {
    const verificationLink = `${process.env.BASE_URL}/api/auth/verify-email?token=${token}`
    // TODO: Implement email sending
    console.log('Verification link:', verificationLink)
  }
}
