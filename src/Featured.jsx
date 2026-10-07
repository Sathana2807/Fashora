import React from 'react'

function Featured() {
  const brands = [
    { icon: 'bi-gem', name: 'LUXE' },
    { icon: 'bi-stars', name: 'STYLE' },
    { icon: 'bi-bag-heart', name: 'FASHION' },
    { icon: 'bi-flower1', name: 'BLOOM' },
    { icon: 'bi-heart', name: 'ELITE' }
  ]

  return (
    <section className="featured-section">
      <div className="featured-title">
        AS FEATURED ON
      </div>

      <div className="featured-slider">
        <div className="featured-track">
          {[...brands, ...brands].map((brand, index) => (
            <div className="brand-logo" key={index}>
              <i className={`bi ${brand.icon}`}></i>
              <span>{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured