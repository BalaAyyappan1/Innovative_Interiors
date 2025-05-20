"use client"
import { useState, useEffect, useRef } from "react"
import GalleryImage1 from "@/public/Mask group(2).png"
import GalleryImage2 from "@/public/Mask group(3).png"
import GalleryImage3 from "@/public/Mask group(4).png"
import GalleryImage4 from "@/public/Mask group(5).png"
import GalleryImage5 from "@/public/Mask group(6).png"
import GalleryImage6 from "@/public/Mask group(7).png"
import Image, { type StaticImageData } from "next/image"
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"

import SelectImage1 from "@/public/Listitem(3).png"
import SelectImage2 from "@/public/Listitem(4).png"
import SelectImage3 from "@/public/Listitem(5).png"
import { ArrowRight } from "lucide-react"

const Gallery = () => {
  const [activeTitle, setActiveTitle] = useState<
    "Residental" | "Hospitality" | "Retail" | "Healthcare" | "Corporate Fit-outs" | "Industrial"
  >("Residental")
  const [isSliderOpen, setIsSliderOpen] = useState(false)
  const [selectedImages, setSelectedImages] = useState<StaticImageData[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const tabsRef = useRef<HTMLDivElement>(null)

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  // Scroll active tab into view on mobile
  useEffect(() => {
    if (isMobile && tabsRef.current) {
      const activeElement = tabsRef.current.querySelector(".active-tab")
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        })
      }
    }
  }, [activeTitle, isMobile])

  const title = [
    { title: "Residental" },
    { title: "Hospitality" },
    { title: "Retail" },
    { title: "Healthcare" },
    { title: "Industrial" },
    { title: "Corporate Fit-outs" },
  ]

  const imagesMap = {
    Residental: [
      { image: GalleryImage1, title: "GRT Hotels & Resorts" },
      { image: GalleryImage2, title: "ITC Vellore" },
      { image: GalleryImage3, title: "Radisson Blu" },
      { image: GalleryImage1, title: "GRT Hotels & Resorts" },
      { image: GalleryImage2, title: "ITC Vellore" },
      { image: GalleryImage3, title: "Radisson Blu" },
      { image: GalleryImage1, title: "GRT Hotels & Resorts" },
      { image: GalleryImage2, title: "ITC Vellore" },
      { image: GalleryImage3, title: "Radisson Blu" },
    ],
    Hospitality: [
      { image: GalleryImage4, title: "GRT Hotels & Resorts" },
      { image: GalleryImage5, title: "ITC Vellore" },
      { image: GalleryImage6, title: "Radisson Blu" },
      { image: GalleryImage4, title: "GRT Hotels & Resorts" },
      { image: GalleryImage5, title: "ITC Vellore" },
      { image: GalleryImage6, title: "Radisson Blu" },
      { image: GalleryImage4, title: "GRT Hotels & Resorts" },
      { image: GalleryImage5, title: "ITC Vellore" },
      { image: GalleryImage6, title: "Radisson Blu" },
    ],
    Retail: [
      { image: GalleryImage1, title: "GRT Hotels & Resorts" },
      { image: GalleryImage4, title: "ITC Vellore" },
      { image: GalleryImage5, title: "Radisson Blu" },
      { image: GalleryImage1, title: "GRT Hotels & Resorts" },
      { image: GalleryImage4, title: "ITC Vellore" },
      { image: GalleryImage5, title: "Radisson Blu" },
      { image: GalleryImage1, title: "GRT Hotels & Resorts" },
      { image: GalleryImage4, title: "ITC Vellore" },
      { image: GalleryImage5, title: "Radisson Blu" },
    ],
    Healthcare: [
      { image: GalleryImage2, title: "Cyte Care" },
      { image: GalleryImage3, title: "MIH" },
      { image: GalleryImage6, title: "Sakra World" },
    ],
    "Corporate Fit-outs": [
      { image: GalleryImage1, title: "GRT Hotels & Resorts" },
      { image: GalleryImage2, title: "ITC Vellore" },
      { image: GalleryImage6, title: "Radisson Blu" },
      { image: GalleryImage1, title: "GRT Hotels & Resorts" },
      { image: GalleryImage2, title: "ITC Vellore" },
      { image: GalleryImage6, title: "Radisson Blu" },
      { image: GalleryImage1, title: "GRT Hotels & Resorts" },
      { image: GalleryImage2, title: "ITC Vellore" },
      { image: GalleryImage6, title: "Radisson Blu" },
    ],
    Industrial: [
      { image: GalleryImage3, title: "GRT Hotels & Resorts" },
      { image: GalleryImage4, title: "ITC Vellore" },
      { image: GalleryImage5, title: "Radisson Blu" },
      { image: GalleryImage3, title: "GRT Hotels & Resorts" },
      { image: GalleryImage4, title: "ITC Vellore" },
      { image: GalleryImage5, title: "Radisson Blu" },
      { image: GalleryImage3, title: "GRT Hotels & Resorts" },
      { image: GalleryImage4, title: "ITC Vellore" },
      { image: GalleryImage5, title: "Radisson Blu" },
    ],
  }

  const imagesToShow = imagesMap[activeTitle]

  const handleImageClick = () => {
    setSelectedImages([SelectImage1, SelectImage2, SelectImage3])
    setIsSliderOpen(true)
  }

  return (
    <div className="">
      {/* Desktop tabs - visible only on md and above */}
      <div className="hidden md:flex md:flex-row flex-wrap justify-between md:gap-10 gap-5 w-full md:px-25 px-5 mb-[100px]">
        {title.map((item, index) => (
          <div key={index} className="flex flex-row flex-grow md:gap-2">
            <h2
              className={`md:text-[24px] text-[14px] font-normal cursor-pointer ${
                activeTitle === item.title
                  ? "text-[#040444] font-semibold underline md:underline-offset-20 underline-offset-10"
                  : "text-[#393535]"
              }`}
              onClick={() =>
                setActiveTitle(
                  item.title as
                    | "Residental"
                    | "Hospitality"
                    | "Retail"
                    | "Healthcare"
                    | "Corporate Fit-outs"
                    | "Industrial",
                )
              }
            >
              {item.title}
            </h2>
          </div>
        ))}
      </div>

      {/* Mobile scrollable tabs - visible only on small screens */}
      <div
        ref={tabsRef}
        className="md:hidden flex overflow-x-auto scrollbar-hide whitespace-nowrap px-5 mb-8 pb-2 gap-6"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {title.map((item, index) => (
          <div key={index} className="inline-block">
            <h2
              className={`text-[14px] font-normal cursor-pointer whitespace-nowrap ${
                activeTitle === item.title
                  ? "text-[#040444] font-semibold underline underline-offset-10 active-tab"
                  : "text-[#393535]"
              }`}
              onClick={() =>
                setActiveTitle(
                  item.title as
                    | "Residental"
                    | "Hospitality"
                    | "Retail"
                    | "Healthcare"
                    | "Corporate Fit-outs"
                    | "Industrial",
                )
              }
            >
              {item.title}
            </h2>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-12 md:mt-4 mt-1">
        {imagesToShow.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={`Gallery Image ${index + 1}`}
              layout="responsive"
              width={300}
              height={300}
              onClick={handleImageClick}
              className="cursor-pointer"
            />
            <div className="flex flex-row gap-2 items-end">
              <p className="mt-2 font-semibold text-[#040444] cursor-pointer md:text-[20px] text-center">{item.title}</p>
              <div className="md:w-7 md:h-7 w-5 h-7 text-black -rotate-45 flex flex-row items-center justify-center rounded-full">
                <ArrowRight className="text-[10px] text-[#040444]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Slider Modal */}
      {isSliderOpen && (
        <>
          {/* Blurred Background - Transparent */}
          <div className="fixed inset-0 backdrop-blur-sm z-40"></div>

          {/* Slider */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="rounded-xl overflow-hidden relative w-full max-w-4xl">
              <Splide
                options={{
                  type: "fade",
                  height: "60vh", // Default height for desktop
                  pagination: true,
                  arrows: false,
                  autoplay: true,
                }}
                className="sm:h-[60vh] h-[40vh]" // Responsive height
              >
                {selectedImages.map((image, index) => (
                  <SplideSlide key={index}>
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Selected Image ${index + 1}`}
                        width={800}
                        height={600}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
              <button
                className="absolute top-3 right-1 text-gray-800 rounded-full w-12 h-12 flex items-center justify-center text-2xl z-10 hover:bg-white transition-all"
                onClick={() => setIsSliderOpen(false)}
              >
                &times;
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Gallery
