import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Price from './Price'

const Poster = () => {
  return (
    <div className='container mx-auto relative -bottom-48 flex bg-[#fed2d1] p-8 px-20 items-center'>
      <div className='flex-1'>
        <h3 className='font-krona text-lg mb-4 text-backDark'>
          Be natural, <br /> be beautiful <br /> be you
        </h3>
        <Button title='see more' bgColor='bg-backDark' textColor='text-white' />
      </div>
      <div className='flex-1 flex'>
        <Image
          src='/images/product.png'
          width='300px'
          height='300px'
          alt='posterImage'
        />
        <div className='flex flex-col'>
          <Price price='84,99' />
          <span>per set</span>
        </div>
      </div>
    </div>
  )
}

export default Poster
