import React from 'react';
import phone from '../assetss/topNavbar/phone.png';
import mail from '../assetss/topNavbar/mail.png';

import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { Link } from 'react-router-dom';

import { message } from 'antd';

function SocialMediaBar() {


    const EmailContent = "https://mail.google.com/mail/?view=cm&fs=1&to=support@bookmyjet.com&su=Inquiry%20About%20Your%20Services&body=Hello%2C%0D%0A%0D%0AI%20am%20interested%20in%20learning%20more%20about%20your%20services.%20Please%20provide%20me%20with%20additional%20information.%0D%0A%0D%0AThank%20you!"


    const phoneNumber = '+91 8884466800';
    const copyToClipboard = () => {
        navigator.clipboard.writeText(phoneNumber).then(() => {
            message.success('Phone number copied to clipboard');
        })
            .catch(() => {
                message.error('Failed to copy');
            });
    };

    const handleContactClick = () => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        if (isMobile) {
            window.location.href = `tel:${phoneNumber}`;
        } else {
            copyToClipboard();
        }
    };

    return (
        <div className='bg-brandCol flex flex-col lg:flex-row justify-between py-2 px-4 lg:px-10'>
            {/* Contact Info */}
            <div className='flex text-white w-full lg:w-[25rem] flex-wrap items-center justify-around mb-2 lg:mb-0'>
                <div className='flex items-center gap-2  justify-center'>

                    <img src={mail} alt="Email" className='w-4  lg:w-[1.2rem] mt-1' />
                    <Link to={EmailContent} target="_blank" className='cursor-pointer text-[0.9rem] lg:text-[1rem]'>support@myairdeal.com</Link>

                </div>
                <div className='flex items-center gap-2 justify-center '>
                    <img src={phone} alt="Phone" className='w-4  lg:w-[1.2rem]' />
                    <p className='text-[0.9rem] lg:text-[1rem] cursor-pointer' onClick={handleContactClick} >{phoneNumber}</p>
                </div>
            </div>
            {/* Social Media Icons */}
            <div className='hidden md:flex gap-3 flex-wrap justify-center lg:justify-end'>
                <Link to={'https://www.facebook.com/profile.php?id=61561003964312'} target='_blank' className='bg-socialMedia  flex items-center justify-center w-8 h-8 cursor-pointer rounded-full'>
                    <FaFacebookF className='hover:fill-hoverColor fill-white w-4 h-4' />
                </Link >
                <Link to={'https://in.linkedin.com/company/my-air-deal'} target='_blank' className='bg-socialMedia  flex items-center justify-center w-8 h-8 cursor-pointer rounded-full'>
                    <FaLinkedinIn className='hover:fill-hoverColor fill-white w-4 h-4' />
                </Link>
                <Link to={'https://www.instagram.com/myairdeal/'} target='_blank' className='bg-socialMedia  flex items-center justify-center w-8 h-8 cursor-pointer rounded-full'>
                    <FaInstagram className='hover:fill-hoverColor fill-white w-4 h-4' />
                </Link>
                <Link to={'https://twitter.com/'} target='_blank' className='bg-socialMedia  flex items-center justify-center w-8 h-8 cursor-pointer rounded-full'>
                    <FaXTwitter className='hover:fill-hoverColor fill-white w-4 h-4' />
                </Link>

            </div>
        </div >
    );
}

export default SocialMediaBar;
