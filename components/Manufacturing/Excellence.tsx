import React from 'react'
import { ExcellenceImage, Hand, RightArrow } from '../ReusableComponenets/Icons'
import Image from 'next/image'

const Excellence = () => {
  return (
    <div>
        <div className='font-semibold  text-[16px] text-[#040444]'>
        Our Commitment to Excellence 


        </div>
        <p className='text-[10px] text-black'>
At Innovative Interiors, excellence is not just a goal—it’s the foundation of everything we create. From the selection of premium materials to the final quality checks, every step of our manufacturing process is driven by precision, innovation, and attention to detail.
</p >
      <Image src={ExcellenceImage} alt={"nwe"} />



      <section>
        <Image src={Hand} alt={"alt"} />
        <div className='absolute '>
        <span className='text-[10px] text-black'>
At Innovative Interiors, excellence is not just a goal—it’s the foundation of everything we create. From the selection of premium materials to the final quality checks, every step of our manufacturing process is driven by precision, innovation, and attention to detail.
</span>
<p>
Start your journey toward modern, functional, and inspiring interiors today.    
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

      </section>
    </div>
  )
}

export default Excellence
