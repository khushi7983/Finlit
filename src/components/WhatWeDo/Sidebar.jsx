import React, { useState } from 'react';
import { Menu, GraduationCap, Mic, Newspaper, BookOpen, HelpCircle, Map } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/micro-courses', label: 'FinLit Micro-courses', icon: GraduationCap },
    { path: '/financially-speaking', label: 'Financially Speaking', icon: Mic },
    { path: '/finlit-blogs', label: 'FinLit Blogs', icon: Newspaper },
    { path: '/finterms', label: 'FinTerms', icon: BookOpen },
    { path: '/Funds', label: 'FAQs', icon: HelpCircle },
    { path: '/finlit-journey', label: 'FinLit Journey', icon: Map },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen flex relative">
      {/* Mobile Toggle */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-20 left-4 z-50 text-white bg-slate-800/90 p-3 rounded-xl"
      >
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`w-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white shadow-2xl
        md:sticky md:top-0 md:h-screen
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        overflow-y-auto`}
      >
        <div className="pt-8 md:pt-12" />
        <nav className="p-6 flex-1 mt-2">
          <ul className="space-y-3 mt-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `
                      group flex items-center p-4 rounded-xl transition-all duration-300 
                      ${isActive 
                        ? 'border border-white/30 scale-105 shadow-lg' 
                        : 'border-transparent hover:bg-white/10 hover:scale-105'
                      }
                    `}
                    onClick={() => window.innerWidth < 768 && setIsOpen(false)}
                  >
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-yellow-400/20">
                      <Icon className="w-5 h-5 text-yellow-400" />
                    </div>
                    <span className="text-white font-medium">{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-transparent">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
