"use client"
import { useState, useEffect, useRef } from "react"
import GalleryImage1 from "@/public/Mask group(2).png"
import GalleryImage2 from "@/public/Mask group(3).png"
import GalleryImage3 from "@/public/Mask group(4).png"
import GalleryImage4 from "@/public/Mask group(5).png"
import GalleryImage5 from "@/public/Mask group(6).png"
import GalleryImage6 from "@/public/Mask group(7).png"


import { CyteCare, Mih, Sakra,  Annai, Bhagini, Confluence, Fitc, Aloft,  Gokulam, itcvellore, Kakinada, radission, ramada, residency, rkpondy, tamara, zibe, cabin, conference, coWork, csscorp, edutech, extreme, featherlite, foodcourt, get, lycatel, micronics, newgen, sricity, tcs, tesa, elevenhouse, Adithya, Ashok, Jaffer, Kg, Krishna, murugus, nithya, pavillion, sundarHouse, usha, cakes, grt, kama, ombc, rns, spa, kate } from "../ReusableComponenets/Icons"
import Image, { type StaticImageData } from "next/image"
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"

import { ArrowRight } from "lucide-react"


const Gallery = () => {
  const [activeTitle, setActiveTitle] = useState<
    "Residental" | "Hotels" | "Retail" | "Healthcare" | "Workspaces" | "Industrial"
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
    { title: "Hotels" },
    { title: "Retail" },
    { title: "Healthcare" },
    { title: "Industrial" },
    { title: "Workspaces" },
  ]

  const imagesMap = {
    Residental: [
      { 
        image: elevenhouse, 
        title: "11 House",
        sliderImages: [elevenhouse, elevenhouse, elevenhouse] // Add your specific images here
      },
      { 
        image: Ashok, 
        title: "Ashok Sattanathan Residence",
        sliderImages: [Ashok, Ashok, Ashok] // Add your specific images here
      },
      { 
        image: murugus, 
        title: "Dr. Murugusundaram",
        sliderImages: [murugus, murugus, murugus] // Add your specific images here
      },
      { 
        image: Kg, 
        title: "Kg Dining Table",
        sliderImages: [Kg, Kg, Kg] // Add your specific images here
      },
      { 
        image: Krishna, 
        title: "Krishna Residence",
        sliderImages: [Krishna, Krishna, Krishna] // Add your specific images here
      },
      { 
        image: sundarHouse, 
        title: "Mr. P R Sundar Penthouse",
        sliderImages: [sundarHouse, sundarHouse, sundarHouse] // Add your specific images here
      },
      { 
        image: Adithya, 
        title: "Mr.Adithya Residence",
        sliderImages: [Adithya, Adithya, Adithya] // Add your specific images here
      },
      { 
        image: Jaffer, 
        title: "Mr.Jaffer,-Grange club house",
        sliderImages: [Jaffer, Jaffer, Jaffer] // Add your specific images here
      },
      { 
        image: nithya, 
        title: "Nithya Sundarrajan",
        sliderImages: [nithya, nithya, nithya] // Add your specific images here
      },
      { 
        image: pavillion, 
        title: "Pavillion house",
        sliderImages: [pavillion, pavillion, pavillion] // Add your specific images here
      },
      { 
        image: usha, 
        title: "Usha Srinivasan",
        sliderImages: [usha, usha, usha] // Add your specific images here
      },
    ],
    Hotels: [
      { 
        image: Aloft, 
        title: "Aloft  Coimbatore",
        sliderImages: [Aloft, Aloft, Aloft] // Add your specific images here
      },
      { 
        image: Annai, 
        title: "Annai Resorts",
        sliderImages: [Annai, Annai, Annai] // Add your specific images here
      },
      { 
        image: Bhagini, 
        title: "Bhagini",
        sliderImages: [Bhagini, Bhagini, Bhagini] // Add your specific images here
      },
      { 
        image: Confluence, 
        title: "Confluence",
        sliderImages: [Confluence, Confluence, Confluence] // Add your specific images here
      },
      { 
        image: Gokulam, 
        title: "Gokulam park",
        sliderImages: [Gokulam, Gokulam, Gokulam] // Add your specific images here
      },
      { 
        image: Kakinada, 
        title: "GRT Grand - Kakinada",
        sliderImages: [Kakinada, Kakinada, Kakinada] // Add your specific images here
      },
      { 
        image: Fitc, 
        title: "FITC Tirupureatherlite",
        sliderImages: [Fitc, Fitc, Fitc] // Add your specific images here
      },
      { 
        image: itcvellore, 
        title: "ITC Vellore",
        sliderImages: [itcvellore, itcvellore, itcvellore] // Add your specific images here
      },
      { 
        image: radission, 
        title: "Radisson Blu",
        sliderImages: [radission, radission, radission] // Add your specific images here
      },
      { 
        image: ramada, 
        title: "Ramada",
        sliderImages: [ramada, ramada, ramada] // Add your specific images here
      },
      { 
        image: residency, 
        title: "Residency Tower - Chennai",
        sliderImages: [residency, residency, residency] // Add your specific images here
      },
      { 
        image: rkpondy, 
        title: "RKR Pondy",
        sliderImages: [rkpondy, rkpondy, rkpondy] // Add your specific images here
      },
      { 
        image: tamara, 
        title: "Tamara cbe",
        sliderImages: [tamara, tamara, tamara] // Add your specific images here
      },
      { 
        image: zibe, 
        title: "ZIBE",
        sliderImages: [zibe, zibe, zibe] // Add your specific images here
      },
    ],
    Retail: [
      { 
        image: cakes, 
        title: "Cake Waves",
        sliderImages: [cakes, cakes, cakes] // Add your specific images here
      },
      { 
        image: grt, 
        title: "GRT - Rajahmundry Jewllery",
        sliderImages: [grt, grt, grt] // Add your specific images here
      },
      { 
        image: kate, 
        title: "kate & Oscar",
        sliderImages: [kate, kate, kate] // Add your specific images here
      },
      { 
        image: rns, 
        title: "RNS",
        sliderImages: [rns, rns, rns] // Add your specific images here
      },
      { 
        image: spa, 
        title: "SPA",
        sliderImages: [spa, spa, spa] // Add your specific images here
      },
      { 
        image: spa, 
        title: "Sony",
        sliderImages: [spa, spa, spa] // Add your specific images here
      },
      { 
        image: kama, 
        title: "Kamadhenu",
        sliderImages: [kama, kama, kama] // Add your specific images here
      },
      { 
        image: ombc, 
        title: "OMBC",
        sliderImages: [ombc, ombc, ombc] // Add your specific images here
      },
    ],
    Healthcare: [
      { 
        image: CyteCare, 
        title: "Cyte Care",
        sliderImages: [CyteCare, CyteCare, CyteCare] // Add your specific images here
      },
      { 
        image: Mih, 
        title: "MIH",
        sliderImages: [Mih, Mih, Mih] // Add your specific images here
      },
      { 
        image: Sakra, 
        title: "Sakra World Hospitals",
        sliderImages: [Sakra, Sakra, Sakra] // Add your specific images here
      },
    ],
    Workspaces: [
      { 
        image: cabin, 
        title: "Cabins",
        sliderImages: [cabin, cabin, cabin] // Add your specific images here
      },
      { 
        image: coWork, 
        title: "Co-Working",
        sliderImages: [coWork, coWork, coWork] // Add your specific images here
      },
      { 
        image: conference, 
        title: "Conference Table",
        sliderImages: [conference, conference, conference] // Add your specific images here
      },
      { 
        image: csscorp, 
        title: "Css Corp",
        sliderImages: [csscorp, csscorp, csscorp] // Add your specific images here
      },
      { 
        image: edutech, 
        title: "Edutech",
        sliderImages: [edutech, edutech, edutech] // Add your specific images here
      },
      { 
        image: extreme, 
        title: "Extreme",
        sliderImages: [extreme, extreme, extreme] // Add your specific images here
      },
      { 
        image: featherlite, 
        title: "Featherlite",
        sliderImages: [featherlite, featherlite, featherlite] // Add your specific images here
      },
      { 
        image: get, 
        title: "GET",
        sliderImages: [get, get, get] // Add your specific images here
      },
      { 
        image: lycatel, 
        title: "Lycatel",
        sliderImages: [lycatel, lycatel, lycatel] // Add your specific images here
      },
      { 
        image: micronics, 
        title: "Micronics",
        sliderImages: [micronics, micronics, micronics] // Add your specific images here
      },
      { 
        image: newgen, 
        title: "Newgen",
        sliderImages: [newgen, newgen, newgen] // Add your specific images here
      },
      { 
        image: sricity, 
        title: "Sricity",
        sliderImages: [sricity, sricity, sricity] // Add your specific images here
      },
      { 
        image: foodcourt, 
        title: "Sricity Food Court",
        sliderImages: [foodcourt, foodcourt, foodcourt] // Add your specific images here
      },
      { 
        image: tcs, 
        title: "TCS",
        sliderImages: [tcs, tcs, tcs] // Add your specific images here
      },
      { 
        image: tesa, 
        title: "Tesa",
        sliderImages: [tesa, tesa, tesa] // Add your specific images here
      },
    ],
    Industrial: [
      { 
        image: GalleryImage3, 
        title: "GRT Hotels & Resorts",
        sliderImages: [GalleryImage3, GalleryImage3, GalleryImage3] // Add your specific images here
      },
      { 
        image: GalleryImage4, 
        title: "ITC Vellore",
        sliderImages: [GalleryImage4, GalleryImage4, GalleryImage4] // Add your specific images here
      },
      { 
        image: GalleryImage5, 
        title: "Radisson Blu",
        sliderImages: [GalleryImage5, GalleryImage5, GalleryImage5] // Add your specific images here
      },
      { 
        image: GalleryImage3, 
        title: "GRT Hotels & Resorts",
        sliderImages: [GalleryImage3, GalleryImage3, GalleryImage3] // Add your specific images here
      },
      { 
        image: GalleryImage4, 
        title: "ITC Vellore",
        sliderImages: [GalleryImage4, GalleryImage4, GalleryImage4] // Add your specific images here
      },
      { 
        image: GalleryImage5, 
        title: "Radisson Blu",
        sliderImages: [GalleryImage5, GalleryImage5, GalleryImage5] // Add your specific images here
      },
      { 
        image: GalleryImage3, 
        title: "GRT Hotels & Resorts",
        sliderImages: [GalleryImage3, GalleryImage3, GalleryImage3] // Add your specific images here
      },
      { 
        image: GalleryImage4, 
        title: "ITC Vellore",
        sliderImages: [GalleryImage4, GalleryImage4, GalleryImage4] // Add your specific images here
      },
      { 
        image: GalleryImage5, 
        title: "Radisson Blu",
        sliderImages: [GalleryImage5, GalleryImage5, GalleryImage5] // Add your specific images here
      },
    ],
  }

  const imagesToShow = imagesMap[activeTitle]

  const handleImageClick = (sliderImages: StaticImageData[]) => {
    setSelectedImages(sliderImages)
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
                    | "Hotels"
                    | "Retail"
                    | "Healthcare"
                    | "Workspaces"
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
                    | "Hotels"
                    | "Retail"
                    | "Healthcare"
                    | "Workspaces"
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
              width={1000}
              height={1000}
              onClick={() => handleImageClick(item.sliderImages as StaticImageData[])}
              className="cursor-pointer object-cover"
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
          <div 
            className="fixed inset-0 backdrop-blur-sm bg-black/30 z-40"
            onClick={() => setIsSliderOpen(false)}
          ></div>

          {/* Slider */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-3xl max-h-[60vh]  rounded-xl overflow-hidden shadow-2xl">
              {/* Close Button - Positioned outside slider on larger screens, inside on mobile */}
              <button
                className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-sm text-white rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-xl sm:text-2xl hover:bg-white/20 transition-all duration-200 ease-in-out cursor-pointer border border-white/20"
                onClick={() => setIsSliderOpen(false)}
                aria-label="Close modal"
              >
                ×
              </button>

              <Splide
                options={{
                  type: "fade",
                  height: "60vh", // Reduced height for better proportions
                  pagination: true,
                  arrows: true,
                  autoplay: false, // Disabled autoplay for better UX
                  classes: {
                    pagination: 'splide__pagination splide__pagination--custom',
                    page: 'splide__pagination__page splide__pagination__page--custom',
                  },
                }}
                className="h-full"
              >
                {selectedImages.map((image, index) => (
                  <SplideSlide key={index}>
                    <div className="w-full h-full flex items-center justify-center bg-black">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Selected Image ${index + 1}`}
                       fill
                        className="max-w-full max-h-full object-cover"
                        priority
                      />
                    </div>
                  </SplideSlide>
                ))}
              </Splide>

              {/* Custom Splide Arrow Styles */}
              <style jsx>{`
                .splide__arrow {
                  background: rgba(255, 255, 255, 0.1) !important;
                  border: 1px solid rgba(255, 255, 255, 0.2) !important;
                  backdrop-filter: blur(10px) !important;
                  width: 3rem !important;
                  height: 3rem !important;
                  opacity: 0.8 !important;
                  transition: all 0.2s ease !important;
                }
                
                .splide__arrow:hover {
                  background: rgba(255, 255, 255, 0.2) !important;
                  opacity: 1 !important;
                }
                
                .splide__arrow svg {
                  fill: white !important;
                  width: 1.2rem !important;
                  height: 1.2rem !important;
                }
                
                .splide__pagination--custom {
                  bottom: 1rem !important;
                  display: flex !important;
                  justify-content: center !important;
                  gap: 0.5rem !important;
                }
                
                .splide__pagination__page--custom {
                  background: rgba(255, 255, 255, 0.3) !important;
                  border: 1px solid rgba(255, 255, 255, 0.2) !important;
                  backdrop-filter: blur(10px) !important;
                  width: 0.75rem !important;
                  height: 0.75rem !important;
                  border-radius: 50% !important;
                  transition: all 0.2s ease !important;
                }
                
                .splide__pagination__page--custom.is-active {
                  background: white !important;
                  transform: scale(1.2) !important;
                }
                
                @media (max-width: 640px) {
                  .splide__arrow {
                    width: 2.5rem !important;
                    height: 2.5rem !important;
                  }
                  
                  .splide__arrow svg {
                    width: 1rem !important;
                    height: 1rem !important;
                  }
                  
                  .splide__pagination__page--custom {
                    width: 0.6rem !important;
                    height: 0.6rem !important;
                  }
                }
              `}</style>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Gallery