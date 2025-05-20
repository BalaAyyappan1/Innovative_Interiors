"use client";

import React, { useState } from "react";
import Image from "next/image";
import Imagestair from "@/public/Rectangle 242.svg";
import SectionLabel from "../ui/secionLabel";

const Work = () => {
  const [openSection, setOpenSection] = useState<number>(0);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? -1 : index);
  };


  const workSteps = [
    {
      number: 1,
      title: "Concept & Planning",
      description:
        "At the heart of every stunning interior is a well-thought-out concept. Our planning services help you visualize your space, assess design possibilities, and create a tailored roadmap for a stylish and functional environment. From material selection to spatial optimization. Architecture is more than just structures; it's a reflection of creativity, purpose, and human connection. We believe in designing spaces that inspire, function seamlessly, and stand the test of time.",
    },
    {
      number: 2,
      title: "Design & Development",
      description:
        "Our creative team transforms concepts into tangible designs, using the latest tools and techniques to craft detailed plans that capture your vision. We develop comprehensive design schemes including color palettes, furniture layouts, and custom elements tailored to your style and preferences.",
    },
    {
      number: 3,
      title: "Implementation & Execution",
      description:
        "With designs approved, our skilled craftsmen and project managers bring your vision to life. We coordinate all aspects of implementation, from construction and installation to finishing touches, ensuring quality and attention to detail at every step.",
    },
    {
      number: 4,
      title: "Final Styling & Review",
      description:
        "The final phase involves meticulous styling to perfect your space. We place accessories, arrange furniture, and add the finishing touches that elevate your interior. After completion, we conduct a thorough review to ensure every detail meets our exacting standards.",
    },
  ];

  return (
    <div className="md:mt-[150px] mt-30 mb-30">
      <div className="flex flex-col md:space-y-8 space-y-0 items-center md:max-h-[600px]">
        <SectionLabel text="HOW WE WORK"/>

        <div className="text-[#040444] my-4 mb-7 w-full justify-center font-semibold text-center items-center text-3xl md:text-[55px] md:leading-[70.4px] md:mb-16">
          Our Innovative Interiors Approach
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        <div className="flex-1">
          <Image src={Imagestair} alt="image"  className="w-full h-full object-cover md:max-h-[500px]"/>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          {workSteps.map((step, index) => (
            <div key={index} className="transition-all duration-300">
              <div
                className="cursor-pointer flex items-center gap-4  bg-[#F8F8F8] p-4 rounded-md shadow-sm hover:shadow-md transition-all"
                onClick={() => toggleSection(index)}
              >
                <span className="text-[#040444] font-semibold text-[22px] min-w-[24px]">
                  {step.number}
                </span>
                <span className="text-[#040444] text-[20px] font-medium">
                  {step.title}
                </span>
                <svg
                  className={`w-5 h-5 text-[#040444] ml-auto transition-transform ${
                    openSection === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {openSection === index && (
                <div className="mt-2 p-4 text-[#666666] text-[14px] leading-relaxed bg-[#F8F8F8] rounded-md ">
                  {step.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
