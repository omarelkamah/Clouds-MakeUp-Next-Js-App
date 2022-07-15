import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Counter = () => {
  return (
    <div className='flex font-krona items-center gap-6 shadow-lg p-4 font-bold rounded-lg'>
      <AiOutlineMinus className='cursor-pointer' />
      <span>0</span>
      <AiOutlinePlus className='cursor-pointer' />
    </div>
  )
}

export default Counter
