"use client";
import React, { useState } from "react";
import { Rectangle, Rectangle2 } from "../ReusableComponenets/Icons";
import Image from "next/image";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const Process: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const content = [
    {
      no: "01",
      title: "Measurement & Planning",
      description:
        "Architecture is more than just structures; it's a reflection of creativity, purpose, and human connection. We believe in designing spaces that inspire, function seamlessly, and stand the test of time.",
    },
    {
      no: "02",
      title: "Measurement & Planning",
      description:
       "Architecture is more than just structures; it's a reflection of creativity, purpose, and human connection. We believe in designing spaces that inspire, function seamlessly, and stand the test of time.",
    },
    {
      no: "03",
      title: "Measurement & Planning",
      description:
        "Architecture is more than just structures; it's a reflection of creativity, purpose, and human connection. We believe in designing spaces that inspire, function seamlessly, and stand the test of time.",
    },
  ];

  return (
    <div className="flex flex-col items-start   space-y-5 mb-10 sm:mb-15 md:mb-20 mt-50">
      <div className="flex flex-col space-y-4 items-center w-full">
      <div className='bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px]'>
            <ul className='list-disc pl-5 text-center md:text-start'>
              <li>OUR PROCESS</li>
            </ul>
          </div>
          <p className='font-medium text-[16px] md:text-[55.91px] text-[#040444] md:leading-[69.12px]  text-center whitespace-nowrap'>
          A Step-by-Step Approach to <br /> Design Excellence
          </p>
        </div>

     
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5  w-full  mx-auto md:mt-20 mt-5 mb-20">
        <div className="w-full h-[500px] md:h-[660px] rounded-[15.79px] bg-[#F1F1FE] justify-center items-center flex">
          <div className="w-full max-w-3xl mx-auto">
            <Splide
              options={{
                type: "fade",
                rewind: true,
                pagination: true,
                arrows: false,
                autoplay: false,
                speed: 1000,
                interval: 4000,
                pauseOnHover: true,
              }}
              onMove={(splide: { index: React.SetStateAction<number>; }) => setCurrentSlide(splide.index)}
            >
              {content.map((item, index) => (
                <SplideSlide key={index}>
                  <div className="p-8  transition-all duration-500 w-full flex flex-col">
                    <div className="flex flex-col space-y-5 items-center justify-start">
                      <div>
                        <span className="text-4xl font-bold text-[#040444] mr-4 rounded-full bg-white w-20 h-20 flex items-center justify-center">
                          {item.no}
                        </span>
                      </div>
                      <div className="space-y-5">
                        <h3 className="text-2xl font-semibold text-[#040444] text-center">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-center">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
        <div className="w-full h-auto sm:h-auto">
          <Image
            src={Rectangle2}
            alt="rec2"
            width={500}
            height={900}
            className="w-full h-[500px] md:h-[660px] object-cover rounded-[15.79px]"
          />
        </div>
      </div>

      <style jsx global>{`
        .splide__pagination {
          bottom: -2rem;
        }

        .splide__pagination__page {
          background: #d9d9d9;
          width: 10px;
          height: 10px;
          margin: 0 8px;
          transition: all 0.3s ease;
        }

        .splide__pagination__page.is-active {
          background: #040444;
          transform: scale(1.3);
        }

        /* Scope these slide styles to Process component only */
        .process-slider .splide__slide {
          opacity: 0;
          transition: opacity 0.8s ease;
        }

        .process-slider .splide__slide.is-active {
          opacity: 1;
        }

        .process-slider .splide__slide > div {
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.6s ease;
        }

        .process-slider .splide__slide.is-active > div {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Process;
