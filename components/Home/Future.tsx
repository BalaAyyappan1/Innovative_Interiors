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
import mobileTopShaper from "@/public/Background.png";
import ArrowBtn from "../ui/arrowBtn";

const Future = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="text-[25px] md:text-[60px] md:leading:[64.8px] text-[#040444]">
          Shaping the Future
        </div>
        <div className="hidden sm:block md:block">
        <ArrowBtn text="Let's talk" backgroundColor="#040444" textColor="white" href="/" />
          
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-10">
        {/* Left Column (Large Image) */}
        <div className="relative rounded-[40px] overflow-hidden h-full min-h-[400px]">
          <Image
            src={Furniture}
            alt="furniture"
            className="object-cover w-full h-full"
          />

          {/* Mobile version (top) */}
          <div className="absolute md:hidden -top-[5%] left-0 w-[70%]">
            <div className="relative">
              <Image
                src={mobileTopShaper}
                alt="Mobile Image Shaper"
                className="w-full"
              />
              <div className="absolute inset-0 top-4 md:left-4 left-1 flex flex-col justify-center pl-8 pr-7">
                <h3 className="text-sm font-medium text-[#141414]">
                  Furniture
                </h3>
                <p className="text-[10px] mt-1 text-[#141414]">
                  From vision to reality, we shape innovative structures that
                  seamlessly merge modern aesthetics
                </p>
              </div>
            </div>
          </div>

        

          {/* Desktop version (bottom) */}
          <div className="absolute hidden md:block bottom-0 left-0 w-[55%] ">
            <div className="relative">
              <Image
                src={BigImageShaper} 
                alt="Image Shaper"
                className="w-full"
              />
              <div className="absolute inset-0 top-8 left-1 flex flex-col justify-center pl-4 pr-7">
                <h3 className="text-sm xl:text-xl font-medium text-[#141414]">
                  Custom Furniture
                </h3>
                <p className="xl:text-base text-[10px] mt-1 text-[#141414]">
                From vision to reality, we shape innovative structures that
seamlessly merge modern aesthetics with eco-friendly principles,
redefining urban landscapes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Two Smaller Images) */}
        <div className="space-y-6 md:space-y-8 bg-white">
          {/* Top Image */}
          <div className="relative rounded-[40px] overflow-hidden h-[48%] min-h-[300px]">
            <Image
              src={Interior}
              alt="Interior"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 right-0 md:w-[55%] w-[80%]">
              <div className="relative">
                <Image
                  src={ImageShaperFlip}
                  alt="Image Shaper"
                  className="w-full"
                />
                <div className="absolute inset-0 top-6 xl:left-3 flex flex-col justify-center pl-12 ">
                  <h3 className="text-sm xl:text-xl font-medium text-[#141414]">
                  Interior Trunkey
                  </h3>
                  <p className="text-[10px] xl:text-base mt-1 text-[#141414]">
                  We create interiors that reflect your personality
                  while embracing nature's beauty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Image */}
          <div className="relative rounded-[40px] overflow-hidden h-[48%] min-h-[300px]">
            <Image
              src={Exterior}
              alt="Exterior"
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 md:w-[55%] w-[80%] ">
              <div className="relative">
                <Image
                  src={ImageShaper}
                  alt="Image Shaper"
                  className="w-full"
                />
                <div className="absolute inset-0 top-6 -left-6 flex flex-col justify-center pl-12 md:w-[90%]">
                  <h3 className="text-sm xl:text-xl font-medium text-[#141414]">
                  Civil Construction
                  </h3>
                  <p className="text-[10px] xl:text-base mt-1 text-[#141414]">
                  Contemporary style with environmentally
                  conscious landscaping solutions.
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
