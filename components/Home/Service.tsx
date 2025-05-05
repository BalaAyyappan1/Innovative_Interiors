"use client";

import React, {useEffect} from "react";
import {
  pciture2,
  RightArrow,
  RightColorArrow,
} from "../ReusableComponenets/Icons";
import Image from "next/image";
import { text } from "stream/consumers";
import slider2 from '@/public/Listitem.png'
import slider3 from '@/public/Listitem(1).png'
import slider4 from '@/public/Listitem(2).png'

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';


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
      text: "Beautifully designed spaces crafted for function and aesthetics.",
    },
    {
      number: "900k",
      text: "Trusted by businesses and homeowners for exceptional interiors.",
    },
  ];

  const images = [
    {
      image: pciture2,
      title: "Hospitality",
      description: "Crafted for comfort, luxury, and unforgettable guest experiences.",
    },
    {
      image: slider2,
      title: "Residential",
      description: "Crafted for comfort, luxury, and unforgettable guest experiences.",
    },
    {
      image: slider3,
      title: "Retail",
      description: "Engaging environments that enhance brand identity and customer flow..",
    },
    {
      image: slider4,
      title: "Corporate",
      description: "Crafted Smart Workspaces designed for productivity and collaboration.",
    }
  ]


  useEffect(() => {
    new Splide('.splide', {
      type: 'loop', // or 'slide' or 'fade'
      perPage: 1,   // number of slides to show
      gap: '20px',  // space between slides
      arrows: false,
      navigation: false,
      autoplay: true,
      breakpoints: {
        768: {
          perPage: 1,
        },
        480: {
          perPage: 1,
        },
      },
    }).mount();
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-center ">
        <div className="bg-[#F8F8F8] h-[30px] w-[180px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]">
          <ul className="list-disc pl-5 text-center">
            <li>HOW DOES ESIM WORK?</li>
          </ul>
        </div>
      </div>
      <div className="text-[#040444]  md:mt-5 md:px-15 justify-center text-center items-center md:text-[75.75px] text-[16px] leading-[70.4px]">
     Activating an eSIM with Uniconnect is as simple as 1-2-3
      </div>

      {/* <div className="relative md:mt-15">
        <Image
          src={pciture2}
          alt={"picutre2"}
          className="md:rounded-[40px] rounded-[10px] w-full md:h-[70vh] object-cover "
        />
        <div className="flex flex-col">
          <div className="absolute md:bottom-35 bottom-10 left-10 md:left-16 p-4 text-[24px] md:text-[122.88px] leading-[25px] text-white md:leading-[128px]">
            HOSPITALITY
            <p className="text-[10px] md:text-[33.44px] text-[#FFFFFF] leading-[15px]  md:leading-[32px]">
              Crafted for comfort, luxury, and unforgettable
              <br /> guest experiences.
            </p>
          </div>
        </div>
        <div className="absolute md:bottom-15 md:left-23 bottom-4 left-13 flex-row flex">
          <button className="w-[100px] md:w-[152px] h-[30px] md:h-[56px] bg-white md:text-[19px] text-[11px] text-[#040444] rounded-full whitespace-nowrap cursor-pointer hover:scale-104">
            View More
          </button>
          <a className="">
            <div className="w-[30px] md:w-[56px] h-[30px] md:h-[56px] bg-white text-[#040444] rounded-full flex justify-center items-center  cursor-pointer hover:scale-104">
              <Image
                src={RightColorArrow}
                alt="right arrow"
                className="w-[15px] md:w-[19.3px] h-[15px] md:h-[19.3px] text-[#040444]"
              />
            </div>
          </a>
        </div>
      </div> */}

<div className="splide md:mt-10 ">
        <div className="splide__track">
          <ul className="splide__list">
            {images.map((item, index) => (
              <li className="splide__slide" key={index}>
                <div className="image-container">
                  <Image src={item.image} alt={item.title}  className="md:rounded-[40px] rounded-[10px] md:h-[70vh] w-full object-cover"/>
                  <div className="absolute md:bottom-20 bottom-5 md:left-5 left-2 p-4 text-[24px] md:text-[122.88px] leading-[25px] text-white md:leading-[128px] ">
                    <h3 className="text-[22px] md:text-[102.88px] leading-[25px] text-white md:leading-[128px] ">{item.title}</h3>
                    <p className="text-[10px] md:text-[33.44px] text-[#FFFFFF] leading-[15px]  md:leading-[32px]">{item.description}</p>
                    {/* <div className="flex-row flex mt-5">
  <button className="w-[100px] md:w-[152px] h-[30px] md:h-[56px] bg-white md:text-[19px] text-[11px] text-[#040444] rounded-full whitespace-nowrap cursor-pointer hover:scale-104">
    View More
  </button>
  <a className="">
    <div className="w-[30px] md:w-[56px] h-[30px] md:h-[56px] bg-white text-[#040444] rounded-full flex justify-center items-center cursor-pointer hover:scale-104">
      <Image
        src={RightColorArrow}
        alt="right arrow"
        className="w-[15px] md:w-[19.3px] h-[15px] md:h-[19.3px] text-[#040444]"
      />
    </div>
  </a>
</div> */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <section className="md:mt-90 md:mb-90 mt-40 mb-40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-6 max-w-8xl mx-auto">
          {contents.map((item, index) => (
            <div
              key={index}
              className={`text-center flex flex-col justify-center items-center p-3 
        ${
          index % 2 === 0 && index !== contents.length - 1
            ? "border-r border-[#938D8D]"
            : ""
        }
        ${index < contents.length - 2 ? " border-[#938D8D] " : ""}
        ${
          index < contents.length && (index + 1) % 4 !== 0
            ? "md:border-r md:border-[#938D8D]"
            : ""
        }
      `}
            >
              <h2 className="text-[14px] md:text-[24px] lg:text-[36px] font-bold text-[#191919] leading-tight mb-1">
                {item.number}
              </h2>
              <p className="text-[12px] md:text-[14px] lg:text-[16px] text-[#191919] leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Service;
