import React from 'react'
import { HomeImage } from '../ReusableComponenets/Icons'
import Image from 'next/image'
import TopNav from '../ReusableComponenets/TopNav'

const Hero = () => {
  return (
    <div className='relative p-5'>
      <Image src={HomeImage} alt={"home image"} className='rounded-[40px] w-full h-screen object-cover ' />
      <div className='absolute top-5 left-5 w-full z-10'>
          <TopNav />
      </div>
    </div>
  )
}

export default Hero
