import React from "react";

const Content = () => {
  return (
    <div className="mb-[40px] mt-[80px] md:mt-[150px] md:mb-[100px]">
      <div className="flex xl:flex-row flex-col space-x-220   xl:justify-between justify-center space-y-5">
        <div className="flex flex-col items-center xl:w-auto w-full xl:items-start">
        <div className="bg-[#F8F8F8] h-[30px] w-[140px] flex justify-center items-center font-medium text-[#141414] text-[11.81px] rounded-[8px] whitespace-nowrap">
          <ul className="list-disc pl-5 text-center whitespace-nowrap">
            <li>EMPLOYEE SAYS</li>
          </ul>
        </div>
        </div>
       
      

      <div className="flex flex-col items-center w-full xl:items-start md:w-auto space-y-5">
        <div>
          <p className="font-semibold text-[16px] xl:text-[55.91px] xl:leading-[69px] xl:text-start text-center text-[#040444]">
            Innovative Interiors: Where Design Meets Manufacturing Excellence
          </p>
        </div>
        <div>   
          <p className="font-normal text-[16px]  xl:text-[25px] xl:leading-[42px] xl:text-start text-center text-[#393535]">
            Manufacturing is a fine balance of engineering, craftsmanship, and
            advanced technology. Our facilities boast:
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Content;
