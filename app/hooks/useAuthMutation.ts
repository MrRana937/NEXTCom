import { useMutation } from '@tanstack/react-query'
import { authApi } from '@/app/lib/api/authApi'
import { UserRegistration, UserLogin } from '@/app/lib/auth/auth.types'

export function useAuthMutation() {
 
    const registerMutation = useMutation({
    mutationFn: (data: UserRegistration) => authApi.register(data),
    onSuccess: (data) => {
      // Handle successful registration
      console.log('Registration successful:', data)
    },
    onError: (error) => {
      // Handle registration error
      console.error('Registration failed:', error)
    },
  })


  const loginMutation = useMutation({
    mutationFn: (data: UserLogin) => authApi.login(data),
    onSuccess: (data) => {
      // Handle successful login
      console.log('Login successful:', data)
    },
    onError: (error) => {
      // Handle login error
      console.error('Login failed:', error)
    },
  })

  return {
    registerMutation,
    loginMutation,
  }
}
