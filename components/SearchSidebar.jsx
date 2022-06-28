import React from 'react'
import SearchPrice from './SearchPrice'
import SearchSelectMenue from './SearchSelectMenue'
import SearchSidebarLinks from './SearchSidebarLinks'

const SearchSidebar = () => {
  return (
    <div className='w-fit'>
      <SearchPrice />
      <SearchSelectMenue />
      <SearchSidebarLinks />
    </div>
  )
}

export default SearchSidebar
