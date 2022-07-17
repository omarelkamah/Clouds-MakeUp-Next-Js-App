import React, { useState } from 'react'
import Link from 'next/link'
import { AiFillHeart, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import BrandLogo from '../ui/BrandLogo'
import AmountNumber from '../ui/AmountNumber'
import { useSelector } from 'react-redux'

const Navbar = () => {
  //TODO: change Icons in navbar
  //TODO: Make main manue show in desktop
  const [showMenue, setShowMenue] = useState(false)
  const { items } = useSelector(state => state.cart)
  console.log(items)

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
            <AmountNumber amount={items.length} />
            <BsHandbag className='text-xl cursor-pointer' />
          </div>
        </Link>
      </div>

      <AiOutlineMenu
        className='cursor-pointer block sm:hidden text-3xl'
        onClick={() => setShowMenue(true)}
      />
      <div
        className={`fixed ${
          showMenue ? 'right-0' : '-right-[100%]'
        }  top-0 w-[60%] transition-all h-screen z-10 flex flex-col items-center justify-center bg-white gap-8`}
      >
        <AiOutlineClose
          className='absolute top-8 right-8 text-2xl cursor-pointer'
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
            <AmountNumber amount={items.length} />
            <BsHandbag className='text-xl cursor-pointer' />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Navbar
