import { FooterImageVendors } from '@/components/ReusableComponenets/Icons'
import Hero from '@/components/Vendors/Hero'
import Partner from '@/components/Vendors/Partner'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/ReusableComponenets/Footer'
import Faq from '@/components/Vendors/Faq'
import MobileFooter from '@/components/ReusableComponenets/MobileFooter'

import Discover from '@/components/Vendors/Discover'
import WhyPartner from '@/components/Vendors/WhyPartner'

const page = () => {
  return (
    <div className='bg-white'>
      <div className='p-5'>
      <Hero />
      <Partner />

      </div>
      <WhyPartner />
      <Faq />
      <Discover />
      <Image src={FooterImageVendors} alt={"Footer"} />
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
