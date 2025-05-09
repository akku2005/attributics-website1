import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Effect to detect which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'HeroSection',
        'co-creation-process',
        'our-services',
        'our-solutions',
        'partners',
        'careers',
        'contact'
      ];

      // Find the section that's currently in view
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is in the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Run once to set initial active section
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  // Function to determine if a section is active
  const isActive = (section) => {
    return activeSection === section;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black py-4 ">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo - Changed from Link to button */}
          <button
            onClick={() => scrollToSection('HeroSection')}
            className="flex items-center focus:outline-none cursor-pointer"
          >
            <span className="text-2xl font-bold text-white">Attributics</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('co-creation-process')}
              className={`transition-colors duration-300 text-sm uppercase font-medium cursor-pointer ${
                isActive('co-creation-process')
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Co-Creation Process
            </button>
            <button
              onClick={() => scrollToSection('our-services')}
              className={`transition-colors duration-300 text-sm uppercase font-medium cursor-pointer ${
                isActive('our-services')
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('our-solutions')}
              className={`transition-colors duration-300 text-sm uppercase font-medium  cursor-pointer ${
                isActive('our-solutions')
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Solutions
            </button>
            <button
              onClick={() => scrollToSection('partners')}
              className={`transition-colors duration-300 text-sm uppercase font-medium  cursor-pointer ${
                isActive('partners')
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Partners
            </button>
            <button
              onClick={() => scrollToSection('careers')}
              className={`transition-colors duration-300 text-sm uppercase font-medium cursor-pointer ${
                isActive('careers')
                  ? 'text-orange-500 border-b-2 border-orange-500'
                  : 'text-white hover:text-orange-500'
              }`}
            >
              Careers
            </button>
            <button
              onClick={() => scrollToSection('contact')}
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
              <button
                onClick={() => scrollToSection('HeroSection')}
                className={`transition-colors duration-300 text-sm uppercase font-medium py-2 ${
                  isActive('HeroSection')
                    ? 'text-orange-500 border-l-4 border-orange-500 pl-2'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('co-creation-process')}
                className={`transition-colors duration-300 text-sm uppercase font-medium py-2 ${
                  isActive('co-creation-process')
                    ? 'text-orange-500 border-l-4 border-orange-500 pl-2'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Co-Creation Process
              </button>
              <button
                onClick={() => scrollToSection('our-services')}
                className={`transition-colors duration-300 text-sm uppercase font-medium py-2 ${
                  isActive('our-services')
                    ? 'text-orange-500 border-l-4 border-orange-500 pl-2'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('our-solutions')}
                className={`transition-colors duration-300 text-sm uppercase font-medium py-2 ${
                  isActive('our-solutions')
                    ? 'text-orange-500 border-l-4 border-orange-500 pl-2'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection('partners')}
                className={`transition-colors duration-300 text-sm uppercase font-medium py-2 ${
                  isActive('partners')
                    ? 'text-orange-500 border-l-4 border-orange-500 pl-2'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Partners
              </button>
              <button
                onClick={() => scrollToSection('careers')}
                className={`transition-colors duration-300 text-sm uppercase font-medium py-2 ${
                  isActive('careers')
                    ? 'text-orange-500 border-l-4 border-orange-500 pl-2'
                    : 'text-white hover:text-orange-500'
                }`}
              >
                Careers
              </button>
              <button
                onClick={() => scrollToSection('contact')}
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
