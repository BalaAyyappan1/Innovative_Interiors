import React from 'react'
import Hero from '@/components/Projects/Hero'
import Content from '@/components/Projects/Content'
import Gallery from '@/components/Projects/Gallery'
import Chair from '@/components/Projects/Chair'
import Image from 'next/image'
import FooterProjectImage from '@/public/Group 39.png';
import Footer from '@/components/ReusableComponenets/Footer'
import MobileFooter from '@/components/ReusableComponenets/MobileFooter'
const page = () => {
  return (
    <>
    <div className='bg-white p-5'>
      <Hero />
      <Content />
      <Gallery />
      <Chair />
      
    </div>
    <Image src={FooterProjectImage} alt='Footer Project Image' className='w-full h-full' />
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
