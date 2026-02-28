import {
  FiArrowRight,
  FiFacebook,
  FiHeadphones,
  FiHeart,
  FiInstagram,
  FiMail,
  FiRefreshCw,
  FiSearch,
  FiShield,
  FiShoppingCart,
  FiStar,
  FiTruck,
  FiTwitter,
  FiUser,
  FiYoutube,
} from 'react-icons/fi'
import './App.css'

const navLinks = ['Shop', 'Fashion', 'Electronics', 'Home', 'Blog', 'About']

const features = [
  {
    icon: <FiTruck />,
    title: 'Free Shipping',
    text: 'On orders over $50',
  },
  {
    icon: <FiShield />,
    title: 'Secure Payment',
    text: '100% secure transactions',
  },
  {
    icon: <FiRefreshCw />,
    title: 'Easy Returns',
    text: '30-day return policy',
  },
  {
    icon: <FiHeadphones />,
    title: '24/7 Support',
    text: 'Dedicated customer service',
  },
]

const categories = [
  {
    title: 'Fashion',
    count: '1243 products',
    image:
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Electronics',
    count: '876 products',
    image:
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Home & Living',
    count: '2156 products',
    image:
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=900&q=80',
  },
]

const products = [
  {
    tag: 'Sale',
    category: 'Electronics',
    name: 'Premium Wireless Headphones',
    rating: '4.8',
    reviews: '1247',
    price: '$299.99',
    oldPrice: '$399.99',
    image:
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80',
  },
  {
    tag: 'New',
    category: 'Fashion',
    name: 'Designer Leather Jacket',
    rating: '4.7',
    reviews: '892',
    price: '$449.99',
    oldPrice: '',
    image:
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80',
  },
  {
    tag: 'Sale',
    category: 'Home & Living',
    name: 'Modern Accent Chair',
    rating: '4.9',
    reviews: '543',
    price: '$599.99',
    oldPrice: '$749.99',
    image:
      'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=900&q=80',
  },
  {
    tag: 'New',
    category: 'Electronics',
    name: 'Smart Watch Pro',
    rating: '4.7',
    reviews: '1089',
    price: '$349.99',
    oldPrice: '',
    image:
      'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=900&q=80',
  },
]

const footerLinks = {
  shop: ['Fashion', 'Electronics', 'Home & Living', 'All Products'],
  company: ['About Us', 'Blog', 'Contact', 'Careers'],
  support: ['Help Center', 'Shipping Info', 'Returns', 'Track Order'],
}

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container nav-wrap">
          <div className="brand-wrap">
            <span className="brand-dot" />
            <strong>IgnitePulse</strong>
          </div>

          <nav className="nav-links" aria-label="Main navigation">
            {navLinks.map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </nav>

          <div className="actions">
            <div className="search">
              <FiSearch />
              <input type="text" placeholder="Search products..." />
            </div>
            <button className="icon-btn" aria-label="Wishlist">
              <FiHeart />
            </button>
            <button className="icon-btn" aria-label="Profile">
              <FiUser />
            </button>
            <button className="icon-btn cart-btn" aria-label="Cart">
              <FiShoppingCart />
              <span>0</span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-overlay" />
          <div className="container hero-content">
            <h1>Elevate Your Lifestyle</h1>
            <p>
              Discover premium fashion, cutting-edge electronics, and stunning
              home goods. Free shipping on orders over $50.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                Shop Now <FiArrowRight />
              </button>
              <button className="btn btn-secondary">Learn More</button>
            </div>
          </div>
        </section>

        <section className="features">
          <div className="container features-grid">
            {features.map((feature) => (
              <article key={feature.title} className="feature-card">
                <span className="feature-icon">{feature.icon}</span>
                <div>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="categories section">
          <div className="container">
            <div className="title-wrap">
              <h2>Shop by Category</h2>
              <p>Explore our curated collections</p>
            </div>
            <div className="category-grid">
              {categories.map((category) => (
                <article
                  key={category.title}
                  className="category-card"
                  style={{ backgroundImage: `url(${category.image})` }}
                >
                  <div className="card-shade" />
                  <div className="card-content">
                    <h3>{category.title}</h3>
                    <p>{category.count}</p>
                    <a href="#">Shop Now</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="products section">
          <div className="container">
            <div className="products-head">
              <div>
                <h2>Featured Products</h2>
                <p>Handpicked favorites just for you</p>
              </div>
              <button className="view-all">View All</button>
            </div>

            <div className="product-grid">
              {products.map((product) => (
                <article key={product.name} className="product-card">
                  <div
                    className="product-image"
                    style={{ backgroundImage: `url(${product.image})` }}
                  >
                    <span
                      className={`badge ${
                        product.tag === 'New' ? 'badge-new' : 'badge-sale'
                      }`}
                    >
                      {product.tag}
                    </span>
                  </div>

                  <div className="product-content">
                    <p className="product-category">{product.category}</p>
                    <h3>{product.name}</h3>
                    <div className="rating">
                      <FiStar />
                      <span>{product.rating}</span>
                      <small>({product.reviews})</small>
                    </div>
                    <div className="prices">
                      <strong>{product.price}</strong>
                      {product.oldPrice ? <span>{product.oldPrice}</span> : null}
                    </div>
                    <button className="add-cart">
                      <FiShoppingCart /> Add to Cart
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="newsletter">
          <div className="container newsletter-wrap">
            <h2>Join Our Community</h2>
            <p>
              Sign up for exclusive deals, early access to new products, and
              style inspiration delivered to your inbox.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <div className="mail-input">
                <FiMail />
                <input type="email" placeholder="Enter your email" />
              </div>
              <button className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-wrap">
              <span className="brand-dot" />
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
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </div>

          <div>
            <h4>Company</h4>
            {footerLinks.company.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
            ))}
          </div>

          <div>
            <h4>Support</h4>
            {footerLinks.support.map((link) => (
              <a key={link} href="#">
                {link}
              </a>
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
    </div>
  )
}

export default App


