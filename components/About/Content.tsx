import React from "react";
import Image from "next/image";
import { Pic1, Pic2, Pic3, Pic4 } from "../ReusableComponenets/Icons";

const Content = () => {
  const content = [
    {
      year: 2005,
      content: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      year: 2006,
      content: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      year: 2007,
      content: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      year: 2008,
      content: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];

  return (
    <div>
      <div className="flex xl:flex-row flex-col xl:justify-between justify-center  xl:items-start items-center w-full space-y-5 mt-10 md:mt-30">
        <div className="flex flex-col space-y-5 items-center w-full xl:items-start xl:w-auto">
          <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px] whitespace-nowrap">
            <ul className="list-disc pl-5 text-center whitespace-nowrap">
              <li>OUR VISION</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[16px] xl:text-[55px] xl:leading-[64px] xl:text-start text-center justify-center text-[#040444] md:w-[784px] ">
              Turning Vision into Reality With Craftsmanship That Speaks for
              Itself.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full xl:items-start xl:w-auto space-y-5">
          <div>
            <p className="font-normal text-[14px]  xl:text-[26px] xl:leading-[42px] xl:text-start text-center justify-center  text-[#393535] md:w-[784px]">
              Innovative Interiors is a leading turnkey contracting company
              specializing in architect designed - project execution and fine
              woodworking. With over 19 years of experience, we’ve partnered
              with India’s finest architects and brands to bring spaces to life
              — from iconic 5-star hotels and super-specialty hospitals to
              luxury residences, corporate offices, and flagship retail outlets.
            </p>
          </div>
        </div>
      </div>
      {/* Timeline */}
      <div>
        <div className="flex justify-center md:mt-[150px] mt-[80px] ">
          {" "}
          {/* Added flex and justify-center */}
          <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]">
            <ul className="list-disc pl-5 text-center">
              <li>OUR HISTORY</li>
            </ul>
          </div>
        </div>
        <div className="text-[#040444] font-semibold md:mt-10 w-full  justify-center text-center items-center md:text-[75.75px] text-[16px] leading-[70.4px] md:mb-50">
          A Legacy of Transforming Spaces
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 md:rounded-[65.9px] rounded-[12px] min-w-[260px] p-7 sm:min-w-[370px] md:min-w-[420px] lg:min-w-[960px] xl:min-w-[1150px] 2xl:min-w-[1390px]  bg-white flex flex-row md:flex-row justify-between  md:p-15 gap-4 md:gap-[92px] -mt-[20px] md:-mt-25 mx-auto overflow-x-auto z-10">
          {content.map((item, index) => (
            <div
              key={index}
              className="flex md:flex-col flex-row text-start text-black"
            >
              <span className="underline underline-offset-10 text-[11px] md:text-[32px] mt-2 
              ">
                {item.year}
              </span>
              <span className="text-[16px] md:text-[20px] text-[#252525] hidden lg:block">
                {item.content}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center w-full relative">
          <div className="w-full md:py-10 py-5">
            <Image
              src={Pic1}
              alt={"pic1"}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="flex flex-row justify-between md:gap-10 gap-3 space-y-4 md:space-y-0 w-full  ">
            <div className="flex-1">
              <Image
                src={Pic2}
                alt={"Pic2"}
                className="object-cover w-full h-auto "
              />
            </div>
            <div className="flex-1">
              <Image
                src={Pic3}
                alt={"Pic3"}
                className="object-cover w-full h-auto "
              />
            </div>
            <div className="flex-1 hidden md:block">
              <Image
                src={Pic4}
                alt="Pic4"
                className="object-cover w-full h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
