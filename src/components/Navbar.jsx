import { useState, useEffect } from 'react';
import logo from '../assets/finlit-logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [language, setLanguage] = useState('English');
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={
        `z-50 flex items-center justify-between shadow-lg px-8 transition-all duration-300 ` +
        (isSticky
          ? 'fixed top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl py-1'
          : 'fixed top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl py-1')
      }
      style={{ maxWidth: '90vw', width: 'calc(100% - 40px)' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <Link to="/">
          <img src={logo} alt="FinLit Logo" className="h-20 w-auto ml-4" />
        </Link>

        {/* Center: Nav Links */}
        <div className="flex space-x-6">
          {[
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
            { name: 'What We Do', path: '/what-we-do' },
            { name: 'Our Achievements', path: '/awards' }
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className="text-white font-semibold px-2 py-1"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Right: Login + Language */}
        <div className="flex items-center space-x-6">
          <button
            className="text-white font-semibold px-4 py-2 transition duration-200 hover:opacity-90"
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
