"use client";

import React, { useState } from "react";
import Image from "next/image";
import companyLogo from "@/public/CompanyLogo.svg";
import twitter from "@/public/twitter.svg";
import facebook from "@/public/fbook.svg";
import instagram from "@/public/Instagram.svg";
import linkedin from "@/public/git.svg";
import Link from "next/link";
const MobileFooter = () => {

  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { link: "HOME", href: "/" },
    { link: "ABOUT", href: "/about" },
    { link: "MANUFACTURING", href: "/manufacturing" },
    { link: "SERVICE", href: "/service" },
    { link: "PROJECTS", href: "/projects" },
    { link: "CAREERS", href: "/careers" },
    { link: "VENDORS", href: "/vendors" },
    { link: "CONTACTS", href: "/contacts" },
  ];

  return (
    <div className="flex flex-col items-start px-4 justify-start  bg-[#141414] h-[876px]">
      <Image
        src={companyLogo}
        alt="company logo"
        className="w-[120px] h-[70px] mb-15 mt-12"
      />
      <div className="flex flex-col items-start justify-center ml-1 w-[370px]">
        <div className="text-white font-bold text-[18px]">Stay in touch:</div>
        <p className="text-white text-[14px] mt-3 font-normal leading-6">
        Innovative Interiors Pvt Ltd, Plot No 7, VV Koil St,  <br />
        Chinmaya Nagar Stage 1, <br />
          Chennai-600092., <br />
         
        </p>


      

        <div className="text-white font-bold text-[18px] mt-7">Factory Address:</div>
        <p className="text-white text-[14px] mt-3 font-normal leading-6">
        S.No:50, Peruvoyal Village, Nainakuppam,   <br />
        Gummidipoondi (TK), Tiruvallur (Dt) - 601 206. <br />
         
         
        </p>
      

        <div className="flex flex-col items-start justify-center mt-8 space-y-3">
          <div className="text-white font-bold text-[18px]">Contact Us:</div>
          <div className="flex flex-col items-start justify-center space-y-1">
            <p className="text-white text-[14px] font-normal leading-6">
            Email: info@innovativeinteriors.in
            </p>
            <p className="text-white text-[14px] font-normal leading-6">
              Phone: 044-24795133
            </p>
          </div>

          <div className="relative">
      {/* Main Button */}
      <button
        className="bg-white text-[#030303] text-[13px] rounded-full w-[160px] h-[40px] mt-7 flex items-center justify-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        Explore More
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-[160px] bg-white rounded-lg shadow-lg z-10 overflow-hidden">
          {options.map((option) => (
            <Link
              key={option.link}
              href={option.href}
              className="block w-full px-4 py-2 text-[10px] text-[#030303] hover:font-semibold hover:bg-gray-100 text-left"
              onClick={() => setIsOpen(false)}
            >
              {option.link}
            </Link>
          ))}
        </div>
      )}
    </div>

          <div className="flex flex-col items-start justify-center mt-4 space-y-6">
            <h1 className="text-white text-[16px] font-bold leading-[18px] mt-2">
              Stay Connected
            </h1>

            <div className="flex flex-row gap-7">
              <Image src={twitter} alt="twitter" />
              <Image src={facebook} alt="facebook" />
              <Image src={instagram} alt="instagram" />
              <Image src={linkedin} alt="linkedin" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center mt-23 space-y-1">
         
          <p className="text-white text-[14px] font-bold leading-6">
          Designed & Developed by
          </p>
          <p className="text-white text-[14px] font-bold leading-6">
          © TIC Global
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
