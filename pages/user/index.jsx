import React from 'react'
import Image from 'next/image'
import { useSession, signOut } from 'next-auth/react'
import Button from '../../components/ui/Button'

const index = () => {
  const { data: session } = useSession()

  return (
    <div className='container mx-auto my-10 flex flex-col items-center justify-center'>
      <Image
        src={session?.user.image ? session?.user.image : '/images/banner.png'}
        alt={session?.user.name}
        width='100'
        height='100'
        className='rounded-full'
      />
      <h3 className='font-krona mt-6'>name: {session?.user.name}</h3>
      <h3 className='font-krona mt-6 mb-6'>email: {session?.user.email}</h3>
      <Button
        title='sign out'
        onClick={() => signOut({ callbackUrl: '/login' })}
      />
    </div>
  )
}

export default index
