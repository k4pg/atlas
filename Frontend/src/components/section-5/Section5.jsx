import React from 'react'

import GiftImg from '../../assets/section5/gif2.gif'
import Hourse from '../../assets/section5/Houres.png'
import Location from '../../assets/section5/Location.png'
import Payment from '../../assets/section5/payment.png'
import Trustedimg from '../../assets/section5/TrustedAge.png'
import Section6 from '../Section6/Section6'

const Section5 = () => {
  return (
    <div>
        <div>
            <p className='text-[24px] text-[#232323]'>Trusted by <span className='font-bold text-[#EA4335]'>1000+ of business owners</span> in the industry for buying and selling properties</p>
        </div>
        <div className='flex gap-9 mt-5'>
           <div className='flex flex-col gap-10 justify-center'>
                <div className='w-[274px] h-[219px] border-dashed border border-[#B8C3D1] bg-[#EA4335] rounded-md'>
                    <div className='h-[59px] w-[59px] bg-white rounded-md flex items-center justify-center relative top-5 left-5 '>
                        <img src={Trustedimg} alt="" />
                    </div>
                    <div className='relative top-10 p-5'>
                        <h4 className='font-bold text-white'>Trusted Agency</h4>
                        <p className='text-white'>Agents make life simple for you and for clients.</p>
                    </div>
                </div>
                <div className='w-[274px] h-[219px] border-dashed border border-[#B8C3D1] rounded-md bg-[#EBF0F8]'>
                <div className='h-[59px] w-[59px] bg-black rounded-md flex items-center justify-center relative top-5 left-5 '>
                        <img src={Hourse} alt="" />
                    </div>
                    <div className='relative top-10 p-5'>
                        <h4 className='font-bold text-black'>Trusted Agency</h4>
                        <p className='text-black'>Agents make life simple for you and for clients.</p>
                    </div>
                </div>
           </div>
           <div className='h-[481px] w-[460px] border rounded-md'>
            <img src={GiftImg} alt=""  className='h-[481px] w-[460px] rounded-md'/>
           </div>
           <div className='flex flex-col gap-10'>
                <div className='w-[274px] h-[219px] border-dashed border border-[#B8C3D1] bg-[#EBF0F8] rounded-md'>
                <div className='h-[59px] w-[59px] bg-black rounded-md flex items-center justify-center relative top-5 left-5 '>
                        <img src={Location} alt="" />
                    </div>
                    <div className='relative top-10 p-5'>
                        <h4 className='font-bold text-black'>Trusted Agency</h4>
                        <p className='text-black'>Agents make life simple for you and for clients.</p>
                    </div>
                </div>
                <div className='w-[274px] h-[219px] border-dashed border border-[#B8C3D1] bg-[#EBF0F8] rounded-md'>
                <div className='h-[59px] w-[59px] bg-black rounded-md flex items-center justify-center relative top-5 left-5 '>
                        <img src={Payment} alt="" />
                    </div>
                    <div className='relative top-10 p-5'>
                        <h4 className='font-bold text-black'>Trusted Agency</h4>
                        <p className='text-black'>Agents make life simple for you and for clients.</p>
                    </div>
                </div>
           </div>
        </div>
        {/* <div>
            <Section6/>
        </div> */}
    </div>
  )
}

export default Section5