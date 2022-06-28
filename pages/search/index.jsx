import React from 'react'
import Poster from '../../components/Poster'
import SearchProducts from '../../components/SearchProducts'
import SearchSidebar from '../../components/SearchSidebar'

const index = () => {
  return (
    <div className='container mx-auto'>
      <Poster bottom='0' />
      <div className='mt-5'>
        <SearchSidebar />
        <SearchProducts />
      </div>
    </div>
  )
}

export default index
