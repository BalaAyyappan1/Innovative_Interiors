"use client";
import React, { useState } from "react";
import { RightArrow } from "../ReusableComponenets/Icons";
import Image from "next/image";

const ApplyHere = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setResumeFile(files[0]);
    } else {
      setResumeFile(null);
    }
  };

  return (
    <div className="bg-[#F5F5FE] relative md:h-[953px] h-[500px] md:mb-0 mb-[300px] flex items-center py-10 md:mt-[250px] mt-[100px]">
      <div className="max-w-7xl  mx-10  w-full">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content - Header Section */}
          <div className="lg:w-1/2 flex flex-col justify-center md:items-start items-center md:pt-20 pt-20 lg:pt-0">
            <h1 className="text-[#040444] md:text-[118px] text-[24px] font-semibold mb-4 md:leading-[135px] whitespace-nowrap">
              Apply here!
            </h1>
            <p className="text-black text-base md:text-[16px] text-[10px] md:text-left text-center ">
              Lorem ipsum dolor sit amet consectetur. Enim mollis sagittis lectus
              vel vestibulum aliquet id ipsum eu. Facilisi pharetra proin id
              viverra nisl arcu bibendum aenean.
            </p>
          </div>

          {/* Right Content - Form Section */}
          <div className="lg:w-1/2 w-full relative  lg:-top-40 top-10 md:left-2 bg-white md:rounded-[23px] rounded-[8px] p-6 md:p-8 shadow-lg">
            <form className="md:space-y-4 space-y-2">
              {/* Name Field */}
              <div className="space-y-1">
                <label className="block text-black md:text-[16px] text-[10px]  font-medium">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full md:h-[48px] h-[20px] px-3 bg-[#F1F1F6] text-[#B5B3B3] md:text-[14px] text-[8px] rounded-[4px]  "
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1">
                <label className="block text-black md:text-[16px] text-[10px] text font-medium">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full md:h-[48px] h-[20px] px-3 bg-[#F1F1F6] text-[#B5B3B3] md:text-[14px] text-[8px] rounded-[4px]  "
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Department Field */}
              <div className="space-y-1">
                <label className="block text-black md:text-[16px] text-[10px] text font-medium">
                  Department
                </label>
                <select 
                  className="w-full md:h-[48px] h-[20px] px-3 bg-[#F1F1F6] text-[#B5B3B3] md:text-[14px] text-[8px] rounded-[4px]  "
                >
                  <option value="">Select department</option>
                  <option value="design">Design</option>
                  <option value="development">Development</option>
                  <option value="marketing">Marketing</option>
                </select>
              </div>

              {/* Experience Field */}
              <div className="space-y-1">
                <label className="block text-black md:text-[16px] text-[10px] text font-medium">
                  Experience
                </label>
                <select 
                  className="w-full md:h-[48px] h-[20px] px-3 bg-[#F1F1F6] text-[#B5B3B3] md:text-[14px] text-[8px] rounded-[4px]  "
                >
                  <option value="">Select experience level</option>
                  {/* <option value="entry">Entry Level</option>
                  <option value="mid">Mid Level (2-5 years)</option>
                  <option value="senior">Senior Level (5+ years)</option> */}
                </select>
              </div>

              {/* Location Field */}
              <div className="space-y-1">
                <label className="block text-black md:text-[16px] text-[10px] text font-medium">
                  Location
                </label>
                <select 
                  className="w-full md:h-[48px] h-[20px] px-3 bg-[#F1F1F6] text-[#B5B3B3] md:text-[14px] text-[8px] rounded-[4px]  "
                >
                  <option value="">Select location</option>
                  {/* <option value="remote">Remote</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="onsite">On-site</option> */}
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-black md:text-[16px] text-[10px] text font-medium">
                  Message
                </label>
                <textarea
                  className="w-full p-2 bg-[#F1F1F6] text-[#B5B3B3]  md:text-[14px] text-[8px] rounded-[4px] md:h-22 h-12  "
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>
              {/* Resume Upload Field */}
              <div className="space-y-1">
                <label className="block text-black md:text-[16px] text-[10px] text font-medium">
                  Upload 
                </label>
                <div className="w-full">

                <div 
    className="rounded-[4px] p-4 text-center cursor-pointer hover:bg-[#F1F1F6] transition-colors relative md:h-[156px] h-[100px]"
    style={{
      border: '1px solid transparent',
      backgroundImage: `
        linear-gradient(white, white),
        repeating-linear-gradient(
          45deg,
          #B5B3B3 0,
          #B5B3B3 6px,
          transparent 6px,
          transparent 12px
        )
      `,
      backgroundOrigin: 'padding-box, border-box',
      backgroundClip: 'padding-box, border-box'
    }}
    onClick={() => {
      const uploadInput = document.getElementById('resume-upload');
      if (uploadInput) {
        uploadInput.click();
      }
    }}
  >
    <input
      id="resume-upload"
      type="file"
      className="hidden"
      onChange={handleFileChange}
      accept=".pdf,.doc,.docx"
    />
      <div className="flex flex-col items-center justify-center md:mt-6 gap-1 text-center">
      {resumeFile ? (
        <span className="text-[#040444] text-sm md:text-base">{resumeFile.name}</span>
      ) : (
        <>
          <span className="text-[#B5B3B3] text-xs md:text-sm">Drag and drop your resume here</span>
          <span className="text-[#B5B3B3] text-xs md:text-sm">or</span>
          <span className="text-[#040444] text-sm md:text-base font-medium">click to upload</span>
        </>
      )}
    </div>
  </div>
</div>
                {resumeFile && (
                  <p className="text-xs text-gray-600 mt-1">
                    Selected: {resumeFile.name}
                  </p>
                )}
              </div>

              {/* Message Field */}
             

              {/* Submit Button */}
              <div className="flex items-center justify-center mt-4">
              <button className="bg-[#040444] md:text-[14px] text-[8px] w-[120px] h-[40px] text-white rounded-full whitespace-nowrap cursor-pointer hover:scale-104 transition-transform">
                Sumbit
              </button>
              <a>
                <div className="w-[40px] h-[40px] bg-[#040444] rounded-full flex justify-center items-center hover:scale-104 transition-transform">
                  <Image src={RightArrow || "/placeholder.svg"} alt="right arrow" className="w-4 h-4" />
                </div>
              </a>
            </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyHere;