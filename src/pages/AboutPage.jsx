import PageHero from '../components/PageHero'
import SectionTitle from '../components/common/SectionTitle'
import { aboutStats, pageBanners, teamMembers } from '../data/siteData'

const valueItems = [
  {
    title: 'Quality First',
    text: 'We source products designed to last and perform in real life.',
  },
  {
    title: 'Design Clarity',
    text: 'Our collections prioritize aesthetics without sacrificing function.',
  },
  {
    title: 'Customer Trust',
    text: 'Transparent pricing, secure checkout, and responsive support teams.',
  },
]

function AboutPage() {
  return (
    <>
      <PageHero
        title="Building Better Everyday Shopping"
        subtitle="IgnitePulse connects premium products with a customer experience built on trust."
        image={pageBanners.about}
      />

      <section className="section">
        <div className="container about-story">
          <div>
            <p className="kicker">Our Story</p>
            <h2>From Curated Picks to a Full Lifestyle Marketplace</h2>
            <p>
              We started with a simple mission: make it easier to discover high-quality
              products without endless scrolling. Today, IgnitePulse serves a growing
              community looking for thoughtful fashion, dependable electronics, and
              comfortable home essentials.
            </p>
            <p>
              Every collection is reviewed by our internal team to ensure quality,
              style relevance, and long-term value.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
            alt="IgnitePulse showroom"
            loading="lazy"
          />
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          {aboutStats.map((stat) => (
            <article key={stat.label}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle title="What We Value" align="left" />
          <div className="value-grid">
            {valueItems.map((value) => (
              <article key={value.title} className="value-card">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section compact-top">
        <div className="container">
          <SectionTitle title="Meet the Team" align="left" />
          <div className="team-grid">
            {teamMembers.map((member) => (
              <article key={member.name} className="team-card">
                <img src={member.image} alt={member.name} loading="lazy" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
