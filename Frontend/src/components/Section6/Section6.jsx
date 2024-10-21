import React from 'react'
import ArrowNavigationFirst from '../ArrowNavigationFirst'
import FirstGif from '../../assets/section6/section6gif-1.png'
import SecondGif from '../../assets/section6/section6gif2.gif'
import ThirdGif from '../../assets/section6/section6gif3.png'

const Section6 = () => {
  return (
    <div className='relative top-20 flex flex-col justify-center'>
        <div className='px-10 text-[19px]'>
          <div className='flex justify-between items-center'>
            <div className='text-[44px] leading-[50px]'>Explore our diverse portfolio of<br/>
                <span className='font-bold'> exceptional</span> 
                <span className='font-bold text-[#E74531]'> properties</span> 
            </div>
            <div className=''>
              <ArrowNavigationFirst/>
            </div>
          <div>
          </div>
          </div>
        </div>

        <div className='flex relative top-20 gap-4'>
            <div className='w-[377px] h-[553px] border rounded-md cover'>
                <img src={FirstGif} alt="" className='w-[377px] h-[553px] border rounded-md' />
            </div>
            <div className='w-[528px] h-[553px] border rounded-md cover'>
                <img src={SecondGif} alt="" className='w-[528px] h-[553px] border rounded-md' />
            </div>
            <div className='w-[377px] h-[553px] border rounded-md'>
                <img src={ThirdGif} alt="" className='w-[377px] h-[553px] border rounded-md'/>
            </div>
        </div>


    </div>
  )
}

export default Section6