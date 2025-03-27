import React from 'react'
import { HeroImageManu, Tower1, Tower2, Tower3, Tower4 } from '../ReusableComponenets/Icons'
import Image from 'next/image'
import TopNav from '../ReusableComponenets/TopNav'

const Hero = () => {
  return (
    <div className='relative p-5'>
      <Image src={HeroImageManu} alt={"home image"} className='rounded-[40px] w-full h-screen object-cover ' />
      <div className='absolute top-5 left-5 w-full z-10'>
          <TopNav />
      </div>
      <div className='absolute flex bottom-6 left-8 w-full z-10 text-[20px] md:text-[100px] md:leading-[112px]'>
        Manufacturing Excellence <br /> at Innovative Interiors
      </div>

        {/* employee says  */}


     


    </div>
  )
}

export default Hero
