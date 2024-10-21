import React from 'react'
import Home from '../../assets/propertyCardImg/Home.png'
import Office from '../../assets/propertyCardImg/Office.png'
import Villas from '../../assets/propertyCardImg/Office.png'
import Appartment from '../../assets/propertyCardImg/Appartment.png'
import TownHome from '../../assets/propertyCardImg/TownHome.png'
import Bangolows from '../../assets/propertyCardImg/Bangalows.png'
import Section5 from '../section-5/Section5'

const PropertyCards = ({ icon, title, propertiesCount, isSelected, onClick }) => {
  return (
    <>
      <div className='flex flex-col justify-center mt-5 pb-10 '>
            <div className='flex gap-4 justify-center'>
            <div className='h-[190px] w-[201px] bg-[#F8FBFF] border-dashed border border-[#B8C3D1]  rounded-md'> 
                <div className='h-[65px] w-[65px] bg-[#FFFFFF] border border-[#D8DEE6] rounded-full relative top-8 left-4 flex justify-center items-center'>
                    <img src={Home} alt="" />
                </div>
                <div className='relative top-[70px] left-5'>
                    <h4 className='font-bold text-[#232323]'>House</h4>
                    <p className='text-[14px] text-[#8E97A2]'>156 Properties</p>
                </div>
            </div>
            <div className='h-[190px] w-[201px] bg-[#F8FBFF] border-dashed border border-[#B8C3D1]  rounded-md'> 
                <div className='h-[65px] w-[65px] bg-[#FFFFFF] border border-[#D8DEE6] rounded-full relative top-8 left-4 flex justify-center items-center'>
                <img src={Appartment} alt="" />
                </div>
                <div className='relative top-[70px] left-5'>
                    <h4 className='font-bold text-[18px] text-[#232323]'>Apartments</h4>
                    <p className='text-[14px] text-[#8E97A2]'>200 Properties</p>
                </div>
            </div>
            <div className='h-[190px] w-[201px] border-dashed border border-[#B8C3D1]  rounded bg-[#447FE2] shadow-2xl'> 
                <div className='h-[65px] w-[65px] bg-[#FFFFFF] border border-[#D8DEE6] rounded-full relative top-8 left-4 flex justify-center items-center'>
                <img src={Office} alt="" />
                </div>
                <div className='relative top-[70px] left-5'>
                    <h4 className='font-bold  text-white'>Offices</h4>
                    <p className='text-[14px] text-white'>120 Properties</p>
                </div>
            </div>
            <div className='h-[190px] w-[201px] bg-[#F8FBFF] border-dashed border border-[#B8C3D1]  rounded'> 
                <div className='h-[65px] w-[65px] bg-[#FFFFFF] border border-[#D8DEE6] rounded-full relative top-8 left-4 flex justify-center items-center'>
                <img src={Villas} alt="" />
                </div>
                <div className='relative top-[70px] left-5'>
                    <h4 className='font-bold text-[18px] text-[#232323]'>Villas</h4>
                    <p className='text-[14px] text-[#8E97A2]'>123 Properties</p>
                </div>
            </div>
            <div className='h-[190px] w-[201px] bg-[#F8FBFF] border-dashed border border-[#B8C3D1]  rounded'> 
                <div className='h-[65px] w-[65px] bg-[#FFFFFF] border border-[#D8DEE6] rounded-full relative top-8 left-4 flex justify-center items-center'>
                <img src={Bangolows} alt="" />
                </div>
                <div className='relative top-[70px] left-5'>
                    <h4 className='font-bold text-[18px] text-[#232323]'>Bangalows</h4>
                    <p className='text-[14px] text-[#8E97A2]'>230 Properties</p>
                </div>
            </div>
            <div className='h-[190px] w-[201px] bg-[#F8FBFF] border-dashed border border-[#B8C3D1]  rounded'> 
                <div className='h-[65px] w-[65px] bg-[#FFFFFF] border border-[#D8DEE6] rounded-full relative top-8 left-4 flex justify-center items-center'>
                <img src={TownHome} alt="" />
                </div>
                <div className='relative top-[70px] left-5'>
                    <h4 className='font-bold text-[18px] text-[#232323]'>Townhome</h4>
                    <p className='text-[14px] text-[#8E97A2]'>156 Properties</p>
                </div>
            </div>
            </div>
        <div className='flex justify-center relative top-5 p-10'>
            <Section5/>
        </div>
      </div>
   
    </>
  )
}

export default PropertyCards