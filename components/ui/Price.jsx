import React from 'react'

const Price = ({ price }) => {
  return (
    <span className='flex items-center font-krona text-xl font-bold relative'>
      <span className='absolute -z-10 w-10 h-10 inline-block bg-backLightGray rounded-full' />
      <span className='ml-6'>{price}$</span>
    </span>
  )
}

export default Price
