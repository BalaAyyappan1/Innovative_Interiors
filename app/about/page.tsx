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
const page = () => {
  return (
    <div className='bg-white overflow-x-hidden'>
      <Hero />
      <Content />
      <Clients />
      <Projects />
      <Process />
      <Image src={AboutFooterImage} alt="footer image 1" />
<Footer />

    </div>
  )
}

export default page
