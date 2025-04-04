import React from "react";
import twitter from "@/public/twitter.svg";
import facebook from "@/public/fbook.svg";
import instagram from "@/public/Instagram.svg";
import linkedin from "@/public/git.svg";
import Image from "next/image";
import { RightArrow } from "../ReusableComponenets/Icons";

const Appoinment = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[150px]">
  <h1 className="text-[#131313] md:text-[80px] text-[24px] leading-[36px] text-center">
    Book an <span className="text-[#040444]">appointment</span>
  </h1>
  <div className="flex md:flex-row flex-col justify-between items-stretch w-full space-y-6 md:space-y-0 md:space-x-6 max-w-[1000px] mt-10 px-5">
    {/* Form Container */}
    <div className="md:w-[70%] w-full flex flex-col items-start justify-between space-y-5 bg-white rounded-lg p-5 mt-10">
      <div className="w-full space-y-5">
        <div className="flex flex-col md:flex-row items-start justify-between w-full space-y-5 md:space-y-0 md:space-x-5">
          <input
            id="firstName"
            type="text"
            className="w-full md:h-[64px] h-[40px] rounded-[8px] px-5 bg-[#F7F8FA] md:text-[20px] text-[10px] text-[#969090] font-normal leading-6 focus:outline-none"
            placeholder="First name*"
            required
          />
          <input
            id="mobileNumber"
            type="text"
            className="w-full md:h-[64px] h-[40px] rounded-[8px] px-5 bg-[#F7F8FA] md:text-[20px] text-[10px] text-[#969090] font-normal leading-6 focus:outline-none"
            placeholder="Mobile Number*"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between w-full space-y-5 md:space-y-0 md:space-x-5">
          <input
            id="type"
            type="text"
            className="md:flex-grow w-full rounded-[8px] px-5 md:h-[64px] h-[40px] bg-[#F7F8FA] md:text-[20px] text-[10px] text-[#969090] font-normal leading-6 focus:outline-none"
            placeholder="Type*"
            required
          />
          <input
            id="preferredService"
            type="text"
            className="md:flex-grow w-full rounded-[8px] px-5 md:h-[64px] h-[40px] bg-[#F7F8FA] md:text-[20px] text-[10px] text-[#969090] font-normal leading-6 focus:outline-none"
            placeholder="Preferred Service*"
            required
          />
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between w-full space-y-5 md:space-y-0 md:space-x-5">
          <input
            id="preferredDate"
            type="text"
            className="md:flex-grow w-full rounded-[8px] px-5 md:h-[64px] h-[40px] bg-[#F7F8FA] md:text-[20px] text-[10px] text-[#969090] font-normal leading-6 focus:outline-none"
            placeholder="Preferred Date*"
            required
          />
          <input
            id="preferredTime"
            type="text"
            className="md:flex-grow w-full rounded-[8px] px-5 md:h-[64px] h-[40px] bg-[#F7F8FA] md:text-[20px] text-[10px] text-[#969090] font-normal leading-6 focus:outline-none"
            placeholder="Preferred Time*"
            required
          />
        </div>

        <div className="flex flex-col w-full">
          <textarea
            id="message"
            rows={10}
            className="flex-grow rounded-[8px] px-5 md:pt-4 pt-2 bg-[#F7F8FA] md:h-[120px] h-[40px] md:text-[20px] text-[10px] text-[#969090] font-normal leading-6 focus:outline-none"
            placeholder="Message*"
            required
          />
        </div>
      </div>

      <div className="flex-row flex w-full justify-center items-center pt-4">
        <button className="md:w-[152px] w-[145px] md:h-[56px] h-[32px] text-[10px] md:text-[16px] bg-[#040444] rounded-full whitespace-nowrap cursor-pointer hover:scale-104">
          Sumbit
        </button>
        <a className="">
          <div className="md:w-[56px] w-[32px] md:h-[56px] h-[32px] bg-[#040444] rounded-full flex justify-center items-center cursor-pointer hover:scale-104">
            <Image
              src={RightArrow}
              alt="right arrow"
              className="md:w-[19.3px] md:h-[19.3px] w-[10px] h-[10px] text-[#040444]"
            />
          </div>
        </a>
      </div>
    </div>

        <div className="md:w-[35%] w-full p-5 mt-10  space-y-10 bg-[#040444] rounded-[20px] hidden sm:block md:block ">
          <div className="mt-5 flex flex-col items-start justify-center space-y-1">
            <div className="text-white font-normal text-[32px]">Address</div>
            <p className="text-white text-[16px] font-normal leading-6">
              Innovative Interiors Pvt Ltd, Plot No 7, VV <br />
              Koil St, Chinmaya Nagar Stage 1, <br />
              Chennai-600092.
            </p>
          </div>

          <div className="flex flex-col items-start justify-center space-y-1">
            <div className="text-white font-normal text-[32px]">Contact</div>
            <p className="text-white text-[16px] font-normal leading-6">
              Phone: 044-24795133
            </p>
            <p className="text-white text-[16px] font-normal leading-6">
              Email: info@innovativeinteriors.in
            </p>
          </div>

          <div className="mt-3 flex flex-col items-start justify-center space-y-1">
            <div className="text-white font-normal text-[32px]">
              Factory Address
            </div>
            <p className="text-white text-[16px] font-normal leading-[22.4px]">
              S.No:50, Peruvoyal Village, Nainakuppam, <br />
              Gummidipoondi (TK), <br />
              Tiruvallur (Dt) - 601 206.
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

      <div className="h-auto w-full justify-center items-center bg-[#040444] px-5 sm:hidden md:hidden mt-7">
        <div className="flex flex-row items-center justify-between space-y-1">
          <div className="mt-5 flex flex-col items-start justify-center space-y-1">
            <div className="text-white font-bold text-[14px]">Address</div>
            <p className="text-white text-[10px] font-normal leading-[17px]">
              Innovative Interiors Pvt Ltd, Plot No 7, VV <br />
              Koil St, Chinmaya Nagar Stage 1, <br />
              Chennai-600092.
            </p>
          </div>

          <div className="flex flex-col items-start justify-center space-y-1">
            <div className="text-white font-normal text-[14px]">Contact</div>
            <p className="text-white text-[10px] font-normal leading-[17px]">
              Phone: 044-24795133
            </p>
            <p className="text-white text-[10px] font-normal leading-[17px]">
              Email: info@innovativeinteriors.in
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start space-y-1">
          <div className="mt-3 flex flex-col items-start justify-center space-y-1">
            <div className="text-white font-normal text-[14px]">
              Factory Address
            </div>
            <p className="text-white text-[10px] font-normal leading-[22.4px]">
              S.No:50, Peruvoyal Village, Nainakuppam, <br />
              Gummidipoondi (TK), <br />
              Tiruvallur (Dt) - 601 206.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-5 space-y-6">
          <h1 className="text-white text-[14px] font-normal leading-[100%] mt-6">
            Stay Connected
          </h1>
          <div className="flex flex-row gap-7 mt-2 mb-4 cursor-pointer">
            <Image src={twitter} alt="twitter" />
            <Image src={facebook} alt="facebook" />
            <Image src={instagram} alt="instagram" />
            <Image src={linkedin} alt="linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
