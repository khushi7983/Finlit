// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import StickyNavSidebar from "./components/WhatWeDo/StickyNavSidebar";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // Pages (one component per folder)
// import Hero from "./components/HomePage/Hero";
// import OurStory from "./components/AboutUs/OurStory";
// import Blogs from "./components/WhatWeDo/Blogs";
// import Sidebar from "./components/WhatWeDo/Sidebar";
// import MicroCourses from "./components/WhatWeDo/MicroCourses";
// import Speaking from "./components/WhatWeDo/Speaking";
// import Terms from "./components/WhatWeDo/Terms";
// import InvestApp from "./components/WhatWeDo/InvestApp";
// import LearnApp from "./components/WhatWeDo/LearnApp";
// import Fund from "./components/WhatWeDo/Fund";

// // Acheivements is empty — skipping for now

// function App() {
//   return (
//     <Router>
//       <div
//         style={{
//           background:
//             "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(14, 14, 110, 1) 36%, rgba(0, 212, 255, 1) 100%)",
//           minHeight: "100vh",
//         }}
//       >
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Hero />} />
//           <Route path="/about-us" element={<OurStory />} />
//           <Route
//             path="/what-we-do"
//             element={
//               // In your App.js, replace the current route:
//               <Route
//                 path="/what-we-do"
//                 element={
//                     <div className="space-y-0">
//                       <section id="micro-courses" className="min-h-screen">
//                         <MicroCourses />
//                       </section>
//                       <section
//                         id="financially-speaking"
//                         className="min-h-screen"
//                       >
//                         <Speaking />
//                       </section>
//                       <section id="finlit-blogs" className="min-h-screen">
//                       <Blogs />
//                       </section>
//                       <section id="finterms" className="min-h-screen">
//                        <Terms />
//                       </section>
//                       <section id="finlit-invest" className="min-h-screen">
//                        <LearnApp />
//                       </section>
//                       <section id="finlit-invest" className="min-h-screen">
//                        <InvestApp />
//                       </section>
//                       <section id="finlit-journey" className="min-h-screen">
//                         <Fund />
//                       </section>
//                     </div>
//                 }
//               />
//             }
//           />
//           {/* <Route path="/achievements" element={<Achievements />} /> */}
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages (one component per folder)
import Hero from './components/HomePage/Hero';
import OurStory from './components/AboutUs/OurStory';
import Blogs from './components/WhatWeDo/Blogs';
import Sidebar from './components/WhatWeDo/Sidebar';
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
          <Route path="/what-we-do" element={<Sidebar />} />
          {/* <Route path="/achievements" element={<Achievements />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;