import { FiMail } from 'react-icons/fi'

function NewsletterSection() {
  return (
    <section className="newsletter">
      <div className="container newsletter-wrap">
        <h2>Join Our Community</h2>
        <p>
          Sign up for exclusive deals, early access to new products, and style
          inspiration delivered to your inbox.
        </p>
        <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
          <div className="mail-input">
            <FiMail />
            <input type="email" placeholder="Enter your email" />
          </div>
          <button className="btn btn-primary">Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSection
