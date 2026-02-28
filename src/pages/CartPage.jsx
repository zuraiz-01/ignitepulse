import { Link } from 'react-router-dom'
import { FiMinus, FiPlus, FiShoppingBag, FiTrash2 } from 'react-icons/fi'
import PageHero from '../components/PageHero'
import { formatCurrency, pageBanners } from '../data/siteData'
import useStore from '../context/useStore'

function CartPage() {
  const {
    cartItems,
    subtotal,
    shipping,
    tax,
    total,
    updateCartQuantity,
    removeFromCart,
    clearCart,
  } = useStore()

  return (
    <>
      <PageHero
        title="Shopping Cart"
        subtitle="Review your items and proceed to checkout securely."
        image={pageBanners.shop}
      />

      <section className="section">
        <div className="container cart-layout">
          <div>
            <div className="list-head">
              <div>
                <h2>Cart Items</h2>
                <p>{cartItems.length} product(s) selected</p>
              </div>
              {cartItems.length > 0 ? (
                <button className="ghost-btn" type="button" onClick={clearCart}>
                  Clear Cart
                </button>
              ) : null}
            </div>

            {cartItems.length === 0 ? (
              <div className="empty-state">
                <FiShoppingBag />
                <h3>Your cart is empty</h3>
                <p>Add something from the shop to continue checkout.</p>
                <Link to="/shop" className="btn btn-primary">
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="cart-list">
                {cartItems.map((item) => (
                  <article key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} loading="lazy" />
                    <div className="cart-item-main">
                      <p className="product-category">{item.category}</p>
                      <h3>{item.name}</h3>
                      <p className="cart-line-total">{formatCurrency(item.lineTotal)}</p>
                    </div>

                    <div className="qty-control">
                      <button
                        type="button"
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <FiMinus />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <FiPlus />
                      </button>
                    </div>

                    <button
                      className="ghost-btn"
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <FiTrash2 /> Remove
                    </button>
                  </article>
                ))}
              </div>
            )}
          </div>

          <aside className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>{formatCurrency(subtotal)}</strong>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <strong>{shipping === 0 ? 'Free' : formatCurrency(shipping)}</strong>
            </div>
            <div className="summary-row">
              <span>Tax (8%)</span>
              <strong>{formatCurrency(tax)}</strong>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <strong>{formatCurrency(total)}</strong>
            </div>

            <Link
              to={cartItems.length === 0 ? '/shop' : '/checkout'}
              className="btn btn-primary full-width"
            >
              {cartItems.length === 0 ? 'Continue Shopping' : 'Proceed to Checkout'}
            </Link>
          </aside>
        </div>
      </section>
    </>
  )
}

export default CartPage

