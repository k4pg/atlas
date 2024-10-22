import React from 'react'
import ReactStars from 'react-stars'

const Section8Card = ({ image, type, title, address, beds, bathrooms, size, price, rating ,bedIcon, bathroomIcon, sizeIcon, likeImg,savImg}) => {
  return (
    <>

    <div className='w-[419px] rounded-2xl border border-[#DEE2EA] shadow-lg relative top-20 pb-20'>
        <div>
            <div className='h-[40px] cursor-pointer w-[40px] rounded-full border-2 bg-white border-[#F4D0CB] flex justify-center items-center absolute z-0 top-10 right-5'>
                <img src={savImg} alt="" />
            </div>
          <img src={image} alt={title} className='w-[419px] h-[195px] rounded-t-2xl bg-auto object-cover' />
        </div>
        <div className=' h-[150px] pb-5'>
          <div className='flex justify-between p-5'>
            <div>
              <p className='text-[14px] text-[#8893A7]'>{type}</p>
              <h3 className='text-[24px] font-bold'>{title}</h3>
              <p className='text-[16px] text-[#000929]'>{address}</p>
            </div>
            <div className='h-[46px] w-[46px] rounded-full border-2 cursor-pointer border-[#F4D0CB] flex justify-center items-center'>
              <img src={likeImg} alt="" />
            </div>
          </div>
          <hr />
          <div className='px-5 pt-2'>
            <div className='flex gap-3 items-center justify-between'>
              <span className='flex items-center gap-1'>
                <img src={bedIcon} alt="Beds" />
                <p className='text-[16px] text-[#000929]'>{beds} </p>
              </span>
              <span className='flex items-center gap-1'>
                <img src={bathroomIcon} alt="Bathrooms" />
                {bathrooms} 
              </span>
              <span className='flex items-center gap-1'>
                <img src={sizeIcon} alt="Size" />
                {size}
              </span>
            </div>
            <div className='flex justify-between items-center py-5'>
              <div className='font-bold text-[26px]'>₹{price}</div>
              <div className='flex items-center gap-3'>{rating} 
                <ReactStars
                count={5}
                size={24}
                color={'#ffd700'}
                /> 
              </div>
            </div>
          </div>
        </div>
      </div>
      

    </>
  )
}

export default Section8Card
