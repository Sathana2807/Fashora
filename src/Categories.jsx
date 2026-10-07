import React from 'react'

function Categories({ setSelectedCategory }) {

  const exploreCategory = (category) => {
    setSelectedCategory(category)

    setTimeout(() => {
      document.getElementById('products')?.scrollIntoView({
        behavior: 'smooth'
      })
    }, 100)
  }

  return (
    <section className="categories-section">
      <h2>Shop by Category</h2>

      <div className="categories-row">

        <div className="category-card">
          <i className="bi bi-person-standing-dress"></i>
          <h4>Women</h4>

          <button
            className="btn btn-dark"
            onClick={() => exploreCategory('Women')}
          >
            Explore
          </button>
        </div>

        <div className="category-card">
          <i className="bi bi-person-standing"></i>
          <h4>Men</h4>

          <button
            className="btn btn-dark"
            onClick={() => exploreCategory('Men')}
          >
            Explore
          </button>
        </div>

        <div className="category-card">
          <i className="bi bi-bag"></i>
          <h4>Shoes</h4>

          <button
            className="btn btn-dark"
            onClick={() => exploreCategory('Shoes')}
          >
            Explore
          </button>
        </div>

        <div className="category-card">
          <i className="bi bi-handbag"></i>
          <h4>Accessories</h4>

          <button
            className="btn btn-dark"
            onClick={() => exploreCategory('Accessories')}
          >
            Explore
          </button>
        </div>

      </div>
    </section>
  )
}

export default Categories