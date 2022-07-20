import React from 'react'
import { brandsList } from '../../public/data'

const SearchSelectMenue = () => {
  return (
    <div className='mb-2 '>
      <h3 className='font-krona font-bold mb-4 text-sm '>brand</h3>
      <select
        name='brand'
        id='brand'
        className='outline-none border-b-2 border-backYellow'
      >
        {brandsList.map(option => (
          <option value={option.name} key={option.id}>
            {' '}
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SearchSelectMenue
