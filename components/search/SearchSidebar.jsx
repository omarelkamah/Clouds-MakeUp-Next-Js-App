import React, { useState } from 'react'
import SearchPrice from './SearchPrice'
import SearchSelectMenue from './SearchSelectMenue'
import SearchSidebarLinks from './SearchSidebarLinks'
import SearchToglerMenue from './SearchToglerMenue'

const SearchSidebar = ({ products, setProductsData }) => {
  const [openMenue, setOpenMenue] = useState(false)
  return (
    <div className='sm:w-fit'>
      <SearchToglerMenue openMenue={openMenue} setOpenMenue={setOpenMenue} />
      <div className='hidden sm:block'>
        <SearchPrice />
        <SearchSelectMenue setProductsData={setProductsData} />
        <SearchSidebarLinks setProductsData={setProductsData} />
      </div>
    </div>
  )
}

export default SearchSidebar
