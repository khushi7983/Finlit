import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faGraduationCap,
  faMicrophone,
  faNewspaper,
  faBookOpen,
  faQuestion,
  faMapSigns
} from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'micro-courses', label: 'FinLit Micro-courses', icon: faGraduationCap },
    { id: 'financially-speaking', label: 'Financially Speaking', icon: faMicrophone },
    { id: 'finlit-blogs', label: 'FinLit Blogs', icon: faNewspaper },
    { id: 'finterms', label: 'FinTerms', icon: faBookOpen },
    { id: 'faqs', label: 'FAQs', icon: faQuestion },
    { id: 'finlit-journey', label: 'FinLit Journey', icon: faMapSigns },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = '';
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute('id');
        }
      });

      document.querySelectorAll('.sidebar-link').forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-4 left-4 z-30 text-white focus:outline-none bg-[#1a2a44] p-2 rounded"
        aria-label="Toggle sidebar"
      >
        <FontAwesomeIcon icon={faBars} className="text-xl" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 shadow-lg z-20 md:sticky md:top-4 md:h-[calc(100vh-2rem)] md:rounded-lg overflow-y-auto transform transition-transform duration-300 font-roboto md:translate-x-0 ${isOpen ? '' : '-translate-x-full'} md:translate-x-0`}
        style={{
          background: 'linear-gradient(to bottom, #1a2a44, #2e3a5e)',
          color: '#ffffff',
          transform: isOpen ? 'translateX(0)' : '-translateX-full',
        }}
      >
        <div className="p-4 border-b border-[#2e3a5e]">
          <h2 className="text-xl font-bold">What We Do</h2>
          <p className="text-sm mt-1">Simplify your finances with FinLit</p>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="sidebar-link flex items-center p-3 rounded-lg transition-colors duration-200 hover:bg-[#2e3a5e] hover:text-[#ffc107]"
                  aria-label={`Navigate to ${item.label}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  <FontAwesomeIcon icon={item.icon} className="mr-2 text-[#10b981]" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-[#2e3a5e]">
          <a
            href="#download-app"
            className="block text-center bg-[#1e3a8a] text-white py-2 rounded-lg hover:bg-[#2e3a5e] transition-colors duration-200"
            aria-label="Download the FinLit App"
          >
            Download the App
          </a>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;