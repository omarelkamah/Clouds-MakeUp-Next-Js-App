import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className='container mx-auto flex justify-center items-center my-10 h-screen'>
      <div className='flex flex-col justify-center mx-auto flex-1 '>
        <h1 className='font-krona font-bold text-5xl leading-snug  mb-3'>
          The Makeup e-commerce project
        </h1>
        <p className='font-base leading-6 my-5'>
          This project is built with data from a MakeUp API using Axios,
          Tailwind CSS, ReactJS, PropTypes, React Context API and React Router.
        </p>
        <p className='font-base leading-6 mb-5'>
          Webtwo ipsum divvyshot. disqus elgg klout. Jumo wufoo hulu spotify
          trulia, twitter nuvvo. Omgpop tumblr odeo mog palantir squidoo balihoo
          nuvvo, etsy yuntaa elgg reddit kiko oovoo. Kno revver oovoo, blyve.
        </p>
        <Button title='see more' />
      </div>
      <div className='flex-[.5] relative'>
        <Image
          src='/images/product.png'
          layout='responsive'
          objectFit='cover'
          width='100%'
          height='100%'
          alt='Product'
        />
      </div>
    </div>
  )
}

export default Header
