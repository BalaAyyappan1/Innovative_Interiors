import React from "react";
import {
  ExcellenceImage,
  Hand,
  RightArrow,
  RightColorArrow,
} from "../ReusableComponenets/Icons";
import Image from "next/image";
import {
  Aci,
  Tj,
  henkai,
  qiLogo,
  Aci2,
  henkai2,
  VideoImage,
} from "../ReusableComponenets/Icons";

const Excellence = () => {
  const logos = [
    { logo: Aci },
    { logo: Tj },
    { logo: henkai },
    { logo: qiLogo },
    { logo: Aci2 },
    { logo: Tj },
    { logo: henkai },
  ];

  return (
    <div>
      <div className="w-full py-10 mt-40 md:mt-30">
        <div className="font-semibold text-center  md:text-[55px] text-[16px] text-[#040444]">
          Our Commitment to Excellence
        </div>
        <p className="text-[10px] md:text-[25.92px] md:leading-[42px] font-normal text-center text-[#393535] px-15">
          At Innovative Interiors, excellence is not just a goal—it's the
          foundation of everything we create. From the selection of premium
          materials to the final quality checks, every step of our manufacturing
          process is driven by precision, innovation, and attention to detail.
        </p>
      </div>

      <div className="md:p-10 p-2">
        <Image src={ExcellenceImage} alt={"nwe"} className="w-full" />
      </div>

      <section className="mb-80">
        <div className="items-center flex flex-col space-y-5 mt-50">
          <h2 className="md:text-[44px] text-[16px] leading-[64px] text-[#040444]">
          Brands that Took Our Turnkey Fit-out Service
          </h2>
          <div className="flex flex-row md:space-x-5 space-x-4 shrink ">
            {logos.map((item, index) => (
              <div key={index} className="flex">
                <Image src={item.logo} alt="Client logo" />
              </div>
            ))}
          </div>
        </div>
        <div className="md:mt-40 mt-10 relative">
          <Image src={Hand} alt={"alt"} className="w-full h-full px-5" />
          <div className="absolute inset-0 md:-top-35 flex flex-col items-center justify-center md:space-y-8 z-10">
            <p className="text-[25px] md:text-[55.91px] leading-[42px] font-semibold text-center text-white">
              Transform Your Space with Us
            </p>
            <p className="text-[10px] md:text-[25.92px] font-light leading-[42px] text-center text-[#F3F3F3] mt-1">
              Start your journey toward modern, functional, and inspiring
              interiors today.
            </p>
          </div>
          <div className="absolute md:bottom-35 bottom-5 flex-row flex justify-center items-center w-full  z-20">
            <button className="md:px-8 px-4 md:py-3 py-1 text-[#040444] bg-white rounded-full  whitespace-nowrap">
              Contact Us
            </button>
            <a>
              <div className="md:w-12 md:h-12 w-8 h-8 text-[#040444] bg-white rounded-full flex justify-center items-center">
                <Image src={RightColorArrow} alt="right arrow" className="w-4 h-
                4" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Excellence;
