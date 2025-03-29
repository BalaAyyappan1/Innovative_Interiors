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
      <div className="hidden sm:block md:block md:mt-30 md:mb-80  ">
        <p className="text-[76px] w-full text-[#040444] text-center leading-[91px]">
          Turning Vision into Reality — With Craftsmanship That Speaks for
          Itself.
        </p>
        <div className="text-[32px] text-[#252525] text-center mt-10">
          Innovative Interiors is a leading turnkey contracting company
          specializing in architect designed - project execution and fine
          woodworking. With over 19 years of experience, we've partnered with
          India's finest architects and brands to bring spaces to life — from
          iconic 5-star hotels and super-specialty hospitals to luxury
          residences, corporate offices, and flagship retail outlets.
        </div>
      </div>
      <div className="block sm:hidden md:hidden mb-30 space-y-5 px-10">
        <div className="text-[16px] text-[#040444] text-center">
          Our Promise to Inspire and Innovate
        </div>
        <div className="text-[10px] text-[#252525] text-center">
          Innovative Interiors is a leading turnkey contracting company
          specializing in architect designed - project execution and fine
          woodworking. With over 19 years of experience, we've partnered with
          India's finest architects and brands to bring spaces to life — from
          iconic 5-star hotels and super-specialty hospitals to luxury
          residences, corporate offices, and flagship retail outlets.
        </div>
      </div>

      {/* Timeline */}
      <div>
        <div className="flex justify-center ">
          {" "}
          {/* Added flex and justify-center */}
          <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]">
            <ul className="list-disc pl-5 text-center">
              <li>OUR HISTORY</li>
            </ul>
          </div>
        </div>
        <div className="text-[#040444]  md:mt-10 w-full  justify-center text-center items-center md:text-[75.75px] text-[16px] leading-[70.4px] mb-50">
          A Legacy of Transforming Spaces
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-[1120px] md:rounded-[65.9px] rounded-[30px] bg-white flex flex-col md:flex-row justify-between p-4 md:p-15 gap-4 md:gap-[92px] -mt-25 mx-auto overflow-x-auto">
          {content.map((item, index) => (
            <div key={index} className="flex flex-col text-start text-black">
              <span className="underline text-[20px] md:text-[32px]">{item.year}</span>
              <span className="text-[16px] md:text-[20px] text-[#252525]">{item.content}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="w-full p-5 md:p-10">
            <Image src={Pic1} alt={"pic1"} className="object-cover w-full h-auto" />
          </div>
          <div className="flex flex-row justify-between md:space-x-10 space-x-5 space-y-4 md:space-y-0 w-full px-10 md:px-10">
            <Image
              src={Pic2}
              alt={"Pic2"}
              className="w-full h-full  object-contain"
            />
            <Image
              src={Pic3}
              alt={"Pic3"}
              className="w-full h-full  object-contain"
            />
            <Image
              src={Pic4}
              alt="Pic4"
              className="w-full h-full  object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
