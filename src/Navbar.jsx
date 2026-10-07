import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar({
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
  toggleWishlist
}) {
  const [showCart, setShowCart] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [showWishlist, setShowWishlist] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const navigate = useNavigate()

  const goToSection = (sectionId) => {
    setShowMenu(false)

    navigate('/')

    setTimeout(() => {
      const section = document.getElementById(sectionId)

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }, 100)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container-fluid px-5">

          <button
            className="navbar-brand fw-bold fs-2 border-0 bg-transparent"
            onClick={() => goToSection('home')}
          >
            Fashora
          </button>

          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setShowMenu(true)}
            aria-label="Open menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="desktop-navbar">

            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <button
                  className="nav-link active border-0 bg-transparent"
                  onClick={() => goToSection('home')}
                >
                  Home
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link border-0 bg-transparent"
                  onClick={() => goToSection('products')}
                >
                  Products
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link border-0 bg-transparent"
                  onClick={() => goToSection('categories')}
                >
                  Categories
                </button>
              </li>

              <li className="nav-item">
                <button
                  className="nav-link border-0 bg-transparent"
                  onClick={() => goToSection('footer')}
                >
                  Contact
                </button>
              </li>

            </ul>

            <div className="d-flex align-items-center gap-3">

              <button
                className="search-button"
                onClick={() => setShowSearch(!showSearch)}
              >
                <i className="bi bi-search fs-5"></i>
              </button>

              {showSearch && (
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              )}

              <button
                className="wishlist-icon-button"
                onClick={() => setShowWishlist(true)}
              >
                <i className="bi bi-heart fs-5"></i>

                {wishlistCount > 0 && (
                  <span className="wishlist-badge">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                className="cart-icon-button"
                onClick={() => setShowCart(true)}
              >
                <i className="bi bi-cart3 fs-5"></i>

                {cartCount > 0 && (
                  <span className="cart-badge">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                className="btn btn-dark"
                onClick={() => navigate('/login')}
              >
                Login
              </button>

            </div>

          </div>
        </div>
      </nav>

      {showMenu && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setShowMenu(false)}
        >

          <div
            className="mobile-side-menu"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="mobile-menu-header">

              <button
                className="mobile-menu-brand"
                onClick={() => goToSection('home')}
              >
                Fashora
              </button>

              <button
                className="mobile-menu-close"
                onClick={() => setShowMenu(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>

            </div>

            <div className="mobile-menu-links">

              <button onClick={() => goToSection('home')}>
                Home
              </button>

              <button onClick={() => goToSection('products')}>
                Products
              </button>

              <button onClick={() => goToSection('categories')}>
                Categories
              </button>

              <button onClick={() => goToSection('footer')}>
                Contact
              </button>

            </div>

            <div className="mobile-menu-actions">

              <button
                onClick={() => {
                  setShowMenu(false)
                  setShowSearch(true)
                }}
              >
                <i className="bi bi-search"></i>
                Search
              </button>

              <button
                onClick={() => {
                  setShowMenu(false)
                  setShowWishlist(true)
                }}
              >
                <i className="bi bi-heart"></i>
                Wishlist

                {wishlistCount > 0 && (
                  <span className="mobile-menu-badge">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                onClick={() => {
                  setShowMenu(false)
                  setShowCart(true)
                }}
              >
                <i className="bi bi-cart3"></i>
                Cart

                {cartCount > 0 && (
                  <span className="mobile-menu-badge">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                className="mobile-login-btn"
                onClick={() => {
                  setShowMenu(false)
                  navigate('/login')
                }}
              >
                Login
              </button>

            </div>

          </div>

        </div>
      )}

      {showWishlist && (
        <div className="cart-overlay">

          <div className="cart-panel">

            <div className="cart-header">
              <h3>My Wishlist</h3>

              <button
                className="cart-close"
                onClick={() => setShowWishlist(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            {wishlist.length === 0 ? (
              <div className="empty-cart">
                <i className="bi bi-heart"></i>
                <h4>Your wishlist is empty</h4>
                <p>Add products you love to your wishlist.</p>
              </div>
            ) : (
              <div className="cart-items">

                {wishlist.map((item) => (
                  <div className="cart-item" key={item.id}>

                    <img
                      src={item.image}
                      alt={item.name}
                    />

                    <div className="cart-item-details">

                      <h5>{item.name}</h5>

                      <p>₹{item.price}</p>

                      <button
                        className="btn btn-dark btn-sm"
                        onClick={() => toggleWishlist(item)}
                      >
                        <i className="bi bi-heart-fill me-1"></i>
                        Remove
                      </button>

                    </div>

                  </div>
                ))}

              </div>
            )}

          </div>

        </div>
      )}

      {showCart && (
        <div className="cart-overlay">

          <div className="cart-panel">

            <div className="cart-header">
              <h3>Your Cart</h3>

              <button
                className="cart-close"
                onClick={() => setShowCart(false)}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <i className="bi bi-cart-x"></i>
                <h4>Your cart is empty</h4>
                <p>Add some products to your cart.</p>
              </div>
            ) : (
              <>
                <div className="cart-items">

                  {cart.map((item) => (
                    <div className="cart-item" key={item.id}>

                      <img
                        src={item.image}
                        alt={item.name}
                      />

                      <div className="cart-item-details">

                        <h5>{item.name}</h5>

                        <p>₹{item.price}</p>

                        <div className="quantity-control">

                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                          >
                            −
                          </button>

                          <span>{item.quantity}</span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                          >
                            +
                          </button>

                        </div>

                        <button
                          className="remove-btn"
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                        >
                          Remove
                        </button>

                      </div>

                    </div>
                  ))}

                </div>

                <div className="cart-footer">

                  <div className="cart-total">
                    <span>Total</span>
                    <strong>₹{cartTotal}</strong>
                  </div>

                  <button className="checkout-btn">
                    Checkout
                  </button>

                </div>
              </>
            )}

          </div>

        </div>
      )}
    </>
  )
}

export default Navbar