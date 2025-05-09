// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Sample images (replace with your actual image paths)
// const sampleImages = {
//   cx: [
//     "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
//     "https://images.unsplash.com/photo-1552664730-d307ca884978",
//     "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
//     "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
//     "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d"
//   ],
//   data: [
//     "https://images.unsplash.com/photo-1639322537228-f710d846310a",
//     "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
//     "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
//     "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
//     "https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
//   ],
//   digital: [
//     "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
//     "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
//     "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
//     "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
//     "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
//   ]
// };

// export default function ServicesSection() {
//   const [activeService, setActiveService] = useState("cx");
//   const [selectedImageIndex, setSelectedImageIndex] = useState(null);

//   const services = [
//     {
//       id: "cx",
//       title: "CX TRANSFORMATION",
//       background: "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
//       items: [
//         { title: "CX & MarTech", description: "Consulting Program Strategy" },
//         { title: "Value Articulation", description: "& Value realization blueprints" },
//         { title: "Goals / Objectives", description: "and MarTech program plan" },
//         { title: "Service Blueprints &", description: "Multiyear MarTech roadmap" },
//         { title: "Detailed Implementation Plan", description: "" }
//       ]
//     },
//     {
//       id: "data",
//       title: "DATA TRANSFORMATION",
//       background: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
//       items: [
//         { title: "Data Strategy", description: "Enterprise data roadmap" },
//         { title: "Data Architecture", description: "Scalable infrastructure design" },
//         { title: "Data Governance", description: "Compliance & security frameworks" },
//         { title: "Data Analytics", description: "Actionable business insights" },
//         { title: "AI & Machine Learning", description: "Predictive modeling solutions" }
//       ]
//     },
//     {
//       id: "digital",
//       title: "DIGITAL TRANSFORMATION",
//       background: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
//       items: [
//         { title: "Digital Strategy", description: "Future-ready business models" },
//         { title: "Digital Experience", description: "Customer journey optimization" },
//         { title: "Digital Platforms", description: "Scalable technology ecosystems" },
//         { title: "Cloud Transformation", description: "Agile infrastructure solutions" },
//         { title: "Digital Innovation", description: "Emerging technology adoption" }
//       ]
//     }
//   ];

//   const activeServiceData = services.find(service => service.id === activeService);

//   const openImageViewer = (index) => {
//     setSelectedImageIndex(index);
//   };

//   const closeImageViewer = () => {
//     setSelectedImageIndex(null);
//   };

//   const goToNextImage = () => {
//     setSelectedImageIndex(prev =>
//       prev === sampleImages[activeService].length - 1 ? 0 : prev + 1
//     );
//   };

//   const goToPrevImage = () => {
//     setSelectedImageIndex(prev =>
//       prev === 0 ? sampleImages[activeService].length - 1 : prev - 1
//     );
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center transition-all duration-700"
//         style={{
//           backgroundImage: `url(${activeServiceData.background})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-70"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col">
//         {/* Main Content Area */}
//         <div className="flex-1 flex flex-col md:flex-row p-8 md:p-16 lg:p-24">
//           {/* Left Section - Service Title */}
//           <div className="w-full md:w-1/3 mb-8 md:mb-0">
//             <motion.h1
//               className="text-5xl md:text-6xl font-bold text-white"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               OUR <br /> SERVICES
//             </motion.h1>
//           </div>

//           {/* Right Section - Service Cards */}
//           <div className="w-full md:w-2/3">
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//               <AnimatePresence mode="wait">
//                 {activeServiceData.items.map((item, index) => (
//                   <motion.div
//                     key={`${activeService}-${index}`}
//                     className="bg-gray-800 bg-opacity-80 p-4 rounded-lg cursor-pointer"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -20 }}
//                     transition={{ duration: 0.3, delay: index * 0.1 }}
//                     onClick={() => openImageViewer(index)}
//                     whileHover={{ scale: 1.03 }}
//                   >
//                     <h3 className="text-white font-medium">{item.title}</h3>
//                     {item.description && (
//                       <p className="text-gray-300 text-sm mt-1">{item.description}</p>
//                     )}
//                   </motion.div>
//                 ))}
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section - Service Categories */}
//         <div className="p-8 md:p-16 lg:p-24 pt-0">
//           <div className="flex flex-wrap md:flex-nowrap gap-4">
//             {services.map((service) => (
//               <motion.div
//                 key={service.id}
//                 className={`flex-1 ${activeService === service.id ? "text-white" : "text-gray-500"}`}
//                 onClick={() => {
//                   setActiveService(service.id);
//                   setSelectedImageIndex(null);
//                 }}
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//               >
//                 <h2 className="text-4xl md:text-5xl font-bold cursor-pointer">
//                   {service.title.split(" ")[0]} <br /> {service.title.split(" ")[1]}
//                 </h2>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Image Viewer Modal */}
//       <AnimatePresence>
//         {selectedImageIndex !== null && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeImageViewer}
//           >
//             <div className="relative w-full max-w-5xl h-[80vh]">
//               <img
//                 src={sampleImages[activeService][selectedImageIndex]}
//                 alt="Service detail"
//                 className="w-full h-full object-contain"
//               />

