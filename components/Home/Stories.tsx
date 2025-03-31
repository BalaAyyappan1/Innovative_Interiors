"use client";
import React, { useEffect, useRef } from "react";

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
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

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
          trigger: ".stories-container",
          start: "top 80%",
          once: true
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
        "Olivia's professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage2,
      name: "Jhon Doe",
      description: "Client",
      message:
        "Olivia's professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage3,
      name: "Joe",
      description: "Client",
      message:
        "Olivia's professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: EmptyImage,
      name: "John Doe",
      description: "Client",
      message:
        "Olivia's professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
  ];

  const contentcol2 = [
    {
      stars: Stars,
      profile: EmptyImage,
      name: "Mike",
      description: "Client",
      message:
        "Olivia's professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage4,
      name: "Williams",
      description: "Client",
      message:
        "Olivia's professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage5,
      name: "Hamster",
      description: "Client",
      message:
        "Olivia's professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage6,
      name: "Jhonny",
      description: "Client",
      message:
        "Olivia's professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
  ];

  const contentcol3 = [
    {
      stars: Stars,
      profile: proImage6,
      name: "Jessica",
      description: "Client",
      message:
        "Olivia's professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage8,
      name: "Bobby",
      description: "Client",
      message:
        "Olivia's professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage9,
      name: "Patrick",
      description: "Client",
      message:
        "Olivia's professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
    {
      stars: Stars,
      profile: proImage7,
      name: "Doe Jae",
      description: "Client",
      message:
        "Olivia's professionalism and deep understanding of luxury properties gave me confidence throughout the process.",
    },
  ];

  return (
    <div ref={storiesRef} className="px-4 md:px-10 mt-40 md:mt-100 overflow-hidden md:h-[950px] mb-20 md:mb-80 stories-container">
      {/* Responsive layout structure - flex-col on mobile, flex-row on larger screens */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-0">
        {/* Title section - full width on mobile, 40% on desktop */}
        <div className="w-full md:w-[40%] space-y-3 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-[70px] leading-tight md:leading-[72px] text-[#040444]">
            Trusted by Many, Loved by All
          </h2>
          <p className="text-lg md:text-[20px] leading-[28px] text-[#231F1F]">
            Our clients' success stories reflect our commitment to excellence. See
            how we've helped them find their dream homes, sustainable investments,
            and perfect getaways.
          </p>
        </div>

        {/* Content columns section */}
        <div className="flex flex-col md:flex-row md:p-5 md:space-x-5">
          {/* First column - always visible, flex-wrap on mobile */}
          <div className="flex flex-wrap justify-center md:flex-col md:space-y-5 gap-4 md:gap-0">
            {contentscol1.map((item, index) => (
              <div key={index} className="w-[calc(50%-8px)] md:w-auto">
                <div className="border-[#D8D7DD] border-[1.5px] w-[250px] h-[165px] md:w-[325px] md:h-[272px] rounded-[25px] space-y-4 p-4 story-item">
                  <div className="ml-2">
                    <Image src={item.stars} alt="stars" className="w-25 md:w-40" />
                  </div>

                  <div className="flex flex-row space-x-2 items-center">
                    <Image
                      src={item.profile}
                      alt={item.name}
                      className="rounded-full md:w-16 md:h-16 w-10 h-10"
                    />
                    <div className="flex flex-col">
                      <h3 className=" text-[14px] md:text-[20px] font-bold text-[#0E0D0D]">
                        {item.name}
                      </h3>
                      <p className=" text-[10px] md:text-[18px] text-[#838489] md:leading-[28px] leading-[12px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <p className="text-[10px] md:text-[18px] text-black">{item.message}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Second column - hidden on mobile */}
          <div className="hidden md:flex md:flex-col md:-mt-35 md:space-y-5">
            {contentcol2.map((item, index) => (
              <div key={index} className="flex flex-col space-y-5">
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
                    <div className="flex flex-col">
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

          {/* Third column - hidden on mobile */}
          <div className="hidden md:flex md:flex-col md:-mt-55 md:space-y-5">
            {contentcol3.map((item, index) => (
              <div key={index} className="flex flex-col space-y-5">
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
                    <div className="flex flex-col">
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
    </div>
  );
};

export default Stories;