import { Inter, Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import { ReduxProvider } from '../lib/redux/ReduxProvider'
import { AuthProvider } from '../lib/auth/AuthProvider'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap', // Add this
  variable: '--font-jakarta',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // Add this
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap', // Add this
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
        <ReduxProvider>
          <AuthProvider>{children}</AuthProvider>
        </ReduxProvider>
      </body>
    </html>
  )
}
