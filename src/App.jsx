import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";

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
import AllVideos from "./components/WhatWeDo/AllVideos";
import Blogs from "./components/WhatWeDo/Blogs";
import BlogPage from "./components/WhatWeDo/BlogPage";
import Terms from "./components/WhatWeDo/Terms";
import Fund from "./components/WhatWeDo/Fund";
import ESG from "./components/WhatWeDo/ESG";
import Conference from "./components/AboutUs/media/Conference";
import Interview from "./components/AboutUs/media/Interview";
import Lecture from "./components/AboutUs/media/Lecture";
import Podcast from "./components/AboutUs/media/Podcast";
import Awards from "./components/HomePage/Awards.jsx";



// Wrapper to manage footer visibility
function AppWrapper() {
  const location = useLocation();

  // Hide footer only for "/what-we-do/*" routes
  const hideFooter = location.pathname.startsWith("/what-we-do");

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Navbar visible on all pages */}
      <Navbar />

      <Routes>
        {/* Main pages */}
        <Route path="/" element={<Hero />} />
        <Route path="/about-us" element={<OurStory />} />
        <Route path="/all-videos" element={<AllVideos />} />
        <Route path="/interview" element={<Interview />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/about-finlit-story" element={<LearnMoreStory />} />

        {/* Login/Signup */}
        <Route path="/login-signup" element={<AuthForm />} />

        {/* Blog detail page */}
        <Route path="/blog/:id" element={<BlogPage />} />

        {/* Sidebar layout with nested routes */}
        <Route path="/what-we-do" element={<SidebarLayout />}>
          {/* Default redirect */}
          <Route index element={<Navigate to="micro-courses" replace />} />
          <Route path="micro-courses" element={<MicroCourses />} />
          <Route path="all-courses" element={<AllCourses />} />
          <Route path="financially-speaking" element={<Speaking />} />
          <Route path="finlit-blogs" element={<Blogs />} />
          <Route path="finterms" element={<Terms />} />
          <Route path="mutual-funds" element={<Fund />} />
          <Route path="esg-funds" element={<ESG />} />
        </Route>
      </Routes>

      {/* Footer visible everywhere except /what-we-do */}
      {!hideFooter && <Footer />}
    </div>
  );
}

// Main App
export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
