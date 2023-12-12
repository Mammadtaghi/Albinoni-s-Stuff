import React from 'react'
import "./index.scss";

function Hero() {
  return (
    <section id='hero'>
      <div className="categoriesContainer">
        <ul className='categoryList'>
          <li>Woman's Fashion</li>
          <li>Men's Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
      <div className="SliderContainer"></div>
    </section>
  )
}

export default Hero