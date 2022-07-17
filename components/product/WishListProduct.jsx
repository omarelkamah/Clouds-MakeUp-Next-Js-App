import React from 'react'
import Image from 'next/image'
import Button from '../ui/Button'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/slice/cartItems'
import { removeFromWishList } from '../../store/slice/wishItems'

const WishListProduct = ({ product, name, image, price, category }) => {
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col sm:flex-row flex-wrap items-center justify-around gap-3 mb-6 hover:shadow-lg transition-all py-4'>
      <div className='relative'>
        <Image
          src={image}
          alt='product'
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
      <div className='w-fit flex flex-col items-center gap-4 sm:gap-8'>
        <Button
          title='add to cart'
          onClick={() => dispatch(addToCart(product))}
        />
        <Button
          title='remove from wishlist'
          bgColor='bg-backDark'
          textColor='text-white'
          onClick={() => dispatch(removeFromWishList(product))}
        />
      </div>
    </div>
  )
}

export default WishListProduct
