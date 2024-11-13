import React, { useContext } from "react";
import billingimg from "../assetss/Exprience/exprienceKaaba.svg";
import billingimg2 from "../assetss/Exprience/exprienceKaaba.svg";
import billingimg3 from "../assetss/Exprience/exprienceKaaba.svg";
import { ImageGridContext } from "../Contexts/ImageGridContext";
import StarsRating from "./StarsRating";

const ImageGrid = () => {
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

  return (
    <>
      <div
        className={`w-full  relative sm:w-11/12 lg:w-[90%] p-4`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="overflow-hidden">
          <div
            className="md:max-w-xl w-full mx-auto"
            onClick={GridClickHandelar}
          >
            {/* Conditionally render images only if sendImagtoGrid and sendImagtoGrid[imgSection] exist */}
            {sendImagtoGrid && sendImagtoGrid[imgSection] ? (
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[52vh] w-full">
                <div className="row-span-2">
                  <img
                    src={sendImagtoGrid[imgSection][0]}
                    alt="Vertical Image"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={sendImagtoGrid[imgSection][1]}
                    alt="First Small Image"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <img
                    src={sendImagtoGrid[imgSection][2]}
                    alt="Second Small Image"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ) : (
              <p>Loading images...</p> // Fallback UI if images are not available
            )}
          </div>
        </div>
        {/* Adding Star's Rating */}

        <div className="flex justify-center py-5">
        <StarsRating />
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
