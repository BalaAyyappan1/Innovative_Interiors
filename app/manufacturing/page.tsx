import Hero from '@/components/Manufacturing/Hero'
import Tower from '@/components/Manufacturing/Tower'
import React from 'react'
import Excellence from './../../components/Manufacturing/Excellence';
import Footer from '@/components/ReusableComponenets/Footer';
import { FooterManuImage } from '@/components/ReusableComponenets/Icons';
import Image from 'next/image';

const page = () => {
  return (
    <div className='bg-white'>
        <Hero />
        {/* <Tower /> */}
        <Excellence />
        <Image src={FooterManuImage} alt={"alt"} />
        <Footer />
    </div>
  )
}

export default page
