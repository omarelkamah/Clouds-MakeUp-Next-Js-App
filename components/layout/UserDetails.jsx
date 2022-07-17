import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserDetails = ({ onClick, image }) => {
  return (
    <Link href='/user'>
      <Image
        src={image ? image : '/images/banner.png'}
        alt='userImage'
        width='40'
        height='40'
        className='rounded-full cursor-pointer'
        onClick={onClick}
      />
    </Link>
  )
}

export default UserDetails
