import { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { formatCurrency, pageBanners } from '../data/siteData'
import useStore from '../context/useStore'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  postalCode: '',
  paymentMethod: 'card',
}

function CheckoutPage() {
  const { cartItems, subtotal, shipping, tax, total, clearCart } = useStore()
  const [form, setForm] = useState(initialForm)
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [receipt, setReceipt] = useState(null)

  if (!orderPlaced && cartItems.length === 0) {
    return <Navigate to="/cart" replace />
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setReceipt({ items: cartItems, subtotal, shipping, tax, total })
    clearCart()
    setOrderPlaced(true)
  }

  const summary = receipt ?? { items: cartItems, subtotal, shipping, tax, total }

  return (
    <>
      <PageHero
        title="Secure Checkout"
        subtitle="Complete your order with fast and secure payment."
        image={pageBanners.about}
      />

      <section className="section">
        <div className="container cart-layout">
          {orderPlaced ? (
            <div className="success-state">
              <h2>Order placed successfully</h2>
              <p>
                Thank you {form.firstName || 'Customer'}. Your order has been confirmed and
                will be shipped soon.
              </p>
              <Link to="/shop" className="btn btn-primary">
                Continue Shopping
              </Link>
            </div>
          ) : (
            <form className="checkout-form" onSubmit={handleSubmit}>
              <h2>Delivery Details</h2>

              <div className="form-grid">
                <label>
                  First Name
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Last Name
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Email
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
                <label>
                  Phone
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label>
                Street Address
                <input
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </label>

              <div className="form-grid">
                <label>
                  City
                  <input name="city" value={form.city} onChange={handleChange} required />
                </label>
                <label>
                  Postal Code
                  <input
                    name="postalCode"
                    value={form.postalCode}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>

              <label>
                Payment Method
                <select
                  name="paymentMethod"
                  value={form.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="card">Credit/Debit Card</option>
                  <option value="cod">Cash on Delivery</option>
                  <option value="bank">Bank Transfer</option>
                </select>
              </label>

              <button className="btn btn-primary" type="submit">
                Place Order
              </button>
            </form>
          )}

          <aside className="order-summary">
            <h3>Order Summary</h3>
            {summary.items.map((item) => (
              <div key={item.id} className="summary-item">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <strong>{formatCurrency(item.lineTotal)}</strong>
              </div>
            ))}
            <div className="summary-row">
              <span>Subtotal</span>
              <strong>{formatCurrency(summary.subtotal)}</strong>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <strong>
                {summary.shipping === 0 ? 'Free' : formatCurrency(summary.shipping)}
              </strong>
            </div>
            <div className="summary-row">
              <span>Tax (8%)</span>
              <strong>{formatCurrency(summary.tax)}</strong>
            </div>
            <div className="summary-row total-row">
              <span>Total</span>
              <strong>{formatCurrency(summary.total)}</strong>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

export default CheckoutPage

