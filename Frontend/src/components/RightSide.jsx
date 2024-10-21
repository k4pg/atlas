import React from 'react'
import rightHome from '../assets/right-mg.jpg'
import thirdImg from '../assets/3rd-img.png'
import seconImg from '../assets/second-img.png'
import './RightSide.css'

const RightSide = () => {
  return (
    <div>
        <div class=" p-5">
            <img src={rightHome} alt="" className='relative top-0 mt-[-125px] md:mt-[-100px] lg:mt-[-200px] '/>
        <div className='hidden lg:bloc md:block flex lg:block md:block gap-2 lg:mt-[-90px] md:mt-[-60px] relative  overflow-hidden whitespace-nowrap'>
            <div className='w-[260px] h-[152px] inline-block animate-marquee '>
                <img src={seconImg} alt="" className='rounded'/>
            </div>
            <div className='w-[260px] h-[152px] inline-block animate-marquee ml-2'>
                <img src={thirdImg} alt="" className='rounded'/>
            </div>
            <div className='w-[260px] h-[152px] inline-block animate-marquee ml-2'>
                <img src={thirdImg} alt="" className='rounded'/>
            </div>
            <div className='w-[260px] h-[152px] inline-block animate-marquee ml-2'>
                <img src={seconImg} alt="" className='rounded'/>
            </div>
            <div className='w-[260px] h-[152px] inline-block animate-marquee ml-2'>
                <img src={thirdImg} alt="" className='rounded'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightSide