import React from 'react'
import NumCounter from './NumCounter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RightSide from './RightSide'
import { faArrowRight, faVideo } from '@fortawesome/free-solid-svg-icons'
import '../components/Hero.css'

const Hero = () => {
  return (
    <>
    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 '>
      <div class=" p-5 ">
      <p className=' p-1 bg-[#FFAE00] lg:w-[40%] w-full rounded text-center'>THE MOST TRUSTED <span className='font-bold'>REAL ESTATE</span></p>
      <div className='mt-6 text-center lg:text-start md:text-start animate-blink'>
        <div className='flex gap-2 text-center lg:text-start md:text-start '>
          <span className='font-extrabold lg:text-7xl md:text-5xl text-4xl text-blue-600 animate-slideIn'>BUY,</span>
          <span className='font-extrabold lg:text-7xl md:text-5xl text-4xl text-red-600 animate-slideIn'>RENT,</span>
          <span className='font-extrabold lg:text-7xl md:text-5xl text-4xl animate-slideIn'>OR</span>
          <span className='font-extrabold lg:text-7xl md:text-5xl text-4xl text-green-600 animate-slideIn'>SELL</span>
        </div>
        <div className='flex gap-2 mt-2 text-center lg:text-start md:text-start animate-slideIn'>
          <span className='font-extrabold lg:text-7xl md:text-5xl text-4xl animate-slideIn'>YOUR</span>
          <span className='font-extrabold lg:text-7xl md:text-5xl text-4xl animate-slideIn'>PROPERTY</span>
        </div>
        <div className='animate-slideIn'>
         <span className='font-extrabold lg:text-7xl md:text-5xl text-4xl text-gray-600 mt-2 text-center lg:text-start md:text-start'>EAS
            <span className='text-gray-500'>IL</span>
            <span className='text-gray-400'>Y!</span>
          </span>
        </div>
      </div>
      <div className='mt-7 text-center lg:text-start'>
        <p className='lg:w-[75%] md:w-[50%] w-[90%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the
           1500s.</p>
      </div>
      <div className='flex gap-2 mt-7 '>
        <button className='w-[181px] h-[57px] bg-red-600 text-white rounded font-bold'>Schedule Visit&nbsp;   <FontAwesomeIcon icon={faArrowRight} className="text-white" /></button>
        <button className='w-[181px] h-[57px] border-2 border-red-600 rounded font-bold p-1 flex items-center justify-center text-center'>Watch Video &nbsp; <FontAwesomeIcon icon={faVideo} className="bg-red-600 rounded-full text-white p-1" /></button>
      </div>

      {/* counter  */}
      <NumCounter/>
      </div>

      {/* Right image  */}
      <RightSide/>
    </div>
    </>
  )
}

export default Hero