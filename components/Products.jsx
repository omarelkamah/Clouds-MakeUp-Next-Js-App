import React from 'react'
import Button from './Button'
import Heading from './Heading'
import Product from './Product'

const Products = () => {
  return (
    <div className='container mx-auto my-5'>
      <Heading title='Clean beauty' />
      <div className='flex gap-3 flex-wrap'>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default Products
