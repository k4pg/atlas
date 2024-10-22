import React from 'react'
import rightIcon from '../../assets/section11/rightArrowIcon.png'
import Section11Cards from './Section11Cards';


const Section11 = () => {

//   const sectio11Data=[
//         {
//             image:image1,
//             cityName:city,
//             iconArrow:icon
//         },
//         {
//             image:image1,
//             cityName:city,
//             iconArrow:icon
//         },
//         {
//             image:image1,
//             cityName:city,
//             iconArrow:icon
//         },
//         {
//             image:image1,
//             cityName:city,
//             iconArrow:icon
//         },
//     ];

  return (
    <>
        <div className=' flex justify-between items-center '>
            <div className='flex flex-col  py-20'>
                <p className='text-[#74787F]'>-- ALL CITIES</p>
                <h3 className='text-[44px]'>Explore    
                    <span className=''> BY</span> 
                    <span className='font-extrabold text-[red]'> Cities </span>
                </h3>
            </div>
            <div className='h-[57px] w-[170px] border border-[#575757] rounded'>
                <button className='h-[57px] w-[170px] flex items-center justify-center gap-2'>See All Cities
                    <img src={rightIcon} alt="" className='object-cover' />
                </button>
            </div>
        </div>
        <div className='flex gap-3 overflow-hidden justify-center'>
        {/* {sectio11Data.map((detailes,index)=>{
            <Section11Cards
            key={index}
            image={detailes.image}
            cityName={detailes.cityName}
            iconArrow={detailes.iconArrow}
            />
        })} */}
            <div className='flex justify-between items-end h-[355px] w-[246px] border rounded-2xl bg-black p-5'>
                <div className=''>
                    <h4 className='text-white '>Los Angeles</h4>
                </div>
                <div className='h-[32px] w-[32px] rounded-full border  border-white flex justify-center items-center -rotate-45'>
                    <img src={rightIcon} alt="" className='text-white'/>
                </div>
            </div>
            <div className='h-[355px] w-[246px] border rounded-2xl bg-black'></div>
            <div className='h-[355px] w-[246px] border rounded-2xl bg-black'></div>
            <div className='h-[355px] w-[246px] border rounded-2xl bg-black'></div>
            <div className='h-[355px] w-[246px] border rounded-2xl bg-black'></div>
           
            
         
        </div>
    </>
  )
}

export default Section11