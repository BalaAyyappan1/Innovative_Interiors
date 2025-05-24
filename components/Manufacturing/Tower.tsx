import React from "react";
import Image from "next/image";
import tower1 from "@/public/tower1.png";
import tower2 from "@/public/tower2.png";
import tower3 from "@/public/tower3.png";
import tower4 from "@/public/tower4.png";

const Tower = () => {
  const steps = [
    {
      number: "01",
      title: "Shop Drawing Approval",
      description: "Production begins only after detailed shop drawings are vetted and approved, ensuring accuracy from the start.",
      image: tower1,
    },
    {
      number: "02",
      title: "Production Planning Pipeline",
      description: "Tasks are scheduled through our system for efficient timelines and resource use.",
      image: tower2,
    },
    {
      number: "03",
      title: "Material Procurement",
      description: "Materials are sourced via our central stores and trusted vendors to ensure quality and consistency.",
      image: tower3,
    },
    {
      number: "04",
      title: "Controlled Manufacturing Environment",
      description: "Meeting diverse client needs efficiently",
      image: tower4,
    },
    {
      number: "05",
      title: "Multi-Level Quality Checks",
      description: "Each product undergoes rigorous quality checks at multiple stages, ensuring adherence to our high standards.",
      image: tower4,
    },

    {
      number: "06",
      title: " Packing & In-House Delivery",
      description: "Finished goods are securely packed and dispatched through our in-house logistics network for safe, on-time delivery.",
      image: tower4,
    },
    {
      number: "07",
      title: "Installation & Handover",
      description: "Finished goods are securely packed and dispatched through our in-house logistics network for safe, on-time delivery.",
      image: tower4,
    },

  ];

  return (
    <div className="mx-auto max-w-full w-full">
      <div className="flex flex-col items-center space-y-1 w-full">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex md:flex-row flex-col items-center justify-between w-full md:h-[253px] ${index < steps.length - 1 ? "md:border-b md:border-[#000000]" : ""
              }`}
          >
            {/* Image Column */}
            <div className="md:w-[45%] w-full flex justify-center mb-4 md:mb-0">
              <Image src={step.image} alt={`tower${index + 1}`} />
            </div>

            {/* Text Column */}
            <div className=" flex md:flex-row flex-col items-center w-full md:pl-10 text-[#040444]">
              <div className="flex items-center  md:space-x-16 space-x-4">
                <span className="text-center text-[16px] md:text-[40px]">
                  {step.number}
                </span>
                <span className="text-center md:text-left text-[16px] md:text-[35px] md:w-90">
                  {step.title}
                </span>

              </div>

              <span className="text-[#393535] md:text-left text-center text-[16px] md:text-[20px] font-light md:ml-20 mt-2 md:mt-0">
                {step.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tower;