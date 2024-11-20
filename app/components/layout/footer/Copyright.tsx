import Link from 'next/link'
import { IoLocationSharp } from 'react-icons/io5'

export default function Copyright() {
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
            <a className="footer-copyright-link">
              <IoLocationSharp className="text-xl" />
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
