import { NextResponse } from 'next/server'
import { AuthService } from '@/app/lib/auth/auth.service'
import { signUpSchema } from '@/app/lib/validation/authSchema'

export async function POST(request: Request) {
  try {
    console.log('register route');
    const body = await request.json()

    console.log(body);
    // Validate request body
    const validatedData = signUpSchema.parse(body)

    console.log('validated data', validatedData)
    // Register user
    const response = await AuthService.register({
      name: validatedData.name,
      email: validatedData.email,
      password: validatedData.password,
    })

    console.log('responce is');
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
