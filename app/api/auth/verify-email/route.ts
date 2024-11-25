import { AuthService } from '@/app/lib/auth/auth.service'

export async function GET(request: Request) {
  try {
    console.log('verify-email')
    const { searchParams } = new URL(request.url)
    const token = searchParams.get('token')

    if (!token) {
      return Response.json(
        { success: false, message: 'Token is required' },
        { status: 400 }
      )
    }

    const result = await AuthService.verifyEmail(token)
    return Response.json(result)
  } catch (error: any) {
    return Response.json(
      { success: false, message: error.message },
      { status: 400 }
    )
  }
}
