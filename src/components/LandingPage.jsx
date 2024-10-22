import React, { useState } from 'react';
import SocialMediaBar from './SocialMediaBar';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import Ratings from './Ratings';
import DiscoverMore from './DiscoverMore';
import UmraTravelPkg from './UmraTravelPkg';
import FeaturesSection from './FeaturesSection';
import ProcessSection from './ProcessSection';
import Exprience from './Exprience';
import '../Styles/LandingPage.css';
import EnquiryFormPopUp from './EnquiryFormPopUp';

import { useContext } from 'react';
import { EnquiryPopContext } from '../Contexts/EnquiryPopContext';

function LandingPage() {

    let [isFormOpen, setFormOpen] = useContext(EnquiryPopContext);

    return (
        <div className='relative'>
            <div className={`${isFormOpen ? 'fixed' : 'hidden'} inset-0 bg-gray-800 bg-opacity-50 z-40 pointer-events-auto flex items-center justify-center`} onClick={()=>{setFormOpen(false)}}>
                <EnquiryFormPopUp />
            </div>
            <NavBar />  {/**Used Context Api */}
            <HeroSection />
            <Ratings />
            <DiscoverMore />
            <UmraTravelPkg /> {/**Used Context Api */}
            <FeaturesSection />
            <ProcessSection />
            <Exprience /> {/**Used Context Api */}
        </div>
    );
}

export default LandingPage;
