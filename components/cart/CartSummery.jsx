import React from 'react'
import Button from '../ui/Button'

const CartSummery = () => {
  return (
    <div className='flex-1 p-3'>
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
      <div className='flex justify-center'>
        <Button title='check out' link='/checkout' />
      </div>
    </div>
  )
}

export default CartSummery
