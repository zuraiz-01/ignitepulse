import { Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'

function HomeCuration({ categories }) {
  return (
    <section className="section home-curation">
      <div className="container home-curation-wrap">
        <div className="home-curation-copy">
          <p className="kicker">Curated for You</p>
          <h2>Collections Designed Around Your Daily Life</h2>
          <p>
            From wardrobe staples to workspace technology and calm interiors, each
            category is assembled for practical everyday upgrades.
          </p>
          <ul>
            <li>
              <FiCheck /> Handpicked quality from trusted brands
            </li>
            <li>
              <FiCheck /> Style-forward products with long-term value
            </li>
            <li>
              <FiCheck /> Fast shipping and easy returns across Pakistan
            </li>
          </ul>
          <Link className="btn btn-primary" to="/shop">
            Start Shopping
          </Link>
        </div>

        <div className="home-curation-grid">
          {categories.map((category) => (
            <article
              key={category.title}
              className="home-curation-card"
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="card-shade" />
              <div className="card-content">
                <h3>{category.title}</h3>
                <p>{category.count} products</p>
                <Link to={category.path}>Shop Now</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeCuration
