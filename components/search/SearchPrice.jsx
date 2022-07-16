import React from 'react'

const SearchPrice = () => {
  return (
    <div className='bg-backLightGray p-4 py-5 mb-2 font-base text-sm text-backLightDark'>
      <h3 className='font-krona mb-4 text-sm '>select price</h3>
      <div className='flex'>
        <div className='flex flex-col items-center'>
          <input
            type='text'
            id='min'
            placeholder='min'
            className='p-1 w-16 text-center outline-backYellow mb-1'
          />
          <span>min</span>
        </div>
        <div className='flex flex-col mt-3'>
          <span className='w-5 h-[2px] block bg-backYellow mb-1'></span>
          <span className='w-5 h-[2px] block bg-backYellow'></span>
        </div>
        <div className='flex flex-col items-center'>
          <input
            type='text'
            id='max'
            placeholder='max'
            className='p-1 w-16 text-center outline-backYellow mb-1
'
          />
          <span>max</span>
        </div>
      </div>
    </div>
  )
}

export default SearchPrice
