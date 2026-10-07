import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function ProductDetails({
  addToCart,
  cart,
  cartCount,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  cartTotal,
  searchTerm,
  setSearchTerm,
  wishlist,
  wishlistCount,
  toggleWishlist,
  isInWishlist
}) {
  const { id } = useParams()
  const navigate = useNavigate()

  const products = [
    {
      id: 1,
      name: 'Floral Dress',
      price: 999,
      oldPrice: 1499,
      discount: '33% OFF',
      image: '/assets/girldress1.jpg',
      category: 'Women',
      rating: 4.5,
      reviews: 128,
      description: 'A stylish floral dress designed for a comfortable and elegant look. Perfect for casual outings and special occasions.',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 5,
      name: 'Women Kurti',
      price: 799,
      oldPrice: 1199,
      discount: '33% OFF',
      image: '/assets/kurti1.jpg',
      category: 'Women',
      rating: 4.4,
      reviews: 86,
      description: 'A comfortable and stylish kurti with a modern design. Perfect for everyday wear and casual occasions.',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 6,
      name: 'Women Saree',
      price: 1299,
      oldPrice: 1799,
      discount: '28% OFF',
      image: '/assets/saree1.jpg',
      category: 'Women',
      rating: 4.6,
      reviews: 104,
      description: 'An elegant saree designed with a beautiful look and comfortable fabric. Suitable for special occasions.',
      sizes: ['Free Size']
    },
    {
      id: 7,
      name: 'Women Top',
      price: 599,
      oldPrice: 899,
      discount: '33% OFF',
      image: '/assets/top1.jpg',
      category: 'Women',
      rating: 4.3,
      reviews: 72,
      description: 'A trendy women top designed for a comfortable and stylish everyday look.',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: 'Men Shirt',
      price: 699,
      oldPrice: 999,
      discount: '30% OFF',
      image: '/assets/menshirt1.png',
      category: 'Men',
      rating: 4.4,
      reviews: 96,
      description: 'A comfortable and stylish men shirt with a modern design. Perfect for casual and everyday wear.',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 8,
      name: 'Men T-Shirt',
      price: 499,
      oldPrice: 799,
      discount: '37% OFF',
      image: '/assets/tshirt1.jpg',
      category: 'Men',
      rating: 4.3,
      reviews: 82,
      description: 'A comfortable men t-shirt with a simple and modern style. Perfect for everyday use.',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 9,
      name: 'Men Jeans',
      price: 1199,
      oldPrice: 1699,
      discount: '29% OFF',
      image: '/assets/pant1.jpg',
      category: 'Men',
      rating: 4.5,
      reviews: 118,
      description: 'Stylish and comfortable jeans designed for everyday wear with a modern fit.',
      sizes: ['30', '32', '34', '36']
    },
    {
      id: 10,
      name: 'Men Jacket',
      price: 1499,
      oldPrice: 2199,
      discount: '32% OFF',
      image: '/assets/jacket1.jpg',
      category: 'Men',
      rating: 4.6,
      reviews: 91,
      description: 'A stylish jacket designed to give a modern and comfortable look.',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 3,
      name: 'Casual Shoes',
      price: 1299,
      oldPrice: 1799,
      discount: '28% OFF',
      image: '/assets/shose.webp',
      category: 'Shoes',
      rating: 4.6,
      reviews: 154,
      description: 'Comfortable casual shoes designed for everyday use. Lightweight and easy to pair with different outfits.',
      sizes: ['6', '7', '8', '9', '10']
    },
    {
      id: 11,
      name: 'Running Shoes',
      price: 1599,
      oldPrice: 2199,
      discount: '27% OFF',
      image: '/assets/running1.jpg',
      category: 'Shoes',
      rating: 4.5,
      reviews: 132,
      description: 'Comfortable running shoes designed for daily activities, walking and workouts.',
      sizes: ['6', '7', '8', '9', '10']
    },
    {
      id: 12,
      name: 'Sports Shoes',
      price: 1399,
      oldPrice: 1999,
      discount: '30% OFF',
      image: '/assets/sports1.jpg',
      category: 'Shoes',
      rating: 4.4,
      reviews: 109,
      description: 'Lightweight sports shoes designed for comfort and everyday active use.',
      sizes: ['6', '7', '8', '9', '10']
    },
    {
      id: 13,
      name: 'Sneakers',
      price: 1799,
      oldPrice: 2499,
      discount: '28% OFF',
      image: '/assets/sneaker1.jpg',
      category: 'Shoes',
      rating: 4.7,
      reviews: 145,
      description: 'Modern sneakers with a stylish design and comfortable fit for everyday outfits.',
      sizes: ['6', '7', '8', '9', '10']
    },
    {
      id: 4,
      name: 'Hand Bag',
      price: 899,
      oldPrice: 1299,
      discount: '31% OFF',
      image: '/assets/handbag2.webp',
      category: 'Accessories',
      rating: 4.7,
      reviews: 112,
      description: 'A stylish and spacious handbag suitable for everyday use. Designed to match both casual and elegant outfits.'
    },
    {
      id: 14,
      name: 'Ladies Handbag',
      price: 1099,
      oldPrice: 1599,
      discount: '31% OFF',
      image: '/assets/handbags1.jpg',
      category: 'Accessories',
      rating: 4.5,
      reviews: 94,
      description: 'A stylish ladies handbag with enough space for everyday essentials.'
    },
    {
      id: 15,
      name: 'Sunglasses',
      price: 599,
      oldPrice: 899,
      discount: '33% OFF',
      image: '/assets/sunglasses1.jpg',
      category: 'Accessories',
      rating: 4.4,
      reviews: 78,
      description: 'Stylish sunglasses designed to complete your everyday fashion look.'
    },
    {
      id: 16,
      name: 'Watch',
      price: 999,
      oldPrice: 1499,
      discount: '33% OFF',
      image: '/assets/watch1.png',
      category: 'Accessories',
      rating: 4.6,
      reviews: 101,
      description: 'A stylish watch designed to complement both casual and formal outfits.'
    }
  ]

  const product = products.find(
    (item) => item.id === Number(id)
  )

  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)

    if (product?.sizes) {
      setSelectedSize(product.sizes[0])
    } else {
      setSelectedSize('')
    }

    setQuantity(1)
  }, [id])

  const increaseProductQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decreaseProductQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1))
  }

  if (!product) {
    return (
      <>
        <Navbar
          cart={cart}
          cartCount={cartCount}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeFromCart={removeFromCart}
          cartTotal={cartTotal}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          wishlist={wishlist}
          wishlistCount={wishlistCount}
          toggleWishlist={toggleWishlist}
        />

        <div className="product-page">
          <div className="product-loading">
            <h3>Product not found</h3>

            <button
              className="btn btn-dark mt-3"
              onClick={() => navigate('/')}
            >
              Back to Home
            </button>
          </div>
        </div>

        <Footer />
      </>
    )
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize: product.sizes ? selectedSize : '',
      quantity: quantity
    })
  }

  const handleBuyNow = () => {
    addToCart({
      ...product,
      selectedSize: product.sizes ? selectedSize : '',
      quantity: quantity
    })

    navigate('/')
  }

  const relatedProducts = products.filter(
    (item) =>
      item.id !== product.id &&
      item.category === product.category
  )

  return (
    <>
      <Navbar
        cart={cart}
        cartCount={cartCount}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
        cartTotal={cartTotal}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        wishlist={wishlist}
        wishlistCount={wishlistCount}
        toggleWishlist={toggleWishlist}
      />

      <div className="product-page">

        <button
          className="product-back-button"
          onClick={() => navigate('/')}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Back to Products
        </button>

        <div className="product-main">

          <div className="product-image-box">
            <img
              src={product.image}
              alt={product.name}
            />
          </div>

          <div className="product-info">

            <p className="product-category">
              {product.category}
            </p>

            <h1>{product.name}</h1>

            <div className="product-rating">

              <span>
                {'★'.repeat(Math.floor(product.rating))}
              </span>

              <span className="review-count">
                {product.rating} ({product.reviews} Reviews)
              </span>

            </div>

            <div className="product-price">

              <strong>₹{product.price}</strong>

              <span>₹{product.oldPrice}</span>

              <b>{product.discount}</b>

            </div>

            <p className="product-description">
              {product.description}
            </p>

            {product.sizes && (
              <div className="product-size">

                <span>Select Size</span>

                <div className="size-options">

                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`size-button ${
                        selectedSize === size ? 'active' : ''
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}

                </div>

              </div>
            )}

            <div className="product-quantity">

              <span>Quantity</span>

              <div className="quantity-box">

                <button
                  onClick={decreaseProductQuantity}
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  onClick={increaseProductQuantity}
                >
                  +
                </button>

              </div>

            </div>

            <div className="product-actions">

              <button
                className="add-cart-button"
                onClick={handleAddToCart}
              >
                <i className="bi bi-cart3 me-2"></i>
                Add to Cart
              </button>

              <button
                className="buy-now-button"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>

            </div>

            <div className="service-info">

              <div>
                <i className="bi bi-truck"></i>

                <div>
                  <strong>Free Delivery</strong>
                  <p>Free delivery on selected orders</p>
                </div>
              </div>

              <div>
                <i className="bi bi-arrow-repeat"></i>

                <div>
                  <strong>Easy Returns</strong>
                  <p>Easy return within eligible period</p>
                </div>
              </div>

              <div>
                <i className="bi bi-shield-check"></i>

                <div>
                  <strong>Secure Payment</strong>
                  <p>100% secure payment</p>
                </div>
              </div>

            </div>

          </div>

        </div>

        <section className="product-description-section">

          <h2>Product Details</h2>

          <p>{product.description}</p>

          <h3>Features</h3>

          <ul>
            <li>Premium quality material</li>
            <li>Comfortable for everyday use</li>
            <li>Modern and stylish design</li>
            <li>Suitable for different occasions</li>
          </ul>

        </section>

        <section className="reviews-section">

          <h2>Customer Reviews</h2>

          <div className="overall-rating">

            <div className="rating-number">

              <strong>{product.rating}</strong>

              <span>★★★★★</span>

              <p>
                Based on {product.reviews} customer reviews
              </p>

            </div>

          </div>

          <div className="review-card">

            <div className="review-header">
              <strong>Priya</strong>
              <span>★★★★★</span>
            </div>

            <h4>Good quality</h4>

            <p>
              Product quality is good and the design looks very nice.
            </p>

          </div>

          <div className="review-card">

            <div className="review-header">
              <strong>Divya</strong>
              <span>★★★★☆</span>
            </div>

            <h4>Worth buying</h4>

            <p>
              Comfortable product and delivery was also good.
            </p>

          </div>

        </section>

        {relatedProducts.length > 0 && (
          <section className="related-products">

            <h2>You May Also Like</h2>

            <div className="related-grid">

              {relatedProducts.map((item) => (
                <div
                  className="related-card"
                  key={item.id}
                  onClick={() =>
                    navigate(`/product/${item.id}`)
                  }
                >

                  <div className="product-image-wrapper">

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <button
                      type="button"
                      className={`wishlist-btn ${
                        isInWishlist(item.id) ? 'active' : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleWishlist(item)
                      }}
                    >
                      <i
                        className={
                          isInWishlist(item.id)
                            ? 'bi bi-heart-fill'
                            : 'bi bi-heart'
                        }
                      ></i>
                    </button>

                  </div>

                  <h4>{item.name}</h4>

                  <p>₹{item.price}</p>

                </div>
              ))}

            </div>

          </section>
        )}

      </div>

      <Footer />
    </>
  )
}

export default ProductDetails