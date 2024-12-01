import Header from '@/app/components/layout/header'
import Footer from '@/app/components/layout/footer'
import { getCountryInfo } from '@/app/lib/services/countryService'

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const country = await getCountryInfo()

  return (
    <>
      <Header country={country} />
      <main className="flex-grow">{children}</main>
      <Footer country={country} />
    </>
  )
}
