import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages (one component per folder)
import Hero from './components/HomePage/Hero';
import OurStory from './components/AboutUs/OurStory';
import Blogs from './components/WhatWeDo/Blogs';
import Sidebar from './components/WhatWeDo/Sidebar';
import MicroCourses from './components/WhatWeDo/MicroCourses'; // Import MicroCourses component
import AllCourses from './components/WhatWeDo/AllCourses'; // Import AllCourses component
// Acheivements is empty — skipping for now

function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: '100vh',
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about-us" element={<OurStory />} />
          <Route path="/what-we-do" element={<Sidebar />} />
          <Route path="/micro-courses" element={<MicroCourses />} /> {/* New route for MicroCourses */}
          <Route path="/all-courses" element={<AllCourses />} /> {/* New route for AllCourses */}
          {/* <Route path="/achievements" element={<Achievements />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;