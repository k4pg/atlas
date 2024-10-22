import React from 'react';
import FilterImg from '../../assets/section8/filterImg.png';
import Section8Card from './Section8Card';
import fImgOne from '../../assets/section8/fImg-1.png';
import fImgTwo from '../../assets/section8/fImg-2.png';
import fImgThree from '../../assets/section8/fImg-3.png';
import fImgFour from '../../assets/section8/fImg4.png'
import fImgFive from '../../assets/section8/fImg-6.png';
import fImgSix from '../../assets/section8/fImg-7.png';
import bedIcon from '../../assets/section8/bed.png'
import bathroomIcon from '../../assets/section8/bathroom.png'
import sizeIcon from '../../assets/section8/size.png'
import likeImg from '../../assets/section8/likeImg.png'
import savImg from '../../assets/section8/saveImg.png'
import Section9 from '../section-9/Section9';
// You can import more images as needed

const Section8 = () => {
  const cardsData = [
    {
        image: fImgOne,
        bedIcon: bedIcon,
        bathroomIcon: bathroomIcon,
        sizeIcon: sizeIcon,
        likeImg:likeImg,
        savImg:savImg,
        type: 'VILLA',
        title: 'Palm Harbor',
        address: '2699 Green Valley, Highland Lake, FL',
        beds: '3 Beds',
        bathrooms: '2 Bathrooms',
        size: '5x7 m²',
        price: '22,20,95',
        rating: 4.6,
    },
    {
        image: fImgTwo,
        bedIcon: bedIcon,
        bathroomIcon: bathroomIcon,
        sizeIcon: sizeIcon,
        likeImg:likeImg,
        savImg:savImg,
        type: 'APARTMENT',
        title: 'Beverly Hills',
        address: '123 Hollywood Blvd, CA',
        beds: '3 Beds ',
        bathrooms: '2 Bathrooms',
        size: '6x8 m²',
        price: '45,00,00',
        rating: 4.8,
    },
    {
        image: fImgThree,
        bedIcon: bedIcon,
        bathroomIcon: bathroomIcon,
        sizeIcon: sizeIcon,
        likeImg:likeImg,
        savImg:savImg,
        type: 'CONDO',
        title: 'Ocean View',
        address: '987 Beach St, Miami, FL',
        beds: '3 Beds',
        bathrooms: '2 Bathrooms',
        size: '4x5 m²',
        price: '30,00,00',
        rating: 4.7,
    },
    {
        image: fImgFour,
        bedIcon: bedIcon,
        bathroomIcon: bathroomIcon,
        sizeIcon: sizeIcon,
        likeImg:likeImg,
        savImg:savImg,
        type: 'CONDO',
        title: 'Ocean View',
        address: '987 Beach St, Miami, FL',
        beds: '3 Beds',
        bathrooms: '2 Bathrooms',
        size: '4x5 m²',
        price: '30,00,00',
        rating: 4.7,
      },
      {
        image: fImgFive,
        bedIcon: bedIcon,
        bathroomIcon: bathroomIcon,
        sizeIcon: sizeIcon,
        likeImg:likeImg,
        savImg:savImg,
        type: 'CONDO',
        title: 'Ocean View',
        address: '987 Beach St, Miami, FL',
        beds: '3 Beds',
        bathrooms: '2 Bathrooms',
        size: '4x5 m²',
        price: '30,00,00',
        rating: 4.7,
      },
      {
        image: fImgSix,
        bedIcon: bedIcon,
        bathroomIcon: bathroomIcon,
        sizeIcon: sizeIcon,
        likeImg:likeImg,
        savImg:savImg,
        type: 'CONDO',
        title: 'Ocean View',
        address: '987 Beach St, Miami, FL',
        beds: '3 beds',
        bathrooms: '2 Btahrooms',
        size: '4x5 m²',
        price: '30,00,00',
        rating: 4.7,
      }
    // Add more cards as needed
  ];

  return (
    <>
        <div className='flex flex-col'>
            <div className='flex lg:justify-between items-center relative top-20 pb-10'>
            <div className='flex flex-col justify-center lg:flex-none'>
                <p className='lg:text-[19px] md:text-[19px] text-[#74787F]'>-- FEATURED PROPERTIES</p>
                <h3 className='lg:text-[44px] md:text-[44px]'>
                Our 
                <span className='font-extrabold'> Featured</span> 
                <span className='font-extrabold text-[red]'> Properties</span>
                </h3>
            </div>
            <button className='w-[204px] h-[57px] p-2 justify-between flex gap-5 items-center border border-[#575757] rounded '>
                <span>
                <img src={FilterImg} alt="Filter" />
                </span>
                <div className='text-[#828282]'>Filter</div>
                <select name="" id="" className='outline-none mr-2'>
                <option value=""></option>
                <option value="">Option-1</option>
                <option value="">Option-2</option>
                <option value="">Option-3</option>
                </select>
            </button>
            </div>
            <div className='flex flex-wrap justify-center gap-5'>
            {cardsData.map((card, index) => (
                <Section8Card
                key={index}
                image={card.image}
                type={card.type}
                title={card.title}
                address={card.address}
                beds={card.beds}
                bathrooms={card.bathrooms}
                size={card.size}
                price={card.price}
                rating={card.rating}
                bedIcon={card.bedIcon}
                bathroomIcon={card.bathroomIcon}
                sizeIcon={card.sizeIcon}
                likeImg={card.likeImg}
                savImg={card.savImg}
                />
            ))}
            </div>

            <div className='relative top-20'>
             <Section9/>
            </div>
        </div>
          
       

    </>
  );
};

export default Section8;
