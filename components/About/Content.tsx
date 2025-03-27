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
      <div className="text-[76px] text-[#040444]">
        Turning Vision into Reality — With Craftsmanship That Speaks for Itself.
      </div>
      <div className="text-[32px] text-[#252525]">
        Innovative Interiors is a leading turnkey contracting company
        specializing in architect designed - project execution and fine
        woodworking. With over 19 years of experience, we've partnered with
        India's finest architects and brands to bring spaces to life — from
        iconic 5-star hotels and super-specialty hospitals to luxury residences,
        corporate offices, and flagship retail outlets.
      </div>

      {/* Timeline */}
      <div>
        <div>Timeline</div>
        <div>A Legacy of Transforming Spaces</div>

        <div className="max-w-[1420px] bg-[#FFFFFF] ">
          {content.map((item, index) => (
            <div key={index} className=" flex-row justify-between">
              <div className="flex flex-col text-start text-black">
                <span>{item.year}</span>
                <span>{item.content}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
        <div  className="w-full">
<Image src={Pic1} alt={"pic1"} />
        </div>

        <div className="flex flex-row justify-between">
            <Image src={Pic2} alt={"Pic2"} className="w-[450px] h-auto object-contain" />
            <Image src={Pic3} alt={"Pic3"} className="w-[450px] h-auto object-cover" />
            <Image src={Pic4} alt="Pic4" className="w-[450px] h-auto object-cover" />
        </div>
        </div>

       



      </div>
    </div>
  );
};

export default Content;
