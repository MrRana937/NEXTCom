import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaOpencart } from 'react-icons/fa'
import { RiSearch2Line } from 'react-icons/ri'
import UserMenu from './userMenu'

const Search = () => {

  return (
    <div className="relative h-[90px] shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full gap-8">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="block">
              <img
                src="/images/logo.png"
                alt="Logo"
                className="w-[170px] object-contain"
              />
            </span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 relative hidden sm:block">
            <div className="flex items-center bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full py-2 md:py-3 px-3 md:px-4 bg-transparent outline-none 
                         text-gray-700 placeholder-gray-500 text-sm md:text-base"
              />
              <button className="p-2 md:p-3 bg-blue-600 hover:bg-blue-700 transition-colors rounded-r-lg">
                <RiSearch2Line className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Cart */}
          <Link href="/cart" className="relative flex-shrink-0 group">
            <FaOpencart className="w-8 h-8 text-gray-600 group-hover:text-blue-600 transition-colors" />
            <span className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-blue-600 text-white text-sm font-semibold rounded-full">
              0
            </span>
          </Link>
          <div className="user-account">
            <UserMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
