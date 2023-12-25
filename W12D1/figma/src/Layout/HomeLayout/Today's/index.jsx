import React from 'react'
import Button from '../../../Components/Common Components/Button'
import Product from '../../../Components/Home Components/Home Product'
import SectionSubTitle from '../../../Components/Home Components/SectionSubTitle'
import SectionTitle from '../../../Components/Home Components/SectionTitle'
import { getProducts } from '../../../Context/productContext'
import './index.scss'

function Todays() {

  const { Products } = getProducts()

  return (
    <section id='todays'>
      <div className="todayContainer">
        <div className="todaysTitleBox">
          <SectionTitle>Today's</SectionTitle>
          <div className="flashSales">
            <SectionSubTitle>Flash Sales</SectionSubTitle>
            <div className="remainingTime">
              <span className="time" id='days'>03</span>
              <span style={{ color: 'tomato' }}> : </span>
              <span className="time" id='hours'>23</span>
              <span style={{ color: 'tomato' }}> : </span>
              <span className="time" id='minutes'>19</span>
              <span style={{ color: 'tomato' }}> : </span>
              <span className="time" id='seconds'>56</span>
            </div>
          </div>
        </div>

        <div className="todaysProducts">
          { Products && Products.map(product=><Product key={product.id} {...product} />) }
        </div>
        <div className='buttonContainer'><Button>View All Products</Button></div>
      </div>
    </section>
  )
}

export default Todays