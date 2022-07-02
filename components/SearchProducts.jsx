import React from 'react'
import Product from './Product'

const SearchProducts = ({ products }) => {
  return (
    <div className='flex flex-wrap'>
      {products.map(product => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image_link}
        />
      ))}
    </div>
  )
}

export default SearchProducts
