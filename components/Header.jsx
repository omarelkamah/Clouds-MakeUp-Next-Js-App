import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className='container mx-auto flex justify-center my-10 h-[50vh]'>
      <div className='container flex flex-col justify-around mx-auto flex-1 '>
        <h1 className='font-krona text-2xl mb-3'>
          The new lineup you'll swear by for dullness, dryness and breakouts
        </h1>
        <p className='text-[10px] font-base leading-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quo at
          dolorum doloremque voluptatum nisi hic maxime, optio atque, dicta
          fuga. Eaque alias beatae, eveniet dicta a provident ipsa autem!
        </p>
        <Button title='more' />
      </div>
      <div className='flex-1 relative'>
        <Image
          src='/images/product.png'
          layout='fill'
          objectFit='cover'
          alt='Product'
        />
      </div>
    </div>
  )
}

export default Header
