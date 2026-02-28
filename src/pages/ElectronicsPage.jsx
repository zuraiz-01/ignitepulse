import CategoryLandingPage from '../components/category/CategoryLandingPage'
import { collections, pageBanners, products } from '../data/siteData'

function ElectronicsPage() {
  const electronicsProducts = products.filter((item) => item.section === 'electronics')

  return (
    <CategoryLandingPage
      heroTitle="Smart Tech, Better Living"
      heroSubtitle="High-performance devices and accessories built for modern routines."
      heroImage={pageBanners.electronics}
      collectionTitle="Electronics Collections"
      collectionSubtitle="Upgrade your setup with reliable tech picks."
      collections={collections.electronics}
      productTitle="Top Electronics"
      productSubtitle="Performance-focused devices selected by our experts."
      products={electronicsProducts}
    />
  )
}

export default ElectronicsPage
