import React from 'react'
import Link from 'next/link'

const BrandLogo = ({ color }) => {
  return (
    <div className={`logo text-3xl font-bold ${color && 'text-backYellow'}`}>
      <Link href='/'>Clouds</Link>
    </div>
  )
}

export default BrandLogo
