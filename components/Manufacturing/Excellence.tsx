'use client'

import React from "react";
import {
  ExcellenceImage,
  Hand,
  RightArrow,
  RightColorArrow,
  VideoImage,
} from "../ReusableComponenets/Icons";
import PlayButton from '@/public/Vector(1).png';
import Image from "next/image";
import {
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22, logo23,  logo24, logo25, logo26, logo27, logo28, logo29
} from "../ReusableComponenets/Icons";
import Link from "next/link";

const Excellence = () => {
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
    <div>

      <div className="items-center  p-5 md:p-20 md:space-y-10 space-y-5 md:mt-40 mt-10 mb-10">
        <Link href='https://www.youtube.com/watch?v=XHG6tYftyyI' className='relative '>
          <Image src={VideoImage} alt={"alt "} className='w-full h-full object-cover' />
          <Image
            src={PlayButton}
            alt='play button'
            className='absolute top-1/2 left-1/2 w-12 h-12 transform -translate-x-1/2 -translate-y-1/2'
          />
        </Link>
      </div>

      <div className="w-full  mt-[10px] md:mt-30">
        <div className="text-center  text-3xl lg:text-[40px] md:text-[60px] text-[#040444]">
          Our Commitment to Excellence
        </div>
        <p className="text-[14px] mt-1 md:text-[20px] md:leading-[42px] lg:leading-[32px] font-normal text-center text-[#393535] md:px-65">
          At Innovative Interiors, excellence is not just a goal—it's the
          foundation of everything we create. From the selection of premium
          materials to the final quality checks, every step of our manufacturing
          process is driven by precision, innovation, and attention to detail.
        </p>
      </div>

      <div className="md:mt-20 mt-10  ">
        <Image src={ExcellenceImage} alt={"nwe"} className="w-full object-cover h-full" />
      </div>

  

      {/* Add keyframes for the animation */}
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
  );
};

export default Excellence;
