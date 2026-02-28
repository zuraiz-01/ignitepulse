import { Link } from 'react-router-dom'

function FaqSection({
  title,
  subtitle,
  items,
  sectionClassName = 'home-faq',
  align = 'left',
  showAllLink = false,
}) {
  const titleClass = align === 'left' ? 'title-wrap align-left' : 'title-wrap'

  return (
    <section className={`section ${sectionClassName}`}>
      <div className="container">
        <div className={titleClass}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>

        <div className="faq-list">
          {items.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>

        {showAllLink ? (
          <div className="faq-extra">
            <Link to="/faqs" className="faq-link-btn">
              View All FAQs
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default FaqSection
