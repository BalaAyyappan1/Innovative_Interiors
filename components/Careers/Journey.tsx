import React from 'react'

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
    <div className="grid grid-cols-1 sm:grid-cols- lg:grid-cols-2   gap-4 p-4">
      {journey.map((item, index) => (
        <div key={index} className=" border-b border-[#888888] flex flex-row justify-between">
            <div className='flex flex-col gap-2'>
            <h3 className="font-bold  text-[#040444] text-[32px]">{item.title}</h3>
          <p className="text-[#393535] text-[16px]">{item.location}</p>
          <p className="text-[#393535] text-[16px]">{item.experience}</p>
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
  )
}

export default Journey
