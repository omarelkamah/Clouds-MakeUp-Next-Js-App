import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Counter = ({ count, increment, decrement }) => {
  return (
    <div className='flex font-krona items-center gap-6 shadow-lg p-4 font-bold rounded-lg'>
      <AiOutlineMinus className='cursor-pointer' onClick={decrement} />
      <span>{count ? count : 0}</span>
      <AiOutlinePlus className='cursor-pointer' onClick={increment} />
    </div>
  )
}

export default Counter
