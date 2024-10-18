import React from 'react'
import SocialMediaBar from './SocialMediaBar'
import NavBar from './NavBar'
import HeroSection from './HeroSection'
import Ratings from './Ratings'
import DiscoverMore from './DiscoverMore'
import UmraTravelPkg from './UmraTravelPkg'
import FeaturesSection from './FeaturesSection'
import ProcessSection from './ProcessSection'
import Exprience from './Exprience'
import Footer from './Footer'

function LandingPage() {
    return (
        <div>
            <SocialMediaBar />
            <NavBar />
            <HeroSection />
            <Ratings />
            <DiscoverMore />
            <UmraTravelPkg />
            <FeaturesSection />
            <ProcessSection />
            <Exprience />
            <Footer />
        </div>
    )
}

export default LandingPage