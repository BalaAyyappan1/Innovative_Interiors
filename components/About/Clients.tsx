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
        <div>
            <h2 className='text-[44px] text-[#040444]'>
                Crafting Spaces for Exceptional Clients
            </h2>
            <div className='flex flex-row space-x-5 overflow-hidden'>
                {logos.map((item, index) => (
                    <div key={index} className='flex-shrink-0'>
                        <Image src={item.logo} alt="Client logo" className="max-w-full h-auto" />
                    </div>
                ))}
            </div>

            <Image src={VideoImage} alt={"alt "} />
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
