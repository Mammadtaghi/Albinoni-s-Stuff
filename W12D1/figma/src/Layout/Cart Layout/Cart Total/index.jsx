import React from 'react'
import Button from '../../../Components/Common Components/Button'
import { useBasket } from '../../../Context/basketContext'
import './index.scss'

function CartTotal() {

    const { basket } = useBasket()

    const SubTotal = basket.reduce((acc,cur)=> acc + (cur.count* +cur.price),0)

    const Shipping = 0

  return (
    <div id='CartTotal'>
        <div className="couponBox">
            <input type="text" id='coupon' />
            <Button>Apply Coupon</Button>
        </div>

        <div className="cartTotalBox">
            <h3 className='cartTotalTitle'>Cart Total</h3>
            <p>Subtotal: <span>{SubTotal}</span></p>
            <hr style={{width:'100%'}} />
            <p>Shipping: <span>{Shipping ? Shipping : 'Free'}</span></p>
            <hr style={{width:'100%'}} />
            <p>Total: <span>{Shipping+SubTotal}</span></p>
            <Button fontSize='16px' alignSelf='center'>Procees to checkout</Button>
        </div>
    </div>
  )
}

export default CartTotal