import React from "react";
import {
  Furniture,
  Interior,
  Exterior,
  ImageShaper,
  ImageShaperFlip,
  RightArrow,
  BigImageShaper,
} from "../ReusableComponenets/Icons";
import Image from "next/image";

const Future = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10">
        <div className="text-[25px] md:text-[70.45px] md:leading:[64.8px] text-[#040444]">
          Shaping the Future
        </div>
       <div className="hidden sm:block md:block">
        
        <div className="flex-row flex">
          <button className="w-[152px] h-[56px]  bg-[#040444] text-white rounded-full whitespace-nowrap cursor-pointer hover:scale-104">
            Let's Talk!
          </button>
          <a className="">
            <div className="w-[56px] h-[56px] bg-[#040444] rounded-full flex justify-center items-center cursor-pointer hover:scale-104">
              <Image
                src={RightArrow}
                alt="right arrow"
                className="w-[19.3px] h-[19.3px] text-[#040444]"
              />
            </div>
          </a>
        </div>
        </div>
      </div>

      <div className="flex flex-row flex-wrap mt-5 md:mt-10 p-4">
        <div className="w-full lg:w-1/2 p-2 relative">
          <Image src={Furniture} alt={"furniture"} className="rounded-[40px]" />
          <div className="absolute bottom-2 left-2 w-1/2 h-auto">
            <div className="relative">
              <Image
                src={BigImageShaper}
                alt="Image Shaper"
                className="md:w-full w-[229px] object-contain"
              />
              
              <div className="absolute text-[#141414] w-[80%] top-[25%] left-[10%]">
                <div className="text-[13px] md:text-[19.38px] font-medium">
                  Furniture
                </div>
                <p className="font text-[10px] md:text-[14.63px]  md:mt-1">
                  From vision to reality, we shape innovative structures that seamlessly merge modern aesthetics 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col space-y-8 p-2">
          <div className="relative">
            <Image
              src={Interior}
              alt="Interior"
              className="rounded-[40px]"
            />
            <div className="absolute bottom-0 right-0 w-1/2 h-auto">
              <div className="relative">
                <Image
                  src={ImageShaperFlip}
                  alt="Image Shaper"
                  className="w-full h-auto"
                />
                <div className="absolute text-[#141414] w-[80%] top-[30%] left-[15%]">
                  <div className="text-[14px] sm:text-[16px] md:text-[19.38px] font-medium">
                    Interior Design
                  </div>
                  <p className="font text-[11px] sm:text-[12px] md:text-[14.63px] md:mt-1 ">
                    Contemporary style with environmentally conscious landscaping solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src={Exterior}
              alt="Exterior"
              className="rounded-[40px]"
            />
            <div className="absolute bottom-0 left-0 w-1/2 h-auto">
              <div className="relative">
                <Image
                  src={ImageShaper}
                  alt="Image Shaper"
                  className="w-full h-auto"
                />
                <div className="absolute text-[#141414] w-[80%] top-[25%] left-[10%]">
                  <div className="text-[14px] sm:text-[16px] md:text-[19.38px] font-medium">
                    Exterior Design
                  </div>
                  <p className="font text-[11px] sm:text-[12px] md:text-[14.63px] md:mt-1">
                    Contemporary style with environmentally conscious landscaping solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Future;
