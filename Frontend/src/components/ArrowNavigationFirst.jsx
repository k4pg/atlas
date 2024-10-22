import React from 'react'
import leftArrow from '../assets/ArrowNavigation/leftArrow.png'
import RightArrow from '../assets/ArrowNavigation/rightArrow.png'

const ArrowNavigationFirst = () => {
  return (
    <>
      <div className='flex gap-2'>
        <div className='h-[62px] w-[63px] bg-slate-300 border border-[#C4CCDA] rounded-md flex justify-center items-center'> 
         <img src={leftArrow} alt="" />
        </div>
        <div className='h-[62px] w-[63px] bg-white border border-[#C4CCDA] rounded-md flex justify-center items-center'> 
              <img src={RightArrow} alt="" />
        </div>
      </div>
    </>
  )
}

export default ArrowNavigationFirst