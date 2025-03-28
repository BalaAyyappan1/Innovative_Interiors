import React from 'react'
import Image from 'next/image'
import { Picture, RightArrow } from '../ReusableComponenets/Icons'


const Production = () => {
  return (
    <div className='h-screen'>
      <section>
<Image  src={Picture} alt='picutre'/>
    
    <div className='flex justify-between items-center px-10 space-x-10  mt-10 '>
    <div className='flex justify-center items-center h-full'> {/* Added flex properties */}
    <p className='text-[36.69px] text-start leading-[53.8px] text-[#202022] tracking-[-1.44px]'>
        Our Sprawling 1,00,000 Sq. Ft. Production Facility, Spread Across 11 Acres — With Exciting Developments Underway.
    </p>
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

export default Production
