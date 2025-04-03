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
    <div className="flex flex-col items-center w-full mt-50 ">
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
    <div className="grid grid-cols-1 sm:grid-cols- lg:grid-cols-2   gap-4 p-4 mt-30">
      {journey.map((item, index) => (
        <div key={index} className=" border-b border-[#888888] flex flex-row justify-between">
            <div className='flex flex-col gap-2'>
            <h3 className="font-bold  text-[#040444] text-[32px]">{item.title}</h3>
          <p className="text-[#393535] text-[16px] flex flex-row gap-2"> <Image src={pin} alt="pin" className='w-[15px] h-[15px]' /> Location: {item.location}</p>
          <p className="text-[#393535] text-[16px] flex flex-row gap-2"> <Image src={exp} alt="exp" className='w-[15px] h-[15px]' /> Experience: {item.experience}</p>
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
    </>
  )
}

export default Journey
