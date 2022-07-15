import React from 'react'
import SecondProducts from '../../components/product/SecondProducts'
import CartSummery from '../../components/cart/CartSummery'

const index = () => {
  return (
    <div className='container mx-auto flex flex-col-reverse md:flex-row gap-10 py-16'>
      <SecondProducts />
      <CartSummery />
    </div>
  )
}

export default index
