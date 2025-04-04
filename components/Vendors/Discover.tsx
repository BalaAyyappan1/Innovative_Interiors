import React from 'react'
import discoverImage from '@/public/Group 1321317211.svg'
import Image from 'next/image'
const Discover = () => {
  return (
    <div className='flex md:flex-row flex-col-reverse justify-center items-center mt-20 p-4 md:space-y-0 space-y-reverse space-y-8 md:ml-20 md:mb-30 mb-10'>
      <div className='flex-1 md:space-y-8 space-y-5'>
        <div className='flex flex-col'>
          <h1 className='md:text-[48.12px] text-[14px] text-[#040444] md:leading-[44px] font-medium mb-2 md:mb-4'>
            Discover Us
          </h1>
          <p className='md:text-[24px] text-[10px] text-[#1D1E1F] md:leading-[48.24px] font-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam, quos.
          </p>
        </div>

        <div>
          <h1 className='md:text-[48.12px] text-[14px] text-[#040444] md:leading-[44px] font-medium mb-2 md:mb-4'>
            VISIT US
          </h1>     
          <p className='md:text-[24px] text-[10px] text-[#1D1E1F] md:leading-[48.24px] font-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  Quisquam, quos.
          </p>
        </div>

        <p className='md:text-[20px] text-[10px] font-medium text-[#1D1E1F] md:leading-[48.24px]'>
          Feel Free to get in touch with us through our channels:
        </p>

        <div>
          <h1 className='md:text-[48.12px] text-[14px] text-[#040444] md:leading-[44px] font-medium mb-2 md:mb-4'>
            EMAIL US
          </h1>
          <p className='md:text-[24px] text-[10px] text-[#1D1E1F] md:leading-[48.24px] font-normal'>
            info@example.com
          </p>
        </div>

        <div>
          <h1 className='md:text-[48.12px] text-[14px] text-[#040444] md:leading-[44px] font-medium mb-2 md:mb-4'>
            CALL US
          </h1>
          <p className='md:text-[24px] text-[10px] text-[#1D1E1F] md:leading-[48.24px] font-normal'>
            + 999 999 9990<br />
            + 999 999 9991
          </p>
        </div>
      </div>

      <div className='flex-1'>
        <Image src={discoverImage} alt='discoverImage' />
      </div>
    </div>
  )
}

export default Discover
