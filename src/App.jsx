import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages (one component per folder)
import Hero from './components/HomePage/Hero';
import OurStory from './components/AboutUs/OurStory';
import Blogs from './components/WhatWeDo/Blogs';
// Acheivements is empty — skipping for now

function App() {
  return (
    <Router>
      <div
        style={{
          background: 'linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(14, 14, 110, 1) 36%, rgba(0, 212, 255, 1) 100%)',
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about-us" element={<OurStory />} />
          <Route path="/what-we-do" element={<Blogs />} />
          {/* <Route path="/achievements" element={<Achievements />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
