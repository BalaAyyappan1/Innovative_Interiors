import React from "react";
import Image from "next/image";
import Image1 from "@/public/twopeople.svg";
import Play from "@/public/play.svg";
import { RightArrow, RightColorArrow } from "../ReusableComponenets/Icons";
const OurServices = () => {
  const contents = [
    {
      title: "Architectural Design",
      description:
        "Architecture is more than just structures; it's a reflection of creativity, purpose, and human connection. We believe ",
      viewMore: "View More",
    },
    {
      title: "Interior Design",
      description:
        "Architecture is more than just structures; it's a reflection of creativity, purpose, and human connection. We believe ",
      viewMore: "View More",
    },
    {
      title: "Renovation",
      description:
        "Architecture is more than just structures; it's a reflection of creativity, purpose, and human connection. We believe ",
      viewMore: "View More",
    },
  ];

  return (
    <div>
      <div className="flex xl:flex-row flex-col justify-center items-center px-10 md:mt-50 md:space-x-100 text-center">
        <div className="flex flex-col space-y-4 items-center  md:items-start">
          <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]">
            <ul className="list-disc pl-5 text-center">
              <li>OUR SERVICES</li>
            </ul>
          </div>
          <p className="font-medium text-[16px] md:text-[55.91px] text-[#040444] md:leading-[69.12px] text-center whitespace-nowrap">
            Empowering You <br className="hidden sm:block md:block" /> with Our
            Services
          </p>
        </div>

        <p className="font-normal  text-[10px] md:text-[25.92px] md:leading-[33px] text-[#393535] text-center max-w-2xl mx-auto mt-4 xl:mt-0">
          Architecture is more than just structures; it's a reflection of
          creativity, purpose, and human connection. We believe in designing
          spaces that inspire, function seamlessly, and stand the test of time.
        </p>
      </div>

      <div className="flex xl:flex-row flex-col-reverse  gap-5 justify-center items-center px-10 mt-50 space-x-8">
        <div className="flex flex-col md:w-1/2 w-full  ">
          {contents.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border-[#888888] relative pb-4 space-y-5 "
            >
              <div className="flex flex-col border-b border-[#888888] relative pb-4 space-y-5 ">
                <div className="flex flex-col">
                  <h2 className="text-[32px] font-semibold leading-[36px] text-[#040444]">
                    {item.title}
                  </h2>
                  <p className="font-normal text-[16px] leading-[42px] text-[#393535]">
                    {item.description}
                  </p>
                </div>

                <div className="absolute bottom-4 right-0">
                  <button className="text-[16px] font-semibold leading-[24px] text-[#040444] underline whitespace-nowrap">
                    {item.viewMore}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="md:w-1/2 w-full relative">
          <Image src={Image1} alt="Image1" />
          <Image 
              src={Play} 
              alt="Play button" 
              className="absolute md:top-4 md:right-4 top-0 right-0 cursor-pointer w-[40px] h-[40px] md:w-[80px] md:h-[80px]"
              width={80}
              height={80}
          />
        </div>
      </div>

      <div className=" justify-center items-center flex-row flex mt-30">
          <button className="w-[100px] md:w-[152px] h-[30px] md:h-[56px] bg-[#040444] md:text-[19px] text-[11px] text-white rounded-full whitespace-nowrap cursor-pointer hover:scale-104">
            View More
          </button>
          <a className="">
            <div className="w-[30px] md:w-[56px] h-[30px] md:h-[56px] bg-[#040444] text-white rounded-full flex justify-center items-center  cursor-pointer hover:scale-104">
              <Image src={RightArrow} alt="right arrow" className="w-[15px] md:w-[19.3px] h-[15px] md:h-[19.3px] bg-[#040444] text-white" />
            </div>
          </a>
        </div>
    </div>
  );
};

export default OurServices;
