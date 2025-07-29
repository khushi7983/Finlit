import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Pages (one component per folder)
import OurStory from "./components/AboutUs/OurStory";
import Hero from "./components/HomePage/Hero";
import AuthForm from "./components/Login/AuthForm";
import Sidebar from "./components/WhatWeDo/Sidebar";
import LearnMoreStory from "./components/AboutUs/LearnMoreStory";
import MicroCourses from './components/WhatWeDo/MicroCourses'; // Import MicroCourses component
import AllCourses from './components/WhatWeDo/AllCourses'; // Import AllCourses component
import Speaking from './components/WhatWeDo/Speaking'; // Import Speaking component
import Blogs from './components/WhatWeDo/Blogs'; // Import Blogs component
import Terms from './components/WhatWeDo/Terms'; // Import Terms component

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
  <Route path="/about-finlit-story" element={<LearnMoreStory />} />
  <Route path="/what-we-do" element={<Sidebar />} />
          <Route path="/what-we-do/micro-courses" element={<MicroCourses />} /> {/* New route for MicroCourses */}
          <Route path="/all-courses" element={<AllCourses />} /> {/* New route for AllCourses */}
          <Route path="/financially-speaking" element={<Speaking />} /> {/* New route for Speaking */}
          <Route path="/finlit-blogs" element={<Blogs />} /> {/* New route for Blogs */}
          <Route path="/finterms" element={<Terms />} /> {/* New route for Terms */}
  <Route path="/login-signup" element={<AuthForm />} />
</Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
