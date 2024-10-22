import React from 'react'
import FilterImg from '../../assets/section7/filterImg.png'
import LocationImg from '../../assets/section7/location1.png'
import Section8 from '../section8/Section8'

const Section7 = () => {
  return (
    <>
      <div className='flex flex-col'>
      <div className='w-[1440px] h-[1048px] bg-[#282828] '>
        <div className='p-10 flex justify-between items-center'>
            <div className=''>
                <h3 className='text-white text-[44px]'>National Property <span className='font-extrabold'>Network</span></h3>
                <p className='text-[#838383] mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem <br/>
                Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className='flex justify-between items-center gap-3'>
                <div className='flex gap-2 items-center border border-[#575757] w-[314px] h-[57px] rounded p-3'>
                    <span>
                        <img src={LocationImg} alt="" />
                    </span>
                   <input type="text" placeholder='Chnadigarh, Mohali'  className=' bg-[#282828] text-[#828282]  outline-none '/>
                </div>
                <button className='w-[126px] h-[57px] p-2 justify-center flex gap-5 items-center border border-[#575757] rounded bg-[#3C3C3C]'>
                   <span>
                        <img src={FilterImg} alt="" />
                    </span>
                   <div className='  text-[#828282]' >Filter</div>
                </button>
            </div>
        </div>
        <div className=' flex justify-center w-full'>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19238188.656930715!2d-119.65223415362854!3d53.94219484161927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857ee9ff0c86fb%3A0x46bbc3c015a8d11d!2s2035%20Ninth%20St%2C%20Berkeley%2C%20CA%2094710%2C%20USA!5e0!3m2!1sen!2sin!4v1729578170759!5m2!1sen!2sin"
                width="1312"
                height="766px"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='bg-[#282828]'>
            </iframe>
        </div>
          
      </div>
      <div>
        <Section8/>
      </div>
      </div>
    </>
  )
}

export default Section7