import { Link } from 'react-router-dom'
import FaqSection from '../components/FaqSection'
import PageHero from '../components/PageHero'
import { faqItems, pageBanners } from '../data/siteData'

const helpCards = [
  {
    title: 'Order Support',
    text: 'Need help with tracking, delays, or delivery slots? Our support team is ready.',
    ctaLabel: 'Track Order',
    ctaPath: '/cart',
  },
  {
    title: 'Returns & Refunds',
    text: 'Understand return policy timelines and refund process before placing an order.',
    ctaLabel: 'View Policy',
    ctaPath: '/about',
  },
  {
    title: 'Shopping Help',
    text: 'Unsure which product fits your needs? Explore categories and curated recommendations.',
    ctaLabel: 'Browse Shop',
    ctaPath: '/shop',
  },
]

function FAQsPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers about shipping, returns, product quality, and payments."
        image={pageBanners.about}
      />

      <FaqSection
        title="FAQs"
        subtitle="Everything customers ask before and after placing an order."
        items={faqItems}
        sectionClassName="faqs-page-section"
      />

      <section className="section faqs-help">
        <div className="container">
          <div className="faqs-help-grid">
            {helpCards.map((card) => (
              <article key={card.title} className="faqs-help-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <Link to={card.ctaPath}>{card.ctaLabel}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQsPage
