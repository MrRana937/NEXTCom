import Link from 'next/link'
import { IoLocationSharp } from 'react-icons/io5'
import { CountryInfo } from '@/app/lib/services/countryService'

interface CopyrightProps {
  country: CountryInfo
}

export default function Copyright({ country }: CopyrightProps) {
  return (
    <div className="footer-copyright">
      <section className="footer-copyright-text">
        ©2022 SHOPPAY All Rights Resereved.
      </section>
      <section>
        <ul className="footer-copyright-links">
          {data.map((link) => (
            <li key={link.name}>
              <Link href={link.link} className="footer-copyright-link">
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <a className="footer-copyright-link flex items-center gap-2">
              <IoLocationSharp className="text-xl" />
              {country.name}
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

const data = [
  {
    name: 'Privacy Center',
    link: '',
  },
  {
    name: 'Privacy & Cookie Policy',
    link: '',
  },
  {
    name: 'Manage Cookies',
    link: '',
  },
  {
    name: 'Terms & Conditions',
    link: '',
  },
  {
    name: 'Copyright Notice',
    link: '',
  },
]
