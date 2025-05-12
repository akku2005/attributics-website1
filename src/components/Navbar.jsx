// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // Effect to detect which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      // Only track sections on home page
      if (location.pathname === '/') {
        const sections = [
          'HeroSection',
          'co-creation-process',
          'our-services',
          'our-solutions',
          'partners',
          'careers',
          'contact'
        ];

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  const handleNavigation = (id) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      navigate('/');
      // Store the section ID in sessionStorage
      sessionStorage.setItem('scrollToSection', id);
    } else {
      // If already on home page, just scroll
      scrollToSection(id);
    }
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      // Remove hash from URL after scrolling
      if (window.location.hash) {
        window.history.replaceState(null, null, ' ');
      }
    }
  };

  // Check for section ID in URL hash on home page load
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.substring(1);
      scrollToSection(sectionId);
    }
  }, [location]);

  // Check for stored section ID when navigating to home page
  useEffect(() => {
    if (location.pathname === '/') {
      const sectionId = sessionStorage.getItem('scrollToSection');
      if (sectionId) {
        scrollToSection(sectionId);
        sessionStorage.removeItem('scrollToSection');
      }
    }
  }, [location.pathname]);

  const isActive = (section) => {
    return activeSection === section;
  };

  // Function to handle logo click - scroll to top
  const handleLogoClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo - now with proper scroll-to-top behavior */}
          <Link
            to="/"
            className="flex items-center focus:outline-none"
            onClick={handleLogoClick}
          >
            <span className="text-2xl font-bold text-white">Attributics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavigation('co-creation-process')}
              className={`transition-colors duration-300 text-sm uppercase font-medium cursor-pointer ${
                isActive('co-creation-process')
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Co-Creation Process
            </button>
            <button
              onClick={() => handleNavigation('our-services')}
              className={`transition-colors duration-300 text-sm uppercase font-medium cursor-pointer ${
                isActive('our-services')
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavigation('our-solutions')}
              className={`transition-colors duration-300 text-sm uppercase font-medium cursor-pointer ${
                isActive('our-solutions')
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Solutions
            </button>
            <button
              onClick={() => handleNavigation('partners')}
              className={`transition-colors duration-300 text-sm uppercase font-medium cursor-pointer ${
                isActive('partners')
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Partners
            </button>
            <button
              onClick={() => handleNavigation('careers')}
              className={`transition-colors duration-300 text-sm uppercase font-medium cursor-pointer ${
                isActive('careers')
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Careers
            </button>
            <button
              onClick={() => handleNavigation('contact')}
              className={`transition-colors duration-300 text-sm uppercase font-medium cursor-pointer ${
                isActive('contact')
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-black rounded-lg shadow-lg p-4 absolute left-4 right-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`transition-colors duration-300 text-sm uppercase font-medium py-2 ${
                  location.pathname === '/'
                    ? 'text-orange-500 border-l-4 border-orange-500 pl-2'
                    : 'text-white hover:text-orange-500'
                }`}
                onClick={handleLogoClick}
              >
                Home
              </Link>
              <button
                onClick={() => {
                  handleNavigation('co-creation-process');
                  setIsOpen(false);
                }}
                className={`transition-colors duration-300 text-sm uppercase font-medium py-2 ${
                  isActive('co-creation-process')
                    ? 'text-orange-500 border-l-4 border-orange-500 pl-2'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Co-Creation Process
              </button>
              <button
                onClick={() => {
                  handleNavigation('our-services');
                  setIsOpen(false);
                }}
                className={`transition-colors duration-300 text-sm uppercase font-medium py-2 ${
                  isActive('our-services')
                    ? 'text-orange-500 border-l-4 border-orange-500 pl-2'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => {
                  handleNavigation('our-solutions');
                  setIsOpen(false);
                }}
                className={`transition-colors duration-300 text-sm uppercase font-medium py-2 ${
                  isActive('our-solutions')
                    ? 'text-orange-500 border-l-4 border-orange-500 pl-2'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Solutions
              </button>
              <button
                onClick={() => {
                  handleNavigation('partners');
                  setIsOpen(false);
                }}
                className={`transition-colors duration-300 text-sm uppercase font-medium py-2 ${
                  isActive('partners')
                    ? 'text-orange-500 border-l-4 border-orange-500 pl-2'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Partners
              </button>
              <button
                onClick={() => {
                  handleNavigation('careers');
                  setIsOpen(false);
                }}
                className={`transition-colors duration-300 text-sm uppercase font-medium py-2 ${
                  isActive('careers')
                    ? 'text-orange-500 border-l-4 border-orange-500 pl-2'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Careers
              </button>
              <button
                onClick={() => {
                  handleNavigation('contact');
                  setIsOpen(false);
                }}
                className={`transition-colors duration-300 text-sm uppercase font-medium py-2 ${
                  isActive('contact')
                    ? 'text-orange-500 border-l-4 border-orange-500 pl-2'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
