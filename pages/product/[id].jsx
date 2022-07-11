import React, { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillHeart } from 'react-icons/ai'
import Price from '../../components/Price'
import Button from '../../components/Button'
import Features from '../../components/Features'
import Poster from '../../components/Poster'
import Counter from '../../components/Counter'

export const getStaticPaths = async () => {
  const res = await fetch(
    'http://makeup-api.herokuapp.com/api/v1/products.json'
  )
  const products = await res.json()

  const paths = products.map(product => {
    return {
      params: { id: product.id.toString() }
    }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async context => {
  const id = context.params.id
  const res = await fetch(
    `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
  )
  const product = await res.json()

  return { props: { product } }
}

const Product = ({ product }) => {
  // get products with same category

  return (
    <div className='container mx-auto my-5'>
      <Poster bottom='0' />
      <div>
        <h5 className='font-krona text-backDark mt-8'>{product.name}</h5>
        <p className='text-backGray'>{product.brand}</p>
      </div>
      <div className='flex flex-wrap gap-16 my-10'>
        <div className='h-80 w-80 relative'>
          <Image
            src={product.image_link}
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
              <a className='text-backYellow'>{product.category}</a>
            </Link>
            <h1 className='font-krona'>{product.name}</h1>
          </div>
          <div className='flex items-center justify-between my-10'>
            <Price price={product.price} />
            <Counter />
            <Button title='add to basket' link='/cart' />
          </div>
          <div>
            <h5 className='font-krona text-backDark mb-2'>description</h5>
            <p className='font-base'>{product.description}</p>
          </div>
        </div>
      </div>
      <Features />
      <div>
        <h3 className='text-center font-krona text-xl'>For You</h3>
        {/* <Product /> */}
      </div>
    </div>
  )
}

export default memo(Product)
