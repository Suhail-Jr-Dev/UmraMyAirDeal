import BillingPage from "./components/BillingPage";
import LandingPage from "./components/LandingPage";
import SocialMediaBar from "./components/SocialMediaBar";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { EnquiryPopUpProvider } from "./Contexts/EnquiryPopContext";
import { ImageGridProvider } from "./Contexts/ImageGridContext";

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <EnquiryPopUpProvider>
        <ImageGridProvider>
          <Router>
            <SocialMediaBar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/visa" element={<BillingPage />} />
            </Routes>
            <Footer />
          </Router>
        </ImageGridProvider>
      </EnquiryPopUpProvider>
    </div>
  );
}

export default App;
