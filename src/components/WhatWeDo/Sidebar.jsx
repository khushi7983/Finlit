import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Menu, GraduationCap, Mic, Newspaper, BookOpen, HelpCircle, Map } from 'lucide-react';

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: 'micro-courses', label: 'FinLit Micro-courses', icon: GraduationCap },
    { path: 'financially-speaking', label: 'Financially Speaking', icon: Mic },
    { path: 'finlit-blogs', label: 'FinLit Blogs', icon: Newspaper },
    { path: 'finterms', label: 'FinTerms', icon: BookOpen },
    { path: 'mutual-funds', label: 'Mutual Funds', icon: HelpCircle },
    { path: 'ESG Funds', label: 'ESG ', icon: Map },
  ];

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex min-h-screen bg-slate-900 text-white pt-[100px]">
      {/* Mobile Hamburger */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-[100px] left-4 z-50 p-3 bg-slate-800 rounded-lg shadow"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`w-72 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
          md:sticky md:top-[100px] md:h-[calc(100vh-100px)] transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} z-40`}
      >
        <div className="pt-6">
          <nav className="p-4 space-y-3">
            {navItems.map(({ path, label, icon: Icon }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-lg transition
                  ${isActive ? 'bg-yellow-500/20 border-l-4 border-yellow-400' : 'hover:bg-slate-700'}`
                }
                onClick={() => window.innerWidth < 768 && setIsOpen(false)}
              >
                <div className="w-9 h-9 flex items-center justify-center bg-yellow-400/20 rounded-md">
                  <Icon className="text-yellow-400 w-5 h-5" />
                </div>
                <span className="font-medium">{label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default SidebarLayout;