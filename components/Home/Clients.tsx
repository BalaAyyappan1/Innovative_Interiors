"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  RadissonLogo,
  ChenSilksLogo,
  AdityaramLogo,
  GRTLOGO,
  RLogo,
  AloftLogo,
  TcsLgoo,
  MiotLogo,
  SundaramLogo,
  tvsLogo,
  PothysLogo,
  KOLogo,
} from "../ReusableComponenets/Icons";
import Image from "next/image";

const Clients = () => {
  const allLogos = [
    { id: 1, logo: RadissonLogo },
    { id: 2, logo: ChenSilksLogo },
    { id: 3, logo: AdityaramLogo },
    { id: 4, logo: GRTLOGO },
    { id: 5, logo: RLogo },
    { id: 6, logo: AloftLogo },
    { id: 7, logo: TcsLgoo },
    { id: 8, logo: MiotLogo },
    { id: 9, logo: SundaramLogo },
    { id: 10, logo: tvsLogo },
    { id: 11, logo: PothysLogo },
    { id: 12, logo: KOLogo },
  ];

  // Prepare consistent sets in advance
  const logoSets = useRef([
    [...allLogos],
    [...allLogos].sort(() => 0.5 - Math.random()),
    [...allLogos].sort(() => 0.5 - Math.random())
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
        // Quickly switch to next logo set
        const nextSet = (activeSet + 1) % logoSets.current.length;
        setActiveSet(nextSet);
        setDisplaySet(nextSet);
        
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
      if (logo === GRTLOGO || logo === MiotLogo) return 60;
      return 90;
    }
    // Desktop sizes
    if (logo === GRTLOGO || logo === MiotLogo) return 120;
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
    <div className="flex flex-col justify-center items-center mt-[80px]   md:mb-[20px] mb-[50px] space-y-2 md:space-y-7">
      <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]">
        <ul className="list-disc pl-5 text-center">
          <li>OUR ASSOCIATE</li>
        </ul>
      </div>
      <div className="text-[#040444] w-full justify-center text-center items-center text-[17px] md:text-[75.75px] leading-[70.4px]">
        Proudly Associated With
      </div>

      <section className="grid md:grid-cols-4 grid-cols-2 gap-5 md:gap-10 p-5 w-full justify-items-center">
        {logoSets.current[displaySet].map((item) => {
          const dimensions = getContainerDimensions();
          return (
            <div
              key={`${item.id}-${displaySet}`}
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