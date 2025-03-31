import React from 'react'
import { Aci, Tj, henkai, qiLogo, Aci2, henkai2, VideoImage, RightArrow } from '../ReusableComponenets/Icons'
import Image from 'next/image'

const Clients = () => {
    const logos = [
        { logo: Aci },
        { logo: Tj },
        { logo: henkai },
        { logo: qiLogo },
        { logo: Aci2 },
        { logo: Tj },
        { logo: henkai }
    ]

    return (
        <div className='flex flex-col items-center p-20 space-y-10 mt-40'>
            <h2 className='md:text-[44px] text-[16px] leading-[64px] text-[#040444]'>
                Crafting Spaces for Exceptional Clients
            </h2>
            <div className='flex flex-row space-x-5 '>
                {logos.map((item, index) => (
                    <div key={index} className='flex-shrink-0'>
                        <Image src={item.logo} alt="Client logo"  />
                    </div>
                ))}
            </div>
<div className='px-40'>
<Image src={VideoImage} alt={"alt "} />

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
    )
}

export default Clients
