  "use client";
  import React, { useState, useEffect } from 'react';
  import { CaroselImage, RightArrow } from '../ReusableComponenets/Icons';
  import Image from 'next/image';
  // @ts-ignore
  import { Splide, SplideSlide } from '@splidejs/react-splide';
  import '@splidejs/splide/dist/css/splide.min.css';


  const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalSlides = 15;

    // Calculate the initial middle index based on total slides
    const getInitialMiddleIndex = () => {
      return Math.floor(totalSlides / 2);
    };

    useEffect(() => {
      // Set the initial active index to the middle slide
      setActiveIndex(getInitialMiddleIndex());
    }, []);

    // Helper function to check if the image is the active one
    const getImageClassName = (index: number) => {
      if (index === activeIndex) {
        return "scale-120 z-20 opacity-100 rounded-[20px]"; // Active slide is full opacity, size, and rounded
      } else {
        return "scale-80 opacity-50 z-10 "; // Inactive slides visible but dimmed and smaller
      }
    };
    
    
    return (

      <>


      <div className="flex xl:flex-row flex-col justify-between space-y-5 px-10">
        <div className="flex flex-col items-center w-full md:items-start md:w-auto">
        <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px] whitespace-nowrap">
          <ul className="list-disc pl-5 text-center whitespace-nowrap">
            <li>OUR PROJECCTS</li>
          </ul>
        </div>
        <div>
        <p className="font-semibold text-[16px] xl:text-[55.91px] xl:leading-[69px] md:text-start text-center text-[#040444] w-[884px]">
        Our Creations, <br className='hidden sm:block md:block' /> Your Inspiration
          </p>
        </div>
        </div>
       
      

      <div className="flex flex-col items-center w-full md:items-start md:w-auto space-y-5">
    
        <div>   
          <p className="font-normal text-[16px]  xl:text-[25px] xl:leading-[42px] md:text-start text-center text-[#393535]">
          Architecture is more than just structures; it's a reflection of creativity, purpose, and human connection. We believe in designing spaces that inspire, function seamlessly, and stand the test of time.
          </p>
        </div>
      </div>
    </div>

      <div className="projects-container relative w-full max-w-7xl mx-auto md:mt-50 mt-20 h-[400px]">



        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            focus: 'center',
            start: getInitialMiddleIndex(), // Ensure initial middle slide is active
            autoplay: true,
            pagination: false,
            arrows: false,
            classes: {
              arrows: 'splide__arrows custom-arrows',
              arrow: 'splide__arrow custom-arrow',
              prev: 'splide__arrow--prev custom-prev',
              next: 'splide__arrow--next custom-next',
            },
            breakpoints: {
              640: {
                perPage: 1,
              },
              768: {
                perPage: 2,
              },
            },
          }}
          onMove={(splide: any, newIndex: React.SetStateAction<number>) => setActiveIndex(newIndex)}
          className="w-full mt-10 justify-center items-center"
        >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <SplideSlide 
            key={index} 
            className="flex items-center justify-center relative"
          >
            <div className="w-full h-full flex items-center justify-center mt-10">
              <Image
                src={CaroselImage}
                alt={`carousel-image-${index}`}
                className={`transition-all duration-300 ease-in-out transform object-cover ${getImageClassName(index)}`}
                width={300}
                height={400}
              />
            </div>
          </SplideSlide>
        ))}
        </Splide>

        <style jsx global>{`
      .splide__slide img {
  transition: 
    transform 0.3s ease,
    opacity 0.3s ease;
  max-width: 100%; /* Changed from 150% which could cause overflow issues */
  max-height: 400px;
  object-fit: cover;
  display: block !important; /* Ensure image is displayed as block */
  visibility: visible !important; /* Force visibility */
}
        
        .splide__slide {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          opacity: 1; /* Ensure slide has full opacity */
          visibility: visible !important; /* Force visibility */
          overflow: visible; /* Allow content to overflow */
        }

        /* Custom arrow styles */
        .custom-arrows .custom-arrow {
          background-color: #040444; /* Semi-transparent white background */
          border: none;
          border-radius: 50%; /* Circular shape */
          width: 40px; /* Width of the arrow */
          height: 40px; /* Height of the arrow */
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }

        .custom-arrow svg {
          display: none;
        }

        .custom-prev::before,
        .custom-next::before {
          content: "";
          display: inline-block;
          width: 12px;
          height: 12px;
          background: url('/svg-1489077959_196.svg') no-repeat center center;
          background-size: contain;
        }

        .custom-prev::before {
          transform: rotate(180deg);
        }
      `}</style>
      </div>
      </>
    );
  };

  export default Projects;