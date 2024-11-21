import Header from '@/app/components/layout/header'
import Footer from '../components/layout/footer'
import { getCountryInfo } from '@/app/lib/services/countryService'


// Mark component as async since we're fetching data
export default async function Home() {
  // Fetch country info
  const country = await getCountryInfo()

  return (
    <div>
      <Header country={country} />
      <Footer country={country} />
    </div>
  )
}
