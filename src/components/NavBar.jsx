import React, { useState } from 'react';
import logo from '../assetss/NavBar/logo.png';

function NavBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className='flex items-center p-3 justify-center bg-white shadow-md relative'>
            <div className='flex w-[94%] items-center justify-between'>
                {/* Logo Section */}
                <div>
                    <img src={logo} alt="Logo" className='w-[10rem] lg:w-[15rem]' />
                </div>

                {/* Navigation Links for Desktop */}
                <div className='hidden lg:flex text-gray-500 font-semibold items-center gap-9'>
                    <a href='#' className='hover:text-black transition-colors duration-300 cursor-pointer'>Package</a>
                    <a href='#' className='hover:text-black transition-colors duration-300 cursor-pointer'>VISA</a>

                    {/* Enquiry Button */}
                    <button className='bg-hoverColor rounded-md tracking-[0.1rem] text-white px-5 py-2 hover:bg-hoverColor-dark transition-all duration-300'>
                        ENQUIRY NOW
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className='lg:hidden'>
                    <button onClick={toggleMobileMenu} className='text-gray-500 focus:outline-none'>
                        {/* Hamburger Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className='absolute top-14 left-0  right-0 md:hidden flex flex-col items-center bg-white shadow-md mt-2 py-3 z-10'>
                    <a href='#' className='text-gray-500 font-semibold py-2 hover:text-black transition-colors duration-300 cursor-pointer w-full text-center'>Package</a>
                    <a href='#' className='text-gray-500 font-semibold py-2 hover:text-black transition-colors duration-300 cursor-pointer w-full text-center'>VISA</a>
                    <button className='bg-hoverColor rounded-md tracking-[0.1rem] text-white w-[40%] py-2 hover:bg-hoverColor-dark transition-all duration-300'>
                        ENQUIRY NOW
                    </button>
                </div>
            )}
        </div>
    );
}

export default NavBar;
