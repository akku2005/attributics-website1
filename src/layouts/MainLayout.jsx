import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MouseFollowCircle from '../components/MouseFollowCircle';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Mouse following circle - positioned absolutely to cover entire viewport */}
      <MouseFollowCircle />

      {/* Main content */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
