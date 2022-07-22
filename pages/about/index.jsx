import React from 'react'
import AboutHeading from '../../components/about/AboutHeading'
import AboutStatics from '../../components/about/AboutStatics'

const AboutPage = () => {
  return (
    <div>
      <AboutHeading />
      <AboutStatics />
      <div className='text-center py-20'>
        <h3 className='font-krona mb-3'>Imprint</h3>
        <p className='font-base text-sm'>
          Clouds Inc. Clouds-Street 7-11 40235 Welland
        </p>
        <p className='font-base text-sm'>
          You can reach us by email at: service@welly.wellly. Our deliveries go
          out every Sunday evening so you can get them <br /> as early in the
          week as possible
        </p>
      </div>
    </div>
  )
}

export default AboutPage
