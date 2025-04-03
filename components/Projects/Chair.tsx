import React from 'react'
import Image from 'next/image'
import ChairImage1 from '@/public/ffeeed 1.png'

const Chair = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <div>
        <h1 className='text-[#040444] text-[55px] leading-[69px] font-semibold text-center'>
        How do we Work?
      </h1>
      <p className='text-[#040444] text-[20px] font-normal leading-[42px] text-center'>
        You can view each stage separately and change the action plan if desired.
      </p>

        </div>


        <div className='grid grid-cols-3 gap-12 mt-4'>
            {/* Row 1 */}
            <div className='flex flex-col items-center'>
                <h1 className='text-[#040444] text-[40px] font-medium leading-[69px] text-center'>Consultation</h1>
                <p className='text-[#393535] text-[20px] font-normal leading-[42px] text-center'>We understand your lifestyle, preferences, and design aspirations.</p>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-[#040444] text-[40px] font-medium leading-[69px] text-center'>Ideation</h1>
                <p className='text-[#393535] text-[20px] font-normal leading-[42px] text-center'>Bringing your ideas to life with mood boards, sketches, and design concepts.</p>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-[#040444] text-[40px] font-medium leading-[69px] text-center'>3D Visualization</h1>
                <p className='text-[#393535] text-[20px] font-normal leading-[42px] text-center'>Experience your dream space before execution with immersive 3D renders.</p>
            </div>

            {/* Row 2 */}
            <div className='flex flex-col items-center'>
                <h1 className='text-[#040444] text-[40px] font-medium leading-[69px] text-center'>3D Visualization</h1>
                <p className='text-[#393535] text-[20px] font-normal leading-[42px] text-center'>Our experts ensure seamless material selection and precise implementation.</p>
            </div>
            <div className='flex flex-col items-center'>
                <Image src={ChairImage1} alt={`Gallery Image 4`} layout='responsive' width={300} height={300} />
                
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-[#040444] text-[40px] font-medium leading-[69px] text-center'>Your Dream Space</h1>
                <p className='text-[#393535] text-[20px] font-normal leading-[42px] text-center'>A beautifully transformed space, ready to inspire and elevate your living.</p>
            </div>
        </div>


        <div className='flex flex-col items-center justify-center'>
        {/* First Row */}
        <div className='flex flex-col items-center mb-8'>
            <h1 className='text-[#040444] text-[55px] leading-[69px] font-semibold text-center'>
                How do we Work?
            </h1>
            <p className='text-[#040444] text-[20px] font-normal leading-[42px] text-center'>
                You can view each stage separately and change the action plan if desired.
            </p>
        </div>

        <div className='flex flex-col items-center w-[163px]'>
                <h1 className='text-[#040444] text-[12px] font-medium leading-[69px] text-center'>Ideation</h1>
                <p className='text-[#393535] text-[10px] font-normal leading-[100%] text-center'>Bringing your ideas to life with mood boards, sketches, and design concepts.</p>
            </div>
        {/* Second Row - Justified Between */}
        <div className='flex justify-between w-full mb-8'>
            <div className='flex flex-col items-center w-[163px]'>
                <h1 className='text-[#040444] text-[12px] font-medium leading-[69px] text-center'>Ideation</h1>
                <p className='text-[#393535] text-[10px] font-normal leading-[100%] text-center'>Bringing your ideas to life with mood boards, sketches, and design concepts.</p>
            </div>
            <div className='flex flex-col items-center w-[163px]'>
                <h1 className='text-[#040444] text-[12px] font-medium leading-[69px] text-center'>3D Visualization</h1>
                <p className='text-[#393535] text-[10px] font-normal leading-[100%] text-center'>Experience your dream space before execution with immersive 3D renders.</p>
            </div>
        </div>

        {/* Third Row - Image */}
        <div className='flex flex-col items-center mb-8'>
            <Image src={ChairImage1} alt={`Gallery Image`} layout='responsive' width={300} height={300} />
        </div>

        {/* Fourth Row - Justified Between */}
        <div className='flex justify-between w-full'>
            <div className='flex flex-col items-center w-[163px]'>
                <h1 className='text-[#040444] text-[12px] font-medium leading-[69px] text-center'>Your Dream Space</h1>
                <p className='text-[#393535] text-[10px] font-normal leading-[100%] text-center'>A beautifully transformed space, ready to inspire and elevate your living.</p>
            </div>
            <div className='flex flex-col items-center w-[163px]'>
                <h1 className='text-[#040444] text-[12px] font-medium leading-[69px] text-center'>3D Visualization</h1>
                <p className='text-[#393535] text-[10px] font-normal leading-[100%] text-center'>Our experts ensure seamless material selection and precise implementation.</p>
            </div>
        </div>
    </div>
        <div>

        </div>
     
    </div>
  )
}

export default Chair
