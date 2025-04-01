
"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import Imagestair from '@/public/Rectangle 242.svg';
const Work = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
       <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]">
        <ul className="list-disc pl-5 text-center">
          <li>HOW WE WORK</li>
        </ul>
      </div>
      <div className="text-[#040444]  w-full  justify-center text-center items-center text-[17px] md:text-[75.75px] leading-[70.4px]">
      Our Innovative Interiors Approach
      </div>



      <div className='flex flex-row justify-center items-center px-10'>
        
        <div className='flex-1'>
        <Image src={Imagestair} alt='image' />
        </div>
        <div className='flex-1'>
          <div 
            className='cursor-pointer flex items-center gap-2 bg-[#F8F8F8] p-2 rounded-md'
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className='bg-[#040444] w-[30px] h-[30px] rounded-full flex justify-center items-center'>

            </div>
            <span className='text-[#040444] text-[20px]'>1</span>
            <span className='text-[#040444] text-[20px]'> Concept & Planning</span>
            <svg 
              className={`w-4 h-4 text-[#040444] transition-transform ${isOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {isOpen && (
            <div className='mt-2 text-[#888888] text-[20px]'>
              At the heart of every stunning interior is a well-thought-out concept. Our planning services help you visualize your space, assess design possibilities, and create a tailored roadmap for a stylish and functional environment. From material selection to spatial optimization,
            </div>
          )}
        </div>
      
        
      </div>

    </div>
  )
}

export default Work
