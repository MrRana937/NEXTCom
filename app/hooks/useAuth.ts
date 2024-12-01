'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export function useAuth() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const isSignUp = searchParams.get('signup') === 'true'
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  const toggleMode = () => {
    const params = new URLSearchParams()
    
    // Toggle signup parameter
    if (!isSignUp) {
      params.set('signup', 'true')
    }
    
    // Preserve callback URL if it exists
    if (callbackUrl !== '/') {
      params.set('callbackUrl', callbackUrl)
    }

    // Construct the URL with all parameters
    const queryString = params.toString()
    router.push(`/signin${queryString ? `?${queryString}` : ''}`)
  }

  const handleSubmit = async (data: any) => {
    setLoading(true)
    try {
      // Handle auth logic here
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return {
    isSignUp,
    loading,
    toggleMode,
    handleSubmit,
  }
}
