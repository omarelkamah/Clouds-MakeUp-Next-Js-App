import React from 'react'
import Image from 'next/image'
import Counter from '../ui/Counter'

const SecondProduct = () => {
  return (
    <div className='flex flex-col sm:flex-row  flex-wrap items-center justify-around gap-3 mb-6 hover:shadow-lg transition-all py-4'>
      <div className='relative'>
        <Image
          src='/images/banner.png'
          alt='product'
          layout=''
          width='200px'
          height='200px'
        />
      </div>
      <div>
        <h3 className='font-krona mb-3'>
          Product:
          <span className='text-sm text-backLightDark'>mens cotton jacket</span>
        </h3>
        <p className='font-krona mb-3'>
          ID:<span className='text-sm text-backLightDark'> 5 </span>
        </p>
        <p className='font-krona'>
          CATEGORY:<span className='text-sm text-backLightDark'> makeup</span>
        </p>
      </div>
      <div className='w-fit'>
        <Counter />
      </div>
    </div>
  )
}

export default SecondProduct
