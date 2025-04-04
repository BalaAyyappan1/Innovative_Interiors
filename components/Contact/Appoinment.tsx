import React from "react";
import twitter from "@/public/twitter.svg";
import facebook from "@/public/fbook.svg";
import instagram from "@/public/Instagram.svg";
import linkedin from "@/public/git.svg";
import Image from "next/image";
import { RightArrow } from "../ReusableComponenets/Icons";
const Appoinment = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-50">
      <h1 className="text-[#131313] text-[80px] leading-[36px]">Book an <span className="text-[#040444] text-[80px] leading-[36px]">appointment</span></h1>
      <div className="flex md:flex-row flex-col justify-start items-start w-full space-x-6 max-w-[1000px]  mt-20 h-[667px]">
        <div className="md:w-[80%] w-full flex flex-col items-start justify-center" >
          <div className="flex flex-row items-start justify-start mb-[54px] space-x-5 w-full">

            <input id="firstName" type="text" className=" w-full h-[64px] rounded-[8px] px-5 bg-[#F7F8FA] text-[20px] text-[#969090] font-normal leading-6 focus:outline-none" placeholder="First name*" />
           
            <input id="mobileNumber" type="text" className=" w-full h-[64px] rounded-[8px] px-5 bg-[#F7F8FA] text-[20px] text-[#969090] font-normal leading-6 focus:outline-none" placeholder="Mobile Number*" />
          </div>

          <div className="flex flex-row items-start justify-center mb-[54px] space-x-8 w-full">
            
            <input id="type" type="text" className="flex-grow rounded-[8px] px-5 h-[64px] bg-[#F7F8FA] text-[20px] text-[#969090] font-normal leading-6 focus:outline-none" placeholder="Type*" />
           
            <input id="preferredService" type="text" className="flex-grow px-5 rounded-[8px] h-[64px] bg-[#F7F8FA] text-[20px] text-[#969090] font-normal leading-6 focus:outline-none" placeholder="Preferred Service*" />
          </div>

          <div className="flex flex-row items-start justify-center mb-[54px] space-x-8 w-full">
           
            <input id="preferredDate" type="text" className="flex-grow rounded-[8px] px-5 h-[64px] bg-[#F7F8FA] text-[20px] text-[#969090] font-normal leading-6 focus:outline-none" placeholder="Preferred Date*" />

            <input id="preferredTime" type="text" className="flex-grow rounded-[8px] px-5 h-[64px] bg-[#F7F8FA] text-[20px] text-[#969090] font-normal leading-6 focus:outline-none" placeholder="Preferred Time*" />
          </div>

          <div className="flex flex-row items-start justify-center mb-[54px] space-x-8 w-full">
           
            <textarea id="message" rows={10} className="flex-grow rounded-[8px] px-5 pt-4 bg-[#F7F8FA] h-[120px] text-[20px] text-[#969090] font-normal leading-6 focus:outline-none" placeholder="Message*" />
          </div>


 <div className="flex-row flex">
          <button className="w-[152px] h-[56px]  bg-[#040444] rounded-full whitespace-nowrap cursor-pointer hover:scale-104">
            Sumbit
          </button>
          <a className="">
            <div className="w-[56px] h-[56px] bg-[#040444] rounded-full flex justify-center items-center cursor-pointer hover:scale-104">
              <Image
                src={RightArrow}
                alt="right arrow"
                className="w-[19.3px] h-[19.3px] text-[#040444]"
              />
            </div>
          </a>
        </div>
        </div>

        <div className="md:w-[50%] w-full p-5 space-y-10  bg-[#040444] rounded-[20px]">

            <div className="mt-5 flex flex-col items-start justify-center space-y-1">
            <div className="text-white font-normal text-[32px]">Address</div>
          <p className="text-white text-[16px]  font-normal leading-6">
            Innovative Interiors Pvt Ltd, Plot No 7, VV <br />
            Koil St, Chinmaya Nagar Stage 1,
            <br />
            Chennai-600092.
          </p>
            </div>
          

          <div className="flex flex-col items-start justify-center space-y-1">
          <div className="text-white font-normal text-[32px]">Contact</div>
          <p className="text-white text-[16px] font-normal leading-6">
              Phone 044-24795133
            </p>
            <p className="text-white text-[16px] font-normal leading-6">
            Email info@innovativeinteriors.in
            </p>
           
          </div>

          <div className="mt-3 flex flex-col items-start justify-center space-y-1">
          <div className="text-white font-normal text-[32px]"> Factory Address</div>
          <p className="text-white text-[16px]  font-normal leading-[22.4px]">
            S.No:50, Peruvoyal Village, Nainakuppam, <br />
            Gummidipoondi (TK), <br />
            Tiruvallur (Dt) - 601 206.{" "}
          </p>
          </div>

          
          <div className="flex flex-col items-start justify-center mt-5 space-y-6">
            <h1 className="text-white text-[32px] font-normal leading-[100%] mt-6">
              Stay Connected
            </h1>

            <div className="flex flex-row gap-7 mt-2 mb-4">
              <Image src={twitter} alt="twitter" />
              <Image src={facebook} alt="facebook" />
              <Image src={instagram} alt="instagram" />
              <Image src={linkedin} alt="linkedin" />
            </div>
          </div>
        </div>
      </div>
      {/* <button className="ml-4 bg-[#040444] text-white rounded-full px-4 py-2">Submit</button> */}

    </div>
  );
};

export default Appoinment;
