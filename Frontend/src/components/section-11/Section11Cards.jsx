import React from 'react'

const Section11Cards = ({image, cityName, iconArrow}) => {
  return (
    <div>
      <div className='flex'>
      <div className='h-[355px] w-[246px] border rounded-2xl'>
        <img src={image} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Section11Cards