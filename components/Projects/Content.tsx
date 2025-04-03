import React from "react";

const Content = () => {
  return (
    <div className="md:mb-40 mb-10 ">
      <div className="flex xl:flex-row flex-col justify-between space-y-5">
        <div className="flex flex-col items-center w-full md:items-start md:w-auto">
        <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px] whitespace-nowrap">
          <ul className="list-disc pl-5 text-center whitespace-nowrap">
            <li>OUR PROJECCTS</li>
          </ul>
        </div>
        <div>
        <p className="font-semibold text-[16px] xl:text-[55.91px] xl:leading-[69px] md:text-start text-center text-[#040444] w-[884px]">
          A Glimpse of Our Expertise
          </p>
        </div>
        </div>
       
      

      <div className="flex flex-col items-center w-full md:items-start md:w-auto space-y-5">
    
        <div>   
          <p className="font-normal text-[16px]  xl:text-[25px] xl:leading-[42px] md:text-start text-center text-[#393535]">
          Architecture is more than just structures; it’s a reflection of creativity, purpose, and human connection. We believe in designing spaces that inspire, function seamlessly, and stand the test of time.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Content;
