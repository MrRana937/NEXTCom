export interface UserRegistration {
  fullName: string
  email: string
  password: string
}

export interface UserLogin {
  email: string
  password: string
}

export interface AuthResponse {
  success: boolean
  type?: 'EXISTING_USER' | 'SUCCESS'
  message: string
  email?: string
  user?: {
    id: string
    fullName: string
    email: string
    image?: string
  }
}
