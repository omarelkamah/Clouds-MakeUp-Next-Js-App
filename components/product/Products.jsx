import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Heading from '../ui/Heading'
import Loader from '../ui/Loader'
import Product from './Product'

const Products = ({ products }) => {
  return (
    <div className='container mx-auto my-5'>
      <Heading title='Clean beauty' />
      <div className='flex flex-wrap justify-center'>
        {products ? (
          products.map(product => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              image={product.api_featured_image}
              price={product.price}
              category={product.category}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  )
}

export default Products
