import CategoryLandingPage from '../components/category/CategoryLandingPage'
import { collections, pageBanners, products } from '../data/siteData'

function HomeLivingPage() {
  const homeProducts = products.filter((item) => item.section === 'home')

  return (
    <CategoryLandingPage
      heroTitle="Designed Spaces, Everyday Comfort"
      heroSubtitle="Discover furniture and decor that bring balance and warmth to your home."
      heroImage={pageBanners.home}
      collectionTitle="Home Inspirations"
      collectionSubtitle="Curated room concepts to help you style with confidence."
      collections={collections.home}
      productTitle="Home & Living Picks"
      productSubtitle="Comfort-first pieces with premium material quality."
      products={homeProducts}
    />
  )
}

export default HomeLivingPage
