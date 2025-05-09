import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        duration: 0.5 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-black text-white py-8">
      <motion.div 
        className="container mx-auto px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Logo left aligned */}
        <motion.div 
          className="text-3xl font-bold tracking-wider mb-12"
          variants={itemVariants}
        >
          ATTRIBUTICS
        </motion.div>

        {/* Locations - all in a row */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-24"
          variants={containerVariants}
        >
          {/* Mumbai */}
          <motion.div className="text-sm" variants={itemVariants}>
            <h3 className="font-semibold mb-2">MUMBAI</h3>
            <p className="opacity-75 leading-relaxed">
              1303, Lotus Link Square, New Link Rd<br />
              Next to DN Nagar Metro Station,<br />
              Manmandir Co-operative Housing Society,<br />
              Shitaldevi Chawl, D.N.Nagar, Andheri West,<br />
              Mumbai, Maharashtra 400053
            </p>
          </motion.div>

          {/* Pune */}
          <motion.div className="text-sm" variants={itemVariants}>
            <h3 className="font-semibold mb-2">PUNE</h3>
            <p className="opacity-75 leading-relaxed">
              1303, Lotus Link Square, New Link Rd<br />
              Next to DN Nagar Metro Station,<br />
              Manmandir Co-operative Housing Society,<br />
              Shitaldevi Chawl, D.N.Nagar, Andheri West,<br />
              Mumbai, Maharashtra 400053
            </p>
          </motion.div>

          {/* Bengaluru */}
          <motion.div className="text-sm" variants={itemVariants}>
            <h3 className="font-semibold mb-2">BENGALURU</h3>
            <p className="opacity-75 leading-relaxed">
              1303, Lotus Link Square, New Link Rd<br />
              Next to DN Nagar Metro Station,<br />
              Manmandir Co-operative Housing Society,<br />
              Shitaldevi Chawl, D.N.Nagar, Andheri West,<br />
              Mumbai, Maharashtra 400053
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
export default Footer;