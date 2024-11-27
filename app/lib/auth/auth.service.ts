import User from '@/app/models/User'
import dbConnect from '@/app/lib/db'
import { UserRegistration, UserLogin, AuthResponse } from './auth.types'
import { validateEmail } from '@/app/lib/validation/utils'
import jwt from 'jsonwebtoken'

export class AuthService {
  static async register(userData: UserRegistration): Promise<AuthResponse> {
    await dbConnect()

    const existingUser = await User.findOne({ email: userData.email })
    if (existingUser) {
      return {
        success: false,
        type: 'EXISTING_USER',
        message: 'User already exists',
        email: userData.email,
           }
    }

    // Create new user with emailVerified set to false
    const user = await User.create({
      fullName: userData.fullName,
      email: userData.email,
      password: userData.password,
    })

    // Generate verification token
    const verificationToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    )

    // Send verification email
    await this.sendVerificationEmail(user.email, verificationToken)

    return {
      success: true,
      message: 'Registration successful. Please check your email to verify your account.',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        image: user.image,
      },
    }
  }

  static async login(credentials: UserLogin): Promise<AuthResponse> {
    await dbConnect()

    // Find user and include password field
    const user = await User.findOne({ email: credentials.email }).select(
      '+password'
    )
    if (!user) {
      throw new Error('Invalid credentials')
    }

    // Verify password
    const isPasswordValid = await user.comparePassword(credentials.password)
    if (!isPasswordValid) {
      throw new Error('Invalid credentials')
    }

    return {
      success: true,
      message: 'Login successful',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        image: user.image,
      },
    }
  }

  static async verifyEmail(token: string): Promise<{ success: boolean; message: string }> {
    try {
      // Verify and decode token
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string }
      
      // Update user's email verification status
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
    // Implement your email sending logic here
    // You can use services like SendGrid, Amazon SES, or NodeMailer
    const verificationLink = `${process.env.BASE_URL}/api/auth/verify-email?token=${token}`
    // TODO: Implement email sending
    console.log('Verification link:', verificationLink)
  }
}
