'use client'
import React from 'react'
import { Aci, Tj, henkai, qiLogo, Aci2, henkai2, VideoImage, RightArrow } from '../ReusableComponenets/Icons'
import Image from 'next/image'

const Clients = () => {
    const logos = [
        { logo: Aci },
        { logo: Tj },
        { logo: henkai },
        { logo: qiLogo },
        { logo: Aci2 },
        { logo: Tj },
        { logo: henkai }
    ]

    return (
        <div className='flex flex-col items-center p-5 md:p-20 md:space-y-10 space-y-5 md:mt-40 mt-20 mb-30'>
            <h2 className='md:text-[44px] text-[16px] leading-[64px] text-[#040444]'>
                Crafting Spaces for Exceptional Clients
                </h2>
                <div className="relative overflow-hidden w-full max-w-3xl h-[100px] bg-white mx-auto">
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
    <div className=''>
    <Image src={VideoImage} alt={"alt "}  className='w-full h-full object-cover'/>

    </div>



            <div className='flex-row flex'>
        <button className='px-5 py-2 bg-[#040444] rounded-full whitespace-nowrap '>
            Let's Talk
        </button>
        <a className=''>
        <div className='w-10 h-10 bg-[#040444] rounded-full flex justify-center items-center'>
                <Image src={RightArrow} alt='right arrow' className='w-5 h-5' />
            </div>
        </a>
    </div>
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
