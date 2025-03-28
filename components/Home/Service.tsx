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
      text: "Delivering quality and innovation with every project.",
    },
    {
      number: "900k",
      text: "Trusted by businesses and homeowners for exceptional interiors.",
    },
  ];

  return (
    <div className="">
      
      <div className='bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]'>
        <ul className='list-disc pl-5 text-center'>
          <li>OUR SERVICE</li>
        </ul>
      </div>
      <div className='text-[#040444] h-[140.78px] w-full  justify-center text-center items-center text-[75.75px] leading-[70.4px]'>
      Curated Interior Solutions
      </div>

      <div className="relative px-10">


        <Image src={pciture2} alt={"picutre2"} className="rounded-[40px] w-full h-screen object-cover " />
        <div className="flex flex-col">
        <div className="absolute bottom-35 left-20 p-4 text-[122.88px] text-white leading-[128px]">
          HOSPITALITY
          <p className="text-[33.44px] text-[#FFFFFF] leading-[32px]">
            Crafted for comfort, luxury, and unforgettable<br /> guest experiences.
          </p>
        </div>
        </div>
        <div className=" absolute bottom-15 left-23 flex-row flex">
        <button className="w-[152px] h-[56px] bg-white text-[#040444] rounded-full whitespace-nowrap ">
          View More
        </button>
        <a className="">
          <div className="w-[56px] h-[56px] bg-white text-[#040444] rounded-full flex justify-center items-center">
            <Image src={RightColorArrow} alt="right arrow" className="w-[19.3px] h-[19.3px] text-[#040444]" />
          </div>
        </a>
      </div>
      </div>
     
<section className="mt-90 mb-90">
<div className='flex flex-row space-x-3 px-15 items-center'>
          {contents.map((item, index) => (
            <div key={index} className='text-center border-r-2 border-[#938D8D] mb-4 flex flex-col space-y-1'> 
              <h2 className='text-[48px] font-bold text-[#191919] leading-[57px]'>{item.number}</h2>
              <p className='text-[16.59px] text-[#191919] leading-[32px]'>{item.text}</p>
            </div>
          ))}
        </div>
</section>

    </div>
  );
};

export default Service;
