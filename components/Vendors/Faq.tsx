'use client';

import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Diamond from '@/public/diamond.svg'
import Image from 'next/image';

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
      <div className="py-20 flex flex-col items-center space-y-20 mt-40">


<div className="flex flex-col justify-center items-center w-full">
        <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]">
          <ul className="list-disc pl-5 text-center">
            <li>FAQ</li>
          </ul>
        </div>
        <h2 className="text-[55px] text-[#040444] leading-[69.12px] font-semibold">
Vendor Services FAQ
        </h2>
        </div>
       
      
        <div className="w-full max-w-[1000px] px-4">
          {Queries.map((queries, index) => (
            <div
              key={index}
              className="border-b border-gray-300/50 pb-4 cursor-pointer mb-8"
              onClick={() => togglequeries(index)}
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-3 max-w-[90%]">
                  <div className="min-w-6 h-6 flex items-center justify-center">
                    <Image src={Diamond} alt="Diamond" className='w-5 h-5' />
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