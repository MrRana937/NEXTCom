'use client'

import Link from 'next/link'

export default function Ad() {
  return (
    <Link href="/browse" className="block group overflow-hidden">
      <div className="relative h-[54px] w-full">
        <div
          className="absolute inset-0 bg-[url('/images/ad.jpg')] bg-cover bg-center 
                     transform transition-transform duration-700 group-hover:scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent 
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </Link>
  )
}
