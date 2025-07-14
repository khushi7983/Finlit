import { useState } from 'react';
import logo from '../assets/logo.jpeg';

const Navbar = () => {
  const [language, setLanguage] = useState('English');

  return (
    <nav className="sticky top-0 bg-slate-200 shadow-md z-10 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <img src={logo} alt="FinLit Logo" className="h-20 w-auto ml-4" />

        {/* Center: Nav Links */}
        <div className="flex space-x-6">
          {['Home', 'About Us', 'What We Do', 'Our Achievements'].map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-white font-semibold px-2 py-1"
              style={{
                background:
                  'linear-gradient(90deg, rgba(2, 0, 36, 0.9) 0%, rgba(14, 14, 110, 0.9) 36%, rgba(0, 212, 255, 0.9) 100%)',
                borderRadius: '10px',
              }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right: Login + Language */}
        <div className="flex items-center space-x-6">
          <button
            className="text-white font-semibold px-4 py-2 transition duration-200 hover:opacity-90"
            style={{
              background:
                'linear-gradient(90deg, rgba(2, 0, 36, 0.9) 0%, rgba(14, 14, 110, 0.9) 36%, rgba(0, 212, 255, 0.9) 100%)',
              borderRadius: '10px',
            }}
          >
            Login / Get Started
          </button>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded p-1"
          >
            <option>English</option>
            <option>Hindi</option>
           
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;