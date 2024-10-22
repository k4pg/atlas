import React from 'react'
import bpImgOne from '../../assets/section9/bpImg-1.gif'
import bpImgTwo from '../../assets/section9/fbImg-2.gif'
import bpImgThree from '../../assets/section9/fbImg-3.gif'
import bpImgFour from '../../assets/section9/fbImg-4.gif'
import Section10 from '../section-10/Section10'

const Section9 = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center py-20'>
        <p className='text-[#74787F]'>-- COMMERCIAL PROPERTIES</p>
        <h3 className='text-[44px]'>Eco-Friendly 
            <span className='font-extrabold'> Business</span> 
            <span className='font-extrabold text-[red]'> Properties</span>
        </h3>
    </div>
    <div>
        <div className='flex gap-3 justify-center h-[796px'>
            <div className='w-[648px] h-[796px] rounded-lg'>
                <img src={bpImgOne} alt=""  className='rounded-lg'/>
            </div>
            <div className='flex flex-col gap-3 rounded-lg'>
                <div className='w-[643px] h-[386px]'>
                    <img src={bpImgTwo} alt="" className='rounded-lg'/>
                </div>
                <div className='flex gap-3'>
                    <div className='w-[312px] h-[386px] rounded-lg'>
                        <img src={bpImgThree} alt="" className='rounded-lg'/>
                    </div>
                    <div className='w-[312px] h-[386px] rounded-lg'>
                        <img src={bpImgFour} alt="" className='rounded-lg'/>
                    </div>
                </div>
            </div>
        </div>
        <Section10/>
    </div>
    </>
  )
}

export default Section9