//               {/* Navigation buttons */}
//               <button
//                 className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   goToPrevImage();
//                 }}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </button>

//               <button
//                 className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   goToNextImage();
//                 }}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </button>

//               {/* Close button */}
//               <button
//                 className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   closeImageViewer();
//                 }}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </button>

//               {/* Image indicators */}
//               <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
//                 {sampleImages[activeService].map((_, index) => (
//                   <button
//                     key={index}
//                     className={`w-3 h-3 rounded-full ${selectedImageIndex === index ? "bg-orange-500" : "bg-gray-500"}`}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setSelectedImageIndex(index);
//                     }}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// // Sample images (replace with your actual image paths)
// const sampleImages = {
//   cx: [
//     "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
//     "https://images.unsplash.com/photo-1552664730-d307ca884978",
//     "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
//     "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
//     "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d"
//   ],
//   data: [
//     "https://images.unsplash.com/photo-1639322537228-f710d846310a",
//     "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
//     "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
//     "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
//     "https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
//   ],
//   digital: [
//     "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
//     "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
//     "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
//     "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
//     "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
//   ]
// };

// export default function ServicesSection() {
//   const [activeService, setActiveService] = useState("cx");
//   const [selectedImageIndex, setSelectedImageIndex] = useState(null);
//   const [hoverIndex, setHoverIndex] = useState(null);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [activeItemIndex, setActiveItemIndex] = useState(null);

//   const services = [
//     {
//       id: "cx",
//       title: "CX TRANSFORMATION",
//       subtitle: "Elevate customer experiences",
//       background: "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
//       color: "from-orange-500 to-red-600",
//       glowColor: "rgba(249, 115, 22, 0.2)",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
//           <circle cx="9" cy="7" r="4"></circle>
//           <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
//           <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
//         </svg>
//       ),
//       items: [
//         { title: "CX & MarTech", description: "Consulting Program Strategy", icon: "🎯" },
//         { title: "Value Articulation", description: "& Value realization blueprints", icon: "💎" },
//         { title: "Goals / Objectives", description: "and MarTech program plan", icon: "🚀" },
//         { title: "Service Blueprints", description: "Multiyear MarTech roadmap", icon: "📊" },
//         { title: "Implementation Plan", description: "Detailed execution strategy", icon: "⚙️" }
//       ]
//     },
//     {
//       id: "data",
//       title: "DATA TRANSFORMATION",
//       subtitle: "Unlock data-driven decisions",
//       background: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
//       color: "from-blue-500 to-purple-600",
//       glowColor: "rgba(59, 130, 246, 0.2)",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
//           <polyline points="2 17 12 22 22 17"></polyline>
//           <polyline points="2 12 12 17 22 12"></polyline>
//         </svg>
//       ),
//       items: [
//         { title: "Data Strategy", description: "Enterprise data roadmap", icon: "🗺️" },
//         { title: "Data Architecture", description: "Scalable infrastructure design", icon: "🏗️" },
//         { title: "Data Governance", description: "Compliance & security frameworks", icon: "🔒" },
//         { title: "Data Analytics", description: "Actionable business insights", icon: "📈" },
//         { title: "AI & Machine Learning", description: "Predictive modeling solutions", icon: "🧠" }
//       ]
//     },
//     {
//       id: "digital",
//       title: "DIGITAL TRANSFORMATION",
//       subtitle: "Modernize and innovate",
//       background: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
//       color: "from-green-500 to-teal-600",
//       glowColor: "rgba(16, 185, 129, 0.2)",
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//           <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
//           <line x1="8" y1="21" x2="16" y2="21"></line>
//           <line x1="12" y1="17" x2="12" y2="21"></line>
//         </svg>
//       ),
//       items: [
//         { title: "Digital Strategy", description: "Future-ready business models", icon: "🌐" },
//         { title: "Digital Experience", description: "Customer journey optimization", icon: "✨" },
//         { title: "Digital Platforms", description: "Scalable technology ecosystems", icon: "⚡" },
//         { title: "Cloud Transformation", description: "Agile infrastructure solutions", icon: "☁️" },
//         { title: "Digital Innovation", description: "Emerging technology adoption", icon: "💡" }
//       ]
//     }
//   ];

