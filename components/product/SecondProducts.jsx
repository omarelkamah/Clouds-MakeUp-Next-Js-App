import React from 'react'
import SecondProduct from './SecondProduct'

const SecondProducts = ({ products }) => {
  return (
    <div className='flex-2'>
      {products.length === 0 && (
        <p className='font-krona text-xl text-center mt-4'>empty cart !</p>
      )}
      {products.map(product => (
        <SecondProduct
          key={product.id}
          product={product}
          name={product.name}
          image={product.api_featured_image}
          price={product.price}
          category={product.category}
          count={product.qty}
        />
      ))}
    </div>
  )
}

export default SecondProducts
