// import React from 'react';
// import { motion } from 'framer-motion';

// const Footer = () => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: { 
//       opacity: 1,
//       transition: { 
//         staggerChildren: 0.1,
//         duration: 0.5 
//       }
//     }
//   };
  
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { 
//       y: 0, 
//       opacity: 1,
//       transition: { duration: 0.5 }
//     }
//   };

//   return (
//     <footer className="bg-black text-white py-8">
//       <motion.div 
//         className="container mx-auto px-8"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={containerVariants}
//       >
//         {/* Logo left aligned */}
//         <motion.div 
//           className="text-3xl font-bold tracking-wider mb-12"
//           variants={itemVariants}
//         >
//           ATTRIBUTICS
//         </motion.div>

//         {/* Locations - all in a row */}
//         <motion.div 
//           className="grid grid-cols-1 md:grid-cols-3 gap-24"
//           variants={containerVariants}
//         >
//           {/* Mumbai */}
//           <motion.div className="text-sm" variants={itemVariants}>
//             <h3 className="font-semibold mb-2">MUMBAI</h3>
//             <p className="opacity-75 leading-relaxed">
//               1303, Lotus Link Square, New Link Rd<br />
//               Next to DN Nagar Metro Station,<br />
//               Manmandir Co-operative Housing Society,<br />
//               Shitaldevi Chawl, D.N.Nagar, Andheri West,<br />
//               Mumbai, Maharashtra 400053
//             </p>
//           </motion.div>

//           {/* Pune */}
//           <motion.div className="text-sm" variants={itemVariants}>
//             <h3 className="font-semibold mb-2">PUNE</h3>
//             <p className="opacity-75 leading-relaxed">
//               1303, Lotus Link Square, New Link Rd<br />
//               Next to DN Nagar Metro Station,<br />
//               Manmandir Co-operative Housing Society,<br />
//               Shitaldevi Chawl, D.N.Nagar, Andheri West,<br />
//               Mumbai, Maharashtra 400053
//             </p>
//           </motion.div>

//           {/* Bengaluru */}
//           <motion.div className="text-sm" variants={itemVariants}>
//             <h3 className="font-semibold mb-2">BENGALURU</h3>
//             <p className="opacity-75 leading-relaxed">
//               1303, Lotus Link Square, New Link Rd<br />
//               Next to DN Nagar Metro Station,<br />
//               Manmandir Co-operative Housing Society,<br />
//               Shitaldevi Chawl, D.N.Nagar, Andheri West,<br />
//               Mumbai, Maharashtra 400053
//             </p>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </footer>
//   );
// }
// export default Footer;


import { motion } from "framer-motion";
import Logo from "../assets/icons/AttributicsLogo.svg";

function Footer() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  // Footer links data
  const quickLinks = [
    { title: "Features", href: "#features" },
    { title: "Pricing", href: "#pricing" },
    { title: "Case Studies", href: "#case-studies" },
    { title: "Resources", href: "#resources" }
  ];

  const solutions = [
    { title: "Attribution Modeling", href: "#attribution" },
    { title: "Campaign Analytics", href: "#analytics" },
    { title: "Customer Journey Mapping", href: "#journey-mapping" },
    { title: "ROI Optimization", href: "#roi" }
  ];

  const company = [
    { title: "About Us", href: "/about" },
    { title: "Careers", href: "#careers" },
    { title: "Blog", href: "#blog" },
    { title: "Contact", href: "/contact" }
  ];

  const socialLinks = [
    {
      name: "Twitter",
      icon: "M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.897 4.897 0 0 0 2.235.616A4.93 4.93 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144 4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z",
      href: "#twitter"
    },
    {
      name: "LinkedIn",
      icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
      href: "#linkedin"
    },
    {
      name: "Facebook",
      icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
      href: "#facebook"
    },
    {
      name: "GitHub",
      icon: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z",
      href: "#github"
    }
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-black text-white pt-12 pb-6 sm:pt-16 sm:pb-8"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top section with logo and newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 pb-6 md:pb-12 border-b border-gray-800">
          {/* Logo and description - responsive */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-0">
            <div className="flex items-center mb-3 sm:mb-4">
              {/* Mobile placeholder logo */}


              {/* Desktop full logo */}
              <img
                src={Logo}
                alt="Attributics Tech Logo"
                className="h-6 sm:h-8 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 max-w-md">
              Revolutionizing marketing attribution with AI-powered analytics that deliver actionable insights for modern businesses.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.name}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter section - responsive */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Subscribe to our newsletter</h3>
            <p className="text-gray-400 text-sm mb-3 sm:mb-4">
              Get the latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 flex-grow text-sm"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-orange-500 text-black font-medium rounded-lg hover:bg-orange-600 transition-colors text-sm"
                type="submit"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Main footer links - responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 md:mb-12">
          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center text-sm"
                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  >
                    <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.title}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Solutions</h3>
            <ul className="space-y-2">
              {solutions.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center text-sm"
                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  >
                    <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.title}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors flex items-center text-sm"
                    whileHover={{ x: 3, transition: { duration: 0.2 } }}
                  >
                    <svg className="w-3 h-3 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.title}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Us */}
          <motion.div variants={itemVariants}>
            <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 mt-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-400 text-sm">Liberty House, D-1/1, N Main Rd, Liberty Phase 2, Ragvilas Society<br />Koregaon Park, Pune, Maharashtra 411001</span>
              </li>
              <li className="flex items-center">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:hr@attributics.com" className="text-gray-400 hover:text-white transition-colors text-sm">hr@attributics.com</a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section with copyright and policies */}
        <div className="pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <motion.div variants={itemVariants} className="mb-3 md:mb-0 flex items-center text-sm">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Attributics Tech Pvt Ltd
            </p>
            <svg
              className="w-3 h-3 mx-1 text-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <p className="text-gray-400">All rights reserved.</p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-2 md:gap-4 justify-center">
            <a href="#terms" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Terms of Service</a>
            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Privacy Policy</a>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
