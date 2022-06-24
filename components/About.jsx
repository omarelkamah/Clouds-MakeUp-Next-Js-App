import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='flex pt-[200px] pb-9 my-7 bg-[#f8f8f8]'>
      <div className='relative flex-1'>
        <Image
          src='/images/product.png'
          alt='About'
          objectFit='cover'
          layout='fill'
        />
      </div>
      <div className='text-backGray flex-1 font-base'>
        <h3 className='font-krona text-backDark text-2xl font-bold mb-4'>
          Elegance What you <br /> deserves.
        </h3>
        <p className='mb-3 text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          laudantium excepturi vel hic fuga voluptates quam beatae itaque
          quaerat quis?
        </p>
        <p className='text-sm '>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          magnam reprehenderit ratione perferendis hic excepturi, maxime iusto
          vitae quo? Blanditiis voluptas sapiente suscipit? Libero reprehenderit
          deleniti possimus quibusdam asperiores eaque?
        </p>
      </div>
    </div>
  )
}

export default About
