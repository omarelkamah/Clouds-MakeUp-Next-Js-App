import React, { useState } from 'react'
import Link from 'next/link'
import BrandLogo from '../ui/BrandLogo'
import AmountNumber from '../ui/AmountNumber'
import Menue from './Menue'
import UserDetails from './UserDetails'
import { AiFillHeart, AiOutlineMenu } from 'react-icons/ai'
import { BsHandbag } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useSession, signIn } from 'next-auth/react'

const Navbar = () => {
  const [showMenue, setShowMenue] = useState(false)
  const { data: session } = useSession()
  const { items } = useSelector(state => state.cart)
  const { wishItems } = useSelector(state => state.wish)

  return (
    <nav className='container mx-auto flex justify-between items-center p-4 px-8 font-krona font-bold'>
      <BrandLogo />
      <div className='hidden sm:flex items-center gap-4'>
        <div className='text-xs flex gap-8'>
          <Link href='/'>home</Link>
          <Link href='/search'>filter</Link>
          <Link href='/about'>about</Link>
        </div>
        {session ? (
          <UserDetails image={session?.user.image} />
        ) : (
          <Link href='/login'>
            <a className='text-xs'>login</a>
          </Link>
        )}
        <Link href='/wishlist'>
          <div className='relative'>
            <AmountNumber amount={wishItems.length} />
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

      <Menue
        showMenue={showMenue}
        setShowMenue={setShowMenue}
        wishItems={wishItems}
        items={items}
        session={session}
        image={session?.user.image}
      />
    </nav>
  )
}

export default Navbar
