import React from "react";
import { pciture2, RightArrow } from "../ReusableComponenets/Icons";
import Image from "next/image";
import { text } from "stream/consumers";

const Service = () => {
  const contents = [
    {
      number: "200+",
      text: "Beautifully designed spaces crafted for function and aesthetics.",
    },
    {
      number: "300+",
      text: "Trusted by businesses and homeowners for exceptional interiors.",
    },
    {
      number: "100%",
      text: "Delivering quality and innovation with every project.",
    },
    {
      number: "900k",
      text: "Trusted by businesses and homeowners for exceptional interiors.",
    },
  ];

  return (
    <div>
      <div className="bg-[#F8F8F8] text-[#141414]">OUR Service</div>

      <div className="text-[#040444] text-[75px]">
        Curated Interior Solutions
      </div>

      <Image src={pciture2} alt={"picutre2"} />
      <div className="text-[24px]">
        HOSPITALITY
        <span className="text-[10px] text-[#141414px]">
          Crafted for comfort, luxury, and unforgettable guest experiences.
        </span>
      </div>
      <div className="flex-row flex">
        <button className="px-5 py-2 bg-[#040444] rounded-full whitespace-nowrap ">
          View More
        </button>
        <a className="">
          <div className="w-10 h-10 bg-[#040444] rounded-full flex justify-center items-center">
            <Image src={RightArrow} alt="right arrow" className="w-5 h-5" />
          </div>
        </a>
      </div>
      {contents.map((item, index) => (
        <div key={index} className="flex flex-row items-center p-2 space-x-4">
          <div className="flex flex-col">
            <div className="text-[24px]">{item.number}</div>
            <div className="text-[16px]">{item.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;
