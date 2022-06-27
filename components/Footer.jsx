import Link from 'next/link'
import React from 'react'
import BrandLogo from './BrandLogo'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  const aboutLinks = [
    { id: 1, link: '/about', title: 'about wally' },
    { id: 2, link: '/about', title: 'careers' },
    { id: 3, link: '/about', title: 'social media' },
    { id: 4, link: '/about', title: 'affiliates' },
    { id: 5, link: '/about', title: 'supply chain' },
    { id: 6, link: '/about', title: 'sitemap' },
    { id: 7, link: '/about', title: 'global sites' }
  ]

  const skincare = [
    { id: 1, link: '/', title: 'makeup' },
    { id: 2, link: '/', title: 'skincare' },
    { id: 3, link: '/', title: 'fragrance' }
  ]

  const makeup = [
    { id: 1, link: '/', title: 'base' },
    { id: 2, link: '/', title: 'contour' },
    { id: 3, link: '/', title: 'eye makeup' },
    { id: 3, link: '/', title: 'lips' }
  ]

  const suppllements = [
    { id: 1, link: '/', title: 'hair and nails' },
    { id: 2, link: '/', title: 'vitamins' },
    { id: 3, link: '/', title: 'vitamins' },
    { id: 3, link: '/', title: 'nutrients' }
  ]

  const categoryLinks = [
    { id: 1, link: '/makeup', title: 'MakeUp' },
    { id: 2, link: '/skincare', title: 'skincare' },
    { id: 3, link: '/fragrance', title: 'fragrance' }
  ]

  return (
    <div className='flex justify-around py-8 mt-5 bg-backDark text-white'>
      <BrandLogo color='true' />
      <div className='flex flex-col gap-1'>
        <h3 className='text-white font-krona mb-1'>about</h3>
        {aboutLinks.map(link => (
          <Link key={link.id} href={link.link}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='text-white font-krona mb-1'>skincare</h3>
        {skincare.map(link => (
          <Link key={link.id} href={link.link}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='text-white font-krona mb-1'>makeup</h3>
        {makeup.map(link => (
          <Link key={link.id} href={link.link}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='text-white font-krona mb-1'>suppllements</h3>
        {suppllements.map(link => (
          <Link key={link.id} href={link.link}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='text-white font-krona mb-1'>luxury</h3>
        {categoryLinks.map(link => (
          <Link key={link.id} href={link.link}>
            {link.title}
          </Link>
        ))}
      </div>

      <div className='flex flex-col gap-1 text-4xl text-backYellow'>
        <a href='#'>
          <FaFacebookF />
        </a>
        <a href='#'>
          <AiOutlineTwitter />
        </a>
        <a href='#'>
          <AiFillInstagram />
        </a>
      </div>
    </div>
  )
}

export default Footer
