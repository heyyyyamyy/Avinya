import React, { useState, useEffect } from 'react';
import { Menu, X, Search, Globe, ChevronDown, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Workforce Solutions', href: '/workforce-solutions' },
  { label: 'Career Resources', href: '/career-resources' },
  { label: 'Insights', href: '/insights' },
  { label: 'About Us', href: '/about' },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-tr-xl rounded-bl-xl flex items-center justify-center transition-transform group-hover:scale-110">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-slate-900 leading-none tracking-tight">AVANYA</span>
              <span className="text-xs text-cyan-600 font-semibold tracking-widest">INFOTECH</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                to={item.href}
                className={`text-sm font-semibold transition-colors uppercase tracking-wide ${
                  location.pathname === item.href ? 'text-cyan-600' : 'text-slate-700 hover:text-cyan-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Utilities */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-slate-500 hover:text-cyan-600 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="h-4 w-px bg-slate-300"></div>
            <button className="flex items-center gap-1 text-slate-500 hover:text-cyan-600 transition-colors text-sm font-medium">
              <Globe className="w-4 h-4" />
              <span>EN</span>
              <ChevronDown className="w-3 h-3" />
            </button>
             <Link to="/login" className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all text-sm font-semibold shadow-lg shadow-slate-900/20 hover:shadow-xl hover:-translate-y-0.5 transform">
              <User className="w-4 h-4" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-slate-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-6 px-4 flex flex-col gap-4 animate-fade-in">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              to={item.href}
              className="text-lg font-medium text-slate-800 py-2 border-b border-slate-100 hover:text-cyan-600"
            >
              {item.label}
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-4">
             <Link to="/login" className="w-full flex justify-center items-center gap-2 bg-slate-900 text-white px-4 py-3 rounded-lg hover:bg-slate-800 transition-all text-sm font-semibold">
              <User className="w-4 h-4" />
              <span>Login / Register</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;