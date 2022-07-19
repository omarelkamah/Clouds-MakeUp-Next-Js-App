import React from 'react'
import Product from './Product'
import Loader from '../ui/Loader'

const SearchProducts = ({ products }) => {
  console.log(products)
  return (
    <div className='flex flex-wrap mb-16 flex-1 justify-center'>
      {products ? (
        products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image_link}
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
