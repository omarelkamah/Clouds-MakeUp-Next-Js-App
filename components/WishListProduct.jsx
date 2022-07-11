import React from 'react'
import Image from 'next/image'
import Button from './Button'

const WishListProduct = () => {
  return (
    <div className='flex flex-wrap items-center justify-around gap-3 mb-6 hover:shadow-lg transition-all'>
      <div className='relative'>
        <Image
          src='/images/banner.png'
          alt='product'
          layout=''
          width='200px'
          height='200px'
        />
      </div>
      <div>
        <h3 className='font-krona mb-3'>
          Product:
          <span className='text-sm text-backLightDark'>mens cotton jacket</span>
        </h3>
        <p className='font-krona mb-3'>
          ID:<span className='text-sm text-backLightDark'> 5 </span>
        </p>
        <p className='font-krona'>
          CATEGORY:<span className='text-sm text-backLightDark'> makeup</span>
        </p>
      </div>
      <div className='w-fit flex flex-col items-center gap-8'>
        <Button title='add to cart' />
        <Button
          title='remove from wishlist'
          bgColor='bg-backDark'
          textColor='text-white'
        />
      </div>
    </div>
  )
}

export default WishListProduct
