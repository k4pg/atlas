import React from 'react'
import GifFile from '../assets/gif-file.gif'


const GifSection = () => {
  return (
    <>
     <div className='flex flex-col'>
     <div className=''>
        <div class="flex justify-center">
        <img src={GifFile} alt="" className='lg:w-[1402px] lg:h-[795px] w-full border-[20px] border-[#050C19] rounded-3xl'/>
        </div>
        <div className='bg-[#050C19] h-[146px] w-screen relative left-0 right-0 mt-[-20px] z-[-1]'></div>
      </div>
     </div>
    </>
  )
}

export default GifSection