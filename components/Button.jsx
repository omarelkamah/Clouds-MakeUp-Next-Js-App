import React from 'react'
import Link from 'next/link'

const Button = ({ title, bgColor, textColor, link }) => {
  return (
    <span
      className={`bg-backYellow text-backDark ${textColor &&
        textColor} ${bgColor &&
        bgColor} w-fit p-2 py-4 px-8 rounded-full font-bold text-sm font-krona  block cursor-pointer`}
    >
      {link ? <Link href={`/${link}`}>{title}</Link> : title}
    </span>
  )
}

export default Button
