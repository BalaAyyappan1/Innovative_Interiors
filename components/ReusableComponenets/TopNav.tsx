"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { companyLogo } from './Icons';
import Link from 'next/link';

const navItems = [
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
    <div className='flex flex-row justify-between  items-end p-4 md:px-20 px-15'>
      {/* Logo Section */}
      <div className='md:w-[200px] w-[130px]  '>
        <Image src={companyLogo} alt="company logo" />
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
        <button onClick={toggleMenu} className='text-white'>
          {/* Hamburger Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M3 6H21V8H3V6ZM3 11H21V13H3V11ZM3 16H21V18H3V16Z" fill="currentColor"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='absolute top-16 left-0 w-full bg-white text-black shadow-md'>
          <ul className='flex flex-col items-center space-y-4 py-4'>
            {navItems.map(item => (
              <li key={item.name}>
                <Link className='hover:scale-105' href={item.href}>
                  <span>{item.name}</span>
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
