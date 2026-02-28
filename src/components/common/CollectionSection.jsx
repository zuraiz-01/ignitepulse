import SectionTitle from './SectionTitle'

function CollectionSection({ title, subtitle, items }) {
  return (
    <section className="section">
      <div className="container">
        <SectionTitle title={title} subtitle={subtitle} align="left" />

        <div className="collection-grid">
          {items.map((item) => (
            <article key={item.title} className="collection-card">
              <img src={item.image} alt={item.title} loading="lazy" />
              <div className="collection-content">
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

export default CollectionSection
