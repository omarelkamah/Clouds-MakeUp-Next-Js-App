import React from 'react'
import Poster from '../../components/Poster'
import Product from '../../components/Product'
import SearchProducts from '../../components/SearchProducts'
import SearchSidebar from '../../components/SearchSidebar'

// export const getStaticProps = async () => {
//   const res = await fetch(
//     'http://makeup-api.herokuapp.com/api/v1/products.json'
//   )
//   // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//   const data = await res.json()

//   console.log(data)

//   return {
//     props: { products: data }
//   }
// }

const index = ({ products }) => {
  console.log(products)
  return (
    <div className='container mx-auto'>
      <Poster bottom='0' />
      <div className='mt-5 flex'>
        <SearchSidebar />
        <SearchProducts products={products} />
      </div>
    </div>
  )
}

export default index
