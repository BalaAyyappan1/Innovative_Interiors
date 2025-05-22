"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Rectangle, Rectangle2 } from "../ReusableComponenets/Icons"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import SectionLabel from "../ui/secionLabel"

const Process: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  const content = [
    {
      no: "01",
      title: "Project Planning",
      description:
        "Outlining the project scope, scheduling milestones, and organizing resources to ensure timely execution.",
      image: Rectangle2,
    },
    {
      no: "02",
      title: "Mobilization & Work Allocation",
      description:
        "Deploying workforce, equipment, and materials while assigning clear responsibilities to team members.",
      image: Rectangle2,
    },
    {
      no: "03",
      title: "Mockups & Sample for Approval",
      description:
        "Creating visual samples or prototypes for client review, feedback, and final approval before execution.",
      image: Rectangle2,
    },
    {
      no: "04",
      title: "Production simultaneously site works",
      description:
        "Initiating off-site production processes in parallel with on-site preparations to optimize timelines.",
      image: Rectangle2,
    },
    {
      no: "05",
      title: "Strict Quality checks",
      description:
        "Implementing multi-stage quality inspections to ensure all outputs meet the highest standards and client expectations.",
      image: Rectangle2,
    },
    {
      no: "06",
      title: "Dry cleaning & hand over",
      description:
        "Performing final touch-ups, cleaning, and presenting the completed project in a ready-to-use condition.",
      image: Rectangle2,
    },
  ]

  // Handle navigation
  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setCurrentSlide(index)

    // Reset autoplay timer
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current)
      startAutoplay()
    }
  }

  const nextSlide = () => {
    if (isAnimating) return
    const next = (currentSlide + 1) % content.length
    goToSlide(next)
  }

  const prevSlide = () => {
    if (isAnimating) return
    const prev = (currentSlide - 1 + content.length) % content.length
    goToSlide(prev)
  }

  // Autoplay functionality
  const startAutoplay = () => {
    autoplayRef.current = setTimeout(() => {
      nextSlide()
    }, 5000)
  }

  // Initialize autoplay and handle cleanup
  useEffect(() => {
    startAutoplay()
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current)
    }
  }, [currentSlide])

  // Reset animation state after transition completes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [currentSlide])

  // Animation variants
  const slideVariants = {
    hidden: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    }),
  }

  const numberVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  }

  const titleVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.4,
      },
    },
  }

  const descriptionVariants = {
    initial: { y: 20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.6,
      },
    },
  }

  return (
    <div className="flex flex-col items-start  mb-5 sm:mb-5 md:mb-20 mt-30">
      <div className="flex flex-col space-y-4 items-start w-full ">
        <SectionLabel text="OUR PROCESS"/>
        <p className="font-medium text-[20px] md:text-[60px] text-[#040444] md:leading-[69.12px] text-center whitespace-nowrap">
        A Step-by-Step Approach to Excellence
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 w-full mx-auto md:mt-10 mt-5 mb-20 h-screen">
        {/* Content Slider */}
        <div className="w-full md:h-[90%] rounded-[15.79px] bg-[#F1F1FE] relative overflow-hidden">
          

          <AnimatePresence initial={false} custom={1}>
            <motion.div
              key={currentSlide}
              custom={1}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0 p-8 flex flex-col items-center justify-center h-full"
            >
              <div className="flex flex-col space-y-9 items-center justify-start max-w-md mx-auto">
                <motion.div variants={numberVariants} initial="initial" animate="animate" className="relative">
                  <span className="md:text-4xl text-2xl font-bold text-[#040444] rounded-full bg-white w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shadow-lg">
                    {content[currentSlide].no}
                  </span>
                  {/* <div className="absolute -right-2 -top-2 w-6 h-6 bg-[#040444] rounded-full"></div> */}
                </motion.div>

                <div className="space-y-5 text-center">
                  <motion.h3
                    variants={titleVariants}
                    initial="initial"
                    animate="animate"
                    className="text-2xl md:text-3xl font-semibold text-[#040444]"
                  >
                    {content[currentSlide].title}
                  </motion.h3>

                  <motion.p
                    variants={descriptionVariants}
                    initial="initial"
                    animate="animate"
                    className="text-gray-600 leading-relaxed text-sm md:text-lg"
                  >
                    {content[currentSlide].description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Progress indicators */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-3">
            {content.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-[#040444] w-10" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress bar */}
         
        </div>

        {/* Image */}
        <div className="w-full h-[90%] sm:h-auto relative overflow-hidden rounded-[15.79px]">
          <AnimatePresence initial={false}>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={content[currentSlide].image || "/placeholder.svg"}
                alt={content[currentSlide].title}
                className="w-full h-[90%] object-cover rounded-[15.79px]"
                priority
              />
            </motion.div>
          </AnimatePresence>

          
        </div>
      </div>
    </div>
  )
}

export default Process
