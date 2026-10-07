import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Products from './Products'
import Categories from './Categories'
import Footer from './Footer'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import Featured from './Featured'
import WhyChoose from './Whychoose'
import TrendingCollection from './TrendingCollection'
import StyleInspiration from './StyleInspiration'
import ShopWithFashora from './ShopWithFashora'
import Login from './Login'

function App() {

  const banners = [
    {
      image: '/assets/womens_accessories.webp',
      title: "WOMEN'S ACCESSORIES",
      text: 'Complete Your Look'
    },
    {
      image: '/assets/gym_essentials.webp',
      title: 'SHOES',
      text: 'Train. Move. Repeat.'
    },
    {
      image: '/assets/mens-style.webp',
      title: "MEN'S STYLE",
      text: 'Classic Looks, Modern Vibes'
    }
  ]

  const [current, setCurrent] = useState(0)
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      )

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity: 1
        }
      ]
    })
  }

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    )
  }

  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    )
  }

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some(
        (item) => item.id === product.id
      )

      if (exists) {
        return prevWishlist.filter(
          (item) => item.id !== product.id
        )
      }

      return [...prevWishlist, product]
    })
  }

  const isInWishlist = (id) => {
    return wishlist.some((item) => item.id === id)
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  )

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const wishlistCount = wishlist.length

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
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

              <section id="home" className="hero-slider-section">
                <div className="hero-slider">

                  {banners.map((banner, index) => (
                    <div
                      key={index}
                      className={`hero-slide ${
                        current === index ? 'active' : ''
                      }`}
                    >

                      <img
                        src={banner.image}
                        alt={banner.title}
                      />

                      <div className="hero-text">
                        <h1>{banner.title}</h1>
                        <p>{banner.text}</p>
                        <button
                        className="btn btn-dark px-4 py-2"
                        onClick={() => 
                        document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                        >
                        SHOP NOW
                        </button>
                      </div>

                    </div>
                  ))}

                </div>
              </section>

              <div id="categories">
                <Categories
                  setSelectedCategory={setSelectedCategory}
                />
              </div>

              <div id="products">
                <Products
                  addToCart={addToCart}
                  searchTerm={searchTerm}
                  selectedCategory={selectedCategory}
                  toggleWishlist={toggleWishlist}
                  isInWishlist={isInWishlist}
                />
              </div>

              <Featured />

              <WhyChoose />

              <section className="diwali-banner">
                <img
                  src="/assets/diwali5.jpeg"
                  alt="Diwali Sale"
                />
              </section>

              <TrendingCollection />

              <StyleInspiration />

              <ShopWithFashora />

              <div id="footer">
                <Footer />
              </div>

            </div>
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              addToCart={addToCart}
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
              isInWishlist={isInWishlist}
            />
          }
        />

        <Route
          path="/login"
          element={<Login />}
          />

      </Routes>
    </BrowserRouter>
  )
}

export default App