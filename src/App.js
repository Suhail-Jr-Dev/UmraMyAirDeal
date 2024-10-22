import BillingPage from './components/BillingPage';
import LandingPage from './components/LandingPage';
import SocialMediaBar from './components/SocialMediaBar';
import Footer from './components/Footer';

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { EnquiryPopUpProvider } from './Contexts/EnquiryPopContext';

function App() {
  return (
    <div className="App">
      {/* <LandingPage /> */}
      <EnquiryPopUpProvider>
        <Router>
          <SocialMediaBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/billingpage" element={<BillingPage />} />
          </Routes>
          <Footer />
        </Router>
      </EnquiryPopUpProvider>
    </div>
  );
}

export default App;
