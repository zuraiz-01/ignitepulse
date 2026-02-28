import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

function HomeHero({ bannerImage, spotlight, heroStats }) {
  return (
    <section className="hero home-hero" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="hero-overlay" />
      <div className="container hero-home">
        <div className="hero-content">
          <p className="hero-eyebrow">Premium lifestyle marketplace</p>
          <h1>Elevate Your Lifestyle</h1>
          <p>
            Discover premium fashion, cutting-edge electronics, and stunning home
            goods. Free shipping on orders over $50.
          </p>
          <div className="hero-buttons">
            <Link className="btn btn-primary" to="/shop">
              Shop Now <FiArrowRight />
            </Link>
            <Link className="btn btn-secondary" to="/about">
              Learn More
            </Link>
          </div>

          <div className="hero-metrics">
            {heroStats.map((item) => (
              <article key={item.label} className="metric-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>

        <aside className="hero-spotlight">
          <p className="kicker">Today Spotlight</p>
          <img src={spotlight.image} alt={spotlight.name} loading="lazy" />
          <h3>{spotlight.name}</h3>
          <p>{spotlight.category}</p>
          <Link to="/shop" className="spotlight-link">
            Explore collection <FiArrowRight />
          </Link>
        </aside>
      </div>
    </section>
  )
}

export default HomeHero
