import React from 'react';
import { FaLinkedinIn, FaTwitter, FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';
import { TfiLocationPin } from 'react-icons/tfi'; // Importing location pin icon
import { Link } from 'react-router-dom'; // Make sure to import Link for routing

import logo from '../assetss/whiteLogo.png';

function Footer() {
    const MyAirDealHandleClick = (element) => {
        let URL = element.target.innerText;
        const encodedAddress = encodeURIComponent(URL);
        const mapUrl = `https://www.google.com/maps?q=${encodedAddress}`;
        window.open(mapUrl);
    };

    return (
        <div className="bg-brandCol mt-10  py-10">
            <div className="flex flex-col w-full lg:flex-row justify-between gap-8 mx-auto px-5">
                {/* Company Description */}
                <div className="flex-1 mb-6">
                    <img src={logo} alt="MyAirDeal Logo" className="mb-4 w-32 md:w-40" /> {/* Responsive logo size */}
                    <p className="text-white text-sm md:text-base">
                        Embark on a transformative spiritual journey with MyAirDeal, your trusted partner for seamless Umrah experiences. Offering personalized packages tailored to your needs, we ensure comfort, guidance, and a deeply fulfilling pilgrimage. Contact us today and take the first step toward your sacred journey.
                    </p>
                </div>

                {/* Services Section */}
                <div className="flex-1 text-white mb-6">
                    <h1 className="text-lg text-hoverColor font-semibold">Services</h1>
                    <p className="text-sm md:text-base">Guidance</p>
                    <p className="text-sm md:text-base">Umrah Package</p>
                    <p className="text-sm md:text-base">Transportation Services</p>
                    <p className="text-sm md:text-base">Accommodation Arrangements</p>
                </div>

                {/* Support Section */}
                <div className="flex-1 text-white mb-6">
                    <h1 className="text-lg text-hoverColor font-semibold">Support</h1>
                    <p className="text-sm md:text-base">Contact Us</p>
                </div>

                {/* Company Section */}
                <div className="flex-1 text-white mb-6">
                    <h1 className="text-lg text-hoverColor font-semibold">Company</h1>
                    <p className="text-sm md:text-base">Lorem Ipsum</p>
                    <p className="text-sm md:text-base">Lorem Ipsum</p>
                </div>
            </div>

            {/* Address and Social Media Section */}
            <div className="flex flex-col lg:flex-row justify-between gap-8 py-10 mx-auto px-5">
                {/* Location India */}
                <div className="flex text-white items-start gap-2 mb-6">
                    <TfiLocationPin className="text-2xl text-gray-700" />
                    <div>
                        <h1 className="text-lg text-hoverColor font-semibold">INDIA</h1>
                        <p className="underline cursor-pointer hover:text-blue-500 text-sm md:text-base" onClick={MyAirDealHandleClick}>
                            2nd Floor, Anjali Plaza, Jayanagar, Bangaluru, India - 560076
                        </p>
                    </div>
                </div>

                {/* Location Dubai */}
                <div className="flex items-start text-white gap-2 mb-6">
                    <TfiLocationPin className="text-2xl text-gray-700" />
                    <div>
                        <h1 className="text-lg text-hoverColor font-semibold">DUBAI - UAE</h1>
                        <p className="underline cursor-pointer hover:text-blue-500 text-sm md:text-base" onClick={MyAirDealHandleClick}>
                            I 10, Block 1, Phase 1, Saih Shuaib 2, Dubai, UAE.
                        </p>
                    </div>
                </div>

                {/* Follow Us Section */}
                <div className="flex flex-col w-[20rem] mb-6">
                    <h1 className="text-lg text-hoverColor font-semibold mb-2">Follow Us</h1>
                    <div className="flex flex-wrap gap-3 ">
                        <Link to={'https://www.facebook.com/profile.php?id=61561003964312'} target='_blank' className='bg-socialMedia flex items-center justify-center w-8 h-8 cursor-pointer rounded-full'>
                            <FaFacebook className='fill-white w-4 h-4' />
                        </Link>
                        <Link to={'https://www.instagram.com/myairdeal/'} target='_blank' className='bg-socialMedia flex items-center justify-center w-8 h-8 cursor-pointer rounded-full'>
                            <FaInstagram className='fill-white w-4 h-4' />
                        </Link>
                        <Link to={'https://in.linkedin.com/company/my-air-deal'} target='_blank' className='bg-socialMedia flex items-center justify-center w-8 h-8 cursor-pointer rounded-full'>
                            <FaLinkedinIn className='fill-white w-4 h-4' />
                        </Link>
                        <Link to={'https://twitter.com/'} target='_blank' className='bg-socialMedia flex items-center justify-center w-8 h-8 cursor-pointer rounded-full'>
                            <FaTwitter className='fill-white w-4 h-4' />
                        </Link>

                    </div>
                </div>
            </div>
            <div className='text-center text-white border-white border-dashed border-t-2 mx-10'>
                <h1 className='py-10'>
                    Copyright© 2024 MyAirDeal, All rights reserved.
                </h1>
            </div>
        </div>
    );
}

export default Footer;
