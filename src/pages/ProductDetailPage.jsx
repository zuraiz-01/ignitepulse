import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FiCheck, FiHeart, FiMinus, FiPlus, FiShoppingCart, FiStar } from 'react-icons/fi'
import ProductShowcaseSection from '../components/common/ProductShowcaseSection'
import useStore from '../context/useStore'
import { formatCurrency, products } from '../data/siteData'

const featureTextBySection = {
  fashion: [
    'Premium stitching and fabric quality',
    'Modern silhouette with everyday comfort',
    'Easy return and exchange support',
  ],
  electronics: [
    'Original product with quality assurance',
    'Performance-tested by our internal team',
    '1-year official brand warranty',
  ],
  home: [
    'Designed for comfort and long-term use',
    'Durable material and finish quality',
    'Curated for modern interiors',
  ],
}

function ProductDetailPage() {
  const { productId } = useParams()
  const { addToCart, cart, isWishlisted, toggleWishlist } = useStore()
  const [quantity, setQuantity] = useState(1)

  const product = useMemo(
    () => products.find((item) => item.id === productId),
    [productId],
  )

  if (!product) {
    return (
      <section className="section">
        <div className="container">
          <div className="empty-state">
            <h3>Product not found</h3>
            <p>The product you are looking for does not exist.</p>
            <Link to="/shop" className="btn btn-primary">
              Back to Shop
            </Link>
          </div>
        </div>
      </section>
    )
  }

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4)

  const features = featureTextBySection[product.section] ?? featureTextBySection.home
  const inWishlist = isWishlisted(product.id)
  const inCartQty = cart[product.id] ?? 0

  const decreaseQty = () => setQuantity((prev) => Math.max(1, prev - 1))
  const increaseQty = () => setQuantity((prev) => Math.min(10, prev + 1))

  return (
    <>
      <section className="section product-detail-section">
        <div className="container">
          <div className="product-breadcrumbs">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/shop">Shop</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          <div className="product-detail-grid">
            <div className="product-detail-media">
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>

            <article className="product-detail-card">
              <p className="product-category">{product.category}</p>
              <h1>{product.name}</h1>

              <div className="rating detail-rating">
                <FiStar />
                <span>{product.rating}</span>
                <small>({product.reviews} reviews)</small>
              </div>

              <div className="prices detail-prices">
                <strong>{formatCurrency(product.price)}</strong>
                {product.oldPrice ? <span>{formatCurrency(product.oldPrice)}</span> : null}
              </div>

              <p className="detail-description">
                Carefully selected by IgnitePulse for quality and style. This product is
                ideal for customers looking for premium performance with long-term value.
              </p>

              <div className="detail-actions-row">
                <div className="qty-control">
                  <button type="button" onClick={decreaseQty} aria-label="Decrease quantity">
                    <FiMinus />
                  </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={increaseQty} aria-label="Increase quantity">
                    <FiPlus />
                  </button>
                </div>

                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => addToCart(product.id, quantity)}
                >
                  <FiShoppingCart /> Add {quantity} to Cart
                </button>

                <button
                  className={`ghost-btn detail-wish ${inWishlist ? 'active' : ''}`}
                  type="button"
                  onClick={() => toggleWishlist(product.id)}
                >
                  <FiHeart /> {inWishlist ? 'Wishlisted' : 'Wishlist'}
                </button>
              </div>

              {inCartQty > 0 ? (
                <p className="detail-cart-note">Already in cart: {inCartQty} item(s)</p>
              ) : null}

              <ul className="detail-feature-list">
                {features.map((item) => (
                  <li key={item}>
                    <FiCheck /> {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <ProductShowcaseSection
          title="Related Products"
          subtitle="Products from the same category you may like."
          products={relatedProducts}
          actionLabel="View All"
          actionTo="/shop"
          sectionClassName="products section compact-top"
        />
      ) : null}
    </>
  )
}

export default ProductDetailPage
