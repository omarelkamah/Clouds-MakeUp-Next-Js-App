import React from 'react'
import Button from '../ui/Button'
import Image from 'next/image'

const Gift = () => {
  return (
    <div className='p-3 mt-16 px-4 py-16 gap-5 bg-backYellow flex flex-col md:flex-row items-center justify-center'>
      <div className='relative flex-1 flex justify-center items-center'>
        <div className='absolute'>
          <Image
            src='/images/product.png'
            alt='gift'
            width='300'
            height='300'
          />
        </div>
        <div className='w-[250px] h-[250px] rounded-full bg-white' />
      </div>
      <div className='flex-1 flex flex-col items-center md:items-start'>
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
          className='inline-block mb-8 p-3 py-2 outline-none bg-transparent border-b-[1px] w-full border-backDark'
          required
        />
        <Button
          title='subscribe'
          bgColor='bg-backDark'
          textColor='text-white'
          type='submit'
        />
      </div>
    </div>
  )
}

export default Gift
