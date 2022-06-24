import React from 'react'
import Button from './Button'
import Image from 'next/image'

const Gift = () => {
  return (
    <div className='w-[70%] mx-auto mr-11 my-16 p-5 gap-5 bg-backYellow flex'>
      <div className='relative'>
        <div className='absolute -left-16'>
          <Image
            src='/images/product.png'
            alt='gift'
            width='250'
            height='250'
          />
        </div>
        <div className='w-[250px] h-[250px] rounded-[50%] bg-white' />
      </div>
      <div>
        <h3 className='font-krona font-bold mb-3'>
          We have something for you!
        </h3>
        <p className='font-base text-sm mb-3 '>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ex
          incidunt commodi magni magnam tempore eveniet tempora, eius
          reprehenderit, eos voluptate! Hic sit labore eum nemo esse sint
          adipisci quos?
        </p>
        <input
          type='email'
          placeholder='Your email'
          className='block mb-8 p-3 py-2 outline-none bg-transparent border-b-[1px] w-full border-backDark'
        />
        <Button
          title='subscribe'
          bgColor='bg-backDark'
          textColor='text-white'
        />
      </div>
    </div>
  )
}

export default Gift
