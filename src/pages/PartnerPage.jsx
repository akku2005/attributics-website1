import { motion } from 'framer-motion';
import { useState } from 'react';

// Import partner logos
import amplitudeLogo from '../assets/icons/Amplitude.svg';
import brazeLogo from '../assets/icons/Braze.svg';
import tealiumLogo from '../assets/icons/Tealium.svg';
import googleLogo from '../assets/icons/Google.svg';
import moengageLogo from '../assets/icons/MoEngage.svg';
import clevertapLogo from '../assets/icons/ClaverTap.svg';
import optimizelyLogo from '../assets/icons/Optimizely.svg';
import liferayLogo from '../assets/icons/Liferay.svg';

export default function PartnerPlatforms() {
  const [hoveredPartner, setHoveredPartner] = useState(null);

  const partners = [
    { name: 'Amplitude', category: 'top' },
    { name: 'Braze', category: 'top' },
    { name: 'Tealium', category: 'top' },
    { name: 'Google', category: 'top' },
    { name: 'MoEngage', category: 'bottom' },
    { name: 'CleverTap', category: 'bottom' },
    { name: 'Optimizely', category: 'bottom' },
    { name: 'Liferay', category: 'bottom' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4" style={{ backgroundColor: '#21232A' }}>
      <motion.div
        className="bg-white rounded-3xl w-full max-w-7xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full p-8 md:p-24">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-12 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            PARTNER PLATFORMS
          </motion.h1>

          {/* Grid container for all logos */}
          <div>
            {/* Top row of partners */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                {partners.filter(p => p.category === 'top').map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    variants={item}
                    className={`flex justify-center items-center p-6 ${index < 3 ? 'border-r' : ''} border-b border-gray-200`}
                    onMouseEnter={() => setHoveredPartner(partner.name)}
                    onMouseLeave={() => setHoveredPartner(null)}
                  >
                    <div className="h-16 flex items-center justify-center">
                      <PartnerLogo name={partner.name} isHovered={hoveredPartner === partner.name} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Bottom row of partners */}
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                {partners.filter(p => p.category === 'bottom').map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    variants={item}
                    className={`flex justify-center items-center p-6 ${index < 3 ? 'border-r' : ''} border-gray-200`}
                    onMouseEnter={() => setHoveredPartner(partner.name)}
                    onMouseLeave={() => setHoveredPartner(null)}
                  >
                    <div className="h-16 flex items-center justify-center">
                      <PartnerLogo name={partner.name} isHovered={hoveredPartner === partner.name} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function PartnerLogo({ name, isHovered }) {
  return (
    <motion.img
      src={logos[name.toLowerCase()]}
      alt={name}
      className="max-h-10 max-w-full object-contain transition duration-300"
      animate={{
        scale: isHovered ? 1.1 : 1,
        opacity: isHovered ? 1 : 0.85
      }}
      transition={{ duration: 0.3 }}
    />
  );
}

const logos = {
  amplitude: amplitudeLogo,
  braze: brazeLogo,
  tealium: tealiumLogo,
  google: googleLogo,
  moengage: moengageLogo,
  clevertap: clevertapLogo,
  optimizely: optimizelyLogo,
  liferay: liferayLogo
};