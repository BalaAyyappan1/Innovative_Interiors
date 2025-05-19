import React from "react";
import SectionLabel from "../ui/secionLabel";

const Content = () => {
  return (
    <div className="mb-[40px] mt-[80px] md:mt-[150px] md:mb-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-[0.5fr_1fr]    xl:justify-between justify-center space-y-5">
        <div className="flex flex-col items-center md:w-auto  md:items-start">
          <SectionLabel text="EMPLOYEE SAYS"/>
        </div>



        <div className="flex flex-col items-center w-full xl:items-start md:w-auto space-y-5">
          <div>
            <p className="font-medium text-[16px] xl:text-[55.91px] xl:leading-[69px] xl:text-start text-center text-[#040444]">
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
