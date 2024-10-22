import React from 'react';
import Rating from 'react-rating-stars-component';

const AgentCard = ({ image, name, location, rating, listings, callIcon }) => {
  return (
    <div className='flex flex-col pb-10'>
      <div className='w-[309px] h-[289px] rounded-lg'>
        <img src={image} alt={name} className='w-[309px] h-[289px] rounded-lg object-cover' />
      </div>
      <div>
        <h3 className='text-[20px] font-bold mt-2'>{name}</h3>
      </div>
      <div>
        <p className='text-[14px] text-[#0C0C0D]'>{location}</p>
      </div>
      <div className='flex gap-2 items-center'>
        <span> 
          <Rating
            count={5}
            value={rating}
            size={24}
            activeColor={'#ffd700'}
            edit={false}
          />
        </span>
        <span className='font-bold'>{rating}</span>
      </div>
      <hr className='w-[281px]'/>
      <div className='border border-black px-3 w-[127px] h-[33px] mt-3 flex items-center justify-center rounded'>
        <p className='font-bold'>{listings} Listings</p>
      </div>
      <button className='bg-[#EA4335] font-bold text-white text-[16px] w-[253px] h-[50px] flex items-center justify-center gap-4 mt-3 rounded'>
        Contact Agent 
        <img src={callIcon} alt="Call Icon" /> 
      </button>
    </div>
  );
};

export default AgentCard;
