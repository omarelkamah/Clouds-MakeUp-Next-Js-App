import React from 'react'
import Button from './Button'

const Heading = ({ title }) => {
  return (
    <div className='flex justify-between font-krona mb-5'>
      <h4 className='text-2xl'>{title}</h4>
      <Button title='see more' link='/search' />
    </div>
  )
}

export default Heading
