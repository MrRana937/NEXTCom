'use client'

import React from 'react'
import { MdSecurity } from 'react-icons/md'
import { BsHeart } from 'react-icons/bs'
import { RiAccountPinCircleLine, RiArrowDropDownFill } from 'react-icons/ri'
import UserMenu from './userMenu'
import { CountryInfo } from '@/app/lib/services/countryService'

interface TopProps {
  country: CountryInfo
}

export default function Top({ country }: TopProps) {
  return (
    <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
      <div className="max-w-7xl ml-auto mr-5 py-2 px-4">
        <ul className="flex items-center justify-end space-x-6">
          {/* Country Selector */}
          <li className="top-nav-item group">
            <div className="nav-item-content">
              <img
                src={country.flag}
                alt="country flag"
                className="w-5 h-5 rounded-full object-cover ring-1 ring-gray-200"
              />
              <span className="nav-text">{country.name}</span>
              <RiArrowDropDownFill className="nav-icon" />
            </div>
          </li>

          {/* Buyer Protection */}
          <li className="top-nav-item hidden md:flex group">
            <div className="nav-item-content">
              <MdSecurity className="nav-icon" />
              <span className="nav-text">Buyer Protection</span>
            </div>
          </li>

          {/* Customer Service */}
          <li className="top-nav-item hidden md:flex group">
            <div className="nav-item-content">
              <span className="nav-text">Customer Service</span>
            </div>
          </li>

          {/* Help */}
          <li className="top-nav-item hidden lg:flex group">
            <div className="nav-item-content">
              <span className="nav-text">Help</span>
            </div>
          </li>

          {/* Wishlist */}
          {/* <li className="top-nav-item group">
            <div className="nav-item-content">
              <BsHeart className="nav-icon" />
              <span className="nav-text">Wishlist</span>
            </div>
          </li> */}

          {/* Account */}
          <li className="top-nav-item group">
            <UserMenu />
          </li>
        </ul>
      </div>
    </div>
  )
}
