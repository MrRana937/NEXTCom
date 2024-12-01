import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'
import Auth0Provider from 'next-auth/providers/auth0'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/app/lib/mongooseAdapter'
import { signInSchema } from '../validation/authSchema'
import CredentialsProvider from 'next-auth/providers/credentials'
import { AuthService } from './auth.service'

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error('Please provide both email and password')
          }

          // Validate input
          const validatedData = signInSchema.parse(credentials)

          // Attempt to login
          const response = await AuthService.login({
            email: validatedData.email,
            password: validatedData.password,
          })

          if (!response.success || !response.user) {
            throw new Error(response.message)
          }

          return response.user
        } catch (error: any) {
          throw new Error(error.message)
        }
      },
    }),

    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID!,
      clientSecret: process.env.TWITTER_CLIENT_SECRET!,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER_BASE_URL!,
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  // pages: {
  //   signIn: '/auth/login',
  // },
}

export default NextAuth(authOptions)
