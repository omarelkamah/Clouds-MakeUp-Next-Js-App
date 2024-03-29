import React from 'react'
import Image from 'next/image'
import Price from '../ui/Price'
import Link from 'next/link'

const Product = ({ id, name, price, image, category }) => {
  return (
    <Link href={`/product/${id}`}>
      <div className='flex w-[250px] flex-col justify-between align-center cursor-pointer rounded-md mb-6 sm:mr-6 px-4 py-6 transform hover:scale-105 hover:shadow-xl transition delay-50 duration-300 ease-in-out'>
        <div className='h-40 relative'>
          <Image
            src={`http://${image}`}
            layout='fill'
            objectFit='cover'
            alt='Product'
          />
        </div>
        <div className='flex flex-col'>
          <Link href={`/category/${category}`}>
            <a className='text-backYellow text-sm mt-4'>{category}</a>
          </Link>
          <h4 className='font-base my-4 leading-5'>{name}</h4>
          <Price price={price} />
        </div>
      </div>
    </Link>
  )
}

export default React.memo(Product)
