import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import SearchPrice from './SearchPrice'
import SearchSelectMenue from './SearchSelectMenue'
import SearchSidebarLinks from './SearchSidebarLinks'
const SearchToglerMenue = ({ openMenue, setOpenMenue }) => {
  console.log(openMenue)
  return (
    <div className='relative'>
      <div
        className='sm:hidden bg-backLightGray p-5 flex justify-center cursor-pointer transition-all'
        onClick={() => setOpenMenue(!openMenue)}
      >
        {openMenue ? (
          <AiOutlineClose className='text-xl' />
        ) : (
          <AiOutlineMenu className='text-xl' />
        )}
      </div>
      <div
        className={` absolute ${
          openMenue ? 'left-0' : '-left-[150%] '
        } bg-white z-10 w-full transition-all`}
      >
        <SearchPrice />
        <SearchSelectMenue />
        <SearchSidebarLinks />
      </div>
    </div>
  )
}

export default SearchToglerMenue
