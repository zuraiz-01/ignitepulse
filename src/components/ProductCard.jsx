import { Link } from 'react-router-dom'
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi'
import { formatCurrency } from '../data/siteData'
import useStore from '../context/useStore'

function ProductCard({ product }) {
  const { addToCart, cart, isWishlisted, toggleWishlist } = useStore()
  const inWishlist = isWishlisted(product.id)
  const quantityInCart = cart[product.id] ?? 0

  return (
    <article className="product-card">
      <Link
        to={`/product/${product.id}`}
        className="product-image"
        style={{ backgroundImage: `url(${product.image})` }}
        aria-label={`View ${product.name}`}
      >
        <span
          className={`badge ${
            product.tag === 'New'
              ? 'badge-new'
              : product.tag === 'Sale'
                ? 'badge-sale'
                : 'badge-best'
          }`}
        >
          {product.tag}
        </span>
      </Link>

      <button
        className={`wish-btn ${inWishlist ? 'active' : ''}`}
        type="button"
        aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
        onClick={() => toggleWishlist(product.id)}
      >
        <FiHeart />
      </button>

      <div className="product-content">
        <p className="product-category">{product.category}</p>
        <h3>
          <Link className="product-title-link" to={`/product/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <div className="rating">
          <FiStar />
          <span>{product.rating}</span>
          <small>({product.reviews})</small>
        </div>
        <div className="prices">
          <strong>{formatCurrency(product.price)}</strong>
          {product.oldPrice ? <span>{formatCurrency(product.oldPrice)}</span> : null}
        </div>
        <div className="product-actions-row">
          <button className="add-cart" type="button" onClick={() => addToCart(product.id)}>
            <FiShoppingCart /> {quantityInCart > 0 ? 'Add More' : 'Add to Cart'}
          </button>
          <Link className="quick-view" to={`/product/${product.id}`}>
            Details
          </Link>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
