"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, 
  logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, 
  logo20, logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29
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
    // { id: 12, logo: logo12 },
    { id: 13, logo: logo13 },
    { id: 14, logo: logo14 },
    { id: 15, logo: logo15 },
    { id: 16, logo: logo16 },
    { id: 17, logo: logo17 },
    { id: 18, logo: logo18 },
    { id: 19, logo: logo19 },
    { id: 20, logo: logo20 },
    // { id: 21, logo: logo21 },
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
      
      // Start fade out
      setFadeState("fading-out");
      
      // Clear any existing timeouts
      timeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      timeoutsRef.current = [];
      
      // After fade out completes
      const timeout1 = setTimeout(() => {
        // Generate new random set for next rotation
        const nextSetIndex = (activeSet + 1) % 3;
        if (nextSetIndex === 1 || nextSetIndex === 2) {
          logoSets.current[nextSetIndex] = [...allLogos].sort(() => 0.5 - Math.random()).slice(0, 12);
        }
        
        // Switch to next logo set
        setActiveSet(nextSetIndex);
        setDisplaySet(nextSetIndex);
        
        // Start fade in
        setFadeState("fading-in");
        
        // After fade in completes
        const timeout2 = setTimeout(() => {
          setFadeState("visible");
          animatingRef.current = false;
        }, 400);
          
        timeoutsRef.current.push(timeout2);
      }, 500);
      
      timeoutsRef.current.push(timeout1);
    };
  
    const interval = setInterval(() => {
      if (!animatingRef.current) {
        animationSequence();
      }
    }, 2000);
  
    return () => clearInterval(interval);
  }, [activeSet]);
  
  // Get opacity based on fade state
  const getOpacity = () => {
    switch (fadeState) {
      case "visible": return "opacity-100";
      case "fading-out": return "opacity-0";
      case "fading-in": return "opacity-100";
      default: return "opacity-100";
    }
  };
  
  return (
    <div className="flex flex-col justify-center items-center mt-12 md:mt-20 mb-12 md:mb-5 px-4 sm:px-6 lg:px-8">
      {/* Title with perfect responsive scaling */}
      <div className="text-[#040444] w-full text-center mb-6 md:mb-12">
        <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium leading-tight">
          Proudly Associated With
        </h2>
      </div>
  
      {/* Logo grid with perfect responsive behavior */}
      <section className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 place-items-center">
          {logoSets.current[displaySet].map((item, index) => (
         <div
         key={`${item.id}-${displaySet}-${index}`}
         className={`
           flex justify-center items-center
           transition-opacity duration-500 ease-in-out
           ${getOpacity()}
           w-full aspect-square
           min-h-[20px] max-h-[60px]
           sm:min-h-[40px] sm:max-h-[70px]
           md:min-h-[50px] md:max-h-[90px]
           lg:min-h-[60px] lg:max-h-[100px]
           xl:min-h-[70px] xl:max-h-[120px]
           p-1 sm:p-2 md:p-3
           transition-all duration-300
         `}
       >
         <div className="relative w-full h-full flex items-center justify-center">
           <Image
             src={item.logo}
             alt={`Client logo ${item.id}`}
             fill
             sizes="(max-width: 640px) 30vw, (max-width: 768px) 20vw, (max-width: 1024px) 18vw, 14vw"
             className="object-contain transition-all duration-300"
             priority={index < 8}
           />
         </div>
       </div>
       
          ))}
        </div>
      </section>
    </div>
  );
};

export default Clients;