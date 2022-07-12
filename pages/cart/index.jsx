import React from 'react'
import CartItems from '../../components/CartItems'
import CartSummery from '../../components/CartSummery'

const index = () => {
  return (
    <div className='container mx-auto flex flex-col-reverse md:flex-row gap-10 py-16'>
      <CartItems />
      <CartSummery />
    </div>
  )
}

export default index
