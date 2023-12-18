import { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../Hooks/useFetch";

const API = [
    {
        "id": 1,
        "img":"https://www.designboom.com/wp-content/uploads/2016/12/header1.jpg",
        "title":"HAVIT HV-G92 Gamepad",
        "price": "120.00",
        "discount": 20,
        "inStock": 10,
        "ratedTimes":75,
        "rated":4.5
    },
    {
        "id": 2,
        "img":"https://digitaladvisor.com/wp-content/uploads/2020/05/wiUv69iFSzArgPKjBBTH9M.jpg",
        "title":"HAVIT HV-G92 Gamepad",
        "price": "220.00",
        "discount": 30,
        "inStock": 10,
        "ratedTimes":75,
        "rated":3.5
    },
    {
        "id": 3,
        "img":"https://i5.walmartimages.com/asr/b94f22b0-1dee-4ca0-9145-59f23994d32f.60d6c9eb7a02dd47b5d0297e4dd91e5b.jpeg",
        "title":"HAVIT HV-G92 Gamepad",
        "price": "85.00",
        "discount": 35,
        "inStock": 10,
        "ratedTimes":75,
        "rated":4
    },
    {
        "id": 4,
        "img":"https://cdnc.lystit.com/photos/02d3-2014/02/28/michael-michael-kors-brown-jet-set-signature-tote-handbag-product-1-18071729-3-219015500-normal.jpeg",
        "title":"HAVIT HV-G92 Gamepad",
        "price": "160.00",
        "discount": 40,
        "inStock": 10,
        "ratedTimes":75,
        "rated":3
    },
    {
        "id": 5,
        "img":"https://www.chloe.com/product_image/45577274ch/r/w1536.jpg",
        "title":"HAVIT HV-G92 Gamepad",
        "price": "132.00",
        "discount": 20,
        "inStock": 10,
        "ratedTimes":75,
        "rated":4.5
    },
    {
        "id": 6,
        "img":"https://happygentleman.com/wp-content/uploads/2019/11/remmy-hood-mens-leather-jacket-red2.jpg",
        "title":"HAVIT HV-G92 Gamepad",
        "price": "90.00",
        "discount": 10,
        "inStock": 10,
        "ratedTimes":75,
        "rated":5
    },
    {
        "id": 7,
        "img":"https://wewhoroam.com/wp-content/uploads/2020/10/legendary-whitetails-mens-rugged-full-zip-dakota-utility-jacket2-scaled.jpg",
        "title":"HAVIT HV-G92 Gamepad",
        "price": "175.00",
        "discount": 25,
        "inStock": 10,
        "ratedTimes":75,
        "rated":3
    }
]

const ProductContext = createContext()

export const ProductProvider=({children})=>{

    const [Products, setProducts] = useState([])

    useEffect(() => {
        setProducts(API)
    }, [])
    

    const data={
        Products
    }

    return(
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    )
}

export const getProducts=()=>useContext(ProductContext)