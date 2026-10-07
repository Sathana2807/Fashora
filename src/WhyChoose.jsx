import React from 'react'

function WhyChoose() {
  const features = [
    {
      icon: 'bi-truck',
      title: 'Fast Delivery',
      text: 'Quick and reliable delivery to your doorstep'
    },
    {
      icon: 'bi-shield-check',
      title: 'Secure Payment',
      text: 'Safe and secure payment for every purchase'
    },
    {
      icon: 'bi-stars',
      title: 'Quality Products',
      text: 'Carefully selected products for your style'
    },
    {
      icon: 'bi-headset',
      title: 'Customer Support',
      text: 'We are always here to help you'
    }
  ]

  return (
    <section className="why-choose-section">
      <div className="container-fluid px-5">

        <div className="text-center mb-5">
          <h2 className="section-title">Why Choose Fashora?</h2>
          <p className="text-muted">
            Fashion made simple, stylish and reliable
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {features.map((feature, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div className="why-card text-center">

                <div className={`why-icon icon-${index}`}>
                  <i className={`bi ${feature.icon}`}></i>
                </div>

                <h5>{feature.title}</h5>

                <p>{feature.text}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChoose