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

<section>
<Image  src={Picture} alt='picutre'/>
    
    <div className='flex justify-between items-center px-10 '>
    <div className='text-[46.69px] leading-[52.8px] text-[#202022] tracking-[-1.44px]'>
    Our Sprawling 1,00,000 Sq. Ft. Production Facility, Spread Across 11 Acres — With Exciting Developments Underway.
    </div>
    <div className='flex-row flex'>
        <button className='px-5 py-2 bg-[#040444] rounded-full whitespace-nowrap '>
            Let's Talk
        </button>
        <a className=''>
        <div className='w-10 h-10 bg-[#040444] rounded-full flex justify-center items-center'>
                <Image src={RightArrow} alt='right arrow' className='w-5 h-5' />
            </div>
        </a>
    </div>
    </div>
   
</section>

    </div>
  )
}

export default Clients
