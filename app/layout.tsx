import { Inter, Plus_Jakarta_Sans, Outfit } from 'next/font/google'
// import { ReduxProvider } from './providers/ReduxProvider'
// import { AuthProvider } from './providers/AuthProvider'
// import QueryProvider from './providers/QueryProvider'
import { Providers } from '@/app/providers/Providers'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${outfit.variable}`}
    >
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
