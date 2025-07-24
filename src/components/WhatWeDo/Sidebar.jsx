import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  GraduationCap, 
  Mic, 
  Newspaper, 
  BookOpen, 
  HelpCircle, 
  Map 
} from 'lucide-react';
import MicroCourses from './MicroCourses';

const StickyNavSidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { id: 'micro-courses', label: 'FinLit Micro-courses', icon: GraduationCap },
    { id: 'financially-speaking', label: 'Financially Speaking', icon: Mic },
    { id: 'finlit-blogs', label: 'FinLit Blogs', icon: Newspaper },
    { id: 'finterms', label: 'FinTerms', icon: BookOpen },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle },
    { id: 'finlit-journey', label: 'FinLit Journey', icon: Map },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[id]');
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop - 200 && window.pageYOffset < sectionTop + sectionHeight - 200) {
          current = section.getAttribute('id');
        }
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex relative">
      {/* Mobile Hamburger Menu */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-20 left-4 z-50 text-white focus:outline-none bg-slate-800/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/10 hover:scale-105 transition-transform duration-200"
        aria-label="Toggle sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sticky Sidebar */}
      <aside
        className={`
          w-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
          text-white shadow-2xl border-r border-white/10
          md:sticky md:top-0 md:h-screen md:translate-x-0
          fixed top-0 left-0 h-full z-50 
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          overflow-y-auto
        `}
      >
        {/* Header */}
        <div className="p-6  sticky top-0 z-10">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-slate-300 mt-2">
            Simplify your finances with FinLit
          </p>
        </div>

        {/* Navigation */}
        <nav className="p-6 flex-1">
          <ul className="space-y-3">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`
                      group flex items-center p-4 rounded-xl transition-all duration-300 
                      border backdrop-blur-sm relative overflow-hidden
                      ${isActive 
                        ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border-yellow-400/30 scale-105 shadow-lg shadow-yellow-500/10' 
                        : 'border-transparent hover:bg-gradient-to-r hover:from-blue-600/20 hover:to-purple-600/20 hover:scale-105 hover:border-white/10'
                      }
                    `}
                    aria-label={`Navigate to ${item.label}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 to-yellow-600"></div>
                    )}
                    
                    <div className={`
                      w-10 h-10 rounded-lg flex items-center justify-center mr-4 transition-all duration-300
                      ${isActive 
                        ? 'bg-gradient-to-br from-yellow-400/30 to-yellow-600/30 scale-110' 
                        : 'bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 group-hover:scale-110'
                      }
                    `}>
                      <IconComponent className={`w-5 h-5 ${isActive ? 'text-yellow-300' : 'text-yellow-400'}`} />
                    </div>
                    <div className="flex-1">
                      <span className={`
                        transition-colors duration-300 font-medium
                        ${isActive 
                          ? 'text-yellow-300 font-semibold' 
                          : 'text-white group-hover:text-yellow-400'
                        }
                      `}>
                        {item.label}
                      </span>
                    </div>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Download App Section - Sticky at bottom */}
        <div className="p-6 border-t border-white/10 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 mt-auto">
          <button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 py-4 px-6 rounded-xl font-bold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25">
            Download the App
          </button>
          
          {/* App Features */}
          <div className="mt-4 space-y-2">
            {['Free Learning Resources', 'Expert Financial Guidance', 'Progress Tracking'].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-slate-300">
                <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-h-screen bg-transparent">
        {children}
      </main>
    </div>
  );
};

// Example usage component showing how to structure your content
const WhatWeDoPage = () => {
  return (
    <StickyNavSidebar>
      <div className="p-8 space-y-0">
        {/* Your individual components go here with proper IDs */}
        <section id="micro-courses" className="min-h-screen">
          {/* <MicroCoursesComponent /> */}
          <div className="flex items-center justify-center h-screen">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">FinLit Micro-courses</h2>
              <MicroCourses />
              <p className="text-xl text-slate-300">Your MicroCoursesComponent goes here</p>
            </div>
          </div>
        </section>
        
        <section id="financially-speaking" className="min-h-screen">
          {/* <FinanciallySpeakingComponent /> */}
          <div className="flex items-center justify-center h-screen">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">Financially Speaking</h2>
              <p className="text-xl text-slate-300">Your FinanciallySpeakingComponent goes here</p>
            </div>
          </div>
        </section>
        
        <section id="finlit-blogs" className="min-h-screen">
          {/* <BlogsComponent /> */}
          <div className="flex items-center justify-center h-screen">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">FinLit Blogs</h2>
              <p className="text-xl text-slate-300">Your BlogsComponent goes here</p>
            </div>
          </div>
        </section>
        
        <section id="finterms" className="min-h-screen">
          {/* <FinTermsComponent /> */}
          <div className="flex items-center justify-center h-screen">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">FinTerms</h2>
              <p className="text-xl text-slate-300">Your FinTermsComponent goes here</p>
            </div>
          </div>
        </section>
        
        <section id="faqs" className="min-h-screen">
          {/* <FAQsComponent /> */}
          <div className="flex items-center justify-center h-screen">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">FAQs</h2>
              <p className="text-xl text-slate-300">Your FAQsComponent goes here</p>
            </div>
          </div>
        </section>
        
        <section id="finlit-journey" className="min-h-screen">
          {/* <FinLitJourneyComponent /> */}
          <div className="flex items-center justify-center h-screen">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">FinLit Journey</h2>
              <p className="text-xl text-slate-300">Your FinLitJourneyComponent goes here</p>
            </div>
          </div>
        </section>
      </div>
    </StickyNavSidebar>
  );
};

export default WhatWeDoPage;