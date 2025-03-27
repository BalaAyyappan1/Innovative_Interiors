import { FooterImageVendors } from '@/components/ReusableComponenets/Icons'
import Hero from '@/components/Vendors/Hero'
import Partner from '@/components/Vendors/Partner'
import React from 'react'
import Image from 'next/image'
import Footer from '@/components/ReusableComponenets/Footer'

const page = () => {
  return (
    <div className='bg-white'>
      <Hero />
      <Partner />
      <Image src={FooterImageVendors} alt={"Footer"} />
      <Footer />

    </div>
  )
}

export default page
