import React from 'react'
import Image from 'next/image'
import { Picture, RightArrow } from '../ReusableComponenets/Icons'


const Production = () => {
  return (
    <div className='md:h-[100vh] z-50 relative md:mb-0 mb-30 '>
      <section className='bg-white  ' >
<Image  src={Picture} alt='picutre' className='w-full h-[593px] object-cover' />
    
    <div className='flex  justify-between items-center px-10 space-x-10  mt-10 '>
    <div className='flex justify-center items-center h-full'> {/* Added flex properties */}
    <p className='text-[11px] md:text-[36.69px] text-start md:leading-[53.8px] text-[#202022] md:tracking-[-1.44px]'>
        Our Sprawling 1,00,000 Sq. Ft. Production Facility, Spread Across <br /> 11 Acres — With Exciting Developments Underway.
    </p>
</div>
    <div className='flex-row flex '>
        <button className='px-5 py-2 bg-[#040444] text-[12px] md:text-[15px] text-white rounded-full whitespace-nowrap cursor-pointer hover:scale-104'>
            Let's Talk
        </button>
        <a className=''>
        <div className='w-10 h-10 bg-[#040444] rounded-full flex justify-center items-center cursor-pointer hover:scale-104'>
                <Image src={RightArrow} alt='right arrow' className='md:w-4 md:h-4 w-3 h-3' />
            </div>
        </a>
    </div>
    </div>
   
</section>
    </div>
  )
}

export default Production
