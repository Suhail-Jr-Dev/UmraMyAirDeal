import React from 'react';
import phone from '../assetss/topNavbar/phone.png';
import mail from '../assetss/topNavbar/mail.png';

import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

function SocialMediaBar() {
    return (
        <div className='bg-brandCol flex flex-col lg:flex-row justify-between py-2 px-4 lg:px-10'>
            {/* Contact Info */}
            <div className='flex text-white w-full lg:w-[25rem] flex-wrap items-center justify-around mb-2 lg:mb-0'>
                <div className='flex items-center gap-2 justify-center'>
                    <img src={mail} alt="Email" className='w-4 lg:w-[0.8rem]' />
                    <p className='text-[0.9rem] lg:text-[1rem]'>myairdeal24@gmail.com</p>
                </div>
                <div className='flex items-center gap-2 justify-center'>
                    <img src={phone} alt="Phone" className='w-4 lg:w-[0.8rem]' />
                    <p className='text-[0.9rem] lg:text-[1rem]'>+971 49398393</p>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className='flex gap-3 flex-wrap justify-center lg:justify-end'>
                <div className='bg-socialMedia flex items-center justify-center w-8 h-8 cursor-pointer rounded-full'>
                    <FaFacebookF className='fill-white w-4 h-4' />
                </div>
                <div className='bg-socialMedia flex items-center justify-center w-8 h-8 cursor-pointer rounded-full'>
                    <FaLinkedinIn className='fill-white w-4 h-4' />
                </div>
                <div className='bg-socialMedia flex items-center justify-center w-8 h-8 cursor-pointer rounded-full'>
                    <AiOutlineYoutube className='fill-white w-4 h-4' />
                </div>
                <div className='bg-socialMedia flex items-center justify-center w-8 h-8 cursor-pointer rounded-full'>
                    <FaInstagram className='fill-white w-4 h-4' />
                </div>
            </div>
        </div>
    );
}

export default SocialMediaBar;
