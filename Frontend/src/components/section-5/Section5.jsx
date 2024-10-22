import React from 'react';
import GiftImg from '../../assets/section5/gif2.gif';
import TrustedImg from '../../assets/section5/TrustedAge.png';
import HouseImg from '../../assets/section5/Houres.png';
import LocationImg from '../../assets/section5/Location.png';
import PaymentImg from '../../assets/section5/payment.png';
import Section5Card from './Section5Card';
import Section6 from '../Section6/Section6';

const Section5 = () => {
    return (
        <div>
           <div className='flex justify-center flex-col'>
           <div className='flex justify-center pb-5'>
                <p className='text-[24px] text-[#232323]'>
                    Trusted by <span className='font-bold text-[#EA4335]'>1000+ of business owners</span> in the industry for buying and selling properties
                </p>
            </div>
            <div className='flex gap-9 mt-5 justify-center'>
                <div className='flex flex-col gap-10 justify-center'>
                    <Section5Card
                    imageSrc={TrustedImg}
                    title="Trusted Agency"
                    description="Agents make life simple for you and for clients."
                    bgColor="bg-[#EA4335]"
                    borderColor="#B8C3D1"
                    />
                   
                   <Section5Card
                    imageSrc={HouseImg}
                    title="Trusted Agency"
                    description="Agents make life simple for you and for clients."
                    bgColor="bg-[#EBF0F8]"
                    borderColor="#B8C3D1"
                    />
                </div>
                <div className='h-[481px] w-[460px] border rounded-md'>
                    <img src={GiftImg} alt="" className='h-[481px] w-[460px] rounded-md' />
                </div>
                <div className='flex flex-col gap-10'>
                <Section5Card
                    imageSrc={LocationImg}
                    title="Trusted Agency"
                    description="Agents make life simple for you and for clients."
                    bgColor="bg-[#EBF0F8]"
                    borderColor="#B8C3D1"
                    />
                   <Section5Card
                    imageSrc={PaymentImg}
                    title="Trusted Agency"
                    description="Agents make life simple for you and for clients."
                    bgColor="bg-[#EBF0F8]"
                    borderColor="#B8C3D1"
                    />
                </div>
            </div>
           </div>
           <div className=''>
            <Section6/>
           </div>
        </div>
    );
};

export default Section5;
