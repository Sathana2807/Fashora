import React from 'react'
import { useNavigate } from 'react-router-dom'

function Products({
  addToCart,
  searchTerm,
  selectedCategory,
  toggleWishlist,
  isInWishlist
}) {
  const navigate = useNavigate()

  const products = [
    {
      id: 1,
      name: 'Floral Dress',
      price: 999,
      image: '/assets/girldress1.jpg',
      category: 'Women'
    },
    {
      id: 5,
      name: 'Women Kurti',
      price: 799,
      image: '/assets/kurti1.jpg',
      category: 'Women'
    },
    {
      id: 6,
      name: 'Women Saree',
      price: 1299,
      image: '/assets/saree1.jpg',
      category: 'Women'
    },
    {
      id: 7,
      name: 'Women Top',
      price: 599,
      image: '/assets/top1.jpg',
      category: 'Women'
    },

    {
      id: 2,
      name: 'Men Shirt',
      price: 699,
      image: '/assets/menshirt1.png',
      category: 'Men'
    },
    {
      id: 8,
      name: 'Men T-Shirt',
      price: 499,
      image: '/assets/tshirt1.jpg',
      category: 'Men'
    },
    {
      id: 9,
      name: 'Men Jeans',
      price: 1199,
      image: '/assets/pant1.jpg',
      category: 'Men'
    },
    {
      id: 10,
      name: 'Men Jacket',
      price: 1499,
      image: '/assets/jacket1.jpg',
      category: 'Men'
    },

    {
      id: 3,
      name: 'Casual Shoes',
      price: 1299,
      image: '/assets/shose.webp',
      category: 'Shoes'
    },
    {
      id: 11,
      name: 'Running Shoes',
      price: 1599,
      image: '/assets/running1.jpg',
      category: 'Shoes'
    },
    {
      id: 12,
      name: 'Sports Shoes',
      price: 1399,
      image: '/assets/sports1.jpg',
      category: 'Shoes'
    },
    {
      id: 13,
      name: 'Sneakers',
      price: 1799,
      image: '/assets/sneaker1.jpg',
      category: 'Shoes'
    },

    {
      id: 4,
      name: 'Hand Bag',
      price: 899,
      image: '/assets/handbag2.webp',
      category: 'Accessories'
    },
    {
      id: 14,
      name: 'Ladies Handbag',
      price: 1099,
      image: '/assets/handbags1.jpg',
      category: 'Accessories'
    },
    {
      id: 15,
      name: 'Sunglasses',
      price: 599,
      image: '/assets/sunglasses1.jpg',
      category: 'Accessories'
    },
    {
      id: 16,
      name: 'Watch',
      price: 999,
      image: '/assets/watch1.png',
      category: 'Accessories'
    }
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesCategory =
      selectedCategory === '' ||
      product.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <section className="products-section">
      <h2>Our Products</h2>

      <div className="products-row">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              className="product-card"
              key={product.id}
              onClick={() => navigate(`/product/${product.id}`)}
            >

              <div className="product-image-wrapper">

                <img
                  src={product.image}
                  alt={product.name}
                />

                <button
                  className={`wishlist-btn ${
                    isInWishlist(product.id) ? 'active' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation()
                    toggleWishlist(product)
                  }}
                >
                  <i
                    className={
                      isInWishlist(product.id)
                        ? 'bi bi-heart-fill'
                        : 'bi bi-heart'
                    }
                  ></i>
                </button>

              </div>

              <div className="product-body">
                <h5>{product.name}</h5>

                <p>₹{product.price}</p>

                <button
                  className="btn btn-dark w-100"
                  onClick={(e) => {
                    e.stopPropagation()
                    addToCart(product)
                  }}
                >
                  <i className="bi bi-cart3 me-2"></i>
                  Add to Cart
                </button>
              </div>

            </div>
          ))
        ) : (
          <div className="no-products">
            <h4>No products found</h4>
            <p>Try searching for another product.</p>
          </div>
        )}

      </div>
    </section>
  )
}

export default Products