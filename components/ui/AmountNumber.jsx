import React from 'react'

const AmountNumber = ({ amount }) => {
  return (
    <span
      className='absolute flex items-center justify-center w-6 h-6 rounded-full bg-backYellow font-base text-sm cursor-pointer'
      style={{ top: '-12px', right: '-15px' }}
    >
      {amount}
    </span>
  )
}

export default AmountNumber
