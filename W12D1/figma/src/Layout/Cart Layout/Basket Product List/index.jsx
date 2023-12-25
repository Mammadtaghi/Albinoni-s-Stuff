import React from 'react'
import { useBasket } from '../../../Context/basketContext'
import './index.scss'
import Button from '../../../Components/Common Components/Button'

function BasketProductList() {

    const {basket, AddItem, DeleteItem, ReadJust, ChangeCount} = useBasket()

    function handleChange(item,e) {
        ChangeCount(item, e.value)
    }

  return (
    <table className='table'>
        <thead className='thead'>
            <tr>
                <th className='imgTH'>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
            </tr>
        </thead>
        <tbody className='tbody'>
            { basket && basket.map(item=>(
                <tr key={item.id}>
                    <td className='imgTD'><div className='cartImgBox'><img src={item.img} alt="" /></div>  <h4>{item.title}</h4></td>
                    <td><div className='priceBox'>${item.price}</div></td>
                    <td><div className="countBox"><input type="number" name="Quantity" id="quantity" onChange={(e)=>handleChange(item,e.target)} value={item.count} min={0} /></div></td>
                    <td><div className="subtotalBox">{ +item.price * item.count }</div></td>
                </tr>
            )) }
            <tr>
                <td><Button border='1px solid black' bgColor='transparent'>Return To Shop</Button></td>
                <td></td>
                <td></td>
                <td style={{display:'flex', flexDirection:'column'}}><Button alignSelf='flex-end' border='1px solid black' bgColor='transparent'>Update Cart</Button></td>
            </tr>
        </tbody>
    </table>
  )
}

export default BasketProductList