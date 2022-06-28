import React from 'react'

const SearchSelectMenue = () => {
  const options = [
    { id: 1, name: 'all' },
    { id: 2, name: 'almay' },
    { id: 3, name: 'alva' },
    { id: 4, name: 'anna sui' },
    { id: 5, name: 'annabelle' },
    { id: 6, name: 'benefit' },
    { id: 7, name: 'boosh' },
    { id: 8, name: "burt's bees" },
    { id: 9, name: 'butter london' },
    { id: 10, name: "c'est moi" },
    { id: 11, name: 'cargo cosmetics' },
    { id: 12, name: 'china glaze' },
    { id: 13, name: 'clinique' },
    { id: 14, name: 'coastal classic creation' },
    { id: 15, name: 'colourpop' },
    { id: 16, name: 'covergirl' },
    { id: 17, name: 'dalish' },
    { id: 18, name: 'deciem' },
    { id: 19, name: 'dior' },
    { id: 20, name: 'dr.hauschka' },
    { id: 21, name: 'e.l.f.' },
    { id: 22, name: 'essie' },
    { id: 23, name: 'fenty' },
    { id: 24, name: 'glossier' },
    { id: 25, name: 'green people' },
    { id: 26, name: 'essie' },
    { id: 27, name: 'iman' },
    { id: 28, name: "l'oreal" },
    { id: 29, name: 'lotus cosmetics usa' },
    { id: 30, name: "maia's mineral galaxy" },
    { id: 31, name: 'marcelle' }
  ]
  return (
    <div className='mb-2 '>
      <h3 className='font-krona font-bold mb-4 text-sm '>brand</h3>
      <select
        name='brand'
        id='brand'
        className='outline-none border-b-2 border-backYellow'
      >
        {options.map(option => (
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
