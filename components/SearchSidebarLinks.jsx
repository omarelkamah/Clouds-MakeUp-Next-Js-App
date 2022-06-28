import React from 'react'

const SearchSidebarLinks = () => {
  const skins = [
    { id: 1, title: 'foundation' },
    { id: 2, title: 'blush' },
    { id: 3, title: 'bronzer' }
  ]
  const eyes = [
    { id: 1, title: 'eyebrow' },
    { id: 2, title: 'eyeliner' },
    { id: 3, title: 'eyeshadow' },
    { id: 4, title: 'mascara' }
  ]
  const lips = [
    { id: 1, title: 'lipstick' },
    { id: 2, title: 'lip liner' }
  ]
  const nails = [{ id: 1, title: 'nail polish' }]
  return (
    <div className='bg-backLightGray p-4 py-5 mb-8 font-base text-sm text-backLightDark'>
      <div>
        <div className='mb-5'>
          <h3 className='mb-2 font-krona'>skin</h3>
          <div className=''>
            {skins.map(skin => (
              <span
                key={skin.id}
                className='ml-5 mb-1 block cursor-pointer hover:text-backYellow'
              >
                {skin.title}
              </span>
            ))}
          </div>
        </div>
        <div className='mb-5'>
          <h3 className='mb-2 font-krona'>eyes</h3>
          <div className=''>
            {eyes.map(eye => (
              <span
                key={eye.id}
                className='ml-5 mb-1 block cursor-pointer hover:text-backYellow'
              >
                {eye.title}
              </span>
            ))}
          </div>
        </div>
        <div className='mb-5'>
          <h3 className='mb-2 font-krona'>lips</h3>
          <div className=''>
            {lips.map(lip => (
              <span
                key={lip.id}
                className='ml-5 mb-1 block cursor-pointer hover:text-backYellow'
              >
                {lip.title}
              </span>
            ))}
          </div>
        </div>
        <div className='mb-5'>
          <h3 className='mb-2 font-krona'>nails</h3>
          <div className=''>
            {nails.map(nail => (
              <span
                key={nail.id}
                className='ml-5 mb-1 block cursor-pointer hover:text-backYellow'
              >
                {nail.title}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchSidebarLinks
