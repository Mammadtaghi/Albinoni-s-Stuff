import React from 'react'
import './index.scss'
import SectionTitle from '../../../Components/Home Components/SectionTitle'
import SectionSubTitle from '../../../Components/Home Components/SectionSubTitle'
import { getProducts } from '../../../Context/productContext'
import Product from '../../../Components/Home Components/Home Product'
import Button from '../../../Components/Common Components/Button'

function OurProducts() {

  const { Products } = getProducts()

  return (
    <section id='OurProducts'>
      <div className="ourProductsContainer">
        <SectionTitle>Our Products</SectionTitle>
        <SectionSubTitle>Explore Our Products</SectionSubTitle>
        <div className="ourProducts">
          {Products && Products.map(product => (
            <Product key={product.id} {...product} />
          ))}
        </div>
        <div className="buttonContainer"><Button>View All Products</Button></div>
      </div>
    </section>
  )
}

export default OurProducts