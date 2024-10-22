import React from 'react';

import hajj from '../assetss/UmrahFeatures/hajj.svg'
import time from '../assetss/UmrahFeatures/time.svg'
import viza from '../assetss/UmrahFeatures/viza.svg'

import '../Styles/UmrahFeatures.css'

function UmrahFeatures() {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-12">
            {/* Heading Section */}
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center mb-12">
                What makes <span className="text-yellow-500">MyAirDeal Umrah</span> truly stand out from the rest?
            </h1>

            {/* Feature Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
                {/* Card 1: Guided Umrah Packages */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer cssShadow">
                    <div className=' h-[10rem] flex items-center  justify-center'>
                        <img
                            src={hajj}// Replace with actual image URL
                            alt="Guided Umrah"
                            className="mx-auto my-5  flex items-center justify-center w-[10rem]  h-[8rem]"
                        />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Guided Umrah Packages</h2>
                    <p className="text-gray-600">
                        Our expert-led tours provide comprehensive guidance throughout your Umrah, ensuring
                        you perform every ritual with ease and understanding. With experienced scholars and
                        guides by your side, you’ll gain deeper spiritual insights while we handle the logistics.
                    </p>
                </div>

                {/* Card 2: Seamless Visa Processing */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer cssShadow">
                    <div className=' h-[10rem] flex items-center  justify-center'>
                        <img
                            src={viza} // Replace with actual image URL
                            alt="Visa Processing"
                            className="mx-auto my-5  w-[10rem]  h-[8rem]"
                        />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Seamless Visa Processing</h2>
                    <p className="text-gray-600">
                        With our streamlined Umrah visa application process, applying is now faster and easier
                        than ever. Skip the complex paperwork and long waits—simply apply online through our
                        user-friendly platform.
                    </p>
                </div>

                {/* Card 3: 24/7 Customer Support */}
                <div className="bg-white rounded-lg shadow-md p-6 text-center hover:scale-105 transition-all duration-300 cursor-pointer cssShadow">
                    <div className=' h-[10rem] flex items-center justify-center'>
                        <img
                            src={time} // Replace with actual image URL
                            alt="Customer Support"
                            className="mx-auto my-5  w-[10rem] h-[8rem]"
                        />
                    </div>
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">24/7 Customer Support</h2>
                    <p className="text-gray-600">
                        Our customer support is available 24/7 to assist with your journey. We take care of all
                        the details, so you can focus on preparing for your spiritual experience.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default UmrahFeatures;
