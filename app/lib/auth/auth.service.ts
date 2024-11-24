import User from '@/app/models/User'
import dbConnect from '@/app/lib/db'
import { UserRegistration, UserLogin, AuthResponse } from './auth.types'
import { validateEmail } from '@/app/lib/validation/utils'

export class AuthService {
  static async register(userData: UserRegistration): Promise<AuthResponse> {
    await dbConnect()

    // Validate email format
    if (!validateEmail(userData.email)) {
      throw new Error('Invalid email format')
    }

    const existingUser = await User.findOne({ email: userData.email })
    if (existingUser) {
      throw new Error('Email already registered')
    }

    // Create new user
    const user = await User.create({
      fullName: userData.fullName,
      email: userData.email,
      password: userData.password,
    })

    return {
      success: true,
      message: 'Registration successful',
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
  
}
