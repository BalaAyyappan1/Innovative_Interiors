"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { RightArrow } from "../ReusableComponenets/Icons";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const VideoAnimation = () => {
  const contents = [
    {
      number: "100%",
      text: "Delivering quality and innovation with every project.",
    },
    {
      number: "100%",
      text: "Delivering quality and innovation with every project.",
    },
    {
      number: "100%",
      text: "Delivering quality and innovation with every project.",
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Pin the VideoScrubber
    const pinScrubber = gsap.fromTo(
      ".video-section",
      { position: "relative" },
      {
        scrollTrigger: {
          trigger: ".video-section",
          start: "top top",
          end: "+=900",
          pin: true,
          pinSpacing: false,
          scrub: true, // Smooth scrubbing
        },
      }
    );

    return () => {
      pinScrubber.kill();
    };
  }, []);

  return (
    <div className="flex md:flex-row  flex-col space-y-5 justify-between mt-50 mb-10 p-5   video-section z-50">
      <div className="md:w-[50%] w-full flex justify-center items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" w-full h-[563px] object-cover rounded-lg"
        >
          <source src="/vd2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="md:w-[60%] flex flex-col justify-center items-center space-y-5 ">
        <div className="hidden lg:block ">
          <div className="flex flex-row space-x-3 px-5 items-center">
            {contents.map((item, index) => (
              <div
                key={index}
                className="text-center border-r-2 border-[#938D8D] mb-4 flex flex-col space-y-1"
              >
                <h2 className="text-[30px] font-bold text-[#191919] leading-[57px]">
                  {item.number}
                </h2>
                <p className="text-[13px] text-[#191919] leading-[13px]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        

        <div className="flex-row flex items-center justify-center">
          <button className=" bg-[#040444] text-[19.69px] w-[153px] h-[56px] rounded-full whitespace-nowrap cursor-pointer hover:scale-104">
            Learn More
          </button>
          <a className="">
            <div className="w-[56px] h-[56px] bg-[#040444]  rounded-full flex justify-center items-center hover:scale-104">
              <Image src={RightArrow} alt="right arrow" className="w-5 h-5" />
            </div>
          </a>
        </div>
        </div>

        <div className="block lg:hidden">
          <div className="flex flex-col space-y-5">
          <p className="text-[11px] text-[#191919] leading-[15px]">
          Elevate your spaces sustainably with Nilsson. Discover innovative modern designs for architecture, interior, and exterior.
          </p>
        <div className="flex-row flex items-center justify-center">
          <button className=" bg-[#040444] md:text-[19.69px] text-[12px] md:w-[153px] w-[113px] md:h-[56px] h-[32px] rounded-full whitespace-nowrap cursor-pointer hover:scale-104">
            Learn More
          </button>
          <a className="">
            <div className="md:w-[56px] md:h-[56px] w-[32px] h-[32px] bg-[#040444]  rounded-full flex justify-center items-center hover:scale-104">
              <Image src={RightArrow} alt="right arrow" className="md:w-5 md:h-5 w-3 h-3" />
            </div>
          </a>
        </div>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default VideoAnimation;
