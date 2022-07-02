import React from 'react'
import { FaOpencart } from 'react-icons/fa'

const Features = () => {
  // const
  const features = [
    {
      id: 1,
      title: 'Delivery',
      icon: '<AiFillHeart />',
      description:
        'nostrum quia vel, mollitia odit, alias architecto blanditiis nemo dolorum distinctio.'
    },
    {
      id: 1,
      title: 'Products',
      icon: '<AiFillHeart />',
      description:
        'nostrum quia vel, mollitia odit, alias architecto blanditiis nemo dolorum distinctio.'
    },
    {
      id: 1,
      title: 'Payments',
      icon: '<AiFillHeart />',
      description:
        'nostrum quia vel, mollitia odit, alias architecto blanditiis nemo dolorum distinctio.'
    }
  ]
  return (
    <div className='container mx-auto my-10 flex justify-between'>
      {features.map(feature => (
        <div key={feature.id} className='flex gap-4'>
          <div className='flex '>
            <span className='bg-backYellow w-7 h-7 rounded-[50%] block absolute -z-10'></span>
            <FaOpencart className='text-4xl ml-3' />
            {/* <div dangerouslySetInnerHTML={{ __html: `${feature.icon}` }}></div> */}
          </div>
          <div>
            <h3 className='font-krona font-bold mb-1'>{feature.title}</h3>
            <p className='font-base text-sm'>{feature.description}</p>
          </div>
          {/* <div dangerouslySetInnerHTML={feature.icon}></div> */}
        </div>
      ))}
    </div>
  )
}

export default Features
