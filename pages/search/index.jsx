import React, { useState } from 'react'
import Poster from '../../components/ui/Poster'
import SearchProducts from '../../components/product/SearchProducts'
import SearchSidebar from '../../components/search/SearchSidebar'

export const getStaticProps = async () => {
  const res = await fetch(
    'http://makeup-api.herokuapp.com/api/v1/products.json'
  )
  const data = await res.json()

  console.log(data)

  return {
    props: { products: data }
  }
}

const index = ({ products }) => {
  const [productsData, setProductsData] = useState(products)

  // console.log(products)

  return (
    <div className='container mx-auto'>
      <Poster bottom='0' />
      <div className='mt-5 flex flex-col sm:flex-row'>
        <SearchSidebar setProductsData={setProductsData} />
        <SearchProducts products={productsData} />
      </div>
    </div>
  )
}

export default index
