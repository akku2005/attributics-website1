import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex flex-col items-center">
        {/* Spinner animation */}
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mb-4"></div>

        {/* Loading text */}
        <p className="text-orange-500 font-medium text-lg">Loading Attributics...</p>

        {/* Optional progress bar */}
        <div className="w-64 h-1 bg-gray-200 rounded-full mt-4 overflow-hidden">
          <div className="h-full bg-orange-500 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
