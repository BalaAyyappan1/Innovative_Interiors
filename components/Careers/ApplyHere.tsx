"use client"

import type React from "react"
import DynamicForm, { type FormField } from "@/components/ReusableComponenets/DynamicForm"
import { ArrowRight, Loader2 } from "lucide-react"
import { toast } from 'react-toastify'
import { useState } from "react"

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
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = async (data: Record<string, any>) => {
    setIsSubmitting(true)
    try {
      // Create FormData object for file upload
      const formData = new FormData();
      
      // Append all form fields
      formData.append('name', data.name || '');
      formData.append('email', data.email || '');
      formData.append('department', data.department || '');
      formData.append('experience', data.experience || '');
      formData.append('location', data.location || '');
      formData.append('message', data.message || '');
      
      // Handle file upload
      if (data.resume instanceof File) {
        formData.append('resume', data.resume);
      } else if (data.resume) {
        // If it's not a File object, create an error
        throw new Error('Invalid resume file format');
      } else {
        throw new Error('Resume file is required');
      }
  
      console.log('Submitting application with file...');
  
      const response = await fetch('/api/careers', {
        method: 'POST',
        body: formData, // Send FormData instead of JSON
        // Don't set Content-Type header - let the browser set it with boundary
      });
  
      const result = await response.json();
      
      if (response.ok) {
        console.log('Career application successful:', result);
        toast.success('Application submitted successfully! We will get back to you soon.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setTimeout(() => {
          window.location.href = '/' 
        }, 2000)
      } else {
        console.error('Application failed:', result);
        toast.error(result.message || 'Failed to submit application. Please try again.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error('Application error:', error);
      toast.error('Error submitting application. Please check your files and try again.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }finally {
      setIsSubmitting(false)
    }
  };
  return (
    <div className={`relative md:min-h-[130vh] h-[115vh]  mt-30 ${className}`}>
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
            {description && <p className="text-black text-center md:text-left text-sm md:text-lg max-w-xl">{description}</p>}
          </div>

          {/* Right Content - Form Section */}
          <div className="lg:mt-[-180px]">
            <div className="bg-white rounded-[23px] shadow-xl ">
            {isSubmitting && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-[23px] z-50 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-8 h-8 animate-spin text-[#040444]" />
                    <div className="text-center">
                      <p className="text-[#040444] font-semibold text-lg">Submitting Form</p>
                      <p className="text-gray-600 text-sm">Please wait while we process your application...</p>
                    </div>
                  </div>
                </div>
              )}
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