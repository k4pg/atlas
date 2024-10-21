import React from 'react'


const NumCounter = () => {
  return (
    <div>
        <div className='flex gap-16 mt-10'>
        <div>
          <h4 className='font-bold text-lg'>1200 <span className='text-red-600 font-bold text-lg'>+</span></h4>
          <span>Premium Products</span>
        </div>
        <div>
          <h4 className='font-bold text-lg'>4500<span className='text-red-600 font-bold text-lg'>+</span></h4>
          <span>Happy Customer</span>
        </div>
        <div>
          <h4 className='font-bold text-lg'>240<span className='text-red-600 font-bold text-lg'>+</span></h4>
          <span>Award Winning</span>
        </div>
      </div>
    </div>
  )
}

export default NumCounter