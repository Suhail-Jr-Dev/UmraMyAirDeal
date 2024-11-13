import React, { useContext, useEffect, useRef, useState } from "react";
import "../Styles/UmraTravelPkg.css";
import UmraPackages from "../UmraPackages/UmraPackages";

import clothes from "../assetss/UmraTravelPkg/clothes.png";
import food from "../assetss/UmraTravelPkg/food.png";
import water from "../assetss/UmraTravelPkg/water.svg";
import days from "../assetss/UmraTravelPkg/days.png";

import bag from "../assetss/UmraTravelPkg/bag.svg";
import ziyarat from "../assetss/UmraTravelPkg/ziyarat.svg";
import shuttle from "../assetss/UmraTravelPkg/shuttle.svg";
import tourguide from "../assetss/UmraTravelPkg/tour.svg";
import hotels from "../assetss/UmraTravelPkg/hotels.svg";
import visa from "../assetss/UmraTravelPkg/visa.svg";

import { FaHotel } from "react-icons/fa";

import { IoStarSharp } from "react-icons/io5";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import cardImg from "../assetss/UmraTravelPkg/thirdHeroSection.svg";
import lablePice from "../assetss/UmraTravelPkg/lablePice.svg";
import { EnquiryPopContext } from "../Contexts/EnquiryPopContext";
import ImageGrid from "./ImageGrid";
import { ImageGridContext } from "../Contexts/ImageGridContext";

