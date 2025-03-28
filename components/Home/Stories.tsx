"use client";
import React, { useEffect, useRef } from "react"; // Added useEffect

import {
  proImage1,
  proImage2,
  proImage3,
  proImage4,
  proImage5,
  proImage6,
  proImage7,
  proImage8,
  proImage9,
  EmptyImage,
  Stars,
} from "../ReusableComponenets/Icons";
import Image from "next/image";
import gsap from "gsap"; // Corrected import for gsap
import ScrollTrigger from "gsap/ScrollTrigger"; // Corrected import for ScrollTrigger

const Stories = () => {

const storiesRef = useRef(null);
gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  // Ensure GSAP animation is triggered after component mounts
  const animateStories = () => {
    gsap.from(".story-item", {
      y: 50, 
      opacity: 0, 
      duration: 0.5,
      stagger: 0.2, 
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".stories-container", // Use a specific class for triggering
        start: "top 80%", // Start animation when top of container is 80% in view
        once: true // Ensures animation happens only once
      }
    });
  };

  // Delay the animation slightly to ensure all elements are rendered
  const timer = setTimeout(animateStories, 100);

  return () => clearTimeout(timer);
}, []);


  const contentscol1 = [
    {
      stars: Stars,
      profile: proImage1,
      name: "Emily Dason",
      description: "Client",
      message:
        "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage2,
      name: "Jhon Doe",
      description: "Client",
      message:
        "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage3,
      name: "Joe",
      description: "Client",
      message:
        "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: EmptyImage,
      name: "John Doe",
      description: "Client",
      message:
        "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
  ];

  const contentcol2 = [
    {
      stars: Stars,
      profile: EmptyImage,
      name: "Mike",
      description: "Client",
      message:
        "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage4,
      name: "Williams",
      description: "Client",
      message:
        "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage5,
      name: "Hamster",
      description: "Client",
      message:
        "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage6,
      name: "Jhonny",
      description: "Client",
      message:
        "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
  ];

  const contentcol3 = [
    {
      stars: Stars,
      profile: proImage6,
      name: "Jessica",
      description: "Client",
      message:
        "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage8,
      name: "Bobby",
      description: "Client",
      message:
        "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage9,
      name: "Patrick",
      description: "Client",
      message:
        "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage7,
      name: "Doe Jae",
      description: "Client",
      message:
        "Olivia’s professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
  ];

  return (
    <div  ref={storiesRef}  className="flex flex-row px-10  mt-100 overflow-hidden  h-[950px] mb-80 stories-container">
      <div className="flex flex-col w-[40%] space-y-3">
        <h2 className="text-[70px] leading-[72px] text-[#040444]">
          Trusted by Many, Loved by All
        </h2>
        <p className="text-[20px] leading-[28px] text-[#231F1F]">
          Our clients’ success stories reflect our commitment to excellence. See
          how we’ve helped them find their dream homes, sustainable investments,
          and perfect getaways.
        </p>
      </div>

      <div className="flex flex-row p-5 space-x-5 ">
        <div className="flex flex-col space-y-5">
          {contentscol1.map((item, index) => (
            <div key={index} className="flex flex-col space-y-5 ">
              <div className="border-[#D8D7DD] border-[1.5px] w-[325px] h-[272px] rounded-[25px] space-y-4 p-4 story-item">
                <div className="ml-2">
                  <Image src={item.stars} alt="stars" />
                </div>

                <div className="flex flex-row space-x-2 items-center">
                  <Image
                    src={item.profile}
                    alt={item.name}
                    className="rounded-full w-16 h-16"
                  />
                  <div className="flex flex-col ">
                    <h3 className="text-[20px] font-bold text-[#0E0D0D]">
                      {item.name}
                    </h3>
                    <p className="text-[18px] text-[#838489] leading-[28px]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <p className="text-[18px] text-black">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col -mt-35 space-y-5 ">
        {contentcol2.map((item, index) => (
            <div key={index} className="flex flex-col space-y-5 ">
              <div className="border-[#D8D7DD] border-[1.5px] w-[325px] h-[272px] rounded-[25px] space-y-4 p-4 story-item">
                <div className="ml-2">
                  <Image src={item.stars} alt="stars" />
                </div>

                <div className="flex flex-row space-x-2 items-center">
                  <Image
                    src={item.profile}
                    alt={item.name}
                    className="rounded-full w-16 h-16"
                  />
                  <div className="flex flex-col ">
                    <h3 className="text-[20px] font-bold text-[#0E0D0D]">
                      {item.name}
                    </h3>
                    <p className="text-[18px] text-[#838489] leading-[28px]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <p className="text-[18px] text-black">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col -mt-55 space-y-5 ">
        {contentcol3.map((item, index) => (
            <div key={index} className="flex flex-col space-y-5 ">
              <div className="border-[#D8D7DD] border-[1.5px] w-[325px] h-[272px] rounded-[25px] space-y-4 p-4 story-item">
                <div className="ml-2">
                  <Image src={item.stars} alt="stars" />
                </div>

                <div className="flex flex-row space-x-2 items-center">
                  <Image
                    src={item.profile}
                    alt={item.name}
                    className="rounded-full w-16 h-16"
                  />
                  <div className="flex flex-col ">
                    <h3 className="text-[20px] font-bold text-[#0E0D0D]">
                      {item.name}
                    </h3>
                    <p className="text-[18px] text-[#838489] leading-[28px]">
                      {item.description}
                    </p>
                  </div>
                </div>

                <p className="text-[18px] text-black">{item.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
