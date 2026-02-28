import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './components/SiteLayout'
import AboutPage from './pages/AboutPage'
import BlogPage from './pages/BlogPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import ElectronicsPage from './pages/ElectronicsPage'
import FashionPage from './pages/FashionPage'
import FAQsPage from './pages/FAQsPage'
import HomeLivingPage from './pages/HomeLivingPage'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import ShopPage from './pages/ShopPage'
import WishlistPage from './pages/WishlistPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/fashion" element={<FashionPage />} />
        <Route path="/electronics" element={<ElectronicsPage />} />
        <Route path="/home" element={<HomeLivingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faqs" element={<FAQsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
