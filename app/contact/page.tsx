import React from 'react'
import Hero from '@/components/Contact/Hero'
import Appoinment from '@/components/Contact/Appoinment'
const page = () => {
  return (
    <div className='bg-white'>
      <div className='p-5'>
      <Hero />
      </div>
      <Appoinment />
    </div>
  )
}

export default page
