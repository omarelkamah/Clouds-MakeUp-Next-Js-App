import React from 'react'
import Product from './Product'
import Loader from '../ui/Loader'

const SearchProducts = ({ products }) => {
  // console.log(products.length === 0)
  return (
    <div className='flex flex-wrap mb-16 mt-5 flex-1 justify-center'>
      {products.length !== 0 ? (
        products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.api_featured_image}
            category={product.category}
          />
        ))
      ) : (
        <Loader classes='items-start pt-12' />
      )}
    </div>
  )
}

export default SearchProducts
