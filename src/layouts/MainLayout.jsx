


import React from 'react';


const MainLayout = ({ children, isLoading }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Main content */}
      <div className="flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;