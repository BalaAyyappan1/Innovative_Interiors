"use client";
import React, { useState, useEffect } from "react";
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

  const [displayLogos, setDisplayLogos] = useState([...allLogos]);
  const [activeSet, setActiveSet] = useState(0);
  const [fadeState, setFadeState] = useState('in'); // 'in' or 'out'

  useEffect(() => {
    const animateLogos = () => {
      // Start fade out
      setFadeState('out');
      
      // After fade out completes, change logos and fade in
      setTimeout(() => {
        setActiveSet(prev => (prev + 1) % 3); // Cycle through 3 different arrangements
        setFadeState('in');
      }, 500);
    };

    const interval = setInterval(animateLogos, 5000);
    return () => clearInterval(interval);
  }, []);

  // Predefined logo arrangements for smoother transitions
  const logoArrangements = [
    [...allLogos],
    [...allLogos].sort(() => 0.5 - Math.random()),
    [...allLogos].sort(() => 0.5 - Math.random())
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-20 md:h-screen space-y-2 md:space-y-7">
      <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]">
        <ul className="list-disc pl-5 text-center">
          <li>OUR ASSOCIATE</li>
        </ul>
      </div>
      <div className="text-[#040444] w-full justify-center text-center items-center text-[17px] md:text-[75.75px] leading-[70.4px]">
        Proudly Associated With
      </div>

      <section className="grid md:grid-cols-4 grid-cols-2 gap-10 p-5 w-full justify-items-center">
        {logoArrangements[activeSet].map((item) => (
          <div 
            key={item.id}
            className={`
              flex justify-center items-center 
              transition-all duration-500 
              ${fadeState === 'out' ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}
              transform-gpu
            `}
          >
            <Image
              src={item.logo}
              alt={`Logo ${item.id}`}
              height={100}
              width={item.logo === GRTLOGO || item.logo === MiotLogo ? 120 : 180}
              className="transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Clients;