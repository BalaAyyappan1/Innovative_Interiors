import React from 'react'
import { Rectangle, Rectangle2 } from '../ReusableComponenets/Icons'
import Image from 'next/image'

const Process = () => {
  return (
    <div className='flex flex-col justify-center'>
      <div>
        Our Process
      </div>
      <div className='text-[62.75px]'>
      A Step-by-Step Approach to Design Excellence
      </div>

      <div className='flex flex-wrap '>
        <Image src={Rectangle} alt={"rec"} width={500} height={841} className='' />
        <Image src={Rectangle2} alt={"rec2"} width={500} height={841} className='' />
      </div>
    </div>
  )
}

export default Process
