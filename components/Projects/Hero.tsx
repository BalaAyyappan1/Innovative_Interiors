import React from 'react'
import { HeroImageManu, } from '../ReusableComponenets/Icons'
import Image from 'next/image'
import TopNav from '../ReusableComponenets/TopNav'
import heroImageprojects from '@/public/A07I9078 1.svg';

const Hero = () => {
  return (
    <div className='relative bg-white '>
      <Image src={heroImageprojects} alt={"home image"} className='rounded-[10px] w-full md:h-screen h-[450px] sm:h-screen object-cover ' />
      <div className='absolute top-5 md:left-5 w-full z-10'>
          <TopNav />
      </div>
      <div className='absolute bottom-8 md:left-20 left-10 text-[20px] md:text-[62px] text-white font-normal md:leading-[72px]'>
     View Our Works
    <p className='text-[16px] md:text-[36px]   md:leading-[39px] text-white md:w-[1000px]'>
    Innovative Interiors is a leading turnkey contracting company specializing in architect designed - project execution and fine woodworking. </p>
      </div>

    </div>
  )
}

export default Hero
