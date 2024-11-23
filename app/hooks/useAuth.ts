'use client'

import { useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'

export function useAuth() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const isSignUp = searchParams.get('signup') === 'true'

  const toggleMode = () => {
    router.push(`/signin${isSignUp ? '' : '?signup=true'}`)
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
