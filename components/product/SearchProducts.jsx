import React from 'react'
import Product from './Product'
import Loader from '../ui/Loader'

const SearchProducts = ({ products }) => {
  return (
    <div className='flex flex-wrap  flex-1 justify-center'>
      {products ? (
        products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image_link}
          />
        ))
      ) : (
        <Loader classes='items-start pt-12' />
      )}
    </div>
  )
}

export default SearchProducts
