'use client';

import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Faq = () => {
    const Queries = [
      {
        question: "How can I become a vendor for Innovative Interiors?",
        answer:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s"
      },
      {
        question:
        "What type of products do you source from vendors?",
        answer:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s"
      },
      {
        question:
          "Do you require vendors to provide samples before approval?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s"
      },
      {
        question: "Can I cancel my subscription anytime?",
        answer:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s"
      },
    
    ];
  
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const togglequeries = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <div className="py-20 flex flex-col items-center">
        {/* <div className="text-[40px] md:leading-[105px] md:text-[90px] text-[#28334D] md:whitespace-normal whitespace-nowrap font-normal text-center mb-5">
          Clearing Up Common  <br className=''/> <span className="instrument-font text-[#CF1E00] font-serif italic">Queries</span>
        </div>
        <div className="text-[17px] text-center text-[#8693B1] mb-16">
          Dive into our FAQ section for insights into our services. We&apos;ve compiled answers <br className=''/> to common questions to ensure you&apos;re well-informed.
        </div> */}
        <div className="w-full max-w-[950px] px-4">
          {Queries.map((queries, index) => (
            <div
              key={index}
              className="border-b border-gray-300/50 pb-4 cursor-pointer mb-8"
              onClick={() => togglequeries(index)}
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-3 max-w-[90%]">
                  <div className="min-w-6 h-6 flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#040444] transform rotate-45"></div>
                  </div>
                  <h2 className="text-[28px] md:text-[34px] font-medium text-[#040444]">
                    {queries.question}
                  </h2>
                </div>
                <button className="text-4xl text-[#040444]">
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
                    <p className="mt-4 text-gray-600 text-base leading-relaxed pr-8 ml-9">
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