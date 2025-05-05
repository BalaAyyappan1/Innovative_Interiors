import React from "react";
import { TowerImage } from "../ReusableComponenets/Icons";
import Image from "next/image";
import tower1 from "@/public/tower1.png";
import tower2 from "@/public/tower2.png";
import tower3 from "@/public/tower3.png";
import tower4 from "@/public/tower4.png";

const Tower = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col justify-center items-center space-y-10 max-w-full w-full mx-auto">
        <div className="flex md:flex-row flex-col items-center  w-full md:border-b md:border-t md:border-[#000000] md:h-[253px] md:space-x-[80px] justify-between">
          <div className="md:w-[50%] w-full flex justify-center mb-4">
            <Image src={tower1} alt="tower1" />
          </div>
          <div className="font-semibold flex md:flex-row flex-col md:items-center w-full md:space-x-[140px] text-[14px] text-[#040444]">
            <div className="flex flex-row space-x-[80px]  jusity-between md:items-start items-center justify-center space-x-4 mt-2">
              <span className=" md:text-center text-center text-[16px] md:text-[40px]">
                01
              </span>
              <span className=" md:text-left text-center text-[16px] md:text-[35px] whitespace-nowrap">
                CNC Precision <br className="hidden md:block" /> Cutting
              </span>
            </div>

            <span className=" text-[#393535] md:text-left text-center text-[16px] md:text-[25px] font-light pl-10 ">
              Ensuring exact specifications <br className="hidden md:block" />{" "}
              and seamless assembly
            </span>
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-between w-full md:border-b md:border-[#000000] md:h-[253px] md:space-x-[80px]">
          <div className="md:w-[50%] w-full flex justify-center mb-4">
            <Image src={tower2} alt="tower2" />
          </div>
          <div className="font-semibold flex md:flex-row flex-col md:items-center w-full md:space-x-[140px] text-[14px] text-[#040444]">
            <div className="flex flex-row space-x-[80px] md:items-start items-center justify-center space-x-4 mt-2">
              <span className=" md:text-center text-center text-[16px] md:text-[40px]">
                02
              </span>
              <span className=" md:text-left text-center text-[16px] md:text-[35px] whitespace-nowrap">
                AI-Driven Design <br className="hidden md:block" />
                Prototyping
              </span>
            </div>
            <span className=" text-[#393535] md:text-left text-center text-[16px] md:text-[25px] font-light ">
              Visualizing products before <br className="hidden md:block" />{" "}
              production
            </span>
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-between w-full md:border-b md:border-[#000000] md:h-[253px] md:space-x-[80px]">
          <div className="md:w-[50%] w-full flex justify-center mb-4">
            <Image src={tower3} alt="tower3" />
          </div>
          <div className="font-semibold flex md:flex-row flex-col md:items-center w-full md:space-x-20 text-[14px] text-[#040444]">
            <div className="flex flex-row md:space-x-[80px] md:items-start items-center justify-center space-x-4 mt-2">
              <span className=" md:text-center text-center text-[16px] md:text-[40px]">
                03
              </span>
              <span className=" md:text-left text-center text-[16px] md:text-[35px] whitespace-nowrap">
                Automated Finishing <br className="hidden md:block" /> & Coating
              </span>
            </div>
            <span className=" text-[#393535] md:text-left text-center text-[16px] md:text-[25px] font-light ">
              Enhancing durability and <br className="hidden md:block" />{" "}
              resistance
            </span>
          </div>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-between w-full   md:h-[253px] md:space-x-[80px]">
          <div className="md:w-[50%] w-full flex justify-center mb-4">
            <Image src={tower4} alt="tower4" />
          </div>
          <div className="font-semibold flex md:flex-row flex-col md:items-center w-full md:space-x-20 text-[14px] text-[#040444]">
            <div className="flex flex-row md:space-x-[80px] md:items-start items-center justify-center space-x-4 mt-2">
              <span className=" md:text-center text-center text-[16px] md:text-[40px]">
                04
              </span>
              <span className=" md:text-left text-center text-[16px] md:text-[35px] whitespace-nowrap ">
                Scalable Production <br className="hidden md:block" /> Lines
              </span>
            </div>
            <span className=" text-[#393535] md:text-left text-center text-[16px] md:text-[25px] font-light ">
              Meeting diverse client needs <br className="hidden md:block" />{" "}
              efficiently
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tower;
