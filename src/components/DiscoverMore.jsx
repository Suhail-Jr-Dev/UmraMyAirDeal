import React, { useContext } from 'react';
import '../Styles/DiscoverMore.css';
import { FaArrowRight } from "react-icons/fa6";
import { EnquiryPopContext } from '../Contexts/EnquiryPopContext';

function DiscoverMore() {

    let [isFormOpen, setFormOpen] = useContext(EnquiryPopContext); {/**Used Context Api */ }


    return (
        <div className='secondHeroSection flex items-center justify-center py-10 h-auto'>
            <div className='flex text-white gap-5 flex-col items-center justify-center text-center px-4'>
                {/* Discover More Title */}
                <h2 className='text-lg md:text-xl font-semibold'>DISCOVER MORE</h2>

                {/* Main Heading Section */}
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>
                        Purposeful Journeys: MyAirDeal
                    </h1>
                    <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl'>
                        Commitment to Umrah Excellence
                    </h1>
                </div>

                {/* Description Section */}
                <p className='text-base md:text-lg w-full max-w-[30rem]'>
                    Your pilgrimage deserves purpose and perfection. Trust Almahyra for an exceptional Hajj and Umrah experience.
                </p>

                {/* Button Section */}
                <button className='bg-hoverColor hover:scale-105 hover:duration-300 transition-all mt-14 flex items-center justify-center gap-3 px-8 py-2 rounded-lg text-base md:text-lg' onClick={() => { setFormOpen(true) }}>
                    ENQUIRY NOW
                    <FaArrowRight />
                </button>
            </div>
        </div>
    );
}

export default DiscoverMore;
