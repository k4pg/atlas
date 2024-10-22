import React from 'react'
import ArrowNavigationFirst from '../ArrowNavigationFirst'
import FirstGif from '../../assets/section6/section6gif-1.png'
import SecondGif from '../../assets/section6/section6gif2.gif'
import ThirdGif from '../../assets/section6/section6gif3.png'
import Section7 from '../section-7/Section7'

const Section6 = () => {
  return (
    <div className="flex flex-col justify-center items-center relative top-20">
    <div className='relative top-10 flex flex-col justify-center items-center bg-[#C4CCDA] w-full'>
      <div className='mb-20'>
        <div className='px-10 text-[19px]'>
          <div className='flex justify-between items-center'>
            <div className='text-[44px] leading-[50px] py-5'>Explore our diverse portfolio of<br/>
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
        <div className='flex relative top-20 gap-4 pb-10'>
            <div className='w-[377px] h-[500px] border rounded-md object-cover'>
                <img src={FirstGif} alt="" className='w-[377px] h-[500px] border rounded-md object-cover' />
            </div>
            <div className='w-[528px] h-[500px] border rounded-md cover'>
                <img src={SecondGif} alt="" className='w-[528px] h-[500px] border rounded-md object-cover' />
            </div>
            <div className='w-[377px] h-[500px] border rounded-md '>
                <img src={ThirdGif} alt="" className='w-[377px] h-[500px] border rounded-md object-cover'/>
            </div>
        </div>
      </div>
      
    </div>
      <div className='flex justify-center'>
        <Section7/>
      </div>
    </div>
  )
}

export default Section6