import AuthForm from '@/app/components/auth/AuthForm'
import { getProviders } from 'next-auth/react'

export default async function SignInPage() {
  const providers = await getProviders()
  
  const socialProviders = providers ? 
    Object.values(providers).filter(provider => provider.type === 'oauth') : 
    []

  return <AuthForm providers={socialProviders} />
}
