import React, { useState } from 'react'
import { brandsList } from '../../public/data'

const SearchSelectMenue = ({ setProductsData }) => {
  const [brand, setBrand] = useState('')

  const fetchProductsByBrand = async () => {
    const req = await fetch(
      `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`
    )

    const data = await req.json()

    setProductsData(data)
  }

  return (
    <div className='mb-2 '>
      <h3 className='font-krona font-bold mb-4 text-sm '>brand</h3>
      <select
        name='brand'
        id='brand'
        className='outline-none border-b-2 border-backYellow'
        onChange={e => {
          setBrand(e.target.value)
          fetchProductsByBrand()
        }}
      >
        {brandsList.map(option => (
          <option value={option.name} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchSelectMenue
