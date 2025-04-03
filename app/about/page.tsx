import Content from '@/components/About/Content'
import Hero from '@/components/About/Hero'
import Clients from '@/components/About/Clients'
import VideoAnimation from '@/components/Home/videoAnimation'
import React from 'react'
import Projects from '@/components/About/Projects'
import Process from '@/components/About/Process'
import { AboutFooterImage } from '@/components/ReusableComponenets/Icons'
import Image from 'next/image'
import Footer from '@/components/ReusableComponenets/Footer'
import MobileFooter from '@/components/ReusableComponenets/MobileFooter'
const page = () => {
  return (
    <div className='bg-white  '>
      <div className='p-5'>
      <Hero />
      <Content />
      <Clients />
      <Projects />
      <Process />
      </div>
     
      <Image src={AboutFooterImage} alt="footer image 1" />
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
