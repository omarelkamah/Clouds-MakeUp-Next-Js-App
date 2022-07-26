import React from 'react'
import Image from 'next/image'
import Counter from '../ui/Counter'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../store/slice/cartItems'

const SecondProduct = ({ product, name, image, price, category, count }) => {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col sm:flex-row  flex-wrap items-center justify-around gap-3 mb-6 hover:shadow-lg transition-all py-4'>
      <div className='relative'>
        <Image
          src={`https://${image}`}
          alt={name}
          layout=''
          width='200px'
          height='200px'
        />
      </div>
      <div>
        <h3 className='font-krona mb-3'>
          Product:
          <span className='text-sm text-backLightDark'> {name}</span>
        </h3>
        <p className='font-krona mb-3'>
          price:<span className='text-sm text-backLightDark'> {price}</span>
        </p>
        <p className='font-krona'>
          CATEGORY:
          <span className='text-sm text-backLightDark'> {category}</span>
        </p>
      </div>
      <div className='w-fit'>
        <Counter
          count={count}
          increment={() => dispatch(addToCart(product))}
          decrement={() => dispatch(removeFromCart(product))}
        />
      </div>
    </div>
  )
}

export default SecondProduct
