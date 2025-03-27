"use client";
import React, { useState, useEffect } from 'react';
import { CaroselImage } from '../ReusableComponenets/Icons';
import Image from 'next/image';
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
    return index === activeIndex
      ? 'scale-110 z-10' // Scale up and bring to front the active image
      : 'scale-90 opacity-60 z-0 bg-white'; // Scale down, set background color, and reduce opacity for inactive images
  };

  return (
    <div className="projects-container relative w-full max-w-6xl mx-auto">
      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          focus: 'center',
          start: getInitialMiddleIndex(), // Ensure initial middle slide is active
          autoplay: true,
          pagination: false,
          arrows: true,
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
        className="w-full"
      >
        {Array.from({ length: totalSlides }).map((_, index) => (
          <SplideSlide 
            key={index} 
            className="flex items-center justify-center relative"
          >
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={CaroselImage}
                alt={`carousel-image-${index}`}
                className={`transition-all duration-300 ease-in-out transform object-cover ${getImageClassName(index)}`}
                width={300}
                height={300}
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
          max-width: 100%;
          max-height: 300px;
          object-fit: cover;
        }
        
        .splide__slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        /* Custom arrow styles */
        .splide__arrow {
          background-color: #040444 ; /* Semi-transparent white background */
          border: none;
          border-radius: 50%; /* Circular shape */
          width: 40px; /* Width of the arrow */
          height: 40px; /* Height of the arrow */
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          
        }

        

        .splide__arrow svg {
          width: 20px; /* Adjust arrow icon size */
          height: 20px;
          fill: #FFFFFF; /* Arrow color */
        }
      `}</style>
    </div>
  );
};

export default Projects;