import React from 'react'
import Hero from '@/components/Careers/Hero'
import Careers from '@/components/Careers/Careers'
import ScrollImage from '@/components/Careers/ScrollImage'
import Journey from '@/components/Careers/Journey'
import ApplyHere from '@/components/Careers/ApplyHere'
import Footer from '@/components/ReusableComponenets/Footer'
import Image from 'next/image'
import MobileFooter from '@/components/ReusableComponenets/MobileFooter'
import footerImagecarrer from '@/public/Group 39 (1).png'
const page = () => {
  return (
    <>
    <div className='bg-white p-5'>
        <Hero />
        <Careers />
        <ScrollImage />
        <Journey /> 
        <ApplyHere />
    </div>
    <Image src={footerImagecarrer} alt="footer image 1"  className="w-full h-full object-cover"/>
    <div className="hidden lg:block">
        <Footer />
      </div>
      {/* Mobile Footer */}
      <div className="block lg:hidden">
        <MobileFooter />
        </div>
    </>
  )
}

export default page
