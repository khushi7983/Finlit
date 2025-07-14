
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
    <div className=""
     style =  {{
        background: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(14, 14, 110, 1) 36%, rgba(0, 212, 255, 1) 100%)',
      }}
      >
      <Navbar />
      <Hero />
      <AboutUs />
      <AppShowcase />
      <FinancialLiteracy />
      <ESGSection />
      <Offerings />
      <WhatWeDo />
      <HowItWorks />
      <Testimonials />
      <Awards />
      <FAQ />
      <Footer />
      <FloatingSupport />
    </div>
  );
}

export default App;
