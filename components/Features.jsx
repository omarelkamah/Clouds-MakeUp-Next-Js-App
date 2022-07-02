import React from 'react'
import { FaOpencart } from 'react-icons/fa'
import { AiFillHeart } from 'react-icons/ai'

const Features = () => {
  return (
    <div className='container mx-auto my-10 flex justify-between'>
      <div className='flex gap-4'>
        <div className='flex '>
          <span className='bg-backYellow w-7 h-7 rounded-[50%] block absolute -z-10'></span>
          <AiFillHeart className='text-4xl ml-3' />
        </div>
        <div>
          <h3 className='font-krona font-bold mb-1'>Delivery</h3>
          <p className='font-base text-sm'>
            nostrum quia vel, mollitia odit, alias architecto blanditiis nemo
            dolorum distinctio.
          </p>
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='flex '>
          <span className='bg-backYellow w-7 h-7 rounded-[50%] block absolute -z-10'></span>
          <AiFillHeart className='text-4xl ml-3' />
        </div>
        <div>
          <h3 className='font-krona font-bold mb-1'>Products</h3>
          <p className='font-base text-sm'>
            nostrum quia vel, mollitia odit, alias architecto blanditiis nemo
            dolorum distinctio.
          </p>
        </div>
      </div>
      <div className='flex gap-4'>
        <div className='flex '>
          <span className='bg-backYellow w-7 h-7 rounded-[50%] block absolute -z-10'></span>
          <AiFillHeart className='text-4xl ml-3' />
        </div>
        <div>
          <h3 className='font-krona font-bold mb-1'>Payments</h3>
          <p className='font-base text-sm'>
            nostrum quia vel, mollitia odit, alias architecto blanditiis nemo
            dolorum distinctio.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Features