//   const activeServiceData = services.find(service => service.id === activeService);

//   const openImageViewer = (index) => {
//     setSelectedImageIndex(index);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeImageViewer = () => {
//     setSelectedImageIndex(null);
//     document.body.style.overflow = 'auto';
//   };

//   const goToNextImage = () => {
//     setSelectedImageIndex(prev =>
//       prev === sampleImages[activeService].length - 1 ? 0 : prev + 1
//     );
//   };

//   const goToPrevImage = () => {
//     setSelectedImageIndex(prev =>
//       prev === 0 ? sampleImages[activeService].length - 1 : prev - 1
//     );
//   };

//   const handleServiceChange = (serviceId) => {
//     if (serviceId !== activeService && !isTransitioning) {
//       setIsTransitioning(true);
//       setActiveService(serviceId);
//       setSelectedImageIndex(null);
//       setActiveItemIndex(null);

//       // Reset transition state after animation completes
//       setTimeout(() => {
//         setIsTransitioning(false);
//       }, 700);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (selectedImageIndex === null) return;

//     if (e.key === 'ArrowRight') {
//       goToNextImage();
//     } else if (e.key === 'ArrowLeft') {
//       goToPrevImage();
//     } else if (e.key === 'Escape') {
//       closeImageViewer();
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('keydown', handleKeyDown);
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [selectedImageIndex, activeService]);

//   // Background variants
//   const backgroundVariants = {
//     initial: { scale: 1.1, opacity: 0 },
//     animate: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
//     exit: { scale: 1.1, opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }
//   };

//   // Service category variants
//   const serviceVariants = {
//     inactive: { opacity: 0.5, y: 0 },
//     active: { opacity: 1, y: 0 },
//     hover: { opacity: 0.8, y: -5 }
//   };

//   // Card variants
//   const cardVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.5,
//         ease: "easeOut"
//       }
//     }),
//     exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
//     hover: {
//       y: -10,
//       boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//       transition: { type: "spring", stiffness: 300, damping: 20 }
//     }
//   };

//   return (
//     <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans">
//       {/* Background Image with Animation */}
//       <AnimatePresence initial={false}>
//         <motion.div
//           key={activeService}
//           className="absolute inset-0 bg-cover bg-center"
//           initial="initial"
//           animate="animate"
//           exit="exit"
//           variants={backgroundVariants}
//           style={{
//             backgroundImage: `url(${activeServiceData.background})`,
//           }}
//         >
//           {/* Gradient overlay */}
//           <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90"></div>

//           {/* Animated particle background */}
//           <div className="absolute inset-0 overflow-hidden">
//             {[...Array(20)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className={`absolute rounded-full bg-gradient-to-br ${activeServiceData.color} opacity-20`}
//                 initial={{
//                   x: Math.random() * 100 + "%",
//                   y: Math.random() * 100 + "%",
//                   scale: Math.random() * 0.5 + 0.2,
//                 }}
//                 animate={{
//                   x: [
//                     Math.random() * 100 + "%",
//                     Math.random() * 100 + "%",
//                     Math.random() * 100 + "%",
//                   ],
//                   y: [
//                     Math.random() * 100 + "%",
//                     Math.random() * 100 + "%",
//                     Math.random() * 100 + "%",
//                   ],
//                 }}
//                 transition={{
//                   duration: Math.random() * 20 + 20,
//                   ease: "linear",
//                   repeat: Infinity,
//                   repeatType: "reverse",
//                 }}
//                 style={{
//                   width: Math.random() * 300 + 50,
//                   height: Math.random() * 300 + 50,
//                   filter: "blur(80px)",
//                 }}
//               />
//             ))}
//           </div>
//         </motion.div>
//       </AnimatePresence>

