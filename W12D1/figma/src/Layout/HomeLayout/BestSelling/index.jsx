import React from 'react'
import './index.scss'
import SectionTitle from '../../../Components/Home Components/SectionTitle'
import SectionSubTitle from '../../../Components/Home Components/SectionSubTitle'
import Button from '../../../Components/Common Components/Button'
import { getProducts } from '../../../Context/productContext'
import Product from '../../../Components/Home Components/Home Product'

function BestSelling() {

  const { Products } = getProducts()

  return (
    <section id='BestSelling'>
      <SectionTitle>This Month</SectionTitle>
      <div className="bestSellingSubTitleContainer">
        <SectionSubTitle>Best Selling Products</SectionSubTitle>
        <Button>View All</Button>
      </div>
      <div className="bestSellingProducts">
        { Products && Products.map((product)=>(
          <Product key={product.id} {...product}></Product>
        )) }
      </div>
    </section>
  )
}

export default BestSelling