"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { pciture2 } from "../ReusableComponenets/Icons"
import slider2 from "@/public/Listitem.png"
import slider3 from "@/public/Listitem(1).png"
import slider4 from "@/public/Listitem(2).png"

// Import Splide
import Splide from "@splidejs/splide"
import "@splidejs/splide/css"
import SectionLabel from "../ui/secionLabel"
import ArrowBtn from "../ui/arrowBtn"

const Service = () => {
  const splideRef = useRef<Splide | null>(null)

  const contents = [
    {
      number: "200+",
      text: "Beautifully designed spaces crafted for function and aesthetics.",
    },
    {
      number: "300+",
      text: "Trusted by businesses and homeowners for exceptional interiors.",
    },
    {
      number: "100%",
      text: "Beautifully designed spaces crafted for function and aesthetics.",
    },
    {
      number: "900k",
      text: "Trusted by businesses and homeowners for exceptional interiors.",
    },
  ]

  const images = [
    {
      image: pciture2,
      title: "HOSPITALITY",
      description: "Crafted for comfort, luxury, and unforgettable guest experiences.",
    },
    {
      image: slider2,
      title: "RESIDENTIAL",
      description: "Crafted for comfort, luxury, and unforgettable guest experiences.",
    },
    {
      image: slider3,
      title: "RETAIL",
      description: "Engaging environments that enhance brand identity and customer flow.",
    },
    {
      image: slider4,
      title: "CORPORATE",
      description: "Smart Workspaces designed for productivity and collaboration.",
    },
  ]

  useEffect(() => {
    // Initialize Splide
    if (document.querySelector(".splide")) {
      splideRef.current = new Splide(".splide", {
        type: "fade", // Using fade for smoother transitions
        rewind: true,
        perPage: 1,
        gap: "0px",
        arrows: false,
        pagination: true, // Enable pagination dots
        autoplay: true,
        interval: 5000, // 5 seconds per slide
        speed: 1000, // Transition speed in ms
        easing: "cubic-bezier(0.25, 1, 0.5, 1)", // Smooth easing
        pauseOnHover: false,
        breakpoints: {
          768: {
            perPage: 1,
          },
          480: {
            perPage: 1,
          },
        },
      }).mount()
    }

    // Cleanup function
    return () => {
      if (splideRef.current) {
        splideRef.current.destroy()
      }
    }
  }, [])

  return (
    <div className="w-full my-32 mb-80">
      {/* Section Label */}
      <div className="flex justify-center">
        <SectionLabel text="OUR SERVICE" backgroundColor="#F8F8F8" textColor="#141414" />
      </div>

      {/* Section Title */}
      <div className="text-[#040444] md:mt-5 md:px-15 justify-center text-center items-center md:text-[75.75px] text-[16px] leading-[70.4px]">
      Trunkey Contracting Solutions
      </div>

      {/* Splide Slider with Custom Styling */}
      <div className="splide md:mt-10 relative">
        <style jsx global>{`
          /* Custom styles for Splide */
          .splide__pagination {
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 30;
          }
          
          .splide__pagination__page {
            background: rgba(255, 255, 255, 0.5);
            width: 10px;
            height: 10px;
            margin: 0 5px;
            border-radius: 50%;
            transition: all 0.3s ease;
          }
          
          .splide__pagination__page.is-active {
            background: white;
            transform: scale(1.3);
          }
          
          /* Smooth transitions */
          .splide__slide {
            transition: opacity 0.8s ease;
          }
          
          /* Custom image styling with specific border radius */
          .custom-image-radius {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 0; /* No radius on bottom right */
          }
          
          @media (min-width: 768px) {
            .custom-image-radius {
              border-top-left-radius: 40px;
              border-top-right-radius: 40px;
              border-bottom-left-radius: 40px;
              border-bottom-right-radius: 0; /* No radius on bottom right */
            }
            
            .splide__pagination__page {
              width: 12px;
              height: 12px;
            }
          }
        `}</style>

        <div className="splide__track">
          <ul className="splide__list">
            {images.map((item, index) => (
              <li className="splide__slide" key={index}>
                <div className="relative">
                  {/* Image with custom border radius - no radius on bottom right */}
                  <div className="relative w-full md:h-[70vh] h-[50vh]">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      fill
                      className="object-cover custom-image-radius"
                      priority={index === 0}
                    />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute bottom-16 md:bottom-24 left-6 md:left-16 p-4 max-w-[80%] md:max-w-[60%]">
                    <h3 className="text-[24px] md:text-[80px] lg:text-[122.88px] leading-[25px] md:leading-[90px] lg:leading-[128px] text-white font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-[10px] md:text-[20px] lg:text-[33.44px] text-white leading-[15px] md:leading-[24px] lg:leading-[32px] mt-2 md:mt-4">
                      {item.description}
                    </p>

                    {/* Learn More Button */}
                    <div className="mt-4 md:mt-8">
                      <ArrowBtn text="View More" backgroundColor="white" textColor="#040444" />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Service
