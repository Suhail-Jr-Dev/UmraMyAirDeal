import React, { useContext } from "react";
import SocialMediaBar from "./SocialMediaBar";
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import Ratings from "./Ratings";
import DiscoverMore from "./DiscoverMore";
import UmraTravelPkg from "./UmraTravelPkg";
import FeaturesSection from "./FeaturesSection";
import ProcessSection from "./ProcessSection";
import Exprience from "./Exprience";
import "../Styles/LandingPage.css";
import EnquiryFormPopUp from "./EnquiryFormPopUp";

import { EnquiryPopContext } from "../Contexts/EnquiryPopContext";
import { ImageGridContext } from "../Contexts/ImageGridContext";
import ImageGrid from "./ImageGrid";

import StarsRating from "../components/StarsRating";

function LandingPage() {
  let [isFormOpen, setFormOpen] = useContext(EnquiryPopContext);

  const {
    imgSection,
    setimgSection,
    sendImagtoGrid,
    setSendImagtoGrid,
    imgBtnClicked,
    setImagBtnClicked,
    isOpen,
    setIsOpen,
    GridClickHandelar,
    getStarRatings,
    setStarRatings,
  } = useContext(ImageGridContext);

  console.log(getStarRatings);

  // Close modal function
  const closeModal = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setIsOpen(false); // Close the image grid modal
    setImagBtnClicked(false); // Reset button state if necessary
  };

  return (
    <div className="relative">
      {/* Enquiry Form Pop Up */}
      <div
        className={`${
          isFormOpen ? "fixed" : "hidden"
        } inset-0 bg-gray-800 bg-opacity-50 z-40 pointer-events-auto flex items-center justify-center`}
        onClick={() => {
          setFormOpen(false);
        }}
      >
        <EnquiryFormPopUp />
      </div>

      {/* Image Grid Modal */}
      <div
        className={`${
          isOpen ? "fixed" : "hidden"
        } inset-0 bg-gray-600 bg-opacity-20 flex-col backdrop-blur-xl z-40 pointer-events-auto flex items-center justify-center`}
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <ImageGrid
          GridClickHandelar={GridClickHandelar}
          imgSection={imgSection}
          sendImagtoGrid={sendImagtoGrid}
        />
       
      </div>

      {/* Main Content */}
      <NavBar />
      <HeroSection />
      <Ratings />
      <DiscoverMore />
      <UmraTravelPkg />
      <FeaturesSection />
      <ProcessSection />
      <Exprience />
    </div>
  );
}

export default LandingPage;
