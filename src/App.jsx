import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import AboutUs from './components/AboutUs.jsx';
import AppShowcase from './components/AppShowCase.jsx';
import FinancialLiteracy from './components/FinancialLiteracy.jsx';
import ESGSection from './components/ESGSection.jsx';
import Offerings from './components/Offerings.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Testimonials from './components/Testimonials.jsx';
import Awards from './components/Awards.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import FloatingSupport from './components/FloatingSupport.jsx';

function App() {
  return (
    <Router>
      <div
        style={{
          background: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(14, 14, 110, 1) 36%, rgba(0, 212, 255, 1) 100%)',
        }}
      >
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/app-showcase" element={<AppShowcase />} />
          <Route path="/financial-literacy" element={<FinancialLiteracy />} />
          <Route path="/esg" element={<ESGSection />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>

        <Footer />
        <FloatingSupport />
      </div>
    </Router>
  );
}

export default App;
