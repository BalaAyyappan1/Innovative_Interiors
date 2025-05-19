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
import PartnerImage from "@/public/Frame 360.png";
import SectionLabel from "../ui/secionLabel";
import ArrowBtn from "../ui/arrowBtn";

const Partner = () => {
  return (
    <div className="md:mt-20 mt-[80px] md:mb-20">
      <div className="flex flex-col justify-center">
        <div className="flex md:flex-row flex-col justify-between items-center p-5 md:p-5">
          <div className="flex flex-col md:space-y-5 space-y-3 w-full text-center justify-center items-center md:items-start md:text-left">
            <SectionLabel text="EMPLOYEE SAYS" />
            <p className="md:text-[55px] text-[24px] font-semibold text-center md:text-left text-[#040444] leading-[1.1] md:leading-[59.12px] mt-2 md:mt-0">
              Partner with us <br className="hidden md:block" />
              Become a vendor
            </p>
            <span className="md:text-[25px] text-[14px] md:text-left text-center text-[#252525] mt-2 md:mt-0">
              Supplying Quality Materials for <br /> Exceptional Interiors.
            </span>

            <ArrowBtn
              text="Contact us"
              backgroundColor="#ffffff"
              textColor="#000000"
            />
          </div>
          <div className="md:w-[90%] w-full mt-6 md:mt-0">
            <Image src={venImage1} alt={"alt"} className="w-full h-auto" />
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse space-x-50  mt-6 md:mt-2">
          <div className="md:w-[60%] w-full mt-4 ml-2 md:mt-0 rounded-4xl">
            <Image src={venImage2} alt={"alt"} className="w-full h-full object-cover rounded-4xl" />
          </div>
          <div className="md:w-[60%] mr-4 w-full flex flex-col md:space-y-5 space-y-3 items-end">
            <p className="md:text-[55px] text-[24px] font-semibold text-center md:text-left text-[#040444] leading-[1.1] md:leading-[59.12px] mt-2 md:mt-0 ">
              Our Trusted Network
            </p>
            <p className="text-black md:text-[25px] text-[14px] text-center md:text-end w-full">
              Our success is built on trusted partners. Together, we deliver
              quality, innovation, and exceptional spaces on time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
