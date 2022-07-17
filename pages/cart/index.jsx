import React from 'react'
import SecondProducts from '../../components/product/SecondProducts'
import CartSummery from '../../components/cart/CartSummery'
import { useSelector } from 'react-redux'

const index = () => {
  const { items } = useSelector(state => state.cart)

  return (
    <div className='container mx-auto flex flex-col-reverse md:flex-row gap-10 py-16'>
      <SecondProducts products={items} />
      <CartSummery products={items} />
    </div>
  )
}

export default index
