import PageHero from '../components/PageHero'
import SectionTitle from '../components/common/SectionTitle'
import { blogPosts, pageBanners } from '../data/siteData'

function BlogPage() {
  return (
    <>
      <PageHero
        title="IgnitePulse Journal"
        subtitle="Style guides, buying tips, and curated inspiration from our team."
        image={pageBanners.blog}
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            title="Latest Articles"
            subtitle="Fresh reads for fashion, technology, and home styling."
            align="left"
          />

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <img src={post.image} alt={post.title} loading="lazy" />
                <div className="blog-content">
                  <div className="blog-meta">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3>{post.title}</h3>
                  <p>{post.excerpt}</p>
                  <button className="text-btn" type="button">
                    Read more
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
