import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Career', href: '/career' },
    { name: 'Consultation', href: '/consultation' },
    { name: 'Contact', href: '/contact' },
  ];

  const isHomePage = location.pathname === '/';

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Link to="/">
              <Logo isScrolled={isScrolled || !isHomePage} />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled || !isHomePage
                    ? 'text-gray-800 hover:text-primary-600'
                    : 'text-gray-100 hover:text-white'
                } ${location.pathname === link.href ? 'text-primary-600' : ''}`}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  {link.name}
                </motion.span>
              </Link>
            ))}
            <Link to="/get-started">
              <motion.button
                className="px-4 py-2 rounded-full bg-primary-600 text-white text-sm font-medium flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
              </motion.button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className={`p-2 rounded-full ${
                isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0
        }}
        transition={{
          height: { duration: 0.3 },
          opacity: { duration: 0.2 }
        }}
        className="md:hidden bg-white overflow-hidden shadow-lg absolute w-full left-0 top-full z-50"
      >
        <div className="px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={link.href}
                onClick={toggleMobileMenu}
                className={`block py-3 text-gray-800 font-medium hover:text-primary-600 transition-colors ${
                  location.pathname === link.href ? 'text-primary-600' : ''
                }`}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.2 }}
          >
            <Link to="/get-started" className="w-full block" onClick={toggleMobileMenu}>
              <button className="mt-4 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium flex items-center justify-center">
                Get Started
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.header>
  );
};

const Logo: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => (
  <div className="flex items-center">
    <div className={`mr-2 ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
      <Globe className="h-8 w-8" />
    </div>
    <div>
      <h1 className={`text-xl font-display font-bold ${
        isScrolled
          ? 'bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent'
          : 'text-white'
      }`}>
        Optrya
      </h1>
      <p className={`text-xs tracking-wider -mt-1 ${
        isScrolled ? 'text-gray-600' : 'text-gray-300'
      }`}>
        TECHNOLOGIES
      </p>
    </div>
  </div>
);

export default Navbar;