import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function ProductDetails({
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
  addToCart
}) {
  const { id } = useParams()
  const navigate = useNavigate()
  const base = import.meta.env.BASE_URL

  const products = [
    {
      id: 1,
      name: 'Floral Dress',
      price: 999,
      oldPrice: 1499,
      discount: '33% OFF',
      image: `${base}assets/girldress1.jpg`,
      category: 'Women',
      rating: 4.5,
      reviews: 128,
      description: 'Elegant floral dress designed for a stylish and comfortable look.',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: 'Men Shirt',
      price: 699,
      oldPrice: 999,
      discount: '30% OFF',
      image: `${base}assets/menshirt1.png`,
      category: 'Men',
      rating: 4.4,
      reviews: 96,
      description: 'Classic casual shirt with a comfortable fit for everyday wear.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 3,
      name: 'Casual Shoes',
      price: 1299,
      oldPrice: 1799,
      discount: '28% OFF',
      image: `${base}assets/shose.webp`,
      category: 'Shoes',
      rating: 4.6,
      reviews: 154,
      description: 'Comfortable casual shoes suitable for everyday activities and outings.',
      sizes: ['6', '7', '8', '9', '10']
    },
    {
      id: 4,
      name: 'Hand Bag',
      price: 899,
      oldPrice: 1299,
      discount: '31% OFF',
      image: `${base}assets/handbag2.webp`,
      category: 'Accessories',
      rating: 4.5,
      reviews: 87,
      description: 'Stylish handbag with a spacious design for your everyday essentials.',
      sizes: ['Free Size']
    },
    {
      id: 5,
      name: 'Women Kurti',
      price: 799,
      oldPrice: 1199,
      discount: '33% OFF',
      image: `${base}assets/kurti1.jpg`,
      category: 'Women',
      rating: 4.3,
      reviews: 74,
      description: 'Beautiful kurti with a comfortable design perfect for casual occasions.',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 6,
      name: 'Women Saree',
      price: 1299,
      oldPrice: 1799,
      discount: '28% OFF',
      image: `${base}assets/saree1.jpg`,
      category: 'Women',
      rating: 4.7,
      reviews: 112,
      description: 'Elegant saree designed to give you a graceful and stylish appearance.',
      sizes: ['Free Size']
    },
    {
      id: 7,
      name: 'Women Top',
      price: 599,
      oldPrice: 899,
      discount: '33% OFF',
      image: `${base}assets/top1.jpg`,
      category: 'Women',
      rating: 4.2,
      reviews: 63,
      description: 'Trendy women top with a comfortable fit for everyday styling.',
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 8,
      name: 'Men T-Shirt',
      price: 499,
      oldPrice: 799,
      discount: '38% OFF',
      image: `${base}assets/tshirt1.jpg`,
      category: 'Men',
      rating: 4.4,
      reviews: 91,
      description: 'Comfortable casual t-shirt made for everyday wear.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 9,
      name: 'Men Jeans',
      price: 1199,
      oldPrice: 1699,
      discount: '29% OFF',
      image: `${base}assets/pant1.jpg`,
      category: 'Men',
      rating: 4.5,
      reviews: 105,
      description: 'Classic jeans with a comfortable fit and stylish everyday look.',
      sizes: ['30', '32', '34', '36', '38']
    },
    {
      id: 10,
      name: 'Men Jacket',
      price: 1499,
      oldPrice: 2199,
      discount: '32% OFF',
      image: `${base}assets/jacket1.jpg`,
      category: 'Men',
      rating: 4.6,
      reviews: 78,
      description: 'Stylish jacket designed for a modern and comfortable look.',
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 11,
      name: 'Running Shoes',
      price: 1599,
      oldPrice: 2299,
      discount: '30% OFF',
      image: `${base}assets/running1.jpg`,
      category: 'Shoes',
      rating: 4.7,
      reviews: 134,
      description: 'Lightweight running shoes designed for comfort and active movement.',
      sizes: ['6', '7', '8', '9', '10']
    },
    {
      id: 12,
      name: 'Sports Shoes',
      price: 1399,
      oldPrice: 1999,
      discount: '30% OFF',
      image: `${base}assets/sports1.jpg`,
      category: 'Shoes',
      rating: 4.5,
      reviews: 101,
      description: 'Comfortable sports shoes suitable for workouts and daily activities.',
      sizes: ['6', '7', '8', '9', '10']
    },
    {
      id: 13,
      name: 'Sneakers',
      price: 1799,
      oldPrice: 2499,
      discount: '28% OFF',
      image: `${base}assets/sneaker1.jpg`,
      category: 'Shoes',
      rating: 4.8,
      reviews: 143,
      description: 'Trendy sneakers combining comfort and modern fashion.',
      sizes: ['6', '7', '8', '9', '10']
    },
    {
      id: 14,
      name: 'Ladies Handbag',
      price: 1099,
      oldPrice: 1599,
      discount: '31% OFF',
      image: `${base}assets/handbags1.jpg`,
      category: 'Accessories',
      rating: 4.4,
      reviews: 89,
      description: 'Elegant ladies handbag with enough space for daily essentials.',
      sizes: ['Free Size']
    },
    {
      id: 15,
      name: 'Sunglasses',
      price: 599,
      oldPrice: 899,
      discount: '33% OFF',
      image: `${base}assets/sunglasses1.jpg`,
      category: 'Accessories',
      rating: 4.3,
      reviews: 67,
      description: 'Stylish sunglasses designed to complete your everyday fashion look.',
      sizes: ['Free Size']
    },
    {
      id: 16,
      name: 'Watch',
      price: 999,
      oldPrice: 1499,
      discount: '33% OFF',
      image: `${base}assets/watch1.png`,
      category: 'Accessories',
      rating: 4.6,
      reviews: 118,
      description: 'Classic stylish watch suitable for both casual and formal occasions.',
      sizes: ['Free Size']
    }
  ]

  const product = products.find(item => item.id === Number(id))

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || ''
  )

  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!product) {
    return (
      <div>
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

        <div className="container text-center py-5">
          <h2>Product Not Found</h2>
          <button
            className="btn btn-dark mt-3"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>

        <Footer />
      </div>
    )
  }

  const isWishlisted = wishlist?.some(item => item.id === product.id)

  const handleAddToCart = () => {
    if (addToCart) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product)
      }
    }
  }

  const handleBuyNow = () => {
    handleAddToCart()
    navigate('/')
  }

  const relatedProducts = products.filter(
    item => item.category === product.category && item.id !== product.id
  )

  return (
    <div className="fashora-page">
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

      <div className="container py-4">
        <button
          className="btn btn-link text-dark text-decoration-none px-0 mb-4"
          onClick={() => navigate('/')}
        >
          <i className="bi bi-arrow-left me-2"></i>
          Back to Products
        </button>

        <div className="row g-5">
          <div className="col-lg-6">
            <div
              className="position-relative bg-light rounded-4 overflow-hidden"
              style={{ minHeight: '550px' }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-100 h-100"
                style={{
                  objectFit: 'contain',
                  minHeight: '550px'
                }}
              />

              <button
                className="btn btn-light rounded-circle shadow position-absolute top-0 end-0 m-3"
                onClick={() => toggleWishlist && toggleWishlist(product)}
              >
                <i
                  className={`bi ${
                    isWishlisted ? 'bi-heart-fill' : 'bi-heart'
                  } fs-5`}
                ></i>
              </button>

              <span className="badge bg-dark position-absolute top-0 start-0 m-3 px-3 py-2">
                {product.discount}
              </span>
            </div>
          </div>

          <div className="col-lg-6">
            <p className="text-muted mb-2">{product.category}</p>

            <h1 className="fw-bold mb-3">
              {product.name}
            </h1>

            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="badge bg-success">
                {product.rating} <i className="bi bi-star-fill"></i>
              </span>

              <span className="text-muted">
                {product.reviews} Reviews
              </span>
            </div>

            <div className="d-flex align-items-center gap-3 mb-4">
              <h2 className="fw-bold mb-0">
                ₹{product.price}
              </h2>

              <span className="text-muted text-decoration-line-through fs-5">
                ₹{product.oldPrice}
              </span>

              <span className="text-success fw-semibold">
                {product.discount}
              </span>
            </div>

            <p className="text-muted lh-lg mb-4">
              {product.description}
            </p>

            <hr />

            <div className="mb-4">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <strong>Select Size</strong>
                <span className="text-muted">
                  Size Guide
                </span>
              </div>

              <div className="d-flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    className={`btn ${
                      selectedSize === size
                        ? 'btn-dark'
                        : 'btn-outline-dark'
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <strong className="d-block mb-2">
                Quantity
              </strong>

              <div
                className="d-flex align-items-center border rounded"
                style={{ width: '140px' }}
              >
                <button
                  className="btn border-0"
                  onClick={() =>
                    setQuantity(prev => Math.max(1, prev - 1))
                  }
                >
                  <i className="bi bi-dash"></i>
                </button>

                <span className="flex-grow-1 text-center fw-semibold">
                  {quantity}
                </span>

                <button
                  className="btn border-0"
                  onClick={() =>
                    setQuantity(prev => prev + 1)
                  }
                >
                  <i className="bi bi-plus"></i>
                </button>
              </div>
            </div>

            <div className="d-flex gap-3 mb-4">
              <button
                className="btn btn-dark btn-lg flex-grow-1"
                onClick={handleAddToCart}
              >
                <i className="bi bi-bag-plus me-2"></i>
                Add to Cart
              </button>

              <button
                className="btn btn-outline-dark btn-lg flex-grow-1"
                onClick={handleBuyNow}
              >
                Buy Now
              </button>
            </div>

            <div className="row g-3 mt-2">
              <div className="col-4 text-center">
                <i className="bi bi-truck fs-3"></i>
                <p className="small mb-0 mt-2">
                  Free Delivery
                </p>
              </div>

              <div className="col-4 text-center">
                <i className="bi bi-arrow-repeat fs-3"></i>
                <p className="small mb-0 mt-2">
                  Easy Returns
                </p>
              </div>

              <div className="col-4 text-center">
                <i className="bi bi-shield-check fs-3"></i>
                <p className="small mb-0 mt-2">
                  Secure Payment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-5">
          <h3 className="fw-bold mb-4">
            Product Details
          </h3>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="border rounded-4 p-4 h-100">
                <h5 className="fw-bold mb-3">
                  Product Information
                </h5>

                <p className="mb-2">
                  <strong>Category:</strong> {product.category}
                </p>

                <p className="mb-2">
                  <strong>Rating:</strong> {product.rating} / 5
                </p>

                <p className="mb-0">
                  <strong>Available Sizes:</strong>{' '}
                  {product.sizes.join(', ')}
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="border rounded-4 p-4 h-100">
                <h5 className="fw-bold mb-3">
                  Why You'll Love It
                </h5>

                <p className="text-muted mb-0 lh-lg">
                  Designed with style, comfort and everyday usability
                  in mind. This product is a great addition to your
                  Fashora collection.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4">
          <h3 className="fw-bold mb-4">
            Customer Reviews
          </h3>

          <div className="border rounded-4 p-4">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge bg-success">
                {product.rating} <i className="bi bi-star-fill"></i>
              </span>

              <strong>
                {product.reviews} Reviews
              </strong>
            </div>

            <p className="text-muted mb-0">
              Customers love the quality, comfort and stylish design
              of this product.
            </p>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-5 pt-4">
            <h3 className="fw-bold mb-4">
              Related Products
            </h3>

            <div className="row g-4">
              {relatedProducts.map(item => (
                <div
                  className="col-6 col-md-4 col-lg-3"
                  key={item.id}
                >
                  <div
                    className="card border-0 shadow-sm h-100"
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      navigate(`/product/${item.id}`)
                    }
                  >
                    <div
                      className="bg-light rounded-top overflow-hidden"
                      style={{ height: '260px' }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-100 h-100"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>

                    <div className="card-body">
                      <p className="text-muted small mb-1">
                        {item.category}
                      </p>

                      <h6 className="fw-semibold">
                        {item.name}
                      </h6>

                      <div className="d-flex align-items-center gap-2">
                        <strong>
                          ₹{item.price}
                        </strong>

                        <span className="text-muted text-decoration-line-through small">
                          ₹{item.oldPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default ProductDetails