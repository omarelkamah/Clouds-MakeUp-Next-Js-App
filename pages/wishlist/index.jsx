import Link from 'next/link'
import React from 'react'
import WishListProduct from '../../components/product/WishListProduct'

const index = () => {
  return (
    <div className='container mx-auto mb-10'>
      <h3 className='font-krona text-center text-lg mb-10 mt-8'>
        welcome in wishlist page
      </h3>
      <WishListProduct />
      <WishListProduct />
      <WishListProduct />
    </div>
  )
}

export default index
