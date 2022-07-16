import React, { useState } from 'react'
import Link from 'next/link'
import { AiFillHeart } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import BrandLogo from '../ui/BrandLogo'
import AmountNumber from '../ui/AmountNumber'

const Navbar = () => {
  //TODO: change Icons in navbar
  //TODO: Make main manue show in desktop

  const [showMenue, setShowMenue] = useState(false)
  return (
    <div className='container mx-auto flex justify-between items-center p-4 px-8 font-krona font-bold'>
      <BrandLogo />
      <div className='hidden sm:flex items-center gap-4'>
        <div className='text-xs flex gap-8'>
          <Link href='/' className=''>
            home
          </Link>
          <Link href='/search'>search</Link>
          <Link href='/about'>about</Link>
        </div>
        <Link href='/wishlist'>
          <div className='relative'>
            <AmountNumber amount='10' />
            <AiFillHeart className='text-xl cursor-pointer' />
          </div>
        </Link>
        <Link href='/cart'>
          <div className='relative'>
            <AmountNumber amount='3' />
            <BsHandbag className='text-xl cursor-pointer' />
          </div>
        </Link>
      </div>

      <AiFillHeart
        className='cursor-pointer block sm:hidden text-2xl'
        onClick={() => setShowMenue(true)}
      />
      <div
        className={`fixed ${
          showMenue ? 'right-0' : '-right-[100%]'
        }  top-0 w-[60%] transition-all h-screen z-10 flex flex-col items-center justify-center bg-white gap-8`}
      >
        <AiFillHeart
          className='absolute top-8 right-8 text-xl cursor-pointer'
          onClick={() => setShowMenue(false)}
        />
        <div className='text-xs flex flex-col items-center justify-center gap-8'>
          <Link href='/'>
            <a onClick={() => setShowMenue(false)}>home</a>
          </Link>
          <Link href='/search'>
            <a onClick={() => setShowMenue(false)}>search</a>
          </Link>
          <Link href='/about'>
            <a onClick={() => setShowMenue(false)}>about</a>
          </Link>
        </div>
        <Link href='/wishlist'>
          <div className='relative' onClick={() => setShowMenue(false)}>
            <AmountNumber amount='10' />
            <AiFillHeart className='text-xl cursor-pointer' />
          </div>
        </Link>
        <Link href='/cart'>
          <div className='relative' onClick={() => setShowMenue(false)}>
            <AmountNumber amount='3' />
            <BsHandbag className='text-xl cursor-pointer' />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
