import CategoryLandingPage from '../components/category/CategoryLandingPage'
import { collections, pageBanners, products } from '../data/siteData'

function FashionPage() {
  const fashionProducts = products.filter((item) => item.section === 'fashion')

  return (
    <CategoryLandingPage
      heroTitle="Fashion That Moves With You"
      heroSubtitle="Elevated essentials, statement pieces, and timeless fits."
      heroImage={pageBanners.fashion}
      collectionTitle="Trending Collections"
      collectionSubtitle="Outfits designed for office, travel, and weekend looks."
      collections={collections.fashion}
      productTitle="Fashion Picks"
      productSubtitle="Best selling fashion products this month."
      products={fashionProducts}
    />
  )
}

export default FashionPage
