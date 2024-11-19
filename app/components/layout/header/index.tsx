'use client'
import Ad from './Ad'
import './index.css'
import Search from './search'
import Top from './Top'

export default function Header() {
  return (
    <header className="header">
      <Ad />
      <Top />
      <Search />
    </header>
  )
}
