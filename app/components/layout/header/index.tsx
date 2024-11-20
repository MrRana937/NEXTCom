'use client'
import Ad from './Ad'
import './index.css'
import Search from './search'
import Top from './Top'
import { CountryInfo } from '@/app/lib/services/countryService'
interface HeaderProps {
  country: CountryInfo
}

export default function Header({ country }: HeaderProps) {
  return (
    <header className="header">
      <Ad />
      <Top country={country} />
      <Search />
    </header>
  )
}
