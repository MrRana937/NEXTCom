import { useMutation } from '@tanstack/react-query'
import { authApi } from '@/app/lib/api/authApi'
import { UserRegistration, UserLogin } from '@/app/lib/auth/auth.types'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'

export function useAuthMutation() {
  const router = useRouter()

  const getCallbackUrl = () => {
    // Get callback URL from the current URL or default to '/'
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search)
      return searchParams.get('callbackUrl') || '/'
    }
    return '/'
  }

  const registerMutation = useMutation({
    mutationFn: (data: UserRegistration) => authApi.register(data),
    onSuccess: async (response, originalData) => {
      if (response.data.type === 'EXISTING_USER') {
     const params = new URLSearchParams()
     params.set('email', response.data.email)

     // Preserve callback URL if it exists
     const callbackUrl = getCallbackUrl()
     if (callbackUrl !== '/') {
          params.set('callbackUrl', callbackUrl)
        }

        router.push(`/signin?${params.toString()}`)
      } else {
        const signInResult = await signIn('credentials', {
          email: originalData.email,
          password: originalData.password,
          redirect: false,
          callbackUrl: getCallbackUrl(),
        })

        if (signInResult?.error) {
          console.error('Auto-login error:', signInResult.error)
          toast.error(
            'Registration successful but login failed. Please sign in manually.'
          )
          router.push('/signin')
        } else {
          router.push(signInResult?.url || '/')
          toast.success('Registration successful! Welcome!')
        }
      }
    },
    onError: (error: any) => {
      console.error('Registration error:', error)
      toast.error('Registration failed. Please try again.')
    },
  })

  const loginMutation = useMutation({
    mutationFn: async (credentials: UserLogin) => {
      const result = await signIn('credentials', {
        email: credentials.email,
        password: credentials.password,
        redirect: false,
        callbackUrl: getCallbackUrl(),
      })

      if (result?.error) {
        throw new Error(result.error)
      }
      return result
    },
    onSuccess: (result) => {
      router.push(result?.url || '/')
      toast.success('Welcome back!')
    },
    onError: (error: any) => {
      console.error('Login error:', error)
      toast.error('Invalid email or password')
    },
  })

  return {
    registerMutation,
    loginMutation,
  }
}
