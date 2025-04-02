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
    <div className="md:mt-50 md:mb-50">
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

     
    </div>
  );
};

export default Partner;
