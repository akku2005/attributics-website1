// src/hooks/useScrollToSection.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * A hook to handle scrolling to a section based on URL hash
 */
const useScrollToSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If no hash, scroll to top of page
      window.scrollTo(0, 0);
    }
  }, [hash]);
};

export default useScrollToSection;