import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const index = () => {
  return (
    <div
      className='flex items-center gap-5 cursor-pointer rounded-full w-fit p-5 text-backLightDark bg-white font-krona shadow-lg'
      onClick={() => {
        signOut()
        // dispatch(setUser(session.user));
      }}
    >
      logout with Google account
    </div>
  )
}

export default index
