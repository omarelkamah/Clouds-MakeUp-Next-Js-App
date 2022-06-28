import React from 'react'
import Button from './Button'
import Image from 'next/image'
import Price from './Price'

const Poster = ({ bottom }) => {
  return (
    <div
      className={`container mx-auto flex items-center justify-between flex-wrap relative ${bottom &&
        'bottom-0'} -bottom-48  bg-backLightDark text-white py-8 px-20`}
    >
      <div className=''>
        <h3 className='font-krona text-lg mb-4'>
          Be natural, <br /> be beautiful <br /> be you
        </h3>
        <Button title='see more' bgColor='bg-backDark' textColor='text-white' />
      </div>
      <div className=' flex'>
        <Image
          src='/images/banner.png'
          width='200px'
          height='200px'
          alt='posterImage'
        />
      </div>
    </div>
  )
}

export default Poster
