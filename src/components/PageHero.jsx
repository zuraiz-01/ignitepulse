function PageHero({ title, subtitle, image }) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay" />
      <div className="container page-hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

export default PageHero
