import React, { useRef } from 'react';
import '../Styles/UmraTravelPkg.css';

import clothes from '../assetss/UmraTravelPkg/clothes.png';
import food from '../assetss/UmraTravelPkg/food.png';
import hottel from '../assetss/UmraTravelPkg/hottel.png';

import { IoStarSharp } from "react-icons/io5";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

import cardImg from '../assetss/UmraTravelPkg/thirdHeroSection.svg';
import lablePice from '../assetss/UmraTravelPkg/lablePice.svg';

function UmraTravelPkg() {
    const carouselRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className='thirdHeroSection relative flex flex-col py-[4rem] items-center justify-center my-10 px-4 sm:px-10'>
            <div className='absolute bg-hoverColor w-full h-[37rem] bottom-0'></div>

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

            <div className='bg-booking w-full py-10 max-w-[90%] lg:max-w-[64%] rounded-xl flex flex-col items-center'>
                {/* Title */}
                <div className='text-center mb-6 px-6'>
                    <h1 className='text-lg sm:text-2xl font-semibold text-gray-800'>Discover Our Unique Umrah Travel Packages</h1>
                    <p className='text-sm sm:text-base text-gray-600 max-w-full md:max-w-2xl mt-3'>
                        Embark on a unique journey with our specially crafted Hajj and Umrah packages. Experience comfort and spiritual enrichment every step of the way.
                    </p>
                </div>

                <div className='w-[5rem] mb-6 gap-2 flex items-center justify-center'>
                    {/* Small Screen Controls */}
                    <button
                        onClick={scrollLeft}
                        className=" bg-gray-600 1099:hidden bg-opacity-90 text-white w-10 h-10 flex items-center justify-center rounded-l-lg hover:bg-hoverColor transition"
                    >
                        <MdKeyboardArrowLeft alt="Go to Left" />
                    </button>
                    <button
                        onClick={scrollRight}
                        className=" bg-gray-600 1099:hidden bg-opacity-90 text-white w-10 h-10 flex items-center justify-center rounded-r-lg hover:bg-hoverColor transition"
                    >
                        <MdKeyboardArrowRight alt="Go to Right" />
                    </button>
                </div>

                {/* Card Section */}
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto no-scrollbar gap-10 px-4 md:px-10 scroll-smooth w-full relative"
                >
                    {/* Repeated Card */}
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className='relative w-[80%] sm:w-[25rem] mx-auto flex-shrink-0 flex flex-col items-center justify-center rounded-lg '>
                            {/* Image */}
                            <img src={cardImg} alt="" className='h-[15rem] w-full rounded-t-full imgShadow object-cover' />

                            {/* Price Tag */}
                            <div className="absolute top-[5.5rem] sm:top-[7rem] right-[-2rem] bg-hoverColor w-[7rem] sm:w-[8rem] text-sm text-white py-1 px-[0.5rem] sm:px-2 rounded-bl-lg flex flex-col items-center">
                                <span className="font-semibold">Starts From</span>
                                <span className="font-semibold">₹ 99,000/-</span>
                                <img src={lablePice} alt="" className="absolute top-12 left-[4.5rem] sm:left-[6rem] w-6" />
                            </div>

                            {/* Content Section */}
                            <div className='bg-hoverColor text-center w-full px-6 py-6 gap-3 flex flex-col contShadow'>
                                <div className='border-white border-b-2 border-dashed py-2'>
                                    <h1 className='font-bold text-lg'>Super Deluxe Land Package</h1>
                                    <p className='text-sm'>
                                        Mecca Tara Khalil 100 Meter Harm Madina Rama Madina
                                    </p>
                                </div>

                                {/* Star Ratings */}
                                <div className='flex gap-1 items-center justify-center text-brandCol'>
                                    {[...Array(5)].map((_, starIndex) => (
                                        <IoStarSharp key={starIndex} />
                                    ))}
                                </div>

                                {/* Package Features */}
                                <div className='flex flex-col justify-center gap-3'>
                                    <h1 className='flex gap-2 items-center border-white border-b-2 py-2'>
                                        <img src={hottel} alt="" className='w-6' />
                                        <span>Hayat Regency (15 Days)</span>
                                    </h1>
                                    <h1 className='flex gap-2 items-center border-white border-b-2 py-2'>
                                        <img src={food} alt="" className='w-6' />
                                        <span>Food With Buffet</span>
                                    </h1>
                                    <h1 className='flex gap-2 items-center border-white border-b-2 py-2'>
                                        <img src={clothes} alt="" className='w-6' />
                                        <span>Laundry</span>
                                    </h1>
                                </div>

                                {/* Button */}
                                <button className='bg-brandCol py-3 text-white rounded-lg hover:bg-hoverColorLight transition'>
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
