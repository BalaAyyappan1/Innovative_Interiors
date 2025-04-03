"use client";
import React from 'react'
import Hero from '@/components/Service/Hero'
import OurServices from '@/components/Service/OurServices'
import Work from '@/components/Service/Work'
import Projects from '@/components/About/Projects'
import Transform from '@/components/Service/Transform'
import FooterImageService from '@/public/Group 39 (1).svg'
import Image from 'next/image'
import MobileFooter from '@/components/ReusableComponenets/MobileFooter'
import Footer from '@/components/ReusableComponenets/Footer'
const page = () => {
  return (
    <div className='bg-[#FFFFFF] p-5 '>
      <Hero />
      <OurServices />
      <Work />
      <Transform />
      <Image src={FooterImageService} alt='FooterImageService' />
      <div className="hidden lg:block">
        <Footer />
      </div>
      
      {/* Mobile Footer */}
      <div className="block lg:hidden">
        <MobileFooter />
      </div>
    </div>
  )
}

export default page
