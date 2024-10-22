import React from 'react';
import kaaba from '../assetss/FeaturesSection/kaaba.svg';
import bus from '../assetss/FeaturesSection/bus.svg';
import food from '../assetss/FeaturesSection/food.svg';
import map from '../assetss/FeaturesSection/map.svg';
import washing from '../assetss/FeaturesSection/washing.svg';
import water from '../assetss/FeaturesSection/water.svg';

const FeaturesSection = () => {
    return (
        <div className="py-12">
            {/* Title Section */}
            <div className="text-center mb-10 px-4">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">Features</h2>
                <p className="text-gray-700 text-lg sm:text-xl">
                    Your Journey Begins with Exceptional Features and Unmatched Value.
                </p>
            </div>

            {/* Main Content Section */}
            <div className="container mx-auto w-[80%] px-4 flex flex-col items-center justify-center md:flex-row md:gap-16">
                {/* Left Image Section */}
                <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <img
                        src={kaaba}
                        alt="Kaaba"
                        className="w-[30rem] rounded-lg h-auto" // Keep the width fixed at 30rem
                    />
                </div>

                {/* Right Text and Icons Section */}
                <div className="w-full md:w-1/2 text-center  md:text-left flex flex-col items-center md:items-start">
                    {/* Feature List */}
                    <div className="flex flex-col gap-[4rem]">
                        {/* Feature Item */}
                        <div className="flex items-center flex-col md:flex-row space-x-4">
                            <img src={bus} className="w-10 h-10" alt="Bus Icon" />
                            <span className="text-base sm:text-lg">Transport services pickup and drop.</span>
                        </div>

                        <div className="flex items-center flex-col md:flex-row space-x-4">
                            <img src={food} className="w-10 h-10" alt="Food Icon" />
                            <span className="text-base sm:text-lg">Bangalore and Hyderabad buffet served three times daily.</span>
                        </div>

                        <div className="flex items-center flex-col md:flex-row space-x-4">
                            <img src={washing} className="w-10 h-10" alt="Washing Icon" />
                            <span className="text-base sm:text-lg">Laundry once in Mecca and once in Madina.</span>
                        </div>

                        <div className="flex items-center flex-col md:flex-row space-x-4">
                            <img src={map} className="w-10 h-10" alt="Map Icon" />
                            <span className="text-base sm:text-lg">Tour Guide.</span>
                        </div>

                        <div className="flex items-center flex-col md:flex-row space-x-4">
                            <img src={water} className="w-8 h-8" alt="Water Icon" />
                            <span className="text-base sm:text-lg">5 ltr of Zam Zam water as a complimentary.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
