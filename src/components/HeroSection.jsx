import React from 'react';
import '../Styles/HeroSection.css';

function HeroSection() {
    return (
        <div className='heroSection h-[70vh] flex items-center justify-center bg-cover bg-center relative'>
            {/* Text Container */}
            <div className='text-white w-full md:w-[70%] lg:w-[50%] px-4'>
                {/* Welcome Text */}
                <h1 className='text-[1.5rem] font-semibold mb-2'>
                    WELCOME TO MYAIRDEAL
                </h1>

                {/* Main Heading */}
                <h1 className='text-[2.2rem]  font-bold mb-4'>
                    Your Trusted Umrah Journey Partner
                </h1>

                {/* Description */}
                <p className='text-[1.2rem] leading-relaxed'>
                    Embark on your sacred journey with confidence, guided by experts who understand the significance of every step. Our tailored Hajj and Umrah services ensure a seamless and spiritually enriching experience. Trust us to be your devoted partner on this life-changing pilgrimage.
                </p>
            </div>
        </div>
    );
}

export default HeroSection;
