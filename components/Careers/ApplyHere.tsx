"use client"

import type React from "react"
import DynamicForm, { type FormField } from "@/components/ReusableComponenets/DynamicForm"
import { ArrowRight } from "lucide-react"

type ApplyHereProps = {
  title?: string
  description?: string
  className?: string
}

const ApplyHere: React.FC<ApplyHereProps> = ({
  title = "Apply here!",
  description = "Lorem ipsum dolor sit amet consectetur. Enim mollis sagittis lectus vel vestibulum aliquet id ipsum eu. Facilisi pharetra proin id viverra nisl arcu bibendum aenean.",
  className = "",
}) => {
  const careerFields: FormField[] = [
    {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "Your full name",
      required: true,
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "your.email@example.com",
      required: true,
    },
    {
      id: "department",
      label: "Department",
      type: "select",
      placeholder: "Select department",
      required: true,
      options: [
        { value: "design", label: "Design" },
        { value: "development", label: "Development" },
        { value: "marketing", label: "Marketing" },
        { value: "sales", label: "Sales" },
        { value: "operations", label: "Operations" },
      ],
    },
    {
      id: "experience",
      label: "Experience",
      type: "select",
      placeholder: "Select experience level",
      required: true,
      options: [
        { value: "entry", label: "Entry Level (0-2 years)" },
        { value: "mid", label: "Mid Level (2-5 years)" },
        { value: "senior", label: "Senior Level (5+ years)" },
      ],
    },
    {
      id: "location",
      label: "Location",
      type: "select",
      placeholder: "Select location",
      required: true,
      options: [
        { value: "remote", label: "Remote" },
        { value: "hybrid", label: "Hybrid" },
        { value: "onsite", label: "On-site" },
      ],
    },
    {
      id: "message",
      label: "Message",
      type: "textarea",
      placeholder: "Tell us about yourself...",
    },
    {
      id: "resume",
      label: "Upload",
      type: "file",
      required: true,
    },
  ]

  const handleSubmit = (data: Record<string, any>) => {
    console.log("Form submitted:", data)
    // Handle form submission logic here
  }

  return (
    <div className={`relative min-h-[130vh] md:mt-72 ${className}`}>
      {/* Background container */}
      <div className="bg-[#F5F5FE] w-full absolute top-0 left-0 md:h-[85%] h-[90%] z-0" />

      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8  lg:gap-12">
          {/* Left Content - Header Section */}
          <div className="flex flex-col items-center  md:-mt-30 md:self-center self-start justify-center lg:sticky lg:top-10 ">
            <h1 className="text-[#040444] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[118px] font-semibold mb-4 leading-tight md:leading-[1.1]">
              {title}
            </h1>
            {description && <p className="text-black text-center md:text-left text-base md:text-lg max-w-xl">{description}</p>}
          </div>

          {/* Right Content - Form Section */}
          <div className="lg:mt-[-180px]">
            <div className="bg-white rounded-[23px] shadow-xl">
              <DynamicForm
                fields={careerFields}
                onSubmit={handleSubmit}
                submitLabel="Submit"
                rightArrowIcon={<ArrowRight className="w-4 h-4 text-white" />}
                showStepIndicator={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyHere
