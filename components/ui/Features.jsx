import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { CgShoppingBag } from 'react-icons/cg'
import { MdOutlinePayment } from 'react-icons/md'

const Features = () => {
  return (
    <div className='container mx-auto my-10 flex justify-between flex-col sm:flex-row'>
      <div className='flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 my-5'>
        <div className='flex '>
          <span className='bg-backYellow w-7 h-7 rounded-[50%] block absolute -z-10'></span>
          <TbTruckDelivery className='text-4xl ml-3' />
        </div>
        <div>
          <h3 className='font-krona font-bold mb-1'>Delivery</h3>
          <p className='font-base text-sm'>
            nostrum quia vel, mollitia odit, alias architecto blanditiis nemo
            dolorum distinctio.
          </p>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 my-5'>
        <div className='flex '>
          <span className='bg-backYellow w-7 h-7 rounded-[50%] block absolute -z-10'></span>
          <CgShoppingBag className='text-4xl ml-3' />
        </div>
        <div>
          <h3 className='font-krona font-bold mb-1'>Products</h3>
          <p className='font-base text-sm'>
            nostrum quia vel, mollitia odit, alias architecto blanditiis nemo
            dolorum distinctio.
          </p>
        </div>
      </div>
      <div className='flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left my-5'>
        <div className='flex '>
          <span className='bg-backYellow w-7 h-7 rounded-[50%] block absolute -z-10'></span>
          <MdOutlinePayment className='text-4xl ml-3' />
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
