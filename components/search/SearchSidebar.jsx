import React, { useState } from 'react'
import SearchPrice from './SearchPrice'
import SearchSelectMenue from './SearchSelectMenue'
import SearchSidebarLinks from './SearchSidebarLinks'
import SearchToglerMenue from './SearchToglerMenue'

const SearchSidebar = ({ setProductsData }) => {
  const [openMenue, setOpenMenue] = useState(false)

  return (
    <div className='sm:w-fit'>
      <SearchToglerMenue
        openMenue={openMenue}
        setOpenMenue={setOpenMenue}
        setProductsData={setProductsData}
      />
      <div className='hidden sm:block'>
        <SearchPrice setProductsData={setProductsData} />
        <SearchSelectMenue
          setProductsData={setProductsData}
          setOpenMenue={setOpenMenue}
        />
        <SearchSidebarLinks
          setProductsData={setProductsData}
          setOpenMenue={setOpenMenue}
        />
      </div>
    </div>
  )
}

export default SearchSidebar
