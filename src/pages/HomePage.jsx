// // src/pages/HomePage.jsx
// import React from 'react';
// import Navbar from '../components/Navbar';
// import PartnerPage from './PartnerPage';
// import ContactPage from './Contact';
// import CareersPage from './CareerPage';
// import OurSolutionPage from './OurSolutionPage';
// import OurServicesPage from './OurServicesPage';
// import OurCreationprocessPage from './OurCreationprocessPage';
// import HeroSection from './HeroSection';

// const HomePage = () => {
//   return (
//     <>
//       <Navbar />
    
//       <section id="HeroSection">
//           <HeroSection />
//         </section>

//         <section id="co-creation-process">
//           <OurCreationprocessPage />
//         </section>
        
//         <section id="our-services">
//           <OurServicesPage />
//         </section>
        
//         <section id="our-solutions">
//           <OurSolutionPage />
//         </section>
        
//         <section id="partners">
//           <PartnerPage />
//         </section>
        
//         <section id="careers">
//           <CareersPage />
//         </section>
        
//         <section id="contact">
//           <ContactPage />
//         </section>
   
//     </>
//   );
// };

// export default HomePage;

// src/pages/HomePage.jsx





// src/pages/HomePage.jsx
import React, { lazy, Suspense, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Loader from '../components/Loader';

// Lazy load all content components
const HeroSection = lazy(() => import('./HeroSection'));
const OurCreationprocessPage = lazy(() => import('./OurCreationprocessPage'));
const OurServicesPage = lazy(() => import('./OurServicesPage'));
const OurSolutionPage = lazy(() => import('./OurSolutionPage'));
const PartnerPage = lazy(() => import('./PartnerPage'));
const CareersPage = lazy(() => import('./CareerPage'));
const ContactPage = lazy(() => import('./Contact'));

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (replace with actual loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />

      <Suspense fallback={
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90">
          <div className="animate-pulse rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      }>
        <section id="HeroSection">
          <HeroSection />
        </section>

        <section id="co-creation-process">
          <OurCreationprocessPage />
        </section>

        <section id="our-services">
          <OurServicesPage />
        </section>

        <section id="our-solutions">
          <OurSolutionPage />
        </section>

        <section id="partners">
          <PartnerPage />
        </section>

        <section id="careers">
          <CareersPage />
        </section>

        <section id="contact">
          <ContactPage />
        </section>
      </Suspense>
    </>
  );
};

export default HomePage;
