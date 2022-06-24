import React from 'react'
import Button from './Button'

const Heading = ({ title }) => {
  return (
    <div className='flex justify-between font-base'>
      <h4 className='text-2xl'>{title}</h4>
      <Button title='more' />
    </div>
  )
}

export default Heading
