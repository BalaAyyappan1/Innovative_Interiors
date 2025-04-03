import React from 'react'
import Hero from '@/components/Careers/Hero'
import Careers from '@/components/Careers/Careers'
import ScrollImage from '@/components/Careers/ScrollImage'
import Journey from '@/components/Careers/Journey'
import ApplyHere from '@/components/Careers/ApplyHere'
const page = () => {
  return (
    <div className='bg-white p-5'>
        <Hero />
        <Careers />
        <ScrollImage />
        <Journey /> 
        <ApplyHere />
    </div>
  )
}

export default page
