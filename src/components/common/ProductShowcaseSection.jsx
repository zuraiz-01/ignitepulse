import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard'

function ProductShowcaseSection({
  title,
  subtitle,
  products,
  actionLabel,
  actionTo,
  sectionClassName = 'products section',
  containerClassName = 'container',
}) {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <div className="products-head">
          <div>
            <h2>{title}</h2>
            {subtitle ? <p>{subtitle}</p> : null}
          </div>
          {actionLabel && actionTo ? (
            <Link className="view-all" to={actionTo}>
              {actionLabel}
            </Link>
          ) : null}
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcaseSection
