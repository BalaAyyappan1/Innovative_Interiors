"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ArrowBtnProps {
  text?: string
  href?: string
  backgroundColor?: string
  textColor?: string
  arrowColor?: string
  onClick?: () => void
  className?: string
}

const ArrowBtn = ({
  text = "Learn more",
  href,
  backgroundColor = "#1A1A1A",
  textColor = "white",
  arrowColor,
  onClick,
  className = "",
}: ArrowBtnProps) => {
  const buttonContent = (
    <>
      <div
        className={`flex items-center justify-center px-6 py-3 rounded-full 
          ${backgroundColor === "#ffffff" && textColor==="#000000" ? "border" : ""}`}
        style={{ backgroundColor, color: textColor }}
      >
        <span className="text-base font-medium">{text}</span>
      </div>
      <div
        className={`flex items-center justify-center p-3 rounded-full ${backgroundColor === "#ffffff" && textColor==="#000000" ? "border" : ""}`}
        style={{ backgroundColor, color: arrowColor || textColor }}
      >
        <ArrowRight size={20} />
      </div>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={`inline-flex items-center ${className}`}>
        {buttonContent}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={`inline-flex items-center ${className}`}>
      {buttonContent}
    </button>
  )
}

export default ArrowBtn
