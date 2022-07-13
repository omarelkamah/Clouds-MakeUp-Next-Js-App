import React from 'react'
import Link from 'next/link'

const Button = ({ title, bgColor, textColor, link, type }) => {
  return (
    <button
      className={`bg-backYellow text-backDark ${textColor &&
        textColor} ${bgColor &&
        bgColor} w-fit p-2 py-4 px-8 rounded-full font-bold text-sm font-krona  block cursor-pointer`}
      type={type && type}
    >
      {link ? <Link href={`/${link}`}>{title}</Link> : title}
    </button>
  )
}

export default Button
