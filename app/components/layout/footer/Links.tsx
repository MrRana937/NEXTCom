import { defaultOverrides } from 'next/dist/server/require-hook'
import Link from 'next/link'
import React from 'react'

const Links = () => {
  return (
    <div className="footer-links">
      {links.map((link, index) => (
        <ul key={index} className="footer-link-group">
          {index === 0 ? (
            <img
              src="/images/logo.png"
              alt="logo"
              className="relative -left-6 h-12 w-auto object-contain mb-4"
            />
          ) : (
            <b className="footer-link-heading">{link.heading}</b>
          )}
          {link.links.map(
            (item) =>
              item.name && (
                <li key={item.name}>
                  <Link href={item.link} className="footer-link">
                    {item.name}
                  </Link>
                </li>
              )
          )}
        </ul>
      ))}
    </div>
  )
}

const links = [
  {
    heading: 'SHOPPAY',
    links: [
      {
        name: 'About us',
        link: '',
      },
      {
        name: 'Contact us',
        link: '',
      },
      {
        name: 'Social Responsibility',
        link: '',
      },
      {
        name: '',
        link: '',
      },
    ],
  },
  {
    heading: 'HELP & SUPPORT',
    links: [
      {
        name: 'Shipping Info',
        link: '',
      },
      {
        name: 'Returns',
        link: '',
      },
      {
        name: 'How To Order',
        link: '',
      },
      {
        name: 'How To Track',
        link: '',
      },
      {
        name: 'Size Guide',
        link: '',
      },
    ],
  },
  {
    heading: 'Customer service',
    links: [
      {
        name: 'Customer service',
        link: '',
      },
      {
        name: 'Terms and Conditions',
        link: '',
      },
      {
        name: 'Consumers (Transactions)',
        link: '',
      },
      {
        name: 'Take our feedback survey',
        link: '',
      },
    ],
  },
]

export default Links