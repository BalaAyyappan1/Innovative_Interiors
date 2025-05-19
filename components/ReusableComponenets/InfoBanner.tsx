"use client"

import { useState, useEffect } from "react"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import ArrowBtn from "../ui/arrowBtn"

interface InfoBannerProps {
  /** Main heading text */
  heading?: string
  /** Subheading or description text */
  subheading?: string
  /** Background image URL */
  backgroundImage?: string | StaticImageData
  /** Button text (if empty, button won't show) */
  buttonText?: string
  /** Button link URL */
  buttonUrl?: string
  /** Optional custom button action */
  onButtonClick?: () => void
  /** Optional overlay opacity (0-1) */
  overlayOpacity?: number
  /** Optional custom classes */
  className?: string
  /** Optional animation setting */
  animated?: boolean
  /** Optional height setting */
  height?: string
  /** Optional text alignment */
  textAlign?: "left" | "center" | "right"
}

export default function InfoBanner({
  heading = "How we work",
  subheading = "Start your journey toward modern, functional, and inspiring interiors today.",
  backgroundImage = "",
  buttonText = "Book a call",
  buttonUrl = "#",
  onButtonClick,
  overlayOpacity = 0.3,
  className = "",
  animated = true,
  height = "600px",
  textAlign = "center",
}: InfoBannerProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  // Text alignment classes
  const getTextAlignClass = () => {
    switch (textAlign) {
      case "left":
        return "text-left items-start"
      case "right":
        return "text-right items-end"
      default:
        return "text-center items-center"
    }
  }

  return (
    <div className={`flex justify-center h-screen my-60 items-center w-full ${className}`} >
      {/* Container with fixed aspect ratio */}
      <div className="relative w-[95%] h-[70%]  mx-auto">
        {/* Background Image */}
        <div className="absolute inset-0 rounded-md overflow-hidden">
          <Image
            src={backgroundImage || "/placeholder.svg"}
            alt={heading}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 95vw"
            onLoad={() => setIsLoaded(true)}
          />
          <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }}></div>
        </div>

        {/* Content */}
        <motion.div
          className={`relative z-10 h-full flex flex-col justify-center ${getTextAlignClass()} px-6 md:px-12 gap-5`}
          initial={animated ? "hidden" : "visible"}
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {heading && (
            <motion.h2
              className="text-[15px] md:text-[55.91px] leading-[42px] font-semibold text-center text-white"
              variants={animated ? itemVariants : {}}
            >
              {heading}
            </motion.h2>
          )}

          {subheading && (
            <motion.p
              className="text-[10px] md:text-[25.92px] font-light leading-[42px] text-center text-[#F3F3F3] mt-1"
              variants={animated ? itemVariants : {}}
            >
              {subheading}
            </motion.p>
          )}

          {buttonText && (
            <motion.div variants={animated ? itemVariants : {}}>
              <ArrowBtn text="Book a call" backgroundColor="#ffffff" textColor="#000000"/>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
