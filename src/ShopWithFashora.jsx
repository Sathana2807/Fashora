
import React, { useState } from 'react'

function ShopWithFashora() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (email.trim() !== '') {
      alert('Thank you for joining Fashora!')
      setEmail('')
    }
  }

  return (
    <section className="shop-fashora-section">

      <div className="shop-fashora-content">

        <h2>SHOP WITH FASHORA</h2>

        <div className="fashora-style-text">
          <p>A little more style.</p>
          <p>A little more you.</p>
        </div>

        <div className="fashora-scroll-text">
          NEW SEASON
          <span>•</span>
          NEW TRENDS
          <span>•</span>
          NEW YOU
          <span>•</span>
          FASHORA
        </div>

        <div className="fashora-newsletter">

          <h3>GET THE FASHORA EDIT</h3>

          <p>
            Latest trends, new arrivals & exclusive offers —
            straight to your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="fashora-email-form"
          >
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit">
              JOIN
            </button>
          </form>

          <small>
            No spam. Just fashion.
          </small>

        </div>

      </div>

    </section>
  )
}

export default ShopWithFashora
