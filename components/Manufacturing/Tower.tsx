import React from "react";
import { TowerImage } from "../ReusableComponenets/Icons";
import Image from "next/image";
import tower1 from "@/public/tower1.png";
import tower2 from "@/public/tower2.png";
import tower3 from "@/public/tower3.png";
import tower4 from "@/public/tower4.png";

const Tower = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center space-y-3 max-w-full w-full mx-auto"> 
        <div className="flex md:flex-row flex-col items-center justify-between w-full border-b border-t border-[#000000] py-2 md:space-x-4">
          <div className="md:w-[40%] w-full flex justify-center">
            <Image src={tower1} alt="tower1" />
          </div>
          <div className="font-semibold flex md:flex-row flex-col md:items-center w-full md:space-x-20 text-[14px] text-[#040444]">
            <span className="md:w-[10%] md:text-center text-center text-[16px] md:text-[40px]">01</span>
            <span className="md:w-[30%] md:text-left text-center text-[16px] md:text-[35px] whitespace-nowrap">CNC Precision <br className="hidden md:block" /> Cutting</span>
            <span className="md:w-[60%] text-[#393535] md:text-left text-center font-light text-[16px] md:text-[25px]">
              Ensuring exact specifications and seamless assembly
            </span>
          </div>
        </div>
        
        <div className="flex md:flex-row flex-col items-center justify-between w-full border-b border-[#000000] py-2 md:space-x-4">
          <div className="md:w-[40%] w-full flex justify-center">
            <Image src={tower2} alt="tower2" />
          </div>
          <div className="font-semibold flex md:flex-row flex-col md:items-center w-full md:space-x-20 text-[14px] text-[#040444]">
            <span className="md:w-[10%] md:text-center text-center text-[16px] md:text-[40px]">02</span>
            <span className="md:w-[30%] md:text-left text-center text-[16px] md:text-[35px] whitespace-nowrap">AI-Driven Design  <br className="hidden md:block" />Prototyping</span>
            <span className="md:w-[60%] text-[#393535] md:text-left font-light text-center text-[16px] md:text-[25px]">
              Ensuring exact specifications and seamless assembly
            </span>
          </div>
        </div>
        
        <div className="flex md:flex-row flex-col items-center justify-between w-full border-b border-[#000000] py-2 md:space-x-4">
          <div className="md:w-[40%] w-full flex justify-center">
            <Image src={tower3} alt="tower3" />
          </div>
          <div className="font-semibold flex md:flex-row flex-col md:items-center w-full md:space-x-20 text-[14px] text-[#040444]">
            <span className="md:w-[10%] md:text-center text-center text-[16px] md:text-[40px]">03</span>
            <span className="md:w-[30%] md:text-left text-center text-[16px] md:text-[35px] whitespace-nowrap">Automated Finishing <br className="hidden md:block" /> & Coating</span>
            <span className="md:w-[60%] text-[#393535] md:text-left text-center text-[16px] font-light md:text-[25px]">
              Ensuring exact specifications and seamless assembly
            </span>
          </div>
        </div>
        
        <div className="flex md:flex-row flex-col items-center justify-between w-full border-b border-[#000000] py-2 md:space-x-4">
          <div className="md:w-[40%] w-full flex justify-center">
            <Image src={tower4} alt="tower4" />
          </div>
          <div className="font-semibold flex md:flex-row flex-col md:items-center w-full md:space-x-20 text-[14px] text-[#040444]">
            <span className="md:w-[10%] md:text-center text-center text-[16px] md:text-[40px]">04</span>
            <span className="md:w-[30%] md:text-left text-center text-[16px] md:text-[35px] whitespace-nowrap ">Scalable Production  <br className="hidden md:block" /> Lines</span>
            <span className="md:w-[60%] text-[#393535] md:text-left text-center text-[16px] md:text-[25px] font-light">
              Ensuring exact specifications and seamless assembly
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tower;
