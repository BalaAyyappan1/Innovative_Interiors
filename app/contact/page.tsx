import React from 'react'
import Hero from '@/components/Contact/Hero'
import Appoinment from '@/components/Contact/Appoinment'
import FooterImageContact from '@/public/Group 39 (2).png'
import Image from 'next/image'
import MobileFooter from '@/components/ReusableComponenets/MobileFooter'
import Footer from '@/components/ReusableComponenets/Footer'
import Faq from '@/components/Contact/Faq'
const page = () => {
  return (
    <div className='bg-white'>
      <div className='p-5'>
      <Hero />
      </div>
      <Appoinment />
      <Faq />
      <Image src={FooterImageContact} alt="footer image 1"  className="w-full h-full object-cover"/>
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
