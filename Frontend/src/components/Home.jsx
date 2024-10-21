import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/logo.png';
import { faBars, faSearch, faXmark } from '@fortawesome/free-solid-svg-icons'; // Import icons
import Hero from './Hero';
import MidSection from './MidSection';
import './Home.css'
import { useState } from 'react';
import GifSection from './GifSection';
import PropertyType from './PropertyType';


const Home = () => {

  let [menuStatus, setMenuStatus] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Type', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Our Team', href: '#' },
    { label: 'Login / Sign up', href: '#' },
  ];

  return (
    <>
      <div className="w-screen overflow-x-hidden">
        <div className='flex justify-between items-center bg-black w-full px-5 fixed top-0 left-0 h-[100px] z-10'>
          <div className='sm:flex sm:justify-center'>
            <img src={logo} alt="" className='relative top-10 h-[148px] bg-black w-[142px] object-cover' />
          </div>
          <nav className='hidden md:bloc lg:block'>
            <ul className='flex items-center gap-8'>
              <li className='text-yellow-400 border-b-2 border-yellow-400'><a href="">Home</a></li>
              <li className='text-white'><a href="">About</a></li>
              <li className='text-white'><a href="">Type</a></li>
              <li className='text-white'><a href="">Services</a></li>
              <li className='text-white'><a href="">Our Team</a></li>
            </ul>
          </nav>
       {/* menu foe haburger icon  */}
          <div className={`menu lg:w-[40%] w-[80%] ${menuStatus ? 'activMenu' : ''}`}>
            <div className={`text-end p-2  px-4 cursor-pointer font-semibold ${menuStatus ? '' : 'activMenu'}`} onClick={()=>setMenuStatus(!menuStatus)}>
              <FontAwesomeIcon icon={faXmark} className='text-4xl hover:text-white'/>
              </div>
              <ul>
              {menuItems.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className='hover:text-white'>
                    {item.label}
                  </a>
                </li>
              ))}
              </ul>
          </div>

          <div>
            <form action="" className='gap-2 flex items-center'>
              <div className='flex items-center border border-[1px solid #7B89A3] rounded hidden md-block lg:block'>
                <span><FontAwesomeIcon icon={faSearch} /></span>
                <input type="text" placeholder="Search here..." className="text-white outline-none p-2 w-[256px] h-[57px] bg-transparent border-none" />
              </div>
              <button type="submit" className="px-5 h-[57px] bg-yellow-400 rounded font-semibold hidden md:block lg:block">
                Login / Sign up
              </button>
              <button type='button' className='px-5 rounded-md border h-[57px]' onClick={()=>setMenuStatus(!menuStatus)}>
                {
                  menuStatus ? 
                  <FontAwesomeIcon icon={faXmark} className='text-white text-2xl'/>
                  :
                  <FontAwesomeIcon icon={faBars} className="text-white text-2xl" />
                }
                {/*  */}
              </button>
            </form>
          </div>
        </div>

        {/* Hero section */}
        <div className='mt-[180px]'>
          <Hero />
        </div>
        <div className='mt-10 flex justify-center'>
          <MidSection/>
        </div>
        <div className='flex justify-center'>
          <GifSection/>
        </div>
        <div>
          <PropertyType/>
        </div>
      </div>
    </>
  );
}

export default Home;
