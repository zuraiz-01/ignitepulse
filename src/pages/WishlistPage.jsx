import { Link } from 'react-router-dom'
import { FiHeart, FiShoppingCart, FiTrash2 } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { formatCurrency, pageBanners } from '../data/siteData'
import useStore from '../context/useStore'

function WishlistPage() {
  const { wishlistItems, moveWishlistToCart, removeFromWishlist, clearWishlist } =
    useStore()

  return (
    <>
      <PageHero
        title="Your Wishlist"
        subtitle="Save favorite products and move them to cart anytime."
        image={pageBanners.fashion}
      />

      <section className="section">
        <div className="container">
          <div className="list-head">
            <div>
              <h2>Saved Items</h2>
              <p>{wishlistItems.length} item(s) in wishlist</p>
            </div>
            {wishlistItems.length > 0 ? (
              <button className="ghost-btn" type="button" onClick={clearWishlist}>
                Clear Wishlist
              </button>
            ) : null}
          </div>

          {wishlistItems.length === 0 ? (
            <div className="empty-state">
              <FiHeart />
              <h3>Your wishlist is empty</h3>
              <p>Add products from any category to keep track of them.</p>
              <Link to="/shop" className="btn btn-primary">
                Browse Products
              </Link>
            </div>
          ) : (
            <div className="list-grid">
              {wishlistItems.map((item) => (
                <article key={item.id} className="list-card">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <div className="list-card-body">
                    <p className="product-category">{item.category}</p>
                    <h3>{item.name}</h3>
                    <p className="list-price">{formatCurrency(item.price)}</p>
                    <div className="list-card-actions">
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={() => moveWishlistToCart(item.id)}
                      >
                        <FiShoppingCart /> Move to Cart
                      </button>
                      <button
                        className="ghost-btn"
                        type="button"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <FiTrash2 /> Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default WishlistPage

