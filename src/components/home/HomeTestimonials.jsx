import SectionTitle from '../common/SectionTitle'

function HomeTestimonials({ items }) {
  return (
    <section className="section home-testimonials">
      <div className="container">
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Feedback from shoppers who use IgnitePulse every week."
          align="center"
        />
        <div className="testimonials-grid">
          {items.map((item) => (
            <article key={item.name} className="testimonial-card">
              <p>{`"${item.text}"`}</p>
              <h3>{item.name}</h3>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeTestimonials
