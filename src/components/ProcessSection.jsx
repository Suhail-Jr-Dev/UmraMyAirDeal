import React from 'react';
import backgroundImage from '../assetss/ProcessSection/processkaba.svg';

import one from '../assetss/ProcessSection/one.png'
import two from '../assetss/ProcessSection/two.png'
import three from '../assetss/ProcessSection/three.png'

const ProcessSection = () => {
    return (
        <div className="relative py-16">
            {/* Section Title */}
            <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold">Quick and Easy Process</h2>
                <p className="text-gray-600 text-lg sm:text-xl">
                    Enjoy a quick and easy process that saves you time and effort at every step
                </p>
            </div>

            {/* Main Process Section */}
            <div
                className="relative mx-auto w-[90%] md:w-[80%] lg:w-[60%] bg-yellow-600 bg-opacity-60 rounded-lg p-8 shadow-lg"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay for darkening the background */}
                <div className="absolute inset-0 bg-hoverColor opacity-70 rounded-lg"></div>

                {/* Process Steps */}
                <div className="relative z-10 flex flex-col items-center justify-center gap-12 md:gap-16 lg:gap-24 text-white">
                    {/* Step 1 */}
                    <div className="flex flex-col md:flex-row items-center text-black space-x-0 md:space-x-6  p-4 rounded-md w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem]">
                        <img src={one} alt="one" className="w-[3rem] sm:w-[12rem]" />
                        <div className="text-center md:text-left">
                            <h3 className="text-[1.5rem] sm:text-[2rem] font-semibold">Choose Package</h3>
                            <p className="text-[1.1rem] sm:text-[1.3rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit elit tellus luctus.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col md:flex-row items-center text-black space-x-0 md:space-x-6  p-4 rounded-md w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem]">
                        <img src={two} alt="two" className="w-[3rem] sm:w-[12rem]" />
                        <div className="text-center md:text-left">
                            <h3 className="text-[1.5rem] sm:text-[2rem] font-semibold">Fill Your Documents</h3>
                            <p className="text-[1.1rem] sm:text-[1.3rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit elit tellus luctus.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col md:flex-row items-center text-black space-x-0 md:space-x-6  p-4 rounded-md w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem]">

                        <img src={three} alt="three" className="w-[3rem] sm:w-[12rem]" />

                        <div className="text-center md:text-left">
                            <h3 className="text-[1.5rem] sm:text-[2rem] font-semibold">Enjoy Your Travel</h3>
                            <p className="text-[1.1rem] sm:text-[1.3rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit elit tellus luctus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessSection;
