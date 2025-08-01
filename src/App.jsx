import { Route, BrowserRouter as Router, Routes, Navigate, useLocation } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Pages
import OurStory from "./components/AboutUs/OurStory";
import Hero from "./components/HomePage/Hero";
import AuthForm from "./components/Login/AuthForm";
import LearnMoreStory from "./components/AboutUs/LearnMoreStory";

// Sidebar layout and nested pages
import SidebarLayout from "./components/WhatWeDo/Sidebar";
import MicroCourses from "./components/WhatWeDo/MicroCourses";
import AllCourses from "./components/WhatWeDo/AllCourses";
import Speaking from "./components/WhatWeDo/Speaking";
import Blogs from "./components/WhatWeDo/Blogs";
import BlogPage from "./components/WhatWeDo/BlogPage";
import Terms from "./components/WhatWeDo/Terms";
import Fund from "./components/WhatWeDo/Fund";
import Youtube from "./components/WhatWeDo/Youtube";

// Wrapper to hide footer on specific routes
function AppWrapper() {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith("/what-we-do") || location.pathname.startsWith("/blog");

  return (
    <div style={{ minHeight: "100vh" }}>
      <Navbar />
      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Hero />} />
        <Route path="/about-us" element={<OurStory />} />
        <Route path="/about-finlit-story" element={<LearnMoreStory />} />
        <Route path="/login-signup" element={<AuthForm />} />

        {/* Blog pages */}
        <Route path="/blog/:id" element={<BlogPage />} />

        {/* Sidebar layout routes */}
        <Route path="/what-we-do" element={<SidebarLayout />} >
          <Route index element={<Navigate to="micro-courses" />} />
          <Route path="micro-courses" element={<MicroCourses />} />
          <Route path="all-courses" element={<AllCourses />} />
          <Route path="financially-speaking" element={<Speaking />} />
          <Route path="finlit-blogs" element={<Blogs />} />
          <Route path="finterms" element={<Terms />} />
          <Route path="mutual-funds" element={<Fund />} />
           <Route path="youtube-courses" element={<Youtube/>} /> 
        </Route>
      </Routes>

      {!hideFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
