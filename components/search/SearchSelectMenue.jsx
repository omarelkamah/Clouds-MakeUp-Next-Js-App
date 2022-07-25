import React, { useState } from 'react'
import { brandsList } from '../../public/data'

const SearchSelectMenue = ({ setProductsData, setOpenMenue }) => {
  const fetchProductsByBrand = async value => {
    setOpenMenue(false)
    setProductsData([])

    const req = await fetch(
      `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${value}`
    )

    const data = await req.json()

    setTimeout(() => {
      setProductsData(data)
    }, 1500)
  }

  return (
    <div className='mb-2 '>
      <h3 className='font-krona font-bold mb-4 text-sm '>brand</h3>
      <select
        name='brand'
        id='brand'
        className='outline-none border-b-2 border-backYellow'
        onChange={e => {
          fetchProductsByBrand(e.target.value)
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
