import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'; // Import icons

const options = {
    homeTypes: ['Single Family', 'Townhouse', 'Condo'],
    apartmentTypes: ['Studio', '1 Bedroom', '2 Bedroom'],
    roomCounts: ['1 Room', '2 Rooms', '3 Rooms', '4+ Rooms'],
};

const MidSection = () => {
  return (
    <> 
      <div className='bg-blue-600 lg:h-[230px] lg:w-[1402px] rounded p-5 flex justify-center items-center flex-col mb-10'>
        <div className=' '>
        <div className='flex justify-start gap-5 mb-1'>
            <button className='bg-white p-3 rounded text-black font-bold px-6'>Rent</button>
            <button className='text-white px-6'>Buy</button>
            <button className='text-white px-6'>Sell</button>
        </div>
            <div className= 'lg:h-[104px] lg:w-[1134px] p-6 rounded bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-4'>
                <div className='  lg:p-0 md:p-0 p-2'>
                    <p>Select Home</p>
                    <select className='font-bold outline-none w-full lg:w-1/2 md:w-1/2 border border-black lg:border-none p-2 lg:p-0 md:p-0 rounded'>
                    <option value="" className='outline-none'>Home Type</option>
                    {options.homeTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
                </div>
                <div className='lg:p-0 md:p-0 p-2'>
                <p>Select Apartment</p>
                <select className='font-bold outline-none w-full lg:w-1/2 md:w-1/2 border border-black lg:border-none p-2 lg:p-0 md:p-0 rounded'>
                    <option value="">Home Type</option>
                    {options.apartmentTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                    ))}
                </select>
                </div>
                <div className='lg:p-0 md:p-0 p-2'>
                <p>Select Rooms</p>
                <select className='font-bold outline-none w-full lg:w-1/2 md:w-1/2 border border-black lg:border-none p-2 lg:p-0 md:p-0 rounded'>
                    <option value="">Home Type</option>
                    {options.roomCounts.map((count, index) => (
                        <option key={index} value={count}>{count}</option>
                    ))}
                </select>
                </div>
                
                <div className='flex items-center justify-between border-1 bg-blue-600 border-[#7B89A3] rounded'>
                    <input type="text" placeholder="Search here..." className="text-white placeholder-white outline-none font-bold p-2 w-[236px] h-[57px] bg-transparent border-none" />
                    <span className='px-3 text-white cursor-pointer '><FontAwesomeIcon icon={faSearch} className=''/></span>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default MidSection