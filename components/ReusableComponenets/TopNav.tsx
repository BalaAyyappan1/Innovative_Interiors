"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { companyLogo } from './Icons';
import Link from 'next/link';
import CompanyLogoBlack from '@/public/Innovative Final Logo (1) 1(1).png';



const navItems = [
  {name:'HOME', href:'/'},
  { name: 'ABOUT', href: '/about' },
  { name: 'MANUFACTURING', href: '/manufacturing' },
  { name: 'SERVICE', href: '/service' },
  { name: 'PROJECTS', href: '/projects' },
  { name: 'CAREERS', href: '/careers' },
  { name: 'VENDORS', href: '/vendors' },
  { name: 'CONTACT', href: '/contact' },
];

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex flex-row justify-between  items-end  py-6 md:px-15 pl-7 pr-10  '>
      {/* Logo Section */}
      <div className='md:w-[200px] w-[100px]'>
        <Link href='/'>
          <Image src={companyLogo} alt="company logo" />
        </Link>
      </div>

      {/* Navigation Menu */}
      <div className='hidden lg:flex flex-row justify-center items-center  bg-white max-w-[779px] text-black text-[13px] leading-[13px] tracking-[0.5px] p-4 rounded-[12px] h-[56px] shadow'>
        <ul className='flex flex-row space-x-4'>
          {navItems.map(item => (
            <li key={item.name}>
              <Link className='hover:scale-105' href={item.href}>
                <span className='hover:scale-105'>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hamburger Icon */}
      <div className='lg:hidden'>
        <button 
          onClick={toggleMenu} 
          className='text-white focus:outline-none cursor-pointer'
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu - Simple & Perfect */}
      {isMenuOpen && (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-50 bg-gray-100 pt-24 px-6 pb-10 overflow-y-auto'>
          {/* Close button */}

          <div  className="absolute top-10 left-10 w-[150px]  ">
            <Image src={CompanyLogoBlack} alt="company logo" />
          </div>
          <div className="absolute top-13 right-6">
            <button 
              onClick={toggleMenu}
              className="p-2 text-gray-500 cursor-pointer hover:text-gray-700 transition-colors"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Logo in menu */}
         
          
          <ul className='flex flex-col mt-20'>
            {navItems.map(item => (
              <li key={item.name} className="border-b border-gray-100">
                <Link 
                  href={item.href} 
                  className="flex items-center hover:scale-105 cursor-pointer justify-center py-5 text-gray-800 font-medium text-lg"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default TopNav;
