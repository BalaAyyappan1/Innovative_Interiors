import React from 'react'
import { HomeImage } from '../ReusableComponenets/Icons'
import Image from 'next/image'
import TopNav from '../ReusableComponenets/TopNav'

const Hero = () => {
  return (
    <div className='relative p-5'>
      <Image src={HomeImage} alt={"home image"} className='rounded-[40px] w-full md:h-screen h-[450px] sm:h-screen object-cover ' />
      <div className='absolute top-5 md:left-5 w-full z-10'>
          <TopNav />
      </div>

      <div className='absolute md:bottom-15 md:left-20 bottom-15 left-10 font-medium text-[20px] md:text-[91px] md:leading-[112px]'>
      Turnkey Contracting | Woodwork Mastery |  Timeless Interiors   
      </div>
    </div>
  )
}

export default Hero
