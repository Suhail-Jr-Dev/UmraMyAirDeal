import React from "react";
import lablePice from '../assetss/VisaCard/lablePice.svg';

const VisaCard = () => {
  return (
    <div className="w-full sm:w-11/12 md:w-10/12 lg:w-[35rem] xl:w-[40rem] p-4">
      <div className="bg-[#D1A953] rounded-lg p-6 sm:p-8 shadow-lg relative">
        {/* Stylish Header */}
        <div className="absolute top-2 -left-6 sm:-left-8 bg-[#1A1A1A] text-white py-2 px-4 sm:px-6 rounded-br-lg flex items-center">
          <span className="font-semibold text-xs sm:text-sm">Apply Visa Now</span>
          <div className="ml-2 w-0 h-0 border-t-[14px] sm:border-t-[20px] border-t-transparent border-l-[14px] sm:border-l-[20px] border-l-[#1A1A1A] border-b-[14px] sm:border-b-[20px] border-b-transparent"></div>
          <img src={lablePice} alt="" className="absolute top-[2.5rem] sm:top-[3.5rem] left-[-0rem] w-[1.5rem] sm:w-[2rem]" />
        </div>

        {/* Dropdown Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-10">
          {/* First dropdown: Country */}
          <div className="flex flex-col">
            <label className="text-center text-black font-semibold mb-2 text-sm sm:text-base">I am travelling to</label>
            <select className="border rounded-lg py-2 px-3 text-black w-full">
              <option>Select Country</option>
            </select>
          </div>

          {/* Second dropdown: Nationality */}
          <div className="flex flex-col">
            <label className="text-center text-black font-semibold mb-2 text-sm sm:text-base">Select Nationality</label>
            <select className="border rounded-lg py-2 px-3 text-black w-full">
              <option>Select Nationality</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-center mt-4 sm:mt-6">
          <button className="bg-black text-white py-2 px-4 sm:px-6 rounded-lg shadow-lg text-sm sm:text-base">
            Search
          </button>
        </div>
      </div>
    </div>

  );
};

export default VisaCard;
