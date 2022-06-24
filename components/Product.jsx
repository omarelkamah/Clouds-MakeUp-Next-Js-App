import React from 'react'
import Image from 'next/image'
import Price from './Price'

const Product = () => {
  return (
    <div className='font-base flex flex-col w-[310px] items-center'>
      <Image
        src='/images/product.png'
        width='100px'
        height='100px'
        alt='Product'
      />
      <div className='flex flex-col'>
        <a href='/' className='text-backYellow '>
          categorie heare
        </a>
        <h4 className=''>Root Cosmetics Anti-Everything Shampoo for Woman</h4>
        <Price price='12.99' />
      </div>
    </div>
  )
}

export default Product
