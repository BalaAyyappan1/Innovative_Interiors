import React from "react";
import { pciture2, RightArrow, RightColorArrow } from "../ReusableComponenets/Icons";
import Image from "next/image";
import { text } from "stream/consumers";

const Service = () => {
  const contents = [
    {
      number: "200+",
      text: "Beautifully designed spaces crafted for function and aesthetics.",
    },
    {
      number: "300+",
      text: "Trusted by businesses and homeowners for exceptional interiors.",
    },
    {
      number: "100%",
      text: "Beautifully designed spaces crafted for function and aesthetics.",
    },
    {
      number: "900k",
      text: "Trusted by businesses and homeowners for exceptional interiors.",
    },
  ];

  return (
    <div className="w-full  ">
      
      <div className="flex justify-center "> {/* Added flex and justify-center */}
        <div className='bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]'>
          <ul className='list-disc pl-5 text-center'>
            <li>OUR SERVICE</li>
          </ul>
        </div>
      </div>
      <div className='text-[#040444]  md:mt-10 w-full  justify-center text-center items-center md:text-[75.75px] text-[16px] leading-[70.4px]'>
      Curated Interior Solutions
      </div>

      <div className="relative px-10 md:mt-20">
        <Image src={pciture2} alt={"picutre2"} className="rounded-[40px] w-full md:h-screen object-cover " />
        <div className="flex flex-col">
        <div className="absolute md:bottom-35 bottom-10 left-10 md:left-20 p-4 text-[24px] md:text-[122.88px] leading-[25px] text-white md:leading-[128px]">
          HOSPITALITY
          <p className="text-[10px] md:text-[33.44px] text-[#FFFFFF] leading-[15px]  md:leading-[32px]">
            Crafted for comfort, luxury, and unforgettable<br /> guest experiences.
          </p>
        </div>
        </div>
        <div className="absolute md:bottom-15 md:left-23 bottom-4 left-13 flex-row flex">
          <button className="w-[100px] md:w-[152px] h-[30px] md:h-[56px] bg-white text-[#040444] rounded-full whitespace-nowrap cursor-pointer hover:scale-104">
            View More
          </button>
          <a className="">
            <div className="w-[30px] md:w-[56px] h-[30px] md:h-[56px] bg-white text-[#040444] rounded-full flex justify-center items-center  cursor-pointer hover:scale-104">
              <Image src={RightColorArrow} alt="right arrow" className="w-[15px] md:w-[19.3px] h-[15px] md:h-[19.3px] text-[#040444]" />
            </div>
          </a>
        </div>
      </div>
     
<section className="md:mt-90 md:mb-90 mt-40 mb-40">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-6 max-w-6xl mx-auto">
  {contents.map((item, index) => (
    <div
      key={index}
      className={`text-center flex flex-col justify-center items-center p-3 
        ${index % 2 === 0 && index !== contents.length - 1 ? 'border-r border-[#938D8D]' : ''}
        ${index < contents.length - 2 ? ' border-[#938D8D] ' : ''}
        ${index < contents.length && (index + 1) % 4 !== 0 ? 'md:border-r md:border-[#938D8D]' : ''}
      `}
    >
      <h2 className="text-[14px] md:text-[24px] lg:text-[36px] font-bold text-[#191919] leading-tight mb-1">
        {item.number}
      </h2>
      <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#191919] leading-snug">
        {item.text}
      </p>
    </div>
  ))}
</div>


</section>

    </div>
  );
};

export default Service;
