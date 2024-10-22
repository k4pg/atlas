import React from 'react';
import AgentCard from './AgentCard';
import callIcon from '../../assets/section10/callIcon.png';
import HumanImgOne from '../../assets/section10/humanImg-1.png';
import HumanImgTwo from '../../assets/section10/humanImg-2.png';
import HumanImgThree from '../../assets/section10/humanImg-3.png';
import HumanImgFour from '../../assets/section10/humanImg-4.png';
import Section11 from '../section-11/Section11';

const Section10 = () => {
  const agentsData = [
    {
      image: HumanImgOne,
      name: 'John Smith',
      location: 'High Street, Oakland CA',
      rating: 4.5,
      listings: 237,
      callIcon: callIcon
    },
    {
      image: HumanImgTwo,
      name: 'Jane Doe',
      location: 'Sunset Blvd, Los Angeles CA',
      rating: 4.7,
      listings: 312,
      callIcon: callIcon
    },
    {
      image: HumanImgThree,
      name: 'Michael Brown',
      location: 'Bay Street, San Francisco CA',
      rating: 4.8,
      listings: 150,
      callIcon: callIcon
    },
    {
      image: HumanImgFour,
      name: 'Lisa White',
      location: 'Downtown, Seattle WA',
      rating: 4.6,
      listings: 200,
      callIcon: callIcon
    }
  ];

  return (
    <>
    <div className='bg-[#F2F6FC] mt-20'>
    <div className='flex flex-col justify-center items-center py-20'>
        <p className='text-[#74787F]'>-- AGENTS PROFILE</p>
        <h3 className='text-[44px]'>Meet   
            <span className='font-extrabold'> Our</span> 
            <span className='font-extrabold text-[red]'> Agents</span>
        </h3>
    </div>
      
      <div className='flex lg:flex-wrap gap-10 lg:justify-center'>
        {agentsData.map((agent, index) => (
          <AgentCard
            key={index}
            image={agent.image}
            name={agent.name}
            location={agent.location}
            rating={agent.rating}
            listings={agent.listings}
            callIcon={agent.callIcon}
          />
        ))}
      </div>

      
    </div>

    <Section11/>
    </>
  );
};

export default Section10;
