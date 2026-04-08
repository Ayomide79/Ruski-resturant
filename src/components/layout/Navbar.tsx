import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, ChefHat } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  // Check if we're on the home page (hero section)
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    // Check initial scroll position
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menu', path: '/menu' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Determine if we need dark text (scrolled OR not on homepage)
  const needsDarkText = isScrolled || !isHomePage;
  // Determine if we need dark background (scrolled OR not on homepage)
  const needsDarkBg = isScrolled || !isHomePage;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      needsDarkBg 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform">
              <ChefHat className="w-6 h-6 text-white" />
            </div>
            <span className={`text-2xl font-bold tracking-tight transition-colors ${
              needsDarkText ? 'text-slate-900 dark:text-white' : 'text-white'
            }`}>
              RuskiBite<span className="text-amber-500">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive(link.path)
                    ? 'text-amber-500 bg-amber-50 dark:bg-amber-900/20'
                    : needsDarkText
                      ? 'text-slate-700 dark:text-slate-300 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className={`w-px h-6 mx-2 ${needsDarkText ? 'bg-slate-300 dark:bg-slate-700' : 'bg-white/20'}`} />
            
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${
                needsDarkText 
                  ? 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800' 
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <Link to="/contact">
              <Button 
                variant={needsDarkBg ? 'primary' : 'secondary'} 
                size="sm"
                className={!needsDarkBg ? 'border-white/30 text-white ml-2' : 'ml-2'}
              >
                Book Table
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${needsDarkText ? 'text-slate-700 dark:text-slate-300' : 'text-white'}`}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-full ${needsDarkText ? 'text-slate-700 dark:text-slate-300' : 'text-white'}`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 mt-4' : 'max-h-0'
        }`}>
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-3 rounded-xl font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-amber-500 bg-amber-50 dark:bg-amber-900/20'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <Link to="/contact" className="block">
                <Button className="w-full">Book Table</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};