import { useEffect, useState } from 'react'
import style from './App.module.scss'

const FakeAPI = [
  {
    title: "Product",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.photomarketingwizard.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fecommerce-product-photography-25-1152x1152.jpg",
    price: 25,
  },
  {
    title: "Product",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.photomarketingwizard.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fecommerce-product-photography-25-1152x1152.jpg",
    price: 25,
  },
  {
    title: "Product",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.photomarketingwizard.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fecommerce-product-photography-25-1152x1152.jpg",
    price: 25,
  },
  {
    title: "Product",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.photomarketingwizard.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fecommerce-product-photography-25-1152x1152.jpg",
    price: 25,
  },
  {
    title: "Product",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.photomarketingwizard.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fecommerce-product-photography-25-1152x1152.jpg",
    price: 25,
  },
  {
    title: "Product",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.photomarketingwizard.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fecommerce-product-photography-25-1152x1152.jpg",
    price: 25,
  },
  {
    title: "Product",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.photomarketingwizard.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fecommerce-product-photography-25-1152x1152.jpg",
    price: 25,
  },
  {
    title: "Product",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.photomarketingwizard.com%2Fwp-content%2Fuploads%2F2018%2F02%2Fecommerce-product-photography-25-1152x1152.jpg",
    price: 25,
  },
]

function App() {

  const [Products, setProducts] = useState([])

  useEffect(() => {
    setProducts(FakeAPI)
  }, [])

  console.log(Products);

  return (
    <div id={style.Container}>
      <div className={style.gridContainer}>
        {Products && Products.map((product, i) => (
          <div key={i} style={{ gridArea: `grid${i + 1}` }} className={style.product}>
            <div className={style.imgBox}><img src={product.image} alt="" /></div>
            <div className={style.textBox}>
              <h2>{product.title}</h2>
              <span>{product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
