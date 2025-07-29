import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Pages (one component per folder)
import OurStory from "./components/AboutUs/OurStory";
import Hero from "./components/HomePage/Hero";
import AuthForm from "./components/Login/AuthForm";
import Sidebar from "./components/WhatWeDo/Sidebar";
import MicroCourses from './components/WhatWeDo/MicroCourses'; // Import MicroCourses component
import AllCourses from './components/WhatWeDo/AllCourses'; // Import AllCourses component
import AllVideos from './components/WhatWeDo/AllVideos';
// Acheivements is empty — skipping for now

function App() {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about-us" element={<OurStory />} />
          <Route path="/what-we-do" element={<Sidebar />} />
          <Route path="/micro-courses" element={<MicroCourses />} /> {/* New route for MicroCourses */}
          <Route path="/all-courses" element={<AllCourses />} /> {/* New route for AllCourses */}
          <Route path="/all-videos" element={<AllVideos />} />
         <Route path="/login-signup" element={<AuthForm />} />

          {/* <Route path="/achievements" element={<Achievements />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
