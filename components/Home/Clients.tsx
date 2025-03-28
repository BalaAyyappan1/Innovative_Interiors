import React from 'react' 
import { RadissonLogo, ChenSilksLogo, AdityaramLogo, GRTLOGO, RLogo ,AloftLogo, TcsLgoo, MiotLogo, SundaramLogo, tvsLogo, PothysLogo, KOLogo, Picture, RightArrow   } from '../ReusableComponenets/Icons'
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
    {
        logo: RLogo
    },
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
    <div className='flex flex-col justify-center items-center h-screen space-y-7'>
        <div className='bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]'>
        <ul className='list-disc pl-5 text-center'>
          <li>OUR ASSOCIATE</li>
        </ul>
      </div>
      <div className='text-[#040444] h-[140.78px] w-full  justify-center text-center items-center text-[75.75px] leading-[70.4px]'>
        Proudly Associated With
      </div>

<section className='grid grid-cols-4  gap-10 p-5 w-full justify-items-center'>
  {logo.map((item, index) => (
    <div key={index} className='flex justify-center items-center'>
      <Image 
        src={item.logo} 
        alt={`Logo ${index + 1}`} 
        height={100} 
        width={item.logo === GRTLOGO || item.logo === MiotLogo ? 120 : 180}
      />
    </div>
  ))}
</section>



    </div>
  )
}

export default Clients
