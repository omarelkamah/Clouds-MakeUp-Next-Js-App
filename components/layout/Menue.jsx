import React from 'react'
import Link from 'next/link'
import { AiFillHeart, AiOutlineClose } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import AmountNumber from '../ui/AmountNumber'
import UserDetails from './UserDetails'

const Menue = ({ showMenue, setShowMenue, wishItems, items, signIn }) => {
  return (
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
          <AmountNumber amount={wishItems.length} />
          <AiFillHeart className='text-xl cursor-pointer' />
        </div>
      </Link>
      <Link href='/cart'>
        <div className='relative' onClick={() => setShowMenue(false)}>
          <AmountNumber amount={items.length} />
          <BsHandbag className='text-xl cursor-pointer' />
        </div>
      </Link>
      {signIn && <UserDetails onClick={() => setShowMenue(false)} />}
    </div>
  )
}

export default Menue
