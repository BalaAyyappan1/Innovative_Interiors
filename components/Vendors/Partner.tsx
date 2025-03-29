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

const Partner = () => {
  return (
    <div>
      <div className="flex flex-col justify-center ">
        <div className="flex flex-row justify-between items-center p-10">
          <div className="flex flex-col space-y-5">
            <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]">
              <ul className="list-disc pl-5 text-center">
                <li>Employee Says</li>
              </ul>
            </div>
            <p className="text-[55px] text-[#040444] leading-[59.12px] font-medium">
              Partner with us <br />
              Become a vendor
            </p>
            <span className="text-[25px] text-[#252525]">
              Supplying Quality Materials for <br /> Exceptional Interiors.
            </span>

            <div className="flex-row flex mt-5">
              <button className="px-5 py-2 border border-[#040444] text-[#040444] rounded-full whitespace-nowrap ">
                Let's Talk
              </button>
              <a className="">
                <div className="w-10 h-10 border border-[#040444] text-[#040444]  rounded-full flex justify-center items-center">
                  <Image
                    src={RightColorArrow}
                    alt="right arrow"
                    className="w-5 h-5 "
                  />
                </div>
              </a>
            </div>
          </div>

          <div className="w-[60%]">
            <Image src={venImage1} alt={"alt"} />
          </div>
        </div>

        <div className="flex flex-row px-10 ">
          <div className="w-[70%]">
            <Image src={venImage2} alt={"alt"} />
          </div>
          <p className="text-black  text-end">
            Supplying Quality Materials for Exceptional Interiors. Would you
            like me to add more details about vendor collaboration?
          </p>
        </div>
      </div>

      <section className="px-10 justify-center items-center">
        <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]">
          <ul className="list-disc pl-5 text-center">
            <li>Employee Says</li>
          </ul>
        </div>
        <h2 className="text-[55px] text-[#040444] leading-[69.12px] font-medium">
          Why Partner with Us?
        </h2>

        <div className="flex flex-row w-full justify-between h-[500px] bg-black"></div>

        <div className="flex flex-col sm:flex-row py-8 sm:py-12 md:py-16 space-y-8 sm:space-y-0 sm:space-x-6 md:space-x-10 lg:space-x-12">
          <div className="w-full sm:w-1/2 flex flex-col space-y-5 sm:space-y-6 md:space-y-8">
            <div className="h-auto overflow-hidden rounded-md">
              <Image 
                src={PartnerImage1} 
                alt="alternative" 
                className="w-full h-72 sm:h-80 md:h-96 lg:h-[30rem] object-cover object-center" 
              />
            </div>
            <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[43px] text-[#040444] font-[500] leading-normal">
                Exciting Design Projects
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-[#141414] leading-relaxed">
                Work with us on luxury residential, commercial, and hospitality
                interiors.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-1/2 flex flex-col space-y-5 sm:space-y-6 md:space-y-8">
            <div className="h-auto overflow-hidden rounded-md">
              <Image
                src={PartnerImage2}
                alt="alternative"
                className="w-full h-72 sm:h-80 md:h-96 lg:h-[30rem] object-cover object-center"
              />
            </div>
            <div className="flex flex-col space-y-3 sm:space-y-4 md:space-y-5">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[43px] text-[#040444] font-[500] leading-normal">
                Sustainable manufacturing practices
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-[24px] text-[#141414] leading-relaxed">
                Work with us on luxury residential, commercial, and hospitality
                interiors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
