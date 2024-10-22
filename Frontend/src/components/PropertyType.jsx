import React from 'react'
import ArrowNavigationFirst from './ArrowNavigationFirst'
import PropertyCards from './PropertyCards/PropertyCards'

const PropertyType = () => {
  return (
    <>
      <div className='relative top-10 flex flex-col'>
        <div className='px-10 text-[19px]'>
          <p className='text-[#74787F]'>--- PROPERTY TYPES</p>
          <div className='flex justify-between items-center w-full'>
            <h2 className='text-[44px]'>Explore 
              <span className='font-extrabold'> Properties</span> 
              <span className='text-[#EA4335] font-extrabold'> Type</span> 
            </h2>
            <div className='flex justify-end'>
              <ArrowNavigationFirst/>
            </div>
          <div>
          </div>
          </div>
        </div>

        <div>
          <PropertyCards/>
        </div>
      </div>
    </>
  )
}

export default PropertyType