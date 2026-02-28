import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

function HomeEditorial({ stories }) {
  return (
    <section className="section home-editorial">
      <div className="container">
        <div className="products-head">
          <div>
            <h2>From The Journal</h2>
            <p>Guides, ideas, and practical shopping insights.</p>
          </div>
          <Link className="view-all" to="/blog">
            Visit Blog
          </Link>
        </div>

        <div className="home-editorial-grid">
          {stories.map((story) => (
            <article key={story.id} className="editorial-card">
              <img src={story.image} alt={story.title} loading="lazy" />
              <div className="editorial-content">
                <p>{story.date}</p>
                <h3>{story.title}</h3>
                <Link to="/blog">
                  Read Article <FiArrowRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeEditorial
