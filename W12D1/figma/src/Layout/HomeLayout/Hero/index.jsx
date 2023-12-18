import React, { useState } from 'react'
import "./index.scss";

function Hero() {

  const [dropdown1, setDropdown1] = useState(false)
  const [dropdown2, setDropdown2] = useState(false)

  return (
    <section id='hero'>
      <div className="categoriesContainer">
        <ul className='categoryList'>
          <li onClick={() => setDropdown1(!dropdown1)}>Woman's Fashion    <i className="fa-solid fa-angle-right DropdownIcon" style={{ transform: `rotate(${dropdown1 ? '90deg' : '0deg'})` }}></i>
            <ul className="dropdownList" style={{ maxHeight: dropdown1 ? '170px' : '0px' }} >
              <li>Fashion1</li>
              <li>Fashion2</li>
              <li>Fashion3</li>
            </ul>
          </li>
          <li onClick={() => setDropdown2(!dropdown2)}>Men's Fashion    <i className="fa-solid fa-angle-right DropdownIcon" style={{ transform: `rotate(${dropdown2 ? '90deg' : '0deg'})` }}></i>
            <ul className="dropdownList" style={{ maxHeight: dropdown2 ? '170px' : '0px' }} >
              <li>Fashion1</li>
              <li>Fashion2</li>
              <li>Fashion3</li>
            </ul>
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>
      
      <div className="productSliderContainer">
        <div className="productSliders">
          <div className="slidersBox">
            <div id="slider1" className='slider'>
              <img src="https://wallup.net/wp-content/uploads/2016/05/24/304149-nature.jpg" alt="" />
            </div>
            <div id="slider2" className='slider'>
              <img src="https://wallup.net/wp-content/uploads/2019/09/190142-landscapes-nature-trees.jpg" alt="" />
            </div>
            <div id="slider3" className='slider'>
              <img src="https://wallup.net/wp-content/uploads/2018/09/26/212386-nature-landscape.jpg" alt="" />
            </div>
            <div id="slider4" className='slider'>
              <img src="https://avante.biz/wp-content/uploads/Hd-wallpapers-2560x1440/Hd-wallpapers-2560x1440-028.jpg" alt="" />
            </div>
            <div id="slider5" className='slider'>
              <img src="https://www.10wallpaper.com/wallpaper/1680x1050/1308/purple_dusk-Best_Scenery_HD_Wallpaper_1680x1050.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="sliderPagination">
          <a href="#slider1"><i className="fa-solid fa-circle"></i></a>
          <a href="#slider2"><i className="fa-solid fa-circle"></i></a>
          <a href="#slider3"><i className="fa-solid fa-circle"></i></a>
          <a href="#slider4"><i className="fa-solid fa-circle"></i></a>
          <a href="#slider5"><i className="fa-solid fa-circle"></i></a>
        </div>
      </div>
    </section>
  )
}

export default Hero