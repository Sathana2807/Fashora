import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e) => {
    e.preventDefault()

    if (email && password) {
      alert('Login successful!')
      navigate('/')
    } else {
      alert('Please enter email and password')
    }
  }

  return (
    <div className="login-page">

      <button
        className="login-back-btn"
        onClick={() => navigate('/')}
      >
        <i className="bi bi-arrow-left"></i>
        Back to Home
      </button>

      <div className="login-box">

        <h1>Fashora</h1>
        <p className="login-subtitle">
          Login to continue shopping with Fashora
        </p>

        <form onSubmit={handleLogin}>

          <div className="login-input-group">
            <label>Email Address</label>

            <div className="login-input-wrapper">
              <i className="bi bi-envelope"></i>

              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="login-input-group">
            <label>Password</label>

            <div className="login-input-wrapper">
              <i className="bi bi-lock"></i>

              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="forgot-password"
            >
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="login-submit-btn"
          >
            Login
          </button>

        </form>

        <div className="login-divider">
          <span>or</span>
        </div>

        <p className="create-account">
          Don't have an account?
          <button type="button">
            Create Account
          </button>
        </p>

      </div>

    </div>
  )
}

export default Login