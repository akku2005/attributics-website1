// import React from 'react';

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
//       <div className="flex flex-col items-center">
//         {/* Spinner animation */}
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mb-4"></div>

//         {/* Loading text */}
//         <p className="text-orange-500 font-medium text-lg">Loading Attributics...</p>

//         {/* Optional progress bar */}
//         <div className="w-64 h-1 bg-gray-200 rounded-full mt-4 overflow-hidden">
//           <div className="h-full bg-orange-500 animate-pulse"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loader;



import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  
  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 1;
        return newProgress > 100 ? 0 : newProgress;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Spinner with glowing effect */}
        <div className="relative">
          <Loader2 className="w-20 h-20 text-orange-500 animate-spin" />
          <div className="absolute inset-0 w-20 h-20 bg-orange-500 rounded-full opacity-30 blur-md animate-pulse"></div>
        </div>
        
        {/* Loading text with fade animation */}
        <div className="text-2xl font-bold text-white animate-pulse">
          Loading Attributics...
        </div>
        
        {/* Progress bar */}
        <div className="w-72 h-3 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Progress percentage */}
        <div className="text-sm text-gray-400">
          {progress}%
        </div>
      </div>
    </div>
  );
};

export default Loader;