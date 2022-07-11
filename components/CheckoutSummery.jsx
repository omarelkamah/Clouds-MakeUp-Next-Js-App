import React from 'react'

const CheckoutSummery = () => {
  return (
    <div className='flex-1'>
      <h3 className='font-krona mb-6 text-center text-lg'>ORDER SUMMARY</h3>
      <div className='flex justify-between mb-8'>
        <p className='font-base'>Subtotal</p>
        <p>$ 10</p>
      </div>
      <div className='flex justify-between mb-8'>
        <p className='font-base'>Estimated Shipping</p>
        <p>$ 0</p>
      </div>
      <div className='flex justify-between mb-8'>
        <p className='font-base'>Subtotal</p>
        <p>$ 10</p>
      </div>
      <div className='flex justify-between font-krona mb-8'>
        <p className=''>Total</p>
        <p>$ 261.830</p>
      </div>
    </div>
  )
}

export default CheckoutSummery
