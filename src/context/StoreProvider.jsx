import { useEffect, useMemo, useState } from 'react'
import { products } from '../data/siteData'
import StoreContext from './storeContext'

const CART_KEY = 'ignitepulse_cart'
const WISHLIST_KEY = 'ignitepulse_wishlist'

const readStorage = (key, fallback) => {
  if (typeof window === 'undefined') return fallback

  try {
    const raw = localStorage.getItem(key)
    if (!raw) return fallback
    const parsed = JSON.parse(raw)
    return parsed ?? fallback
  } catch {
    return fallback
  }
}

const clampQuantity = (value) => {
  const next = Number(value)
  if (!Number.isFinite(next) || next < 1) return 1
  return Math.min(99, Math.floor(next))
}

function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => readStorage(CART_KEY, {}))
  const [wishlist, setWishlist] = useState(() => readStorage(WISHLIST_KEY, []))

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    if (typeof window === 'undefined') return
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist))
  }, [wishlist])

  const productById = useMemo(
    () => Object.fromEntries(products.map((product) => [product.id, product])),
    [],
  )

  const wishlistIds = useMemo(() => new Set(wishlist), [wishlist])

  const wishlistItems = useMemo(
    () => wishlist.map((id) => productById[id]).filter(Boolean),
    [wishlist, productById],
  )

  const cartItems = useMemo(
    () =>
      Object.entries(cart)
        .map(([id, quantity]) => {
          const product = productById[id]
          if (!product) return null
          return {
            ...product,
            quantity,
            lineTotal: product.price * quantity,
          }
        })
        .filter(Boolean),
    [cart, productById],
  )

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.lineTotal, 0),
    [cartItems],
  )

  const shipping = subtotal > 0 && subtotal < 50 ? 9.99 : 0
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const addToCart = (id, quantity = 1) => {
    if (!productById[id]) return
    setCart((prev) => {
      const current = prev[id] ?? 0
      const next = clampQuantity(current + quantity)
      return { ...prev, [id]: next }
    })
  }

  const updateCartQuantity = (id, quantity) => {
    if (!productById[id]) return
    const safeQuantity = Number(quantity)
    if (!Number.isFinite(safeQuantity) || safeQuantity <= 0) {
      setCart((prev) => {
        const next = { ...prev }
        delete next[id]
        return next
      })
      return
    }

    setCart((prev) => ({
      ...prev,
      [id]: clampQuantity(safeQuantity),
    }))
  }

  const removeFromCart = (id) => {
    setCart((prev) => {
      const next = { ...prev }
      delete next[id]
      return next
    })
  }

  const clearCart = () => setCart({})

  const isWishlisted = (id) => wishlistIds.has(id)

  const toggleWishlist = (id) => {
    if (!productById[id]) return
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [id, ...prev],
    )
  }

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item !== id))
  }

  const moveWishlistToCart = (id) => {
    addToCart(id, 1)
    removeFromWishlist(id)
  }

  const clearWishlist = () => setWishlist([])

  const value = {
    cart,
    cartItems,
    cartCount,
    subtotal,
    shipping,
    tax,
    total,
    wishlist,
    wishlistItems,
    wishlistCount: wishlist.length,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    isWishlisted,
    toggleWishlist,
    removeFromWishlist,
    moveWishlistToCart,
    clearWishlist,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export default StoreProvider
