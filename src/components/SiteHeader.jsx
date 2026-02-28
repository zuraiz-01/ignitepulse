import { NavLink, Link } from 'react-router-dom'
import { FiHeart, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'
import brandLogo from '../../logo.png'
import { navLinks } from '../data/siteData'
import useStore from '../context/useStore'

function SiteHeader() {
  const { cartCount, wishlistCount } = useStore()

  return (
    <header className="topbar">
      <div className="container nav-wrap">
        <Link to="/" className="brand-wrap" aria-label="IgnitePulse home">
          <img className="brand-logo" src={brandLogo} alt="IgnitePulse logo" />
          <strong>IgnitePulse</strong>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="actions">
          <div className="search" role="search">
            <FiSearch />
            <input type="text" placeholder="Search products..." />
          </div>

          <Link className="icon-btn count-btn" aria-label="Wishlist" to="/wishlist">
            <FiHeart />
            {wishlistCount > 0 ? <span>{wishlistCount}</span> : null}
          </Link>

          <button className="icon-btn" aria-label="Profile" type="button">
            <FiUser />
          </button>

          <Link className="icon-btn cart-btn" aria-label="Cart" to="/cart">
            <FiShoppingCart />
            {cartCount > 0 ? <span>{cartCount}</span> : null}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader

