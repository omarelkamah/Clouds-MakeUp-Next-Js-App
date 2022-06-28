import React from 'react'
import Link from 'next/link'
import { AiFillHeart } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import BrandLogo from './BrandLogo'

const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between items-center p-4 px-8 font-krona font-bold'>
      <BrandLogo />
      <div className='flex items-center gap-4'>
        <div className='text-xs flex gap-8'>
          <Link href='/' className=''>
            home
          </Link>
          <Link href='/search'>search</Link>
          <Link href='/about'>about</Link>
        </div>
        <Link href='/'>
          <AiFillHeart className='text-xl cursor-pointer' />
        </Link>

        <Link href='/'>
          <BsHandbag className='text-xl cursor-pointer' />
        </Link>
      </div>
    </div>
  )
}

export default Navbar
