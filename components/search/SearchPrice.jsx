import React, { useEffect, useRef, useState } from 'react'

const SearchPrice = ({ setProductsData }) => {
  const minRef = useRef()
  const maxRef = useRef()

  const fetchDataByPrice = async () => {
    const min = minRef.current.value
    const max = maxRef.current.value

    setProductsData([])

    const req = await fetch(
      `https://makeup-api.herokuapp.com/api/v1/products.json?price_greater_than=${Number(
        min
      )}&price_less_than=${Number(max)}`
    )

    const data = await req.json()

    setTimeout(() => {
      setProductsData(data)
    }, 1500)
  }

  return (
    <div className='bg-backLightGray p-4 py-5 mb-2 font-base text-sm text-backLightDark'>
      <h3 className='font-krona mb-4 text-sm '>select price</h3>
      <div className='flex'>
        <div className='flex flex-col items-center'>
          <input
            type='number'
            id='min'
            ref={minRef}
            placeholder='min'
            className='p-1 w-16 text-center outline-backYellow mb-1'
            onBlur={fetchDataByPrice}
          />
          <span>min</span>
        </div>
        <div className='flex flex-col mt-3'>
          <span className='w-5 h-[2px] block bg-backYellow mb-1'></span>
          <span className='w-5 h-[2px] block bg-backYellow'></span>
        </div>
        <div className='flex flex-col items-center'>
          <input
            type='number'
            id='max'
            ref={maxRef}
            placeholder='max'
            className='p-1 w-16 text-center outline-backYellow mb-1'
            onBlur={fetchDataByPrice}
          />
          <span>max</span>
        </div>
      </div>
    </div>
  )
}

export default SearchPrice
