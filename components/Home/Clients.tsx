"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22, logo23,  logo24, logo25, logo26, logo27, logo28, logo29
} from "../ReusableComponenets/Icons";
import Image from "next/image";

const Clients = () => {
  const allLogos = [
    { id: 1, logo: logo1 },
    { id: 2, logo: logo2 },
    { id: 3, logo: logo3 },
    { id: 4, logo: logo4 },
    { id: 5, logo: logo5 },
    { id: 6, logo: logo6 },
    { id: 7, logo: logo7 },
    { id: 8, logo: logo8 },
    { id: 9, logo: logo9 },
    { id: 10, logo: logo10 },
    { id: 11, logo: logo11 },
    { id: 12, logo: logo12 },
    { id: 13, logo: logo13 },
    { id: 14, logo: logo14 },
    { id: 15, logo: logo15 },
    { id: 16, logo: logo16 },
    { id: 17, logo: logo17 },
    { id: 18, logo: logo18 },
    { id: 19, logo: logo19 },
    { id: 20, logo: logo20 },
    { id: 21, logo: logo21 },
    { id: 22, logo: logo22 },
    { id: 23, logo: logo23 },
    { id: 24, logo: logo24 },
    { id: 25, logo: logo25 },
    { id: 26, logo: logo26 },
    { id: 27, logo: logo27 },
    { id: 28, logo: logo28 },
    { id: 29, logo: logo29 },
  ];

  // Prepare consistent sets in advance
  const logoSets = useRef([
    [...allLogos].slice(0, 12), // First set - first 12 logos
    [...allLogos].sort(() => 0.5 - Math.random()).slice(0, 12), // Random set 1
    [...allLogos].sort(() => 0.5 - Math.random()).slice(0, 12)  // Random set 2
  ]);
  
  const [activeSet, setActiveSet] = useState(0);
  const [displaySet, setDisplaySet] = useState(0);
  const [fadeState, setFadeState] = useState("visible");
  const animatingRef = useRef(false);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  
  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    };
  }, []);
  
  // Animation sequence with perfect timing
  useEffect(() => {
    const animationSequence = () => {
      if (animatingRef.current) return;
      
      animatingRef.current = true;
      
      // Start fade out (slow)
      setFadeState("fading-out");
      
      // Clear any existing timeouts
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = [];
      
      // After fade out completes (slow)
      const timeout1 = setTimeout(() => {
        // Generate new random set for next rotation
        const nextSetIndex = (activeSet + 1) % 3;
        if (nextSetIndex === 1 || nextSetIndex === 2) {
          logoSets.current[nextSetIndex] = [...allLogos].sort(() => 0.5 - Math.random()).slice(0, 12);
        }
        
        // Quickly switch to next logo set
        setActiveSet(nextSetIndex);
        setDisplaySet(nextSetIndex);
        
        // Immediately start fade in (slow)
        setFadeState("fading-in");
        
        // After fade in completes
        const timeout2 = setTimeout(() => {
          setFadeState("visible");
          animatingRef.current = false;
        }, 300); // Adjust this duration for a smooth fade-in (e.g., 300ms)
          
        timeoutsRef.current.push(timeout2);
      }, 500); // Slow fade out duration
      
      timeoutsRef.current.push(timeout1);
    };
  
    const interval = setInterval(() => {
      if (!animatingRef.current) {
        animationSequence();
      }
    }, 1900);
  
    return () => clearInterval(interval);
  }, [activeSet]);
  
  // Get appropriate size for each logo - responsive sizes
  const getLogoSize = (logo: any) => {
    // Mobile sizes (50% smaller than desktop)
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      if (logo === logo1 || logo === logo2) return 60;
      return 90;
    }
    // Desktop sizes
    if (logo === logo1 || logo === logo2) return 120;
    return 180;
  };
  
  // Get container dimensions - responsive
  const getContainerDimensions = () => {
    return {
      height: typeof window !== 'undefined' && window.innerWidth < 768 ? '80px' : '100px',
      width: typeof window !== 'undefined' && window.innerWidth < 768 ? '120px' : '180px'
    };
  };
  
  // Get opacity based on fade state
  const getOpacity = () => {
    switch (fadeState) {
      case "visible": return "opacity-100";
      case "fading-out": return "opacity-0";
      case "fading-in": return "opacity-0";
      default: return "opacity-100";
    }
  };
  
  return (
    <div className="flex flex-col justify-center items-center mt-[80px] md:mb-[20px] mb-[50px] space-y-2 md:space-y-7">
      <div className="text-[#040444] w-full justify-center text-center items-center text-[17px] md:text-[75px] leading-[70.4px]">
        Proudly Associated With
      </div>
  
      <section className="grid grid-cols-4 gap-5 md:gap-10 p-5 w-full justify-items-center max-w-8xl">
        {logoSets.current[displaySet].map((item, index) => {
          const dimensions = getContainerDimensions();
          return (
            <div
              key={`${item.id}-${displaySet}-${index}`}
              className={`
                flex justify-center items-center
                transition-opacity duration-800 ease-in-out
                ${getOpacity()}
                flex-shrink-0
              `}
              style={{
                height: dimensions.height,
                width: dimensions.width
              }}
            >
              <Image
                src={item.logo}
                alt={`Logo ${item.id}`}
                height={parseInt(dimensions.height)}
                width={getLogoSize(item.logo)}
                className="object-contain w-full h-full"
              />
            </div>
          );
        })}
      </section>
    </div>

  );
};

export default Clients;