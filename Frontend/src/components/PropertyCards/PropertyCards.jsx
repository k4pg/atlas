import React from 'react'
import Home from '../../assets/propertyCardImg/Home.png'
import Office from '../../assets/propertyCardImg/Office.png'
import Villas from '../../assets/propertyCardImg/Villas.png'  // Corrected
import Appartment from '../../assets/propertyCardImg/Appartment.png'
import TownHome from '../../assets/propertyCardImg/TownHome.png'
import Bangalows from '../../assets/propertyCardImg/Bangalows.png'
import Section5 from '../section-5/Section5'

const PropertyCard = ({ image, title, propertiesCount, isSelected }) => {
  return (
    <div className={`h-[190px] w-[201px]  border-dashed border border-[#B8C3D1] rounded-md ${isSelected ? 'bg-[#447FE2] shadow-2xl' : ''}`}>
      <div className='h-[65px] w-[65px] bg-[#FFFFFF] border border-[#D8DEE6] rounded-full relative top-8 left-4 flex justify-center items-center'>
        <img src={image} alt={title} />
      </div>
      <div className='relative top-[70px] left-5'>
        <h4 className={`font-bold ${isSelected ? 'text-white' : 'text-[#232323]'}`}>{title}</h4>
        <p className={`text-[14px] ${isSelected ? 'text-white' : 'text-[#8E97A2]'}`}>{propertiesCount} Properties</p>
      </div>
    </div>
  )
}

const PropertyCards = () => {
  const properties = [
    { image: Home, title: 'House', propertiesCount: 156, isSelected: false },
    { image: Appartment, title: 'Apartments', propertiesCount: 200, isSelected: false },
    { image: Office, title: 'Offices', propertiesCount: 120, isSelected: true },
    { image: Villas, title: 'Villas', propertiesCount: 123, isSelected: false },
    { image: Bangalows, title: 'Bangalows', propertiesCount: 230, isSelected: false },
    { image: TownHome, title: 'Townhome', propertiesCount: 156, isSelected: false },
  ]

  return (
    <div className='flex flex-col justify-center mt-5 pb-10'>
      <div className='flex gap-4 justify-center'>
        {properties.map((property, index) => (
          <PropertyCard
            key={index}
            image={property.image}
            title={property.title}
            propertiesCount={property.propertiesCount}
            isSelected={property.isSelected}
          />
        ))}
      </div>
      <div className='flex justify-center relative top-5 p-10'>
        <Section5 />
      </div>
    </div>
  )
}

export default PropertyCards
