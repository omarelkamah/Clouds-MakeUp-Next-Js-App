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
        <Link href='/wishlist'>
          <div className='relative'>
            <span
              className='absolute flex items-center justify-center w-6 h-6 rounded-full bg-backYellow'
              style={{ top: '-12px', right: '-15px' }}
            >
              0
            </span>
            <AiFillHeart className='text-xl cursor-pointer' />
          </div>
        </Link>
        <Link href='/cart'>
          <div className='relative'>
            <span
              className='absolute flex items-center justify-center w-6 h-6 rounded-full bg-backYellow'
              style={{ top: '-12px', right: '-15px' }}
            >
              0
            </span>
            <BsHandbag className='text-xl cursor-pointer' />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