//       {/* Subtle light beam effect */}
//       <div className="absolute top-0 left-1/4 w-1/2 h-full pointer-events-none">
//         <motion.div
//           className="absolute top-0 h-full w-full"
//           initial={{ opacity: 0.05 }}
//           animate={{
//             opacity: [0.05, 0.08, 0.05],
//             rotateZ: [5, 0, 5]
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             repeatType: "reverse"
//           }}
//           style={{
//             background: `linear-gradient(0deg, transparent 0%, ${activeServiceData.glowColor} 50%, transparent 100%)`,
//             transform: "skewX(-20deg)"
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 min-h-screen flex flex-col">
//         {/* Header */}
//         <div className="pt-16 px-6 sm:px-8 md:px-16 lg:px-24">
//           <motion.div
//             className="flex items-center space-x-3"
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             <div className={`h-1 w-10 bg-gradient-to-r ${activeServiceData.color} rounded-full`}></div>
//             <p className="text-white/60 uppercase tracking-widest text-sm font-medium">Transform your business</p>
//           </motion.div>

//           <div className="flex flex-col md:flex-row md:items-end justify-between mt-6">
//             <motion.h1
//               className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-0"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3, duration: 0.5 }}
//             >
//               OUR <br />
//               <span className={`bg-clip-text text-transparent bg-gradient-to-r ${activeServiceData.color}`}>
//                 SERVICES
//               </span>
//             </motion.h1>

//             <motion.div
//               className="md:text-right"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//             >
//               <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-md mb-3">
//                 {activeServiceData.subtitle}
//               </p>
//               <div className="flex items-center justify-start md:justify-end">
//                 <div className={`p-3 sm:p-4 rounded-full bg-gradient-to-br ${activeServiceData.color} bg-opacity-20 mr-3`}>
//                   {activeServiceData.icon}
//                 </div>
//                 <h2 className={`text-lg sm:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r ${activeServiceData.color}`}>
//                   {activeServiceData.title}
//                 </h2>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Main Content Area - Service Items */}
//         <div className="flex-1 px-6 sm:px-8 md:px-16 lg:px-24 mt-8 sm:mt-12 md:mt-16">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//             <AnimatePresence mode="wait">
//               {activeServiceData.items.map((item, index) => (
//                 <motion.div
//                   key={`${activeService}-${index}`}
//                   custom={index}
//                   variants={cardVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   whileHover="hover"
//                   className={`relative backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer ${
//                     activeItemIndex === index ? 'ring-2 ring-offset-2' : ''
//                   }`}
//                   style={{
//                     background: "rgba(17, 25, 40, 0.75)",
//                     borderTop: "1px solid rgba(255, 255, 255, 0.1)",
//                     borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
//                     boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
//                   }}
//                   onClick={() => {
//                     setActiveItemIndex(index);
//                     openImageViewer(index);
//                   }}
//                   onMouseEnter={() => setHoverIndex(index)}
//                   onMouseLeave={() => setHoverIndex(null)}
//                 >
//                   {/* Top luminous border */}
//                   <motion.div
//                     className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${activeServiceData.color}`}
//                     initial={{ scaleX: 0 }}
//                     animate={{
//                       scaleX: hoverIndex === index ? 1 : 0,
//                       opacity: hoverIndex === index ? 1 : 0
//                     }}
//                     transition={{ duration: 0.3 }}
//                   />

//                   <div className="p-4 sm:p-6">
//                     {/* Icon with circle background */}
//                     <div className="mb-4 inline-flex items-center justify-center text-lg sm:text-2xl">
//                       <motion.div
//                         initial={{ scale: 0.8, opacity: 0 }}
//                         animate={{ scale: 1, opacity: 1 }}
//                         transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
//                         className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-br ${activeServiceData.color} bg-opacity-20`}
//                       >
//                         <span className="transform scale-110">{item.icon}</span>
//                       </motion.div>
//                     </div>

//                     <motion.h3
//                       className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2"
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
//                     >
//                       {item.title}
//                     </motion.h3>

//                     <motion.p
//                       className="text-gray-300 text-sm sm:text-base"
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
//                     >
//                       {item.description}
//                     </motion.p>

