import { NextResponse } from 'next/server'
import { AuthService } from '@/app/lib/auth/auth.service'
import { signUpSchema } from '@/app/lib/validation/authSchema'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate request body
    const validatedData = signUpSchema.parse(body)

    // Register user
    const response = await AuthService.register({
      fullName: validatedData.fullName,
      email: validatedData.email,
      password: validatedData.password,
    })
  if (response.type === 'EXISTING_USER') {
    return NextResponse.json(response, { status: 200 })
  }
    return NextResponse.json(response)
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || 'Registration failed',
      },
      { status: 400 }
    )
  }
}
