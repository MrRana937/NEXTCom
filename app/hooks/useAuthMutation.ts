import { useMutation } from '@tanstack/react-query'
import { authApi } from '@/app/lib/api/authApi'
import { UserRegistration, UserLogin } from '@/app/lib/auth/auth.types'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'

export function useAuthMutation() {
  const router = useRouter()

  const registerMutation = useMutation({
    mutationFn: (data: UserRegistration) => authApi.register(data),
    onSuccess: (data) => {
      if (data.data.type === 'EXISTING_USER') {
        router.push(`/signin?email=${data.data.email}`)
      } else {
        router.push('/signin')
      }
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
    },
  })

  return {
    registerMutation,
    loginMutation,
  }
}
