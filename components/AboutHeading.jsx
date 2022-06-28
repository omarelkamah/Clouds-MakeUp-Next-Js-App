import React from 'react'

const AboutHeading = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-center items-center my-20'>
        <span className='w-11 h-11 rounded-full bg-backYellow block' />
        <h1 className='font-krona font-bold text-4xl -ml-5'>Clouds</h1>
      </div>
      <div className='mx-auto w-2/3'>
        <p className='font-base mt-4 leading-7 mb-4'>
          Clouds is the leading premium beauty platform in Europe. Offering more
          than 130,000 beauty and lifestyle products in online shops, the beauty
          marketplace and more than 2,000 stores, Welly inspires customers to
          live their own kind of beauty by a previously unparalleled assortment.
        </p>
        <p className='font-base mt-4 leading-7 mb-4'>
          The continued expansion of the fast-growing e‑commerce business is the
          focus of the{' '}
          <span className='font-krona text-lg'>#forwardbeauty.</span>
          DigitalFirst strategy programme. In fiscal year 2019/2020, Welly
          generated sales of 3.2 billion euros in the areas of perfumery,
          decorative cosmetics, skin and hair care as well as nutritional
          supplements and accessories.
          <span className='font-krona text-lg'> #letsdobeautiful </span>
        </p>
      </div>
    </div>
  )
}

export default AboutHeading
