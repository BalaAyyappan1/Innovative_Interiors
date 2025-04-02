"use client";

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Diamond from "@/public/diamond.svg";
import Image from "next/image";

const Faq = () => {
  const Queries = [
    {
      question: "How can I become a vendor for Innovative Interiors?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s",
    },
    {
      question: "What type of products do you source from vendors?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s",
    },
    {
      question: "Do you require vendors to provide samples before approval?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s",
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const togglequeries = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-10 md:py-20 flex flex-col items-center space-y-10 md:space-y-20 mt-20 md:mt-40 px-4 md:px-0">
      <div className="flex flex-col justify-center items-center space-y-3 md:space-y-5 w-full">
        <div className="bg-[#F8F8F8] h-[25px] md:h-[30px] w-[120px] md:w-[140px] flex justify-center items-center font-medium text-[#141414] text-[10px] md:text-[11.81px] rounded-[8px]">
          <ul className="list-disc pl-5 text-center">
            <li>FAQ</li>
          </ul>
        </div>
        <h2 className="text-3xl md:text-[55px] text-[#040444] leading-tight md:leading-[69.12px] font-semibold text-center">
          Vendor Services FAQ
        </h2>
      </div>

      <div className="w-full max-w-[1000px]">
        {Queries.map((queries, index) => (
          <div
            key={index}
            className="border-b border-gray-300/50 pb-4 cursor-pointer mb-8 md:mb-8"
            onClick={() => togglequeries(index)}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-3 sm:gap-0 sm:items-center w-full">
              <div className="flex items-start sm:items-center gap-2 md:gap-3 max-w-full sm:max-w-[85%] md:max-w-[90%]">
                <div className="min-w-5 md:min-w-6 h-5 md:h-6 flex items-center justify-center mt-1 md:mt-0">
                  <Image src={Diamond} alt="Diamond" className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-[34px] font-medium text-[#040444]">
                  {queries.question}
                </h2>
              </div>
              <button className="text-2xl md:text-4xl text-[#040444] min-w-[24px] flex justify-center self-end sm:self-auto">
                {openIndex === index ? "-" : "+"}
              </button>
            </div>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden w-full"
                >
                  <p className="mt-4 md:mt-4 text-gray-600 text-sm md:text-base leading-relaxed pr-2 md:pr-8 ml-7 md:ml-9">
                    {queries.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
