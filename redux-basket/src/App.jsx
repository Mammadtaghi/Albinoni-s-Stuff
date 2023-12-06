import { useDispatch, useSelector } from "react-redux";
import './App.css'
import { Fragment, useState } from "react";
import useFetch from "./Hooks/useFetch";
import { addToBasket, decrement, increment } from "./Redux/basketSlice";
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from "./Hooks/useLocalStorage";

function App() {

  const [products, setProducts] = useLocalStorage('product')

  useFetch('http://localhost:3000/products', setProducts)

  const Basket = useSelector(state => state.basketStore)
  const dispatch = useDispatch()

  function handleProduct(item) {
    dispatch(addToBasket(item))
  }

  function handleIncreament(item) {
    dispatch(increment(item))
  }

  function handleDecreament(item) {
    dispatch(decrement(item))
  }

  return (
    <>
      {products && products.map(product => (
        <div key={uuidv4()} onClick={() => handleProduct(product)} style={{ display: 'flex', alignItems: 'center', backgroundImage: `${product.img}`, cursor: 'pointer' }}>
          <h2>{product.name}</h2>-----------
          <span>{product.price}</span>
        </div >
      ))}

      <ul>
        {Basket && Basket.map(basItem => (
          <Fragment key={uuidv4()}>
            <li>{basItem.name}</li>
            <li>{basItem.price}</li>
            <li>{basItem.count}</li>
            <li>Total: {+basItem.price*basItem.count}</li>
            <li><button onClick={()=>handleIncreament(basItem)}>+</button><button onClick={()=>handleDecreament(basItem)}>-</button></li>
          </Fragment>
        ))}
      </ul>
    </>
  )
}

export default App
