import React from 'react'
import Image from 'next/image'
import pin from '@/public/pin.png';
import exp from '@/public/exp.png';

const Journey = () => {

 const journey = [
  {
    
    title: 'Interior Designer ',
    location: 'chennai',
    experience: '2+years',
  },
  {
    
    title: '3D Visualizer',
    location: 'chennai',
    experience: '2+years',
  },
  {
    
    title: 'Project Manager',
    location: 'chennai',
    experience: '2+years',
  },
  {
    
    title: 'Interior Designer ',
    location: 'chennai',
    experience: '2+years',
  },
  {
    
    title: '3D Visualizer',
    location: 'chennai',
    experience: '2+years',
  }, {
    
    title: 'Project Manager',
    location: 'chennai',
    experience: '2+years',
  }
 ]


  return (
    <>
    <div className="flex flex-col items-center w-full md:mt-[100px] mt-[50px] space-y-3 ">
    <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px] whitespace-nowrap">
      <ul className="list-disc pl-5 text-center whitespace-nowrap">
        <li>EMPLOYEES SAYS</li>
      </ul>
    </div>
    <div>
    <p className="font-semibold text-[16px] xl:text-[55.91px] xl:leading-[69px]  text-center text-[#040444] w-[884px]">
    A Workplace That Fuels Creativity
      </p>
    </div>
</div>
<div className="hidden md:block">


    <div className="grid grid-cols-1 sm:grid-cols- lg:grid-cols-2  space-y-5 gap-4 p-4 mt-10 ">
      {journey.map((item, index) => (
        <div key={index} className=" border-b border-[#888888]  flex flex-row justify-between">
            <div className='flex flex-col gap-2'>
            <h3 className="font-bold  text-[#040444] md:text-[32px] text-[14px]">{item.title}</h3>
          <p className="text-[#393535] text-[16px] flex flex-row gap-2"> <Image src={pin} alt="pin" className='w-[15px] h-[15px]' /> Location: {item.location}</p>
          <p className="text-[#393535] text-[16px] flex flex-row gap-2 mb-2"> <Image src={exp} alt="exp" className='w-[15px] h-[15px]' /> Experience: {item.experience}</p>
                </div>
                <div className='flex flex-col justify-between items-center py-2 '>
                  <button className='bg-[#040444] text-white w-[122px] h-[36px] rounded-full'>
                    Apply Now
                  </button>
                  <p className='text-[#888888] underline text-[16px]'>
                    View More
                  </p>
                    </div>
        </div>
      ))}
    </div>
    </div>
<div className='sm:hidden md:hidden'>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 mt-10">
      {journey.map((item, index) => (
        <div key={index} className="border-b border-[#888888] flex flex-col justify-between">
          <h3 className="font-bold text-[#040444] text-[32px] text-center mb-2">{item.title}</h3>
          <div className="flex justify-between px-10 mb-4">
            <p className="text-[#393535] md:text-[16px] text-[10px] flex flex-row gap-2">
              <Image src={pin} alt="pin" className='md:w-[15px] md:h-[15px] w-[10px] h-[10px]' /> Location: {item.location}
            </p>
            <p className="text-[#393535] md:text-[16px] text-[10px] flex flex-row gap-2">
              <Image src={exp} alt="exp" className='md:w-[15px] md:h-[15px] w-[12px] h-[12px]' /> Experience: {item.experience}
            </p>
          </div>
          <div className="flex flex-col space-y-4 items-center">
            
            <p className='text-[#888888] underline md:text-[16px] text-[10px] cursor-pointer'>
              View More
            </p>
            <button className='bg-[#040444] md:text-[16px] text-[12px] text-white w-[122px] h-[36px] rounded-full mb-2'>
              Apply Now 
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default Journey
