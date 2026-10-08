import React from 'react'

function StyleInspiration() {

  const base = import.meta.env.BASE_URL

  return (
    <section className="style-inspiration">
      <img
        src={`${base}assets/stylebanner1.jpg`}
        alt="Style Inspiration"
      />

      <div className="style-inspiration-content">
        <h2>STYLE INSPIRATION</h2>
        <p>Define Your Style, Wear Your Confidence</p>
        <button>EXPLORE NOW</button>
      </div>
    </section>
  )
}

export default StyleInspiration