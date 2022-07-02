import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Heading from './Heading'
import Product from './Product'

const Products = ({ products }) => {
  console.log(products)

  return (
    <div className='container mx-auto my-5'>
      <Heading title='Clean beauty' />
      <div className='flex flex-wrap justify-center'>
        {products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image_link}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Products
