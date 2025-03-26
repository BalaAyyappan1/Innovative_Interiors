import React from 'react'
import { Furniture, Interior, Exterior, ImageShaper, ImageShaperFlip } from '../ReusableComponenets/Icons'
import Image from 'next/image'

const Future = () => {
  return (
    <div className='flex flex-row  p-4'>
      <div className='w-1/2  p-2 relative'>
        <Image src={Furniture} alt={"furniture"} />
        <div className='absolute bottom-2 left-1.5 w-1/2 h-auto flex justify-center items-center'>
          <Image src={ImageShaper} alt='Image Shaper' className='w-full h-auto' />
          <div className='absolute text-black text-[23.81px] flex flex-col leading-[28.8px]'>
            Furniture 
            <span className='text-[14px] text-[#141414] text-start flex '>
              From vision to reality, we shape innovative structures that seamlessly merge modern aesthetics with eco-friendly principles,
              redefining urban landscapes.
            </span>
          </div>
        </div>
      </div>
      <div className='w-1/2 flex flex-col space-y-2 p-2'>
        <div className='relative'>
          <Image src={Interior} alt='Interior' className='rounded-t-[10px] rounded-br-[10px]' />
          <div className='absolute bottom-0 right-0 w-1/2 h-auto flex justify-center items-center'>
            <Image src={ImageShaperFlip} alt='Image Shaper' className='w-full h-auto' />
            <div className='absolute right-10 text-[#141414] text-[19.38px] font-medium '>Interior Design <br /> <span className='font text-[14.63px]'>
            Contemporary style with environmentally
            conscious landscaping solutions.
                </span></div>
          </div>
        </div>
        <div className='relative'>
          <Image src={Exterior} alt='Exterior' className='rounded-t-[10px] rounded-br-[10px]' />
          <div className='absolute bottom-0 left-0 w-1/2 h-auto flex justify-center items-center'>
            <Image src={ImageShaper} alt='Image Shaper' className='w-full h-auto' />
            <div className='absolute top-10 right-0  text-[#141414] text-[19.38px] flex flex-col font-medium '>Exterior Design <br /> <span className='mt-1 font text-[14.63px]'>
            Contemporary style with environmentally
            conscious landscaping solutions.
                </span></div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Future
