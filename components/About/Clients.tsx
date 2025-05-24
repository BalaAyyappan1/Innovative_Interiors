'use client'
import React from 'react'
import {
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22, logo23,  logo24, logo25, logo26, logo27, logo28, logo29,
  VideoImage
} from "../ReusableComponenets/Icons";
import Image from 'next/image'
import PlayButton from '@/public/Vector(1).png';
import Link from 'next/link';
const Clients = () => {
  const logos = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
    { logo: logo5 },
    { logo: logo6 },
    { logo: logo7 },
    { logo: logo8 },
    { logo: logo9 },

    { logo: logo10 },
    { logo: logo11 },
    { logo: logo12 },
     { logo: logo13 },
      { logo: logo14 },
       { logo: logo15 },
    { logo: logo16 },
    { logo: logo17 },
    { logo: logo18 },
    { logo: logo19 },
    { logo: logo20 },
    { logo: logo21 },
     { logo: logo22 },
    { logo: logo23 },
    { logo: logo24 },
    { logo: logo25 },
    { logo: logo26 },
    { logo: logo27 },

    { logo: logo28 },
    { logo: logo29 },

  ];

  return (
    <div className='flex flex-col items-center   p-5 md:p-20 md:space-y-10 space-y-5 md:mt-40 mt-20 mb-30'>
      <h2 className='md:text-[60px] text-[16px] font-medium leading-[64px] text-[#040444]'>
        Crafting Spaces for Exceptional Clients
      </h2>
      <div className="relative overflow-hidden w-full max-w-4xl h-[100px] bg-white mx-auto fade-mask">

        <div
          className="flex items-center"
          style={{
            animation: "marquee 25s linear infinite",
            width: "fit-content"
          }}
        >
          {/* First set of logos */}
          {logos.map((item, index) => (
            <div key={`logo-1-${index}`} className="flex items-center justify-center mx-4 md:mx-8 h-[80px] w-[120px]">
              <Image src={item.logo} alt="Client logo" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
          {/* Duplicate set of logos for seamless looping */}
          {logos.map((item, index) => (
            <div key={`logo-2-${index}`} className="flex items-center justify-center mx-4 md:mx-8 h-[80px] w-[120px]">
              <Image src={item.logo} alt="Client logo" className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>

      <Link href='https://www.youtube.com/watch?v=XHG6tYftyyI' className='relative '>
        <Image src={VideoImage} alt={"alt "} className='w-full h-full object-cover' />
        <Image
          src={PlayButton}
          alt='play button'
          className='absolute top-1/2 left-1/2 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2'
        />
      </Link>

      {/* <div className='flex-row flex'>
        <button className='px-5 py-2 bg-[#040444] rounded-full whitespace-nowrap '>
            Let's Talk
        </button>
        <a className=''>
        <div className='w-10 h-10 bg-[#040444] rounded-full flex justify-center items-center'>
                <Image src={RightArrow} alt='right arrow' className='w-5 h-5' />
            </div>
        </a>
    </div> */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        /* Add this to pause animation on hover for better user experience */
        div:hover > div[style*="animation: marquee"] {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default Clients
