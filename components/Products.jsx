import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import Product from './Product'

export const getStaticProps = async () => {
  const res = await fetch(
    'https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=blush'
  )
  const data = await res.json()

  return {
    props: { products: data.data }
  }
}

const Products = ({ products }) => {
  // const [products, setProducts] = useState([])
  // useEffect(() => {
  //   axios
  //     .get(
  //       'https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=blush'
  //     )
  //     .then(res => setProducts(res.data))
  // }, [])
  console.log(products)

  return (
    <div className='container mx-auto my-5'>
      <Heading title='Clean beauty' />
      <div className='flex flex-wrap justify-center'>
        {/* {products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image_link}
            price={product.price}
          />
        ))} */}
      </div>
    </div>
  )
}

export default Products
