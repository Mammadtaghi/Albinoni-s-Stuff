import React from 'react';
import { useBasket } from '../../../Context/basketContext';
import { useWishlist } from '../../../Context/wishlistContext';
import './index.scss';

function Product({...props}) {

  const DiscountedPrice = (+props.price*(100-props.discount))/100
  
  const {basket, AddItem, DeleteItem, ReadJust} = useBasket()

  const { wishlist, AddToWishlist, isInWishlist } = useWishlist()

  return (
    <div id='product'>
      <div className="productImgBox">
        <img src={props.img} alt="" />
        <button className="addToBasket" onClick={()=>AddItem(props)}>Add To Cart</button>
      </div>
      <div className="productTextBox">
        <h5 className='productTitle'>{props.title}</h5>
        <p className='price'><span className='disountedPrice'>${DiscountedPrice}</span><span className='generalPrice'>${+props.price}</span></p>
        <span className='productDiscount'>-{props.discount}%</span>
      </div>
      <div className="buttonsBox">
        <button className="addButton addToWishlist" onClick={()=>AddToWishlist(props)}><i className="fa-regular fa-heart"></i></button>
        <button className="addButton inspect"><i className="fa-regular fa-eye"></i></button>
      </div>
    </div>
  )
}

export default Product