//                     {/* View details button */}
//                     <motion.div
//                       className="mt-4 flex items-center text-sm font-medium"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: index * 0.1 + 0.5 }}
//                     >
//                       <span className={`bg-clip-text text-transparent bg-gradient-to-r ${activeServiceData.color}`}>
//                         View details
//                       </span>
//                       <motion.svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         className={`h-4 w-4 ml-1 text-transparent bg-clip-text bg-gradient-to-r ${activeServiceData.color}`}
//                         viewBox="0 0 20 20"
//                         fill="currentColor"
//                         initial={{ x: 0 }}
//                         animate={{ x: hoverIndex === index ? 4 : 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                       </motion.svg>
//                     </motion.div>
//                   </div>
//                 </motion.div>
//               ))}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Bottom Section - Service Categories */}
//         <div className="py-8 sm:py-12 px-6 sm:px-8 md:px-16 lg:px-24 mt-auto">
//           <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 sm:mb-10"></div>

//           <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
//             {services.map((service) => (
//               <motion.div
//                 key={service.id}
//                 className={`flex-1 mb-6 lg:mb-0 px-2 ${
//                   activeService === service.id ? "" : "opacity-50"
//                 }`}
//                 variants={serviceVariants}
//                 initial="inactive"
//                 animate={activeService === service.id ? "active" : "inactive"}
//                 whileHover="hover"
//                 onClick={() => handleServiceChange(service.id)}
//               >
//                 <div className="cursor-pointer group">
//                   {/* Category Icon */}
//                   <div
//                     className={`flex items-center mb-3 space-x-2 ${
//                       activeService === service.id
//                         ? `text-transparent bg-clip-text bg-gradient-to-r ${service.color}`
//                         : "text-white/70"
//                     }`}
//                   >
//                     <div className={`p-2 sm:p-3 rounded-full ${
//                       activeService === service.id
//                         ? `bg-gradient-to-br ${service.color} bg-opacity-10`
//                         : "bg-white/5"
//                     }`}>
//                       {service.icon}
//                     </div>
//                   </div>

//                   {/* Category Title */}
//                   <h2
//                     className={`text-xl sm:text-2xl lg:text-3xl font-bold transition-all duration-300 ${
//                       activeService === service.id
//                         ? `text-transparent bg-clip-text bg-gradient-to-r ${service.color}`
//                         : "text-white/70"
//                     }`}
//                   >
//                     {service.title}
//                   </h2>

//                   {/* Active service indicator */}
//                   <div className="relative h-1 mt-3 w-16">
//                     {activeService === service.id && (
//                       <motion.div
//                         className={`absolute inset-0 rounded-full bg-gradient-to-r ${service.color}`}
//                         layoutId="activeServiceIndicator"
//                         transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                       />
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Image Viewer Modal with enhanced UI */}
//       <AnimatePresence>
//         {selectedImageIndex !== null && (
//           <motion.div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeImageViewer}
//           >
//             {/* Header */}
//             <motion.div
//               className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-center z-10"
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               <div className="flex items-center space-x-3">
//                 <div className={`p-2 sm:p-3 rounded-full bg-gradient-to-br ${activeServiceData.color} bg-opacity-20`}>
//                   {activeServiceData.icon}
//                 </div>
//                 <div>
//                   <h3 className={`text-base sm:text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r ${activeServiceData.color}`}>
//                     {activeServiceData.title}
//                   </h3>
//                   <p className="text-white/70 text-xs sm:text-sm">
//                     {activeServiceData.items[selectedImageIndex]?.title}
//                   </p>
//                 </div>
//               </div>

//               {/* Counter */}
//               <div className="text-white/70 font-mono text-sm sm:text-base">
//                 {selectedImageIndex + 1}/{sampleImages[activeService].length}
//               </div>
//             </motion.div>

//             {/* Image container */}
//             <motion.div
//               className="relative w-full max-w-6xl h-[70vh] sm:h-[80vh] px-4 sm:px-8"
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               transition={{ type: "spring", stiffness: 300, damping: 25 }}
//             >
//               <motion.img
//                 key={`${activeService}-${selectedImageIndex}`}
//                 src={sampleImages[activeService][selectedImageIndex]}
//                 alt={`${activeServiceData.title} - ${activeServiceData.items[selectedImageIndex]?.title}`}
//                 className="w-full h-full object-contain rounded-lg"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               />

//               {/* Caption */}
//               <motion.div
//                 className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center px-4"
//                 initial={{ y: 20, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 <h4 className="text-white text-lg sm:text-xl font-semibold">
//                   {activeServiceData.items[selectedImageIndex]?.title}
//                 </h4>
//                 <p className="text-white/70 text-sm">
//                   {activeServiceData.items[selectedImageIndex]?.description}
//                 </p>
//               </motion.div>

