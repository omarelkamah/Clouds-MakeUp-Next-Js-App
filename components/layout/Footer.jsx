import Link from 'next/link'
import React from 'react'
import BrandLogo from '../ui/BrandLogo'
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
    { id: 1, link: '/category/powder', title: 'powder' },
    { id: 2, link: '/category/cream', title: 'skincare' },
    { id: 3, link: '/category/cream', title: 'fragrance' }
  ]

  const makeup = [
    { id: 1, link: '/category/powder', title: 'base' },
    { id: 2, link: '/category/powder', title: 'contour' },
    { id: 3, link: '/category/powder', title: 'eye makeup' },
    { id: 4, link: '/category/powder', title: 'lips' }
  ]

  const suppllements = [
    { id: 1, link: '/category/pencil', title: 'hair and nails' },
    { id: 2, link: '/category/liquid', title: 'vitamins' },
    { id: 3, link: '/category/gel', title: 'vitamins' },
    { id: 4, link: '/category/powder', title: 'nutrients' }
  ]

  const categoryLinks = [
    { id: 1, link: '/category/palette', title: 'MakeUp' },
    { id: 2, link: '/category/cream', title: 'skincare' },
    { id: 3, link: '/category/powder', title: 'fragrance' }
  ]

  return (
    <div className='flex flex-col sm:flex-row justify-around px-3 py-8 bg-backDark text-white'>
      <BrandLogo color='true' />
      <div className='flex flex-col gap-1 mb-8 mt-8 sm:mt-0'>
        <h3 className='text-backYellow font-krona mb-1'>about</h3>
        {aboutLinks.map(link => (
          <Link key={link.id} href={link.link}>
            <a className='hover:text-backYellow font-base'>{link.title}</a>
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className='text-backYellow font-krona mb-1'>skincare</h3>
        {skincare.map(link => (
          <Link key={link.id} href={link.link}>
            <a className='hover:text-backYellow font-base'>{link.title}</a>
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-1 mb-8'>
        <h3 className='text-backYellow font-krona mb-1'>makeup</h3>
        {makeup.map(link => (
          <Link key={link.id} href={link.link}>
            <a className='hover:text-backYellow font-base'>{link.title}</a>
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-1 mb-8'>
        <h3 className='text-backYellow font-krona mb-1'>suppllements</h3>
        {suppllements.map(link => (
          <Link key={link.id} href={link.link}>
            <a className='hover:text-backYellow font-base'>{link.title}</a>
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-1 mb-8'>
        <h3 className='text-backYellow font-krona mb-1'>luxury</h3>
        {categoryLinks.map(link => (
          <Link key={link.id} href={link.link}>
            <a className='hover:text-backYellow font-base'>{link.title}</a>
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
