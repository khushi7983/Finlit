import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/finlit-logo.png';

const Navbar = () => {
  const [language, setLanguage] = useState('English');
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation(); // To highlight active page

  // Sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Our Achievements', path: '/awards' }
  ];

  return (
    <nav
      className={
        `z-50 flex items-center justify-between shadow-lg px-4 sm:px-8 transition-all duration-300 ` +
        (isSticky
          ? 'fixed top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl py-1'
          : 'fixed top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl py-1')
      }
      style={{ maxWidth: '90vw', width: 'calc(100% - 40px)' }}
    >
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Left: Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="FinLit Logo" className="h-16 sm:h-20 w-auto ml-2 sm:ml-4" />
        </Link>

        {/* Mobile Hamburger */}
        <div
          className="sm:hidden text-white text-2xl mr-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Center: Nav Links (Desktop) */}
        <div className="hidden sm:flex space-x-6">
          {navItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`text-white font-semibold px-2 py-1 ${
                location.pathname === path ? 'border-b-2 border-white' : ''
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Right: Login + Language (Desktop) */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link
            to="/login-signup"
            className="text-white font-semibold px-4 py-2 hover:opacity-90"
          >
            Login / Get Started
          </Link>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded p-1"
          >
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-slate-900 flex flex-col items-center space-y-4 py-4 sm:hidden z-40">
            {navItems.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className="text-white font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
            {/* Mobile: Login */}
            <Link
              to="/login-signup"
              className="text-white font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Login / Get Started
            </Link>

            {/* Mobile: Language */}
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="border rounded p-1"
            >
              <option>English</option>
              <option>Hindi</option>
            </select>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
