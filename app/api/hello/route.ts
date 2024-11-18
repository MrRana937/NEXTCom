import dbConnect from '@/app/lib/db'

export async function GET() {
  try {
    console.log('Testing database connection...')
    const mongoose = await dbConnect()

    return Response.json({
      success: true,
      message: 'Connected to MongoDB',
      readyState: mongoose.connection.readyState,
    })
  } catch (error: any) {
    console.error('API Error:', error.message)
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    )
  }
}