function UmraTravelPkg() {
  let [isFormOpen, setFormOpen] = useContext(EnquiryPopContext);
  {
    /**Used Context Api */
  }

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  // Track the index of the currently selected package
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(null);
  console.log(selectedPackageIndex);

  // Handle toggle change for a specific index
  const handleToggle = (index) => {
    // If the same package is clicked again, unselect it
    setSelectedPackageIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  // Track the index of the currently selected package
  const [selectedPackageIndexForDays, setSelectedPackageIndexForDays] =
    useState(null);

  console.log(selectedPackageIndexForDays);
  // Handle toggle change for a specific index
  const handleToggleForDays = (index) => {
    // If the same package is clicked again, unselect it
    setSelectedPackageIndexForDays((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  let [packagesData, setpackagesData] = useState(null);
  // let packagesData;
  // Compute packagesData based on selectedPackageIndex
  useEffect(() => {
    setSelectedPackageIndexForDays(null);
    setpackagesData(
      UmraPackages.map((pkg, index) => {
        // selectedPackageIndexForDays = null;
        return selectedPackageIndex === index ? pkg.yes : pkg.no;
      })
    );
  }, [selectedPackageIndex]);

  useEffect(() => {
    setSelectedPackageIndex(null);
    setpackagesData(
      UmraPackages.map((pkg, index) => {
        // selectedPackageIndex = null;
        return selectedPackageIndexForDays === index ? pkg.yes : pkg.no;
      })
    );
  }, [selectedPackageIndexForDays]);

  const {
    imgSection,
    setimgSection,
    sendImagtoGrid,
    setSendImagtoGrid,
    imgBtnClicked,
    setImagBtnClicked,
    isOpen,
    setIsOpen,
    GridClickHandelar,
    getStarRatings,
    setStarRatings,
  } = useContext(ImageGridContext);

  return (
    <div
      id="UmrahPkgId"
      className={`bg-red-500 thirdHeroSection relative flex flex-col py-[4rem] items-center justify-center my-5 lg:mt-10 px-4 sm:px-10`}
    >
      <div className="absolute bg-white w-full h-[34.9rem] bottom-0"></div>

      {/* {isOpen && (
        <div
          className="bg-gray-600 bg-opacity-20 backdrop-blur-xl absolute inset-0 z-20"
          onClick={(e) => {
            e.stopPropagation();
            setImagBtnClicked((prev) => !prev);
            setIsOpen((prevVal) => !prevVal);
          }}
        ></div>
      )} */}

      {/* <div
        className={`${
          isOpen ? "absolute" : "hidden"
        } z-20 top-[75%] md:top-[70%] lg:top-[70%] xl:top-[70%] 2xl:top-[40%]`}
        onClick={(e) => e.stopPropagation()}
      >
        <ImageGrid
          GridClickHandelar={GridClickHandelar}
          imgSection={imgSection}
          sendImagtoGrid={sendImagtoGrid}
        />
      </div> */}

      {/* Carousel Controls */}
      <button
        onClick={scrollLeft}
        className="hidden 1100:flex bg-gray-600 absolute top-1/2 left-0 md:left-10 transform -translate-y-1/2 bg-opacity-90 text-black p-2 items-center justify-center rounded-full hover:bg-hoverColor transition"
      >
        <MdKeyboardArrowLeft className="h-10 w-10 fill-white" />
      </button>

      <button
        onClick={scrollRight}
        className="hidden 1100:flex bg-gray-600 absolute top-1/2 right-0 md:right-10 transform -translate-y-1/2 bg-opacity-90 text-black p-2 items-center justify-center rounded-full hover:bg-hoverColor transition"
      >
        <MdKeyboardArrowRight className="h-10 w-10 fill-white" />
      </button>

      <div className="bg-booking z-10 w-full py-10 lg:max-w-[75%] rounded-[3rem] flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-6 px-6">
          <h1 className="text-lg sm:text-2xl font-semibold text-gray-800">
            Discover Our Unique Umrah Travel Packages
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-full md:max-w-2xl mt-3">
            Embark on a unique journey with our specially crafted Hajj and Umrah
            packages. Experience comfort and spiritual enrichment every step of
            the way.
          </p>
        </div>

        <div className="w-[5rem] mb-6 gap-2 flex items-center justify-center">
          {/* Small Screen Controls */}
          <button
            onClick={scrollLeft}
            className="bg-gray-600 1099:hidden bg-opacity-90 text-white w-10 h-10 flex items-center justify-center rounded-l-lg hover:bg-hoverColor transition"
          >
            <MdKeyboardArrowLeft alt="Go to Left" />
          </button>
          <button
            onClick={scrollRight}
            className="bg-gray-600 1099:hidden bg-opacity-90 text-white w-10 h-10 flex items-center justify-center rounded-r-lg hover:bg-hoverColor transition"
          >
            <MdKeyboardArrowRight alt="Go to Right" />
          </button>
        </div>

        {/* Card Section */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto no-scrollbar py-3 gap-12 px-4 md:px-10 scroll-smooth w-full relative"
        >
          {packagesData?.map((data, index) => (
            <div
              key={index}
              className="relative w-[95%] sm:w-[25rem] mx-auto flex-shrink-0 flex flex-col items-center justify-center rounded-lg "
            >
              {/* Image */}
              <img
                src={data?.img}
                alt=""
                className="h-[15rem] w-full rounded-t-full imgShadow object-cover"
              />

              {/* Price Tag */}
              <div className="absolute top-[5.5rem] sm:top-[7rem] right-[-2rem] bg-hoverColor w-[7rem] sm:w-[8rem] text-sm text-white py-1 px-[0.5rem] sm:px-2 rounded-bl-lg flex flex-col items-center">
                <span className="font-semibold">Starts From</span>
                <span className="font-semibold">₹ {data.price}/-</span>
                <img
                  src={lablePice}
                  alt=""
                  className="absolute top-12 left-[4.5rem] sm:left-[6rem] w-6"
                />
              </div>

              {/* Content Section */}
              <div className="bg-umraPkg text-center w-full px-6 py-6 gap-3 flex flex-col contShadow">
                {data?.daysAvailable && (
                  <div className="flex items-center justify-center">
                    {/* Toggle Switch */}
                    <div className="flex items-center flex-wrap justify-center">
                      <p className="mx-2">Days :</p>
                      <label className="inline-flex overflow-hidden items-center relative cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={selectedPackageIndexForDays === index}
                          onChange={() => handleToggleForDays(index)}
                        />
                        <div
                          className={`relative w-16 h-8 rounded-full transition-all ${
                            selectedPackageIndexForDays !== index
                              ? " bg-red-400"
                              : "bg-green-400 "
                          } `}
                        >
                          {/* Yes position */}
                          <div
                            className={`absolute  top-0.5  left-1 flex items-center justify-center w-7 h-7 rounded-full transition-all 
                          ${
                            selectedPackageIndexForDays !== index
                              ? "translate-x-16 bg-green-700"
                              : "bg-green-700 "
                          }`}
                          >
                            <span className="text-white font-medium">20</span>
                          </div>
                          {/* No position */}
                          <div
                            className={`absolute top-0.5 left-1 flex items-center justify-center w-7 h-7 rounded-full transition-all 
                          ${
                            selectedPackageIndexForDays !== index
                              ? "bg-red-600 translate-x-[1.7rem]"
                              : "translate-x-[4rem] bg-red-600"
                          }`}
                          >
                            <span className="text-white font-medium">15</span>
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="flex items-center flex-wrap justify-center">
                      <p className="mx-2">Flights :</p>
                      <label className="inline-flex overflow-hidden items-center relative cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          checked={selectedPackageIndex === index}
                          onChange={() => handleToggle(index)}
                        />
                        <div
                          className={`relative w-16 h-8 rounded-full transition-all ${
                            selectedPackageIndex !== index
                              ? " bg-red-400"
                              : "bg-green-400 "
                          } `}
                        >
                          {/* Yes position */}
                          <div
                            className={`absolute  top-0.5  left-1 flex items-center justify-center w-7 h-7 rounded-full transition-all 
                          ${
                            selectedPackageIndex !== index
                              ? "translate-x-16 bg-green-700"
                              : "bg-green-700 "
                          }`}
                          >
                            <span className="text-white font-medium">Yes</span>
                          </div>
                          {/* No position */}
                          <div
                            className={`absolute top-0.5 left-1 flex items-center justify-center w-7 h-7 rounded-full transition-all 
                          ${
                            selectedPackageIndex !== index
                              ? "bg-red-600 translate-x-[1.7rem]"
                              : "translate-x-[4rem] bg-red-600"
                          }`}
                          >
                            <span className="text-white font-medium">No</span>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                )}

                {/* Package Info */}
                <div className=" h-[6.5] pb-2">
                  <h1 className="font-bold text-lg">{data.title}</h1>
                  <p className="text-sm">{data.description}</p>
                </div>

                {/* Star Ratings */}
                {/* <div className="flex gap-1 items-center justify-center text-brandCol">
                  {[...Array(5)].map((_, starIndex) => (
                    <IoStarSharp key={starIndex} />
                  ))}
                </div> */}

                {/* Package Features */}
                <div className="grid grid-cols-1  gap-4 justify-center">
                  <div className="flex gap-2 items-center border-gray-600 border-b-2 px-2 py-2">
                    <img src={visa} alt="Visa" className="w-6" />
                    <span>{data.visa}</span>
                  </div>

                  <div className="flex gap-2 items-center border-gray-600 border-b-2 px-2 py-2">
                    <img src={days} alt="Clothes" className="w-6" />
                    <span className="text-left">{data.days}</span>
                  </div>

                  <div className="flex gap-2 items-center border-gray-600 border-b-2 px-2 py-2">
                    <img src={water} alt="Water" className="w-4" />
                    <span>{data.water}</span>
                  </div>

                  <div className="flex gap-2 items-center border-gray-600 border-b-2 px-2 py-2">
                    <img src={food} alt="Food" className="w-6" />
                    <span>{data.food}</span>
                  </div>

                  <div className="flex gap-2 items-center border-gray-600 border-b-2 px-2 py-2">
                    <img src={clothes} alt="Clothes" className="w-6" />
                    <span className="text-left">{data.clothes}</span>
                  </div>

                  <div className="flex gap-2 items-center border-gray-600 border-b-2 px-2 py-2">
                    <img src={tourguide} alt="Tour Guide" className="w-6" />
                    <span>{data?.tourguide}</span>
                  </div>

                  <div className="flex gap-2 items-center border-gray-600 border-b-2 px-2 py-2">
                    <img src={shuttle} alt="Tour Guide" className="w-6" />
                    <span>{data?.shuttle}</span>
                  </div>

                  <div className="flex gap-2 items-center border-gray-600 border-b-2 px-2 py-2">
                    <img src={bag} alt="Bag" className="w-6" />
                    <span>{data?.bag}</span>
                  </div>

                  <div className="flex gap-2 items-center border-gray-600 border-b-2 px-2 py-2">
                    <img src={ziyarat} alt="Ziyarat" className="w-6" />
                    <span>{data?.ziyarat}</span>
                  </div>

                  <div className="flex gap-2 items-center flex-col border-gray-600 border-b-2 px-2 py-2">
                    <FaHotel className="w-6" />
                    <div className="flex flex-col text-left">
                      <h1
                        className="hover:text-brandCol hover:underline cursor-pointer"
                        onClick={() => {
                          setimgSection(0);
                          GridClickHandelar();
                          setSendImagtoGrid(data?.hotelImg);
                          setImagBtnClicked((prevVal) => !prevVal);
                          setStarRatings(data?.starRating[0]);
                        }}
                      >
                        • {data?.hotels[0]}
                      </h1>
                      <h1
                        className="hover:text-brandCol hover:underline cursor-pointer"
                        onClick={() => {
                          setimgSection(1);
                          GridClickHandelar();
                          setSendImagtoGrid(data?.hotelImg);
                          setImagBtnClicked((prevVal) => !prevVal);
                          setStarRatings(data?.starRating[1]);
                        }}
                      >
                        • {data?.hotels[1]}
                      </h1>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <button
                  className="bg-brandCol hover:scale-105 transition-all duration-300  py-3 my-3 text-white rounded-lg hover:bg-hoverColorLight"
                  onClick={() => {
                    setFormOpen(true);
                  }}
                >
                  Enquire Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UmraTravelPkg;
