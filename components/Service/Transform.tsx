import React from 'react'
import {
    Aci,
    Tj,
    henkai,
    qiLogo,
    Aci2,
    henkai2,
    VideoImage,
    RightColorArrow,
  } from "../ReusableComponenets/Icons";
  import Image from 'next/image';
import picutreImage from '@/public/Rectangle 245.png'
import Link from 'next/link';

  const Transform = () => {

    const logos = [
        { logo: Aci },
        { logo: Tj },
        { logo: henkai },
        { logo: qiLogo },
        { logo: Aci2 },
        { logo: Tj },
        { logo: henkai },
      ];
    
  return (
    <div className='bg-white'>
      <section className="md:mb-[150px] mb-[80px]">
        <div className="items-center flex flex-col space-y-5 md:mt-50">
          <h2 className="md:text-[44px] text-[16px] leading-[64px] text-[#040444]">
          Brands that Took Our Turnkey Fit-out Service
          </h2>
          <div className="relative overflow-hidden w-full max-w-5xl h-[100px] bg-white mx-auto fade-mask"
>
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
        </div>
        <div className="md:mt-40 mt-10 relative">
          <Image src={picutreImage} alt={"alt"} className="w-full h-full " />
          <div className="absolute inset-0 md:-top-35 -top-8 flex flex-col items-center justify-center -space-y-5 md:space-y-8 z-10">
            <p className="text-[15px] md:text-[55.91px] leading-[42px] font-semibold text-center text-white">
              Transform Your Space with Us
            </p>
            <p className="text-[10px] md:text-[25.92px] font-light leading-[42px] text-center text-[#F3F3F3] mt-1">
              Start your journey toward modern, functional, and inspiring
              interiors today.
            </p>
          </div>
          <Link href={"/contact"} className="cursor-pointer">
          <div className="absolute md:bottom-35 bottom-5 flex-row flex justify-center items-center w-full hover:scale-105 transition-all duration-300 z-20">
            <button className="md:px-8 px-4 md:py-3 py-1 text-[#040444] bg-white rounded-full cursor-pointer  whitespace-nowrap">
              Contact Us
            </button>
            <a>
              <div className="md:w-12 md:h-12 w-8 h-8 text-[#040444] bg-white rounded-full flex justify-center items-center">
                <Image src={RightColorArrow} alt="right arrow" className="w-4 h-
                4" />
              </div>
            </a>
          </div>
          </Link>
        </div>
      </section>
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

export default Transform
