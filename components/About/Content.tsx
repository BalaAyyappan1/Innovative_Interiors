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
        <div className="hidden sm:block md:block md:mt-10 md:mb-80 mb-30 px-1 w-full   ">
          <p className="text-[60px] font-semibold text-[#040444] text-center  leading-[91.6px]">
            Turning Vision into Reality — With Craftsmanship <br /> That Speaks for
            Itself.
          </p>
          <div className="text-[26px] text-[rgba(37,37,37,0.8)] font-ligh text-center justify-center leading-[100%]  mt-10 px-5">
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
          <div className="text-[#040444]  md:mt-10 w-full  justify-center text-center items-center md:text-[75.75px] text-[16px] leading-[70.4px] md:mb-50">
            A Legacy of Transforming Spaces
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 md:rounded-[65.9px] rounded-[30px] min-w-[280px] md:min-w-[1120px]  bg-white flex flex-row md:flex-row justify-between p-4 md:p-15 gap-4 md:gap-[92px] -mt-[10px] md:-mt-25 mx-auto overflow-x-auto z-10">
            {content.map((item, index) => (
              <div key={index} className="flex md:flex-col flex-row text-start text-black">
                <span className="underline text-[11px] md:text-[32px]">{item.year}</span>
                <span className="text-[16px] md:text-[20px] text-[#252525] hidden md:block">{item.content}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center w-full relative">
            <div className="w-full p-5 md:p-10">
              <Image src={Pic1} alt={"pic1"} className="object-cover w-full h-auto" />
            </div>
            <div className="flex flex-row justify-between md:space-x-10 space-x-3 space-y-4 md:space-y-0 w-full px-4 md:px-10">
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
              <div className="flex-1">
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
