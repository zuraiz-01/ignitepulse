function HomeBrandStrip({ brands }) {
  return (
    <section className="home-brand-strip">
      <div className="container">
        <p>Trusted by shoppers and featured in</p>
        <div className="brand-strip-grid">
          {brands.map((brand) => (
            <span key={brand}>{brand}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeBrandStrip
