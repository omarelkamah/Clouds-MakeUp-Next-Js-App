import React from 'react'
import Product from '../../components/product/Product'
import Poster from '../../components/ui/Poster'

// export const getStaticPaths = async () => {
//   const res = await fetch(
//     'https://makeup-api.herokuapp.com/api/v1/products.json'
//   )
//   const products = await res.json()

//   const paths = products.map(product => {
//     return {
//       params: { categoryName: String(product.category) }
//     }
//   })

//   return { paths, fallback: false }
// }

// export const getStaticProps = async context => {
//   const categoryName = context.params.categoryName
//   const res = await fetch(
//     `https://makeup-api.herokuapp.com/api/v1/products.json?product_category=${categoryName}`
//   )
//   const products = await res.json()

//   return { props: { products } }
// }

const Category = ({ products }) => {
  return (
    <div>
      <Poster bottom='0' />
      <div className='flex flex-wrap justify-center mt-6'>
        {/* {products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image_link}
            price={product.price}
            category={product.category}
          />
        ))} */}
      </div>
    </div>
  )
}

export default Category
