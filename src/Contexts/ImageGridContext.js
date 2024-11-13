import { createContext, useState } from "react";

export let ImageGridContext = createContext();

export function ImageGridProvider({ children }) {
  const [imgSection, setimgSection] = useState(0);
  const [sendImagtoGrid, setSendImagtoGrid] = useState("");
  const [imgBtnClicked, setImagBtnClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [getStarRatings, setStarRatings] = useState(0);

  const GridClickHandelar = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <ImageGridContext.Provider
      value={{
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
      }}
    >
      {children}
    </ImageGridContext.Provider>
  );
}
