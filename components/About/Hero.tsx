import React from 'react'
import { AboutHero, HomeImage } from '../ReusableComponenets/Icons'
import Image from 'next/image'
import TopNav from '../ReusableComponenets/TopNav'

const Hero = () => {
  return (
    <div className='relative p-5'>
     
      <Image src={AboutHero} alt={"home image"} className='rounded-[40px] w-full md:h-[95vh] h-[450px] sm:h-screen object-cover ' />
      <div className='absolute top-5 md:left-5 w-full z-10'>
          <TopNav />
      </div>



      <div className="hidden sm:block md:block mt-30  ">
      <div className='absolute bottom-45 left-20 text-[20px] md:text-[62px] text-white font-normal md:leading-[72px]'>
      About Us
    <p className='text-[16px] md:text-[36px] leading-[39px] text-white w-[1000px]'>
    Innovative Interiors is a leading turnkey contracting company specializing in architect designed - project execution and fine woodworking. </p>
      </div>
      </div>
     <div className="block sm:hidden md:hidden mt-30  space-y-5  px-25">
   
     <div className='absolute bottom-45 md:left-20 left-15 text-[20px] md:text-[62px]'>
     Elevating Interiors <br /> for Seamless Living.
      </div>
     </div>

    </div>
  )
}

export default Hero
