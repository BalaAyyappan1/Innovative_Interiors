"use client";
import React, { useEffect, useRef, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Only run animations on non-mobile screens
    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const setupAnimation = (
        container: HTMLElement,
        direction: 'up' | 'down',
        speed: number
      ) => {
        const items = Array.from(container.children) as HTMLElement[];
        if (items.length === 0) return;

        // Calculate total height more accurately
        let totalHeight = 0;
        items.forEach(item => {
          const rect = item.getBoundingClientRect();
          const style = window.getComputedStyle(item);
          const marginTop = parseInt(style.marginTop) || 0;
          const marginBottom = parseInt(style.marginBottom) || 0;
          totalHeight += rect.height + marginTop + marginBottom;
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
            gsap.set(container, { y: initialY });
          }
        });

        return animation;
      };

      const animations: gsap.core.Tween[] = [];

      // Add small delay to ensure DOM is ready
      setTimeout(() => {
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
      }, 100);

      return () => {
        animations.forEach(anim => anim.kill());
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <div 
      ref={mainContainerRef} 
      className="mt-20 mb-20 md:mt-[150px] md:mb-[150px] overflow-hidden md:h-[950px] stories-container max-w-full w-full"
    >
      <div className="flex flex-col lg:flex-row lg:space-x-10 lg:ml-2 gap-8 lg:gap-0 px-4 md:px-6 lg:px-0">
        {/* Header Section */}
        <div className="w-full lg:w-[40%] xl:w-[35%] space-y-3 mb-8 lg:mb-0 lg:pr-8">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-[70px] leading-tight text-center lg:text-start lg:leading-[72px] text-[#040444] font-bold">
            Trusted by Many, Loved by All
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] lg:leading-[28px] text-center lg:text-start text-[#231F1F] max-w-2xl mx-auto lg:mx-0">
            Our clients' success stories reflect our commitment to excellence. See
            how we've helped them find their dream homes, sustainable investments,
            and perfect getaways.
          </p>
        </div>

        {/* Content columns section */}
        <div className="flex flex-col lg:flex-row lg:space-x-4 xl:space-x-6 overflow-hidden lg:w-full">
          {/* First column */}
          <div 
            ref={container1Ref} 
            className="flex flex-wrap justify-center gap-4 lg:flex-col lg:space-y-5 lg:gap-0 lg:w-1/3"
          >
            {(isMobile ? contentscol1.slice(0, 4) : contentscol1).map((item, index) => (
              <div key={index} className="w-auto">
                <div className="border-[#D8D7DD] border-[1.5px] w-[150px] h-[165px] sm:w-[180px] sm:h-[195px] md:w-[250px] md:h-[220px] lg:w-[280px] lg:h-[250px] xl:w-[325px] xl:h-[272px] rounded-[25px] space-y-2 lg:space-y-3 p-3 lg:p-4 story-item bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="ml-1 lg:ml-2">
                    <Image 
                      src={item.stars} 
                      alt="stars" 
                      className="w-16 sm:w-20 md:w-28 lg:w-32 xl:w-40" 
                    />
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <Image
                      src={item.profile}
                      alt={item.name}
                      className="rounded-full w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 object-cover"
                    />
                    <div className="flex flex-col min-w-0 flex-1">
                      <h3 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] font-bold text-[#0E0D0D] truncate">
                        {item.name}
                      </h3>
                      <p className="text-[8px] sm:text-[9px] md:text-sm lg:text-base xl:text-[18px] text-[#838489] lg:leading-[28px] leading-[12px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-[8px] sm:text-[9px] md:text-sm lg:text-base xl:text-[18px] text-black leading-relaxed line-clamp-3">
                    {item.message}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Second column - hidden on mobile and small tablets */}
          <div 
            ref={container2Ref} 
            className="hidden lg:flex lg:flex-col lg:-mt-35 lg:space-y-5 lg:w-1/3"
          >
            {contentscol2.map((item, index) => (
              <div key={index} className="flex flex-col space-y-5">
                <div className="border-[#D8D7DD] border-[1.5px] lg:w-[280px] lg:h-[250px] xl:w-[325px] xl:h-[272px] rounded-[25px] space-y-3 lg:space-y-4 p-3 lg:p-4 story-item bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="ml-1 lg:ml-2">
                    <Image 
                      src={item.stars} 
                      alt="stars" 
                      className="lg:w-32 xl:w-40"
                    />
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <Image
                      src={item.profile}
                      alt={item.name}
                      className="rounded-full lg:w-14 lg:h-14 xl:w-16 xl:h-16 object-cover"
                    />
                    <div className="flex flex-col min-w-0 flex-1">
                      <h3 className="lg:text-lg xl:text-[20px] font-bold text-[#0E0D0D] truncate">
                        {item.name}
                      </h3>
                      <p className="lg:text-base xl:text-[18px] text-[#838489] leading-[28px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <p className="lg:text-base xl:text-[18px] text-black leading-relaxed">
                    {item.message}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Third column - hidden on mobile and small tablets */}
          <div 
            ref={container3Ref} 
            className="hidden lg:flex lg:flex-col lg:-mt-55 lg:space-y-5 lg:w-1/3"
          >
            {contentscol3.map((item, index) => (
              <div key={index} className="flex flex-col space-y-5">
                <div className="border-[#D8D7DD] border-[1.5px] lg:w-[280px] lg:h-[250px] xl:w-[325px] xl:h-[272px] rounded-[25px] space-y-3 lg:space-y-4 p-3 lg:p-4 story-item bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="ml-1 lg:ml-2">
                    <Image 
                      src={item.stars} 
                      alt="stars" 
                      className="lg:w-32 xl:w-40"
                    />
                  </div>
                  <div className="flex flex-row space-x-2 items-center">
                    <Image
                      src={item.profile}
                      alt={item.name}
                      className="rounded-full lg:w-14 lg:h-14 xl:w-16 xl:h-16 object-cover"
                    />
                    <div className="flex flex-col min-w-0 flex-1">
                      <h3 className="lg:text-lg xl:text-[20px] font-bold text-[#0E0D0D] truncate">
                        {item.name}
                      </h3>
                      <p className="lg:text-base xl:text-[18px] text-[#838489] leading-[28px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <p className="lg:text-base xl:text-[18px] text-black leading-relaxed">
                    {item.message}
                  </p>
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