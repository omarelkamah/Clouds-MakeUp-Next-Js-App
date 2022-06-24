import React from 'react'
import Link from 'next/link'
import { AiFillHeart, AiOutlineSearch } from 'react-icons/ai'
import { FaOpencart } from 'react-icons/fa'
import BrandLogo from './BrandLogo'

const Navbar = () => {
  return (
    <div className='container mx-auto flex justify-between items-center p-4 px-8 font-krona'>
      <BrandLogo />
      <div className='text-xs flex gap-4'>
        <Link href='/' className=''>
          Skincare
        </Link>
        <Link href='/' skincare>
          Make-up
        </Link>
        <Link href='/'>mens</Link>
        <Link href='/'>Superelements</Link>
      </div>
      <div className='flex gap-4'>
        <AiFillHeart />
        <AiOutlineSearch />
        <FaOpencart />
      </div>
    </div>
  )
}

export default Navbar
