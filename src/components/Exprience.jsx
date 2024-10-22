import React, { useContext } from 'react';
import '../Styles/Exprience.css';
import { FaArrowRight } from "react-icons/fa6";
import { EnquiryPopContext } from '../Contexts/EnquiryPopContext';
import EnquiryForm from './EnquiryForm';
import LandingEnquiryForm from './LandingEnquiryForm';

function Exprience() {

    let [isFormOpen, setFormOpen] = useContext(EnquiryPopContext); {/**Used Context Api */ }

    return (
        // <div className='flex bg-gray-100'>
        <div className='secondHeroSection  flex items-center justify-center py-[10rem] h-auto'>
            <div className='flex text-white gap-5 flex-col items-center justify-center text-center px-4'>
                {/* Heading Section */}
                <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl w-full max-w-[65rem]'>
                    Experience Sacred Moments on Your Umrah Journey
                </h1>

                {/* Description Section */}
                <p className='text-base md:text-lg w-full max-w-[40rem]'>
                    Your pilgrimage deserves purpose and perfection. Trust Almahyra for an exceptional Hajj and Umrah experience.
                </p>

                {/* Button Section */}
                <button className='bg-hoverColor hover:scale-105 hover:duration-300 transition-all flex items-center justify-center gap-3 px-8 py-2 rounded-lg text-base md:text-lg' onClick={() => { setFormOpen(true) }}>
                    ENQUIRY NOW
                    <FaArrowRight />
                </button>
            </div>
        </div>
        // <div className='w-[50%] flex items-center justify-center'>
        //     <LandingEnquiryForm />
        // </div>
        // </div>
    );
}

export default Exprience;
