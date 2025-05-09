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





import React, { lazy, Suspense, useState, useEffect } from 'react';

import Loader from '../components/Loader';
import MainLayout from '../layouts/MainLayout';

const Navbar = lazy(() => import('../components/Navbar'));
const Footer = lazy(() => import('../components/Footer'));
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
  
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <MainLayout>
      {isLoading ? (
        <Loader />
      ) : (
        <Suspense >
          <Navbar />
          
          <main className="flex-grow">
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
          </main>
          
          <Footer />
        </Suspense>
      )}
    </MainLayout>
  );
};

export default HomePage;