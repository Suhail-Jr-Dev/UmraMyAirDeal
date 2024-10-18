import React from 'react';
import line from '../assetss/Ratings/line.png';

function Ratings() {
    return (

        <div className='flex md:relative md:h-[7rem] my-5 items-center justify-center'>
            {/* Ratings Box */}
            <div className='bg-white md:absolute  md:top-[-7vw] flex flex-col lg:flex-row items-center justify-around py-5 px-5 w-[95%] lg:w-[80%] rounded-lg shadow-xl border border-gray-200'>

                {/* Happy Traveler Section */}
                <div className='flex items-center justify-center flex-col px-5 mb-6 lg:mb-0'>
                    <h1 className='text-[2.2rem]  font-bold text-hoverColor'>35K+</h1>
                    <h2 className='text-[1rem]  text-gray-600'>HAPPY TRAVELER</h2>
                </div>

                {/* Line Separator for larger screens */}
                <img src={line} alt="Line" className='hidden lg:block' />

                {/* Success Traveler Section */}
                <div className='flex items-center justify-center flex-col px-5 mb-6 lg:mb-0'>
                    <h1 className='text-[2.2rem]  font-bold text-hoverColor'>82%+</h1>
                    <h2 className='text-[1rem]  text-gray-600'>SUCCESS TRAVELER</h2>
                </div>

                {/* Line Separator for larger screens */}
                <img src={line} alt="Line" className='hidden lg:block' />

                {/* Rating Clients Section */}
                <div className='flex items-center justify-center flex-col px-5 mb-6 lg:mb-0'>
                    <h1 className='text-[2.2rem] font-bold text-hoverColor'>9.1</h1>
                    <h2 className='text-[1rem]  text-gray-600'>RATING CLIENTS</h2>
                </div>

                {/* Line Separator for larger screens */}
                <img src={line} alt="Line" className='hidden lg:block' />

                {/* Years of Experience Section */}
                <div className='flex items-center justify-center flex-col px-5'>
                    <h1 className='text-[2.2rem] font-bold text-hoverColor'>5+</h1>
                    <h2 className='text-[1rem]  text-gray-600'>YEARS OF EXPERIENCE</h2>
                </div>
            </div>
        </div>
    );
}

export default Ratings;
