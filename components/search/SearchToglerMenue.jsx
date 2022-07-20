import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import SearchPrice from './SearchPrice'
import SearchSelectMenue from './SearchSelectMenue'
import SearchSidebarLinks from './SearchSidebarLinks'
const SearchToglerMenue = ({ openMenue, setOpenMenue }) => {
  console.log(openMenue)
  return (
    <div className='relative'>
      <div
        className='sm:hidden bg-backLightGray p-5 flex justify-center cursor-pointer'
        onClick={() => setOpenMenue(!openMenue)}
      >
        <AiOutlineMenu className='text-xl' />
      </div>
      <div className={` ${openMenue ? '' : ''} transition-all`}>
        <SearchPrice />
        <SearchSelectMenue />
        <SearchSidebarLinks />
      </div>
    </div>
  )
}

export default SearchToglerMenue
