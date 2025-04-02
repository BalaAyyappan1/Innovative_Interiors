import React from "react";
import {
  PartnerImage1,
  PartnerImage2,
  RightArrow,
  RightColorArrow,
  venImage1,
  venImage2,
} from "../ReusableComponenets/Icons";
import Image from "next/image";
import PartnerImage from '@/public/Frame 360.png';

const WhyPartner = () => {
  return (
    <div>
         <section className="px-10 justify-center items-center mt-50">
        <div className="flex flex-col justify-center items-center w-full">
        <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]">
          <ul className="list-disc pl-5 text-center">
            <li>Employee Says</li>
          </ul>
        </div>
        <h2 className="text-[55px] text-[#040444] leading-[69.12px] font-semibold">
          Why Partner with Us?
        </h2>
        </div>
       

        <div className="flex flex-row w-full justify-between h-[500px] bg-gray-300 mt-20 rounded-lg">
          <div className="flex flex-col items-start justify-end p-8 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[43px] text-[#040444] font-medium   leading-normal">
              Long-Term Collaboration
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-[24px] font-normal text-[#141414] leading-[150%] mt-3">
              Premium materials and advanced construction <br /> techniques to ensure durability and a long <br /> lifespan.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-0 sm:space-x-6 md:space-x-10 lg:space-x-12">
          <div className="w-full sm:w-1/2 flex flex-col space-y-2 sm:space-y-3 md:space-y-5">
            <div className="h-auto overflow-hidden rounded-md">
              <Image 
                src={PartnerImage1} 
                alt="alternative" 
                className="w-full h-72 sm:h-80 md:h-96 lg:h-[30rem] object-cover object-center" 
              />
            </div>
            <div className="flex flex-col ">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[43px] text-[#040444] font-medium leading-normal">
                Exciting Design Projects
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-[#141414] font-normal leading-relaxed">
                Work with us on luxury residential, commercial, and hospitality
                interiors.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 flex flex-col space-y-2 sm:space-y-3 md:space-y-5">
            <div className="h-auto overflow-hidden rounded-md">
              <Image
                src={PartnerImage2}
                alt="alternative"
                className="w-full h-72 sm:h-80 md:h-96 lg:h-[30rem] object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[43px] text-[#040444] font-medium leading-normal">
                Sustainable manufacturing practices
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-[#141414] font-normal leading-relaxed">
                Work with us on luxury residential, commercial, and hospitality
                interiors.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default WhyPartner
