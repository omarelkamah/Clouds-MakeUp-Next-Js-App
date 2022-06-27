import React from 'react'
import Link from 'next/link'

const Button = ({ title, bgColor, textColor }) => {
  return (
    <Link href='/' className=''>
      <span
        className={`bg-backYellow text-backDark ${textColor &&
          textColor} ${bgColor &&
          bgColor} w-fit p-2 py-4 px-8 rounded-full font-bold text-sm font-krona  block cursor-pointer`}
      >
        {title}
      </span>
    </Link>
  )
}

export default Button
