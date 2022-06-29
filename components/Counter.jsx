import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Counter = () => {
  return (
    <div className='flex font-krona items-center gap-3 shadow-lg p-2 rounded-lg'>
      <AiOutlineMinus className='cursor-pointer' />
      <span>1</span>
      <AiOutlinePlus className='cursor-pointer' />
    </div>
  )
}

export default Counter
