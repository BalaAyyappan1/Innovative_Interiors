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

const Partner = () => {
  return (
    <div className="md:mt-20 md:mb-20">
      <div className="flex flex-col justify-center">
        <div className="flex md:flex-row flex-col justify-between items-center p-5 md:p-5">
          <div className="flex flex-col md:space-y-5 space-y-3 w-full text-center justify-center items-center md:items-start md:text-left">
            <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]">
              <ul className="list-disc pl-5 text-center">
                <li>EMPLOYEE SAYS</li>
              </ul>
            </div>
            <p className="md:text-[55px] text-[24px] font-semibold text-center md:text-left text-[#040444] leading-[1.1] md:leading-[59.12px] mt-2 md:mt-0">
              Partner with us <br className="hidden md:block" />
              Become a vendor
            </p>
            <span className="md:text-[25px] text-[14px] md:text-left text-center text-[#252525] mt-2 md:mt-0">
              Supplying Quality Materials for <br /> Exceptional Interiors.
            </span>
            <div className="hidden md:block mt-4">
              <div className="flex-row flex items-center ">
                <button className="px-5 py-2 border border-[#040444] text-[#040444] rounded-full whitespace-nowrap">
                  Let's Talk
                </button>
                <a>
                  <div className="w-10 h-10 border border-[#040444] text-[#040444] rounded-full flex justify-center items-center">
                    <Image
                      src={RightColorArrow}
                      alt="right arrow"
                      className="w-5 h-5"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-[90%] w-full mt-6 md:mt-0">
            <Image src={venImage1} alt={"alt"} className="w-full h-auto" />
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse space-x-50   mt-6 md:mt-2">
          <div className="md:w-[60%] w-full mt-4 md:mt-0">
            <Image src={venImage2} alt={"alt"} className="w-full h-auto" />
          </div>
          <div className="md:w-[30%] w-full flex items-center">
            <p className="text-black text-[12px] md:text-[14px] text-center md:text-end w-full">
              Supplying Quality Materials for Exceptional Interiors. Would you
              like me to add more details about vendor collaboration?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
