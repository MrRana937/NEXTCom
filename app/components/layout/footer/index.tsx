import React from 'react'
import Links from './Links'
import Socials from './Social'
import Newsletter from './NewsLetter'
import Payment from './Payments'
import Copyright from './Copyright'
import './index.css'

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container-footer">
        <Links />
        <Socials />
        <Newsletter />
        <Payment />
        <Copyright />
      </div>
    </footer>
  )
}

export default Footer
