import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillHeart, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import Price from '../../components/Price'
import Button from '../../components/Button'
import Features from '../../components/Features'
import Poster from '../../components/Poster'
import Counter from '../../components/Counter'

const Product = () => {
  return (
    <div className='container mx-auto my-5'>
      <div>
        <h5 className='font-krona text-backDark'>
          Root cosmetics Anti Everything shampoo for woman
        </h5>
        <p className='text-backGray'>root shapmoo</p>
      </div>
      <div className='flex flex-wrap gap-16 my-10'>
        <div className='h-80 w-80 relative'>
          <Image
            src='/images/banner.png'
            layout='fill'
            objectFit='cover'
            alt='Product'
          />
        </div>
        <div className='flex-1'>
          <div className='text-backGray flex items-center gap-4 mb-5'>
            <AiFillHeart className='text-xl' />
            add to favorites
          </div>
          <div>
            <Link href='/category/'>
              <a className='text-backYellow'>shampoo</a>
            </Link>
            <h1 className='font-krona'>
              Root cosmetics Anti Everything shampoo for woman
            </h1>
          </div>
          <div className='flex items-center justify-between my-10'>
            <Price price='20' />
            <Counter />
            <Button title='add to basket' />
          </div>
          <div>
            <h5 className='font-krona text-backDark'>description</h5>
            <p className='font-base'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
              consequuntur rerum pariatur soluta voluptates corrupti
              exercitationem, velit maiores voluptatum! Vel minus perspiciatis a
              labore odio doloremque fugit obcaecati sit aliquid!
            </p>
          </div>
        </div>
      </div>
      <Features />
      <div>
        <h3 className='text-center font-krona text-xl'>For You</h3>
        <Product />
      </div>
      <Poster bottom='0' />
    </div>
  )
}

export default Product
