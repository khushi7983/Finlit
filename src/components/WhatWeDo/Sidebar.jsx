import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Menu, GraduationCap, Mic, Newspaper, BookOpen, HelpCircle, Map, X } from 'lucide-react';

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: 'micro-courses', label: 'FinLit Micro-courses', icon: GraduationCap },
    { path: 'financially-speaking', label: 'Financially Speaking', icon: Mic },
    { path: 'finlit-blogs', label: 'FinLit Blogs', icon: Newspaper },
    { path: 'finterms', label: 'FinTerms', icon: BookOpen },
    { path: 'mutual-funds', label: 'Mutual Funds', icon: HelpCircle },
    { path: 'esg-funds', label: 'ESG ', icon: Map },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="flex min-h-screen bg-slate-900 text-white pt-20">
      {/* Mobile Hamburger - Fixed position */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-[120px] left-4 z-50 p-3 bg-slate-800 rounded-lg shadow-lg border border-slate-700"
      >
        <Menu className="w-6 h-6 text-yellow-400" />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:sticky top-20 h-[calc(100vh-80px)] w-72 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
          transform transition-all duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          md:relative md:transform-none`}
      >
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-end p-4 border-b border-slate-700">
          <button
            onClick={closeSidebar}
            className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-yellow-400" />
          </button>
        </div>

        <div className="pt-2 md:pt-6">
          <nav className="p-4 space-y-3">
            {navItems.map(({ path, label, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-yellow-500/20 border-l-4 border-yellow-400 shadow-lg' 
                    : 'hover:bg-slate-700 hover:border-l-4 hover:border-slate-600'
                  }`
                }
                onClick={() => {
                  // Close sidebar on mobile after navigation
                  if (window.innerWidth < 768) {
                    closeSidebar();
                  }
                }}
              >
                <div className={`w-9 h-9 flex items-center justify-center rounded-md transition-colors
                  ${({ isActive }) => isActive ? 'bg-yellow-400/20' : 'bg-slate-700/50'}`}>
                  <Icon className="text-yellow-400 w-5 h-5" />
                </div>
                <span className="font-medium">{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-4 md:p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;