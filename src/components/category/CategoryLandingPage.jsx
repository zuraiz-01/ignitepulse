import PageHero from '../PageHero'
import CollectionSection from '../common/CollectionSection'
import ProductShowcaseSection from '../common/ProductShowcaseSection'

function CategoryLandingPage({
  heroTitle,
  heroSubtitle,
  heroImage,
  collectionTitle,
  collectionSubtitle,
  collections,
  productTitle,
  productSubtitle,
  products,
}) {
  return (
    <>
      <PageHero title={heroTitle} subtitle={heroSubtitle} image={heroImage} />

      <CollectionSection
        title={collectionTitle}
        subtitle={collectionSubtitle}
        items={collections}
      />

      <ProductShowcaseSection
        title={productTitle}
        subtitle={productSubtitle}
        products={products}
        sectionClassName="products section compact-top"
      />
    </>
  )
}

export default CategoryLandingPage
