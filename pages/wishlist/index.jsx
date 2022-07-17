import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'
import WishListProduct from '../../components/product/WishListProduct'

const index = () => {
  const { wishItems } = useSelector(state => state.wish)
  return (
    <div className='container mx-auto mb-10'>
      <h3 className='font-krona text-center text-lg mb-10 mt-8'>
        welcome in wishlist page
      </h3>
      {wishItems.length === 0 && (
        <p className='font-krona text-xl text-center mt-4 mb-24'>
          empty wishlist !
        </p>
      )}
      {wishItems.map(product => (
        <WishListProduct
          key={product.id}
          product={product}
          name={product.name}
          image={product.image_link}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  )
}

export default index
