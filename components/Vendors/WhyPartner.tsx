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
        <div className="flex flex-col justify-center items-center space-y-5 w-full">
            <div className="w-full flex justify-center items-center hidden md:flex">
               
                <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]">
                  <ul className="list-disc pl-5 text-center">
                    <li>EMPLOYEE SAYS</li>
                  </ul>
                </div>
            </div>
            <h2 className="md:text-[55px] text-[16px] text-center md:text-left text-[#040444] leading-[69.12px] font-semibold">
              Why Partner with Us?
            </h2>
        </div>
       

        <div className="flex flex-row w-full justify-between h-auto bg-gray-300 mt-20 rounded-lg">
          <div className="flex flex-col items-start justify-end h-[500px] p-6  w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[43px] text-[#040444] font-medium leading-tight">
              Long-Term Collaboration
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-normal text-[#141414] leading-normal mt-2">
              Premium materials and advanced construction techniques to ensure durability and a long lifespan.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row py-6 sm:py-8 md:py-10 gap-4 md:gap-6 lg:gap-8">
          <div className="w-full sm:w-1/2 flex flex-col space-y-2 sm:space-y-3">
            <div className="h-auto overflow-hidden rounded-md">
              <Image 
                src={PartnerImage1} 
                alt="alternative" 
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover object-center" 
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-[#040444] font-medium leading-tight">
                Exciting Design Projects
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#141414] font-normal">
                Work with us on luxury residential, commercial, and hospitality interiors.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 flex flex-col space-y-2 sm:space-y-3">
            <div className="h-auto overflow-hidden rounded-md">
              <Image
                src={PartnerImage2}
                alt="alternative"
                className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-[#040444] font-medium leading-tight">
                Sustainable Manufacturing
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#141414] font-normal">
                Work with us on luxury residential, commercial, and hospitality interiors.
              </p>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default WhyPartner
