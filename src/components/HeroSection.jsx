import React from 'react';
import '../Styles/HeroSection.css';

// Import your video file. Make sure the path is correct.
import backgroundVideo from '../assetss/HeroSection/Landscape.mp4'


function HeroSection() {
    return (
        <div className='heroSection  py-5 h-[70vh] flex items-center justify-center relative'>
            {/* Background Video */}
            <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
                <source src={backgroundVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
}

export default HeroSection;
