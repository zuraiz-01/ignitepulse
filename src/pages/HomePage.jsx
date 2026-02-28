import NewsletterSection from '../components/NewsletterSection'
import FaqSection from '../components/FaqSection'
import ProductShowcaseSection from '../components/common/ProductShowcaseSection'
import HomeBrandStrip from '../components/home/HomeBrandStrip'
import HomeCuration from '../components/home/HomeCuration'
import HomeEditorial from '../components/home/HomeEditorial'
import HomeFeatures from '../components/home/HomeFeatures'
import HomeHero from '../components/home/HomeHero'
import HomePromo from '../components/home/HomePromo'
import HomeStyleboard from '../components/home/HomeStyleboard'
import HomeTestimonials from '../components/home/HomeTestimonials'
import {
  blogPosts,
  categories,
  faqItems,
  features,
  pageBanners,
  products,
} from '../data/siteData'
import {
  heroStats,
  partnerBrands,
  promoCards,
  styleBoards,
  testimonials,
} from '../data/homeData'

function HomePage() {
  const featuredProducts = products.slice(0, 4)
  const spotlightProduct = products[4]
  const latestStories = blogPosts.slice(0, 3)

  return (
    <>
      <HomeHero
        bannerImage={pageBanners.landing}
        spotlight={spotlightProduct}
        heroStats={heroStats}
      />

      <HomeBrandStrip brands={partnerBrands} />
      <HomeFeatures features={features} />
      <HomeCuration categories={categories} />
      <HomePromo cards={promoCards} />

      <ProductShowcaseSection
        title="Featured Products"
        subtitle="Handpicked favorites just for you"
        products={featuredProducts}
        actionLabel="View All"
        actionTo="/shop"
        sectionClassName="products section home-products"
      />

      <HomeStyleboard items={styleBoards} />
      <HomeTestimonials items={testimonials} />
      <HomeEditorial stories={latestStories} />

      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before placing your order."
        items={faqItems.slice(0, 4)}
        sectionClassName="home-faq"
        showAllLink
      />

      <NewsletterSection />
    </>
  )
}

export default HomePage
