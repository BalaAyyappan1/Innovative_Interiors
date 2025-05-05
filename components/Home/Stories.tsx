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

interface StoryItem {
  stars: string;
  profile: string;
  name: string;
  description: string;
  message: string;
}

const contentscol1: StoryItem[] = [
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

const contentscol2: StoryItem[] = [
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

const contentscol3: StoryItem[] = [
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

const Stories: React.FC = () => {
  const container1Ref = useRef<HTMLDivElement>(null);
  const container2Ref = useRef<HTMLDivElement>(null);
  const container3Ref = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Only run animations on large screens
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const setupAnimation = (
        container: HTMLElement,
        direction: 'up' | 'down',
        speed: number
      ) => {
        const items = Array.from(container.children) as HTMLElement[];
        if (items.length === 0) return;

        // Calculate total height of all items including margins
        let totalHeight = 0;
        items.forEach(item => {
          const style = window.getComputedStyle(item);
          totalHeight += item.offsetHeight + parseInt(style.marginBottom) + parseInt(style.marginTop);
        });

        // Clone items for seamless looping
        items.forEach(item => {
          const clone = item.cloneNode(true) as HTMLElement;
          container.appendChild(clone);
        });

        const initialY = direction === 'down' ? -totalHeight / 2 : 0;
        const targetY = direction === 'down' ? 0 : -totalHeight / 2;
        
        gsap.set(container, { y: initialY });

        const animation = gsap.to(container, {
          y: targetY,
          duration: speed,
          ease: "none",
          repeat: -1,
          onRepeat: () => {
            // Reset position to avoid cumulative positioning issues
            gsap.set(container, { y: initialY });
          }
        });

        return animation;
      };

      const animations: gsap.core.Tween[] = [];

      if (container1Ref.current) {
        const animation1 = setupAnimation(container1Ref.current, 'down', 30);
        if (animation1) animations.push(animation1);
      }
      if (container2Ref.current) {
        const animation2 = setupAnimation(container2Ref.current, 'up', 30);
        if (animation2) animations.push(animation2);
      }
      if (container3Ref.current) {
        const animation3 = setupAnimation(container3Ref.current, 'down', 30);
        if (animation3) animations.push(animation3);
      }
     

      return () => {
        animations.forEach(anim => anim.kill());
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={mainContainerRef} className="md:mt-[150px] overflow-hidden md:h-[950px] mt-20 mb-20 md:mb-[150px] stories-container  max-w-full w-full  ">
      <div className="flex flex-col md:flex-row space-x-35 md:ml-10 gap-8 md:gap-0">
        <div className="w-full md:w-[50%] space-y-3 mb-8 md:mb-0">
          <h2 className="text-[16px] md:text-[70px] leading-tight md:text-start text-center md:leading-[72px] text-[#040444]">
            Trusted by Many, Loved by All
          </h2>
          <p className="text-[10px] md:text-[20px] md:leading-[28px] md:text-start text-center text-[#231F1F]">
            Our clients' success stories reflect our commitment to excellence. See
            how we've helped them find their dream homes, sustainable investments,
            and perfect getaways.
          </p>
        </div>

        {/* Content columns section */}
        <div className="flex flex-col md:flex-row  md:space-x-10 overflow-hidden md:w-full">
  {/* First column */}
  <div ref={container1Ref} className="flex flex-wrap justify-center md:flex-col md:space-y-5 gap-4 md:gap-0">
    {(typeof window !== 'undefined' && window.innerWidth < 768 ? contentscol1.slice(0, 4) : contentscol1).map((item, index) => (
      <div key={index} className="w-auto md:w-[calc(60%-8px)]">
        <div className="border-[#D8D7DD] border-[1.5px] w-[150px] h-[165px] md:w-[325px] md:h-[272px] rounded-[25px] space-y-3 p-3 story-item">
          <div className="ml-2">
            <Image src={item.stars} alt="stars" className="w-20 md:w-40" />
          </div>
          <div className="flex flex-row space-x-2 items-center">
            <Image
              src={item.profile}
              alt={item.name}
              className="rounded-full md:w-16 md:h-16 w-10 h-10"
            />
            <div className="flex flex-col">
              <h3 className="text-[14px] md:text-[20px] font-bold text-[#0E0D0D]">
                {item.name}
              </h3>
              <p className="text-[9px] md:text-[18px] text-[#838489] md:leading-[28px] leading-[12px]">
                {item.description}
              </p>
            </div>
          </div>
          <p className="text-[9px] md:text-[18px] text-black">{item.message}</p>
        </div>
      </div>
    ))}
  </div>


          {/* Second column - hidden on mobile */}
          <div ref={container2Ref} className="hidden md:flex md:flex-col md:-mt-35 md:space-y-5">
            {contentscol2.map((item, index) => (
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
          <div ref={container3Ref} className="hidden md:flex md:flex-col md:-mt-55 md:space-y-5">
            {contentscol3.map((item, index) => (
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