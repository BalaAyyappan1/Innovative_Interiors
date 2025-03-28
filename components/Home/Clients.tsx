import React from 'react'
import { RadissonLogo, ChenSilksLogo, AdityaramLogo, GRTLOGO, ReniLogo ,AloftLogo, TcsLgoo, MiotLogo, SundaramLogo, tvsLogo, PothysLogo, KOLogo, Picture, RightArrow   } from '../ReusableComponenets/Icons'
import Image from 'next/image'


const Clients = () => {

const logo = [
    {
        logo: RadissonLogo
    },
    {
        logo:ChenSilksLogo
    },
    {
        logo:AdityaramLogo
    },
    {
        logo:GRTLOGO
    },
    // {
    //     Logo:ReniLogo
    // },
    {
        logo:AloftLogo
    },
    {
        logo:TcsLgoo
    },
    {
        logo:MiotLogo
    },
    {
        logo:SundaramLogo
    },
    {
logo:tvsLogo
    },
    {logo:PothysLogo},
    {logo:KOLogo}
]



  return (
    <div className='flex flex-col justify-center items-center '>
      <div className='bg-[#F8F8F8] text-[#141414]'>
    OUR ASSOCIATE
      </div>
      <div className='text-[#040444] text-[75px]'>
        Proudly Associated With
      </div>

<section className='flex flex-wrap justify-center'>
  {logo.map((item, index) => (
    <div key={index} className='w-1/4 p-2'>
      <Image src={item.logo} alt={`Logo ${index + 1}`} />
    </div>
  ))}
</section>



    </div>
  )
}

export default Clients
