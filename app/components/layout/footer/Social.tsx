import { FaFacebookF, FaTiktok } from 'react-icons/fa'
import {
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsPinterest,
  BsSnapchat,
} from 'react-icons/bs'
export default function Socials() {
  return (
    <div className="footer-socials">
      <section>
        <h3 className="footer-socials-heading">STAY CONNECTED</h3>
        <ul className="footer-socials-list">
          {socialLinks.map((social) => (
            <li key={social.name}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                {social.icon}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

const socialLinks = [
  { name: 'Facebook', icon: <FaFacebookF />, link: '/' },
  { name: 'Instagram', icon: <BsInstagram />, link: '/' },
  { name: 'Twitter', icon: <BsTwitter />, link: '/' },
  { name: 'YouTube', icon: <BsYoutube />, link: '/' },
  { name: 'Pinterest', icon: <BsPinterest />, link: '/' },
  { name: 'Snapchat', icon: <BsSnapchat />, link: '/' },
]
