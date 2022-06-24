import Link from 'next/link'
import React from 'react'
import BrandLogo from './BrandLogo'

const Footer = () => {
  const pagesLinks = [
    { id: 1, link: '/about', title: 'About' },
    { id: 2, link: '/cart', title: 'Cart Items' },
    { id: 3, link: '/careers', title: 'Careers' },
    { id: 4, link: '/global-sites', title: 'Global Sites' }
  ]

  const categoryLinks = [
    { id: 1, link: '/makeup', title: 'MakeUp' },
    { id: 2, link: '/skincare', title: 'Skincare' },
    { id: 3, link: '/fragrance', title: 'Fragrance' }
  ]

  return (
    <div className='flex justify-around py-8 mt-5 bg-backDark text-white'>
      <BrandLogo />
      <div className='flex flex-col gap-3'>
        {pagesLinks.map(link => (
          <Link key={link.id} href={link.link}>
            {link.title}
          </Link>
        ))}
      </div>
      <div className='flex flex-col gap-3'>
        {categoryLinks.map(link => (
          <Link key={link.id} href={link.link}>
            {link.title}
          </Link>
        ))}
      </div>
      {/* AddSocial Icons */}
    </div>
  )
}

export default Footer
