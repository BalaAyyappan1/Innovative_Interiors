import React from "react";

const ApplyHere = () => {
  return (
    <div>
      <div className="h-[953px] bg-[#F5F5FE] mt-80  items-center justify-center">
        <div className="w-[50%] justify-center items-center">
          <h1 className="text-[#040444] text-center whitespace-nowrap text-[128px] font-semibold">
            Apply here!
          </h1>
          <p className="text-[#040444] text-center text-[24px] font-normal">
            Lorem ipsum dolor sit amet consectetur. Enim mollis sagittis lectus
            vel vestibulum aliquet id ipsum eu. Facilisi pharetra proin id
            viverra nisl arcu bibendum aenean.
          </p>
        </div>



<div className="flex flex-row justify-center items-center h-[992px]">
  <label className="text-[#040444] text-[24px] font-normal">Name</label>
  <input type="text" className="w-[50%] h-[50px] border-2 border-[#040444] rounded-md" />

  <label className="text-[#040444] text-[24px] font-normal">Email</label>
  <input type="text" className="w-[50%] h-[50px] border-2 border-[#040444] rounded-md" />

  <label className="text-[#040444] text-[24px] font-normal">Department</label>
  <select className="w-[50%] h-[50px] border-2 border-[#040444] rounded-md"></select>

  <label className="text-[#040444] text-[24px] font-normal">Experience</label>
 <select className="w-[50%] h-[50px] border-2 border-[#040444] rounded-md"></select>

    <label className="text-[#040444] text-[24px] font-normal">Location</label>
    <select className="w-[50%] h-[50px] border-2 border-[#040444] rounded-md"></select>

    <label className="text-[#040444] text-[24px] font-normal">Message</label>
</div>


      </div>
    </div>
  );
};

export default ApplyHere;
