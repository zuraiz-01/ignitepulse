import { FiHeadphones, FiRefreshCw, FiShield, FiTruck } from 'react-icons/fi'

const featureIcons = [FiTruck, FiShield, FiRefreshCw, FiHeadphones]

function HomeFeatures({ features }) {
  return (
    <section className="features home-features">
      <div className="container features-grid">
        {features.map((feature, index) => {
          const Icon = featureIcons[index]
          return (
            <article key={feature.title} className="feature-card">
              <span className="feature-icon">
                <Icon />
              </span>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default HomeFeatures
