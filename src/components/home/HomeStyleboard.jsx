import SectionTitle from '../common/SectionTitle'

function HomeStyleboard({ items }) {
  return (
    <section className="section home-styleboard">
      <div className="container">
        <SectionTitle
          title="Shop by Mood"
          subtitle="Visual collections inspired by real daily routines."
          align="left"
        />
        <div className="styleboard-grid">
          {items.map((item) => (
            <article key={item.title} className="styleboard-card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="styleboard-content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeStyleboard
