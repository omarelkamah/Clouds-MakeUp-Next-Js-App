import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserDetails = ({ onClick, image }) => {
  return (
    <Link href='/user'>
      <Image
        src={image}
        alt='userImage'
        width='50'
        height='50'
        className='rounded-full cursor-pointer'
        onClick={onClick}
      />
    </Link>
  )
}

export default UserDetails
