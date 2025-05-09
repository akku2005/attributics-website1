
import { motion } from 'framer-motion';
import { useState } from 'react';
// Icon imports - replace these with your actual icon imports
import Icon1 from '../assets/icons/Vector.svg'; 
import Icon2 from '../assets/icons/Layer.svg' 
import Icon3 from '../assets/icons/Brush.svg'; 
import Icon4 from '../assets/icons/Glob.svg'; 
import Icon5 from '../assets/icons/Glob2.svg'; 
import Icon6 from '../assets/icons/AI.svg'; 
import Icon7 from '../assets/icons/Monitor.svg'; 
// You can add more icon imports as needed when you add more content

export default function OurSolutions() {
  const [hoveredSolution, setHoveredSolution] = useState(null);
  
  // Solutions data with placeholders marked by 'isPlaceholder: true'
  const solutions = [
    {
      id: 1,
      title: "DXP - Liferay, Sitecore & Drupal",
      row: 1,
      isPlaceholder: false,
      icon: Icon1
    },
    {
      id: 2,
      title: "Customer Experience Platforms",
      subtext: "Clevertap, Braze, Moengage",
      row: 1,
      isPlaceholder: false,
      icon: Icon2
    },
    {
      id: 3,
      title: "Personalization",
      subtext: "Optimizely, VWO",
      row: 1,
      isPlaceholder: false,
      icon: Icon3
    },
    {
      id: 4,
      title: "Product and Web Analytics",
      subtext: "Amplitude, GA4 & Adobe Analytics",
      row: 1,
      isPlaceholder: false,
      icon: Icon4
    },
    {
      id: 5,
      title: "Customer 360",
      subtext: "Tealium, Segment & GCP",
      row: 2,
      isPlaceholder: false,
      icon: Icon5
    },
    {
      id: 6,
      title: "Machine Learning and Decision Making",
      row: 2,
      isPlaceholder: false,
      icon: Icon6
    },
    {
      id: 7,
      title: "Data Warehousing & Data Lake",
      subtext: "Google Bigquery / AWS",
      row: 2,
      isPlaceholder: false,
      icon: Icon7
    },
    // Placeholder in row 2 (4th position) for future content
    {
      id: 8,
      title: "",
      row: 2,
      isPlaceholder: true,
      icon: null
    }
  ];
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  // Icon component that uses the imported icons
  const IconComponent = ({ icon }) => {
    if (icon) {
      return <img src={icon} alt="Solution icon" className="w-14 h-14 mb-4" />;
    }
    return (
      <div className="w-16 h-16 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
        <span className="text-xs text-gray-500">ICON</span>
      </div>
    );
  };

  // Empty placeholder component
  const EmptyPlaceholder = () => (
    <></>
  );

  return (
    <div className="min-h-screen flex flex-col py-10 " style={{ backgroundColor: '#21232A' }}>
      <div className="container mx-auto max-w-6xl mt-18">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-20 text-white text-left"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          OUR <br />SOLUTIONS
        </motion.h1>
        
        {/* Row 1 */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {solutions
            .filter(solution => solution.row === 1)
            .map((solution) => (
              <motion.div
                key={solution.id}
                className="relative"
                variants={itemVariants}
                whileHover={solution.isPlaceholder ? {} : { scale: 1.03 }}
                onMouseEnter={() => !solution.isPlaceholder && setHoveredSolution(solution.id)}
                onMouseLeave={() => setHoveredSolution(null)}
              >
                {solution.isPlaceholder ? (
                  <EmptyPlaceholder />
                ) : (
                  <div className="bg-white rounded-full aspect-square flex flex-col items-center justify-center p-6 text-center">
                    <motion.div
                      animate={{
                        scale: hoveredSolution === solution.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent icon={solution.icon} />
                    </motion.div>
                    <h3 className="font-bold text-md mb-1 text-gray-800">{solution.title}</h3>
                    {solution.subtext && (
                      <p className="text-xs text-gray-600">{solution.subtext}</p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
        </motion.div>
        
        {/* Row 2 - With placeholder for future content */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {solutions
            .filter(solution => solution.row === 2)
            .map((solution) => (
              <motion.div
                key={solution.id}
                className="relative"
                variants={itemVariants}
                whileHover={solution.isPlaceholder ? {} : { scale: 1.03 }}
                onMouseEnter={() => !solution.isPlaceholder && setHoveredSolution(solution.id)}
                onMouseLeave={() => setHoveredSolution(null)}
              >
                {solution.isPlaceholder ? (
                  <EmptyPlaceholder />
                ) : (
                  <div className="bg-white rounded-full aspect-square flex flex-col items-center justify-center p-6 text-center">
                    <motion.div
                      animate={{
                        scale: hoveredSolution === solution.id ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent icon={solution.icon} />
                    </motion.div>
                    <h3 className="font-bold text-md mb-1 text-gray-800">{solution.title}</h3>
                    {solution.subtext && (
                      <p className="text-xs text-gray-600">{solution.subtext}</p>
                    )}
                  </div>
                )}
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
}
