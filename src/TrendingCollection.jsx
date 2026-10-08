import React from 'react'

function TrendingCollection() {

  const base = import.meta.env.BASE_URL

  const collections = [
    {
      image: `${base}assets/trendgirl2.jpg`,
      title: "Women's Edit",
      text: 'Elegant styles for every occasion'
    },
    {
      image: `${base}assets/trendboy3.jpg`,
      title: "Men's Collection",
      text: 'Classic looks with a modern touch'
    },
    {
      image: `${base}assets/trendbag1.jpg`,
      title: 'Active Style',
      text: 'Comfort meets everyday fashion'
    }
  ]

  return (
    <section className="trending-section">
      <div className="container-fluid px-5">

        <div className="text-center mb-5">
          <h2 className="section-title">Trending Collection</h2>
          <p className="text-muted">
            Discover the styles everyone is loving
          </p>
        </div>

        <div className="row g-4">

          {collections.map((collection, index) => (
            <div
              className="col-12 col-md-4"
              key={index}
            >
              <div className="trending-card">

                <img
                  src={collection.image}
                  alt={collection.title}
                />

                <div className="trending-overlay">
                  <h3>{collection.title}</h3>

                  <p>{collection.text}</p>

                  <button>
                    EXPLORE COLLECTION
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default TrendingCollection