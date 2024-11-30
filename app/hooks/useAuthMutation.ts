import { useMutation } from '@tanstack/react-query'
import { authApi } from '@/app/lib/api/authApi'
import { UserRegistration, UserLogin } from '@/app/lib/auth/auth.types'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'

export function useAuthMutation() {
  const router = useRouter()

  const registerMutation = useMutation({
    mutationFn: (data: UserRegistration) => authApi.register(data),
    onSuccess: (data) => {
      if (data.data.type === 'EXISTING_USER') {
        router.push(`/signin?email=${data.data.email}`)
        toast.error('Email already registered. Please sign in.')
      } else {
        router.push('/signin')
        toast.success('Registration successful! Please sign in.')
      }
    },
    onError: (error: any) => {
      console.error('Registration error:', error)
    },
  })

  const loginMutation = useMutation({
    mutationFn: async (credentials: UserLogin) => {
      const result = await signIn('credentials', {
        email: credentials.email,
        password: credentials.password,
        redirect: false,
      })

      if (result?.error) {
        throw new Error(result.error)
      }
      return result
    },
    onSuccess: () => {
      router.push('/')
      // toast.success('Welcome back!')
    },
    onError: (error: any) => {
      console.error('Login error:', error)
    },
  })

  return {
    registerMutation,
    loginMutation,
  }
}
