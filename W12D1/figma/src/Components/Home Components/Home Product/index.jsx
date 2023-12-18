import React from 'react'
import './index.scss'
import styled from "styled-components";

function Product({...props}) {
  
  const DiscountedPrice = (+props.price*(100-props.discount))/100
  

  return (
    <div id='product'>
      <div className="productImgBox">
        <img src={props.img} alt="" />
        <button className="addToBasket">Add To Cart</button>
      </div>
      <div className="productTextBox">
        <h5 className='productTitle'>{props.title}</h5>
        <p className='price'><span className='disountedPrice'>${DiscountedPrice}</span><span className='generalPrice'>${+props.price}</span></p>
        <span className='productDiscount'>-{props.discount}%</span>
      </div>
      <div className="buttonsBox">
        <button className="addButton addToWishlist"><i className="fa-regular fa-heart"></i></button>
        <button className="addButton inspect"><i className="fa-regular fa-eye"></i></button>
      </div>
    </div>
  )
}

export default Product