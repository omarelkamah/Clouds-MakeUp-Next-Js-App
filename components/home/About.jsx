import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='bg-[#f8f8f8]'>
      <div className='container mx-auto flex flex-col md:flex-row items-center gap-4 pt-[200px] pb-9 my-7 '>
        <div className='relative flex-1 h-screen'>
          <Image
            src='/images/about.jpg'
            alt='About'
            layout='responsive'
            objectFit='cover'
            width='100%'
            height='100%'

            // width='100'
            // height='100'
          />
        </div>
        <div className=' text-backGray flex-1 font-base'>
          <h3 className='font-krona text-backDark text-3xl mb-4'>
            Clean code that you <br /> deserve
          </h3>
          <p className='mb-3 text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            laudantium excepturi vel hic fuga voluptates quam beatae itaque
            quaerat quis?
          </p>
          <p className='text-sm '>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
            magnam reprehenderit ratione perferendis hic excepturi, maxime iusto
            vitae quo? Blanditiis voluptas sapiente suscipit? Libero
            reprehenderit deleniti possimus quibusdam asperiores eaque?
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