//               {/* Navigation buttons */}
//               <motion.button
//                 className="absolute top-1/2 left-4 sm:left-6 transform -translate-y-1/2 bg-black/50 backdrop-blur-md hover:bg-black/70 rounded-full p-3 sm:p-4 border border-white/10"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   goToPrevImage();
//                 }}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 initial={{ x: -20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                 </svg>
//               </motion.button>

//               <motion.button
//                 className="absolute top-1/2 right-4 sm:right-6 transform -translate-y-1/2 bg-black/50 backdrop-blur-md hover:bg-black/70 rounded-full p-3 sm:p-4 border border-white/10"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   goToNextImage();
//                 }}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 initial={{ x: 20, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                 </svg>
//               </motion.button>

//               {/* Close button */}
//               <motion.button
//                 className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-black/50 backdrop-blur-md hover:bg-black/70 rounded-full p-2 sm:p-3 border border-white/10"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   closeImageViewer();
//                 }}
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//                 initial={{ scale: 0, opacity: 0 }}
//                 animate={{ scale: 1, opacity: 1 }}
//                 transition={{ delay: 0.4, type: "spring" }}
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 </svg>
//               </motion.button>

//               {/* Image indicators */}
//               <motion.div
//                 className="absolute bottom-16 sm:bottom-20 left-0 right-0 flex justify-center gap-2 sm:gap-3"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.5 }}
//               >
//                 {sampleImages[activeService].map((_, index) => (
//                   <motion.button
//                     key={index}
//                     className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
//                       selectedImageIndex === index
//                         ? `bg-gradient-to-r ${activeServiceData.color}`
//                         : "bg-white/30"
//                     }`}
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setSelectedImageIndex(index);
//                     }}
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 0.8 }}
//                   />
//                 ))}
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sample images (replace with your actual image paths)
const sampleImages = {
  cx: [
    "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
    "https://images.unsplash.com/photo-1552664730-d307ca884978",
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e",
    "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d"
  ],
  data: [
    "https://images.unsplash.com/photo-1639322537228-f710d846310a",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
  ],
  digital: [
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  ]
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState("cx");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeItemIndex, setActiveItemIndex] = useState(null);

  const services = [
    {
      id: "cx",
      title: "CX TRANSFORMATION",
      subtitle: "Elevate customer experiences",
      background: "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
      color: "bg-orange-500",
      glowColor: "rgba(249, 115, 22, 0.2)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      items: [
        { title: "CX & MarTech", description: "Consulting Program Strategy", icon: "🎯" },
        { title: "Value Articulation", description: "& Value realization blueprints", icon: "💎" },
        { title: "Goals / Objectives", description: "and MarTech program plan", icon: "🚀" },
        { title: "Service Blueprints", description: "Multiyear MarTech roadmap", icon: "📊" },
        { title: "Implementation Plan", description: "Detailed execution strategy", icon: "⚙️" }
      ]
    },
    {
      id: "data",
      title: "DATA TRANSFORMATION",
      subtitle: "Unlock data-driven decisions",
      background: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
      color: "bg-orange-600",
      glowColor: "rgba(234, 88, 12, 0.2)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      ),
      items: [
        { title: "Data Strategy", description: "Enterprise data roadmap", icon: "🗺️" },
        { title: "Data Architecture", description: "Scalable infrastructure design", icon: "🏗️" },
        { title: "Data Governance", description: "Compliance & security frameworks", icon: "🔒" },
        { title: "Data Analytics", description: "Actionable business insights", icon: "📈" },
        { title: "AI & Machine Learning", description: "Predictive modeling solutions", icon: "🧠" }
      ]
    },
    {
      id: "digital",
      title: "DIGITAL TRANSFORMATION",
      subtitle: "Modernize and innovate",
      background: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      color: "bg-orange-700",
      glowColor: "rgba(194, 65, 12, 0.2)",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      items: [
        { title: "Digital Strategy", description: "Future-ready business models", icon: "🌐" },
        { title: "Digital Experience", description: "Customer journey optimization", icon: "✨" },
        { title: "Digital Platforms", description: "Scalable technology ecosystems", icon: "⚡" },
        { title: "Cloud Transformation", description: "Agile infrastructure solutions", icon: "☁️" },
        { title: "Digital Innovation", description: "Emerging technology adoption", icon: "💡" }
      ]
    }
  ];

  const activeServiceData = services.find(service => service.id === activeService);

  const openImageViewer = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeImageViewer = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const goToNextImage = () => {
    setSelectedImageIndex(prev =>
      prev === sampleImages[activeService].length - 1 ? 0 : prev + 1
    );
  };

  const goToPrevImage = () => {
    setSelectedImageIndex(prev =>
      prev === 0 ? sampleImages[activeService].length - 1 : prev - 1
    );
  };

  const handleServiceChange = (serviceId) => {
    if (serviceId !== activeService && !isTransitioning) {
      setIsTransitioning(true);
      setActiveService(serviceId);
      setSelectedImageIndex(null);
      setActiveItemIndex(null);

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    }
  };

  const handleKeyDown = (e) => {
    if (selectedImageIndex === null) return;

    if (e.key === 'ArrowRight') {
      goToNextImage();
    } else if (e.key === 'ArrowLeft') {
      goToPrevImage();
    } else if (e.key === 'Escape') {
      closeImageViewer();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex, activeService]);

  // Background variants
  const backgroundVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, transition: { duration: 0.3, ease: "easeIn" } }
  };

  // Service category variants
  const serviceVariants = {
    inactive: { opacity: 0.5, y: 0 },
    active: { opacity: 1, y: 0 },
    hover: { opacity: 0.8, y: -5 }
  };

  // Card variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(249, 115, 22, 0.1), 0 10px 10px -5px rgba(249, 115, 22, 0.04)",
      transition: { type: "spring", stiffness: 300, damping: 20 }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black font-sans">
      {/* Background Image with Animation */}
      <AnimatePresence initial={false}>
        <motion.div
          key={activeService}
          className="absolute inset-0 bg-cover bg-center"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={backgroundVariants}
          style={{
            backgroundImage: `url(${activeServiceData.background})`,
          }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/90"></div>
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="pt-16 px-6 sm:px-8 md:px-16 lg:px-24">
          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className={`h-1 w-10 bg-orange-500 rounded-full`}></div>
            <p className="text-white/60 uppercase tracking-widest text-sm font-medium">Transform your business</p>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-end justify-between mt-6">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-0"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              OUR <br />
              <span className={`bg-clip-text text-transparent bg-orange-500`}>
                SERVICES
              </span>
            </motion.h1>

            <motion.div
              className="md:text-right"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-md mb-3">
                {activeServiceData.subtitle}
              </p>
              <div className="flex items-center justify-start md:justify-end">
                <div className={`p-3 sm:p-4 rounded-full bg-orange-500 bg-opacity-20 mr-3`}>
                  {activeServiceData.icon}
                </div>
                <h2 className={`text-lg sm:text-xl font-medium bg-clip-text text-transparent bg-orange-500`}>
                  {activeServiceData.title}
                </h2>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Main Content Area - Service Items */}
        <div className="flex-1 px-6 sm:px-8 md:px-16 lg:px-24 mt-8 sm:mt-12 md:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <AnimatePresence mode="wait">
              {activeServiceData.items.map((item, index) => (
                <motion.div
                  key={`${activeService}-${index}`}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileHover="hover"
                  className={`relative backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer ${
                    activeItemIndex === index ? 'ring-2 ring-offset-2 ring-orange-500' : ''
                  }`}
                  style={{
                    background: "rgba(17, 25, 40, 0.75)",
                    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                    borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                  onClick={() => {
                    setActiveItemIndex(index);
                    openImageViewer(index);
                  }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  {/* Top luminous border */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1 bg-orange-500`}
                    initial={{ scaleX: 0 }}
                    animate={{
                      scaleX: hoverIndex === index ? 1 : 0,
                      opacity: hoverIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="p-4 sm:p-6">
                    {/* Icon with circle background */}
                    <div className="mb-4 inline-flex items-center justify-center text-lg sm:text-2xl">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                        className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-orange-500 bg-opacity-20`}
                      >
                        <span className="transform scale-110">{item.icon}</span>
                      </motion.div>
                    </div>

                    <motion.h3
                      className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    >
                      {item.title}
                    </motion.h3>

                    <motion.p
                      className="text-gray-300 text-sm sm:text-base"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                    >
                      {item.description}
                    </motion.p>

                    {/* View details button */}
                    <motion.div
                      className="mt-4 flex items-center text-sm font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    >
                      <span className={`bg-clip-text text-transparent bg-orange-500`}>
                        View details
                      </span>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ml-1 text-transparent bg-clip-text bg-orange-500`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        initial={{ x: 0 }}
                        animate={{ x: hoverIndex === index ? 4 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </motion.svg>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom Section - Service Categories */}
        <div className="py-8 sm:py-12 px-6 sm:px-8 md:px-16 lg:px-24 mt-auto">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8 sm:mb-10"></div>

          <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={`flex-1 mb-6 lg:mb-0 px-2 ${
                  activeService === service.id ? "" : "opacity-50"
                }`}
                variants={serviceVariants}
                initial="inactive"
                animate={activeService === service.id ? "active" : "inactive"}
                whileHover="hover"
                onClick={() => handleServiceChange(service.id)}
              >
                <div className="cursor-pointer group">
                  {/* Category Icon */}
                  <div
                    className={`flex items-center mb-3 space-x-2 ${
                      activeService === service.id
                        ? `text-transparent bg-clip-text bg-orange-500`
                        : "text-white/70"
                    }`}
                  >
                    <div className={`p-2 sm:p-3 rounded-full ${
                      activeService === service.id
                        ? `bg-orange-500 bg-opacity-10`
                        : "bg-white/5"
                    }`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Category Title */}
                  <h2
                    className={`text-xl sm:text-2xl lg:text-3xl font-bold transition-all duration-300 ${
                      activeService === service.id
                        ? `text-transparent bg-clip-text bg-orange-500`
                        : "text-white/70"
                    }`}
                  >
                    {service.title}
                  </h2>

                  {/* Active service indicator */}
                  <div className="relative h-1 mt-3 w-16">
                    {activeService === service.id && (
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-orange-500`}
                        layoutId="activeServiceIndicator"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Viewer Modal with enhanced UI */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageViewer}
          >
            {/* Header */}
            <motion.div
              className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex justify-between items-center z-10"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 sm:p-3 rounded-full bg-orange-500 bg-opacity-20`}>
                  {activeServiceData.icon}
                </div>
                <div>
                  <h3 className={`text-base sm:text-lg font-medium text-transparent bg-clip-text bg-orange-500`}>
                    {activeServiceData.title}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm">
                    {activeServiceData.items[selectedImageIndex]?.title}
                  </p>
                </div>
              </div>

              {/* Counter */}
              <div className="text-white/70 font-mono text-sm sm:text-base">
                {selectedImageIndex + 1}/{sampleImages[activeService].length}
              </div>
            </motion.div>

            {/* Image container */}
            <motion.div
              className="relative w-full max-w-6xl h-[70vh] sm:h-[80vh] px-4 sm:px-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <motion.img
                key={`${activeService}-${selectedImageIndex}`}
                src={sampleImages[activeService][selectedImageIndex]}
                alt={`${activeServiceData.title} - ${activeServiceData.items[selectedImageIndex]?.title}`}
                className="w-full h-full object-contain rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Caption */}
              <motion.div
                className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 text-center px-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h4 className="text-white text-lg sm:text-xl font-semibold">
                  {activeServiceData.items[selectedImageIndex]?.title}
                </h4>
                <p className="text-white/70 text-sm">
                  {activeServiceData.items[selectedImageIndex]?.description}
                </p>
              </motion.div>

              {/* Navigation buttons */}
              <motion.button
                className="absolute top-1/2 left-4 sm:left-6 transform -translate-y-1/2 bg-black/50 backdrop-blur-md hover:bg-black/70 rounded-full p-3 sm:p-4 border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevImage();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                className="absolute top-1/2 right-4 sm:right-6 transform -translate-y-1/2 bg-black/50 backdrop-blur-md hover:bg-black/70 rounded-full p-3 sm:p-4 border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextImage();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>

              {/* Close button */}
              <motion.button
                className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-black/50 backdrop-blur-md hover:bg-black/70 rounded-full p-2 sm:p-3 border border-white/10"
                onClick={(e) => {
                  e.stopPropagation();
                  closeImageViewer();
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Image indicators */}
              <motion.div
                className="absolute bottom-16 sm:bottom-20 left-0 right-0 flex justify-center gap-2 sm:gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {sampleImages[activeService].map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                      selectedImageIndex === index
                        ? `bg-orange-500`
                        : "bg-white/30"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImageIndex(index);
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
