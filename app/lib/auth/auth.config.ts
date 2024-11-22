import NextAuth, { NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import TwitterProvider from 'next-auth/providers/twitter'
import Auth0Provider from 'next-auth/providers/auth0'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import clientPromise from '@/app/api/auth/lib/mongodb'

export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
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
