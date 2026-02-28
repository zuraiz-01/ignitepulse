function HomePromo({ cards }) {
  return (
    <section className="section home-promo">
      <div className="container">
        <div className="home-promo-grid">
          {cards.map((card) => (
            <article
              key={card.title}
              className="home-promo-card"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="home-promo-shade" />
              <div className="home-promo-content">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomePromo
