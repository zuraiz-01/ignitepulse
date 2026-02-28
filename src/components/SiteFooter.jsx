import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'
import brandLogo from '../../logo.png'
import { footerLinks } from '../data/siteData'

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand-wrap">
            <img className="brand-logo" src={brandLogo} alt="IgnitePulse logo" />
            <strong>IgnitePulse</strong>
          </div>
          <p className="footer-text">
            Your premier destination for fashion, electronics, and home goods.
          </p>
          <div className="socials">
            <a href="#" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="#" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="#" aria-label="YouTube">
              <FiYoutube />
            </a>
          </div>
        </div>

        <div>
          <h4>Shop</h4>
          {footerLinks.shop.map((link) => (
            <Link key={link} to="/shop">
              {link}
            </Link>
          ))}
        </div>

        <div>
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/blog">Blog</Link>
          {footerLinks.company.slice(2).map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </div>

        <div>
          <h4>Support</h4>
          {footerLinks.support.map((link) => (
            link === 'Help Center' ? (
              <Link key={link} to="/faqs">
                {link}
              </Link>
            ) : (
              <a key={link} href="#">
                {link}
              </a>
            )
          ))}
        </div>
      </div>

      <div className="container footer-bottom">
        <p>(c) 2026 IgnitePulse. All rights reserved.</p>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
