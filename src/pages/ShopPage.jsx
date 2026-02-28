import { useMemo, useState } from 'react'
import NewsletterSection from '../components/NewsletterSection'
import PageHero from '../components/PageHero'
import ProductCard from '../components/ProductCard'
import SectionTitle from '../components/common/SectionTitle'
import { pageBanners, products } from '../data/siteData'

const filters = ['All', 'Fashion', 'Electronics', 'Home & Living', 'New Arrivals', 'On Sale']

function ShopPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProducts = useMemo(() => {
    switch (activeFilter) {
      case 'Fashion':
        return products.filter((product) => product.category === 'Fashion')
      case 'Electronics':
        return products.filter((product) => product.category === 'Electronics')
      case 'Home & Living':
        return products.filter((product) => product.category === 'Home & Living')
      case 'New Arrivals':
        return products.filter((product) => product.tag === 'New')
      case 'On Sale':
        return products.filter((product) => product.tag === 'Sale')
      default:
        return products
    }
  }, [activeFilter])

  return (
    <>
      <PageHero
        title="Shop Premium Collections"
        subtitle="Discover curated products across fashion, electronics, and home living."
        image={pageBanners.shop}
      />

      <section className="section">
        <div className="container">
          <SectionTitle
            title="All Products"
            subtitle={`Updated weekly with handpicked quality products. Showing ${filteredProducts.length} item(s).`}
            align="left"
          />

          <div className="chip-row">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`chip ${activeFilter === filter ? 'active' : ''}`}
                type="button"
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  )
}

export default ShopPage
