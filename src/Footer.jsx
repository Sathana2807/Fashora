import React from 'react'

function Footer() {
  return (
    <>
      <section className="footer-features">

        <div className="footer-feature">
          <i className="bi bi-shield-check"></i>
          <div>
            <h4>100% Secure Payment</h4>
            <p>Safe and secure payment</p>
          </div>
        </div>

        <div className="footer-feature">
          <i className="bi bi-truck"></i>
          <div>
            <h4>Free Shipping</h4>
            <p>Fast and reliable delivery</p>
          </div>
        </div>

        <div className="footer-feature">
          <i className="bi bi-arrow-repeat"></i>
          <div>
            <h4>Easy Returns</h4>
            <p>Simple and hassle-free returns</p>
          </div>
        </div>

        <div className="footer-feature">
          <i className="bi bi-envelope"></i>
          <div>
            <h4>Stay Connected</h4>
            <p>Follow us for latest updates</p>
          </div>
        </div>

      </section>

      <footer className="main-footer">

        <div className="footer-container">

          <div className="footer-column footer-brand">
            <h2>Fashora</h2>

            <p>
              Discover the latest fashion and elevate your everyday style
              with Fashora.
            </p>

            <div className="footer-social">
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
            </div>
          </div>

          <div className="footer-column">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/">Products</a>
            <a href="/">Categories</a>
            <a href="/">About Us</a>
            <a href="/">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Customer Service</h4>
            <a href="/">FAQ</a>
            <a href="/">Shipping & Delivery</a>
            <a href="/">Returns & Refunds</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms & Conditions</a>
          </div>

          <div className="footer-column">
            <h4>Contact Us</h4>

            <p>
              <i className="bi bi-geo-alt"></i>
              Tamil Nadu, India
            </p>

            <p>
              <i className="bi bi-envelope"></i>
              support@fashora.com
            </p>

            <p>
              <i className="bi bi-telephone"></i>
              +91 98765 43210
            </p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Fashora. All Rights Reserved.</p>
        </div>

      </footer>
    </>
  )
}

export default Footer