import React from 'react'
import BasketProductList from '../../Layout/Cart Layout/Basket Product List'
import './index.scss'
import CartTotal from '../../Layout/Cart Layout/Cart Total'

function Cart() {
  return (
    <main>
      <section id='Cart'>
        <BasketProductList />
        <CartTotal />
      </section>
    </main>
  )
}

export default Cart