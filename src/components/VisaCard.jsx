import React from "react";
import lablePice from "../assetss/VisaCard/lablePice.svg";
import logo from "../assetss/BillingSection/logo.png";

const VisaCard = () => {
  return (
    <div className="w-full sm:w-11/12 md:w-10/12 lg:w-[35rem] xl:w-[40rem] p-4">
      <div className="bg-white text-center flex flex-col items-center justify-center gap-10 rounded-lg p-6 sm:p-8 shadow-lg relative">
        <img src={logo} alt="MyAirDeal" className="w-[15rem]" />
        <marquee direction="left" className="text-[1.7rem] font-bold ">
          Begin Your Spiritual Journey - Quick, Trusted Umrah Visa Services
        </marquee>
      </div>
    </div>
  );
};

export default VisaCard;
