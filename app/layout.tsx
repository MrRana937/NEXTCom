import { Inter, Plus_Jakarta_Sans, Outfit } from 'next/font/google'
import { Providers } from '@/app/providers/Providers'
import { getCountryInfo } from './lib/services/countryService'
import './globals.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer'

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const country = await getCountryInfo()

  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${inter.variable} ${outfit.variable}`}
    >
      <body>
        <Providers>
          <Header country={country} />    
          {children}
          <Footer country={country} />
        </Providers>
      </body>
    </html>
  )
}
