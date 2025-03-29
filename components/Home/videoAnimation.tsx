"use client";
import React, { useEffect } from 'react'
import Image from 'next/image'
import { RightArrow } from '../ReusableComponenets/Icons'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const VideoAnimation = () => {
 const contents  = [
  {
    number:"100%",
    text:"Delivering quality and innovation with every project."
  },
  {
    number:"100%",
    text:"Delivering quality and innovation with every project."
  },
  {
    number:"100%",
    text:"Delivering quality and innovation with every project."
  }

 ]


 useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Pin the VideoScrubber
  const pinScrubber = gsap.fromTo('.video-section', 
    { position: 'relative' }, 
    { 
      scrollTrigger: {
        trigger: '.video-section',
        start: 'top top',
        end: '+=900', 
        pin: true,
        pinSpacing: false, 
        scrub: true // Smooth scrubbing
      }
    }
  );

  return () => {
    pinScrubber.kill(); 
  };
}, []);



  return (
    <div className='flex flex-row justify-between h-screen video-section z-50'>
      <div className='w-[40%] flex justify-center items-center'>
      <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className='w-full object-cover rounded-lg'
        >
          <source src="/sample.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='w-[60%] flex flex-col justify-center items-center space-y-5 '>
        <div className='flex flex-row space-x-3 px-5 items-center'>
          {contents.map((item, index) => (
            <div key={index} className='text-center border-r-2 border-[#938D8D] mb-4 flex flex-col space-y-1'> 
              <h2 className='text-[30px] font-bold text-[#191919] leading-[57px]'>{item.number}</h2>
              <p className='text-[13px] text-[#191919] leading-[13px]'>{item.text}</p>
            </div>
          ))}
        </div>
        <div className="flex-row flex">
        <button className=" bg-[#040444] text-[19.69px] w-[153px] h-[56px] rounded-full whitespace-nowrap cursor-pointer hover:scale-104">
          Learn More
        </button>
        <a className="">
          <div className="w-[56px] h-[56px] bg-[#040444]  rounded-full flex justify-center items-center hover:scale-104">
            <Image src={RightArrow} alt="right arrow" className="w-5 h-5" />
          </div>
        </a>
      </div>
      </div>
    </div>
  )
}

export default VideoAnimation
