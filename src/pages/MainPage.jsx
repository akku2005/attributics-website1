import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Import images and icons
import CoffeeImage from "../assets/images/coffeeImage.png";
import Image1 from "../assets/images/OurServicePage1.jpg";
import CoCreationProcessImage from "../assets/images/CoCreationProcessImage.svg";
import TextSVG from "../assets/images/foresights.svg";
import Icon1 from '../assets/icons/Vector.svg';
import Icon2 from '../assets/icons/Layer.svg';
import Icon3 from '../assets/icons/Brush.svg';
import Icon4 from '../assets/icons/Glob.svg';
import Icon5 from '../assets/icons/Glob2.svg';
import Icon6 from '../assets/icons/AI.svg';
import Icon7 from '../assets/icons/Monitor.svg';
import amplitudeLogo from '../assets/icons/Amplitude.png';
import brazeLogo from '../assets/icons/Braze.png';
import tealiumLogo from '../assets/icons/Tealium.png';
import googleLogo from '../assets/icons/Google.png';
import moengageLogo from '../assets/icons/MoEngage.png';
import clevertapLogo from '../assets/icons/ClaverTap.png';
import optimizelyLogo from '../assets/icons/Optimizely.png';
import liferayLogo from '../assets/icons/Liferay.png';

// Sample images for ServicesSection
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

const Home = () => {
  // State for ContactPage
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  // State for HeroSection
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // State for ServicesSection
  const [activeService, setActiveService] = useState("cx");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  // State for OurSolutions
  const [hoveredSolution, setHoveredSolution] = useState(null);

  // State for PartnerPlatforms
  const [hoveredPartner, setHoveredPartner] = useState(null);

  const navigate = useNavigate();

  // Carousel data for HeroSection
  const carouselItems = [
    {
      id: 1,
      image: Image1,
      title: "Innovative Solutions",
      description: "Discover our cutting-edge approaches to business challenges",
      buttonText: "Learn More"
    },
    {
      id: 2,
      image: CoffeeImage,
      title: "Customer Success",
      description: "See how we've helped clients achieve their goals",
      buttonText: "View Case Studies"
    },
    {
      id: 3,
      image: CoffeeImage,
      title: "Future Ready",
      description: "Prepare your business for tomorrow's opportunities",
      buttonText: "Get Started"
    }
  ];

  // Jobs data for CareersPage
  const jobs = [
    {
      title: "FULL\nSTACK\nDEVELOPER",
      experience: "2-3 Years Experience",
      location: "MUMBAI",
      postedDate: "Posted: Jan 10, 2024",
      link: "/full-stack-developer"
    },
    {
      title: "SYSTEM\nDESIGNER",
      experience: "2-3 Years Experience",
      location: "MUMBAI",
      postedDate: "Posted: Jan 10, 2024",
      link: "/system-designer"
    },
    {
      title: "SYSTEM\nANALYST",
      experience: "2-3 Years Experience",
      location: "MUMBAI",
      postedDate: "Posted: Jan 10, 2024",
      link: "/system-analyst"
    },
    {
      title: "JAVA\nDEVELOPER",
      experience: "2-3 Years Experience",
      location: "MUMBAI",
      postedDate: "Posted: Jan 10, 2024",
      link: "/java-developer"
    },
    {
      title: "FRONT END\nDEVELOPER",
      experience: "2-3 Years Experience",
      location: "MUMBAI",
      postedDate: "Posted: Jan 10, 2024",
      link: "/front-end-developer"
    }
  ];

  // Services data for ServicesSection
  const services = [
    {
      id: "cx",
      title: "CX TRANSFORMATION",
      background: "https://images.unsplash.com/photo-1557682250-33bd709cbe85",
      items: [
        { title: "CX & MarTech", description: "Consulting Program Strategy" },
        { title: "Value Articulation", description: "& Value realization blueprints" },
        { title: "Goals / Objectives", description: "and MarTech program plan" },
        { title: "Service Blueprints &", description: "Multiyear MarTech roadmap" },
        { title: "Detailed Implementation Plan", description: "" }
      ]
    },
    {
      id: "data",
      title: "DATA TRANSFORMATION",
      background: "https://images.unsplash.com/photo-1639322537228-f710d846310a",
      items: [
        { title: "Data Strategy", description: "Enterprise data roadmap" },
        { title: "Data Architecture", description: "Scalable infrastructure design" },
        { title: "Data Governance", description: "Compliance & security frameworks" },
        { title: "Data Analytics", description: "Actionable business insights" },
        { title: "AI & Machine Learning", description: "Predictive modeling solutions" }
      ]
    },
    {
      id: "digital",
      title: "DIGITAL TRANSFORMATION",
      background: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
      items: [
        { title: "Digital Strategy", description: "Future-ready business models" },
        { title: "Digital Experience", description: "Customer journey optimization" },
        { title: "Digital Platforms", description: "Scalable technology ecosystems" },
        { title: "Cloud Transformation", description: "Agile infrastructure solutions" },
        { title: "Digital Innovation", description: "Emerging technology adoption" }
      ]
    }
  ];

  // Solutions data for OurSolutions
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
    {
      id: 8,
      title: "",
      row: 2,
      isPlaceholder: true,
      icon: null
    }
  ];

  // Partners data for PartnerPlatforms
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

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    })
  };

  // Auto-play functionality for HeroSection
  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext();
      }, 3000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentIndex, isAutoPlaying]);

  // Handler functions
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  const openImageViewer = (index) => {
    setSelectedImageIndex(index);
  };

  const closeImageViewer = () => {
    setSelectedImageIndex(null);
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

  const activeServiceData = services.find(service => service.id === activeService);

  const direction = currentIndex > 0 ? 1 : -1;

  // Icon component for OurSolutions
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

  // Empty placeholder component for OurSolutions
  const EmptyPlaceholder = () => (
    <></>
  );

  // PartnerLogo component for PartnerPlatforms
  const PartnerLogo = ({ name, isHovered }) => {
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
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="relative w-full h-screen overflow-hidden">
        <div className="relative w-full h-full">
          <AnimatePresence custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute w-full h-full"
            >
              <div className="relative w-full h-full">
                <img
                  src={carouselItems[currentIndex].image}
                  alt={`Slide ${currentIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-start px-8 sm:px-16 md:px-24 lg:px-32 text-white z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                  <motion.div
                    className="relative z-10"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                      {carouselItems[currentIndex].title}
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-md">
                      {carouselItems[currentIndex].description}
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-black font-medium py-3 px-8 rounded-full transition-all duration-300">
                      {carouselItems[currentIndex].buttonText}
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-4 z-20">
          <div className="flex space-x-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-50'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Co-Creation Process Section */}
      <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 md:p-8" style={{ backgroundColor: '#21232A' }}>
        <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl w-full max-w-6xl overflow-hidden shadow-xl">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-10 lg:p-16 relative">
              <div className="flex flex-col items-start relative z-10">
                <motion.h1
                  className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6 md:mb-8 text-gray-800"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  OUR <br /> CO-CREATION <br /> PROCESS
                </motion.h1>
                <motion.div
                  className="mb-4 sm:mb-6 md:mb-8 relative w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="absolute text-[100px] sm:text-[130px] md:text-[160px] font-bold text-gray-300 opacity-80 leading-none z-0 -left-2 sm:left-0 top-0 sm:-top-4 md:-top-6">
                    01
                  </div>
                  <div className="relative ml-0 sm:ml-2 md:ml-4 z-10 mt-16 sm:mt-20 md:mt-24">
                    <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-800">
                      CUSTOMER <br />1ST. 2ND AND 3RD
                    </h2>
                    <div className="text-lg sm:text-xl text-gray-800 flex flex-wrap items-center mt-2 sm:mt-4">
                      <span>Deeply embedded in strategic</span>{' '}
                      <span className="flex items-center ml-1 sm:ml-2 mt-1 sm:mt-0">
                        <span className="relative text-gray-800 mr-1 sm:mr-2">
                          insights
                          <span className="absolute left-0 bottom-1 w-full h-[2px] bg-red-500 mb-2 font-semibold"></span>
                        </span>
                        <img
                          src={TextSVG}
                          alt="foresights"
                          className="w-[70px] sm:w-[85px] md:w-[100px] h-auto"
                        />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center p-4 sm:p-6 md:p-8">
              <div className="relative w-full max-w-md mx-auto flex justify-center items-center">
                <motion.img
                  src={CoCreationProcessImage}
                  alt="Co-Creation Process"
                  className="w-full h-auto rounded-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    rotate: 360,
                    transition: {
                      duration: 10,
                      ease: "linear",
                      repeat: Infinity
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url(${activeServiceData.background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1 flex flex-col md:flex-row p-8 md:p-16 lg:p-24">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                OUR <br /> SERVICES
              </motion.h1>
            </div>
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <AnimatePresence mode="wait">
                  {activeServiceData.items.map((item, index) => (
                    <motion.div
                      key={`${activeService}-${index}`}
                      className="bg-gray-800 bg-opacity-80 p-4 rounded-lg cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => openImageViewer(index)}
                      whileHover={{ scale: 1.03 }}
                    >
                      <h3 className="text-white font-medium">{item.title}</h3>
                      {item.description && (
                        <p className="text-gray-300 text-sm mt-1">{item.description}</p>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-16 lg:p-24 pt-0">
            <div className="flex flex-wrap md:flex-nowrap gap-4">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  className={`flex-1 ${activeService === service.id ? "text-white" : "text-gray-500"}`}
                  onClick={() => {
                    setActiveService(service.id);
                    setSelectedImageIndex(null);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold cursor-pointer">
                    {service.title.split(" ")[0]} <br /> {service.title.split(" ")[1]}
                  </h2>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeImageViewer}
            >
              <div className="relative w-full max-w-5xl h-[80vh]">
                <img
                  src={sampleImages[activeService][selectedImageIndex]}
                  alt="Service detail"
                  className="w-full h-full object-contain"
                />
                <button
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToPrevImage();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNextImage();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  className="absolute top-4 right-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeImageViewer();
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {sampleImages[activeService].map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${selectedImageIndex === index ? "bg-orange-500" : "bg-gray-500"}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImageIndex(index);
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Our Solutions Section */}
      <div className="min-h-screen flex flex-col py-10 px-4" style={{ backgroundColor: '#21232A' }}>
        <div className="container mx-auto max-w-6xl mt-18">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-20 text-white text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            OUR <br />SOLUTIONS
          </motion.h1>
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

      {/* Partner Platforms Section */}
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
            <div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                  {partners.filter(p => p.category === 'top').map((partner, index) => (
                    <motion.div
                      key={partner.name}
                      variants={itemVariants}
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
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
                  {partners.filter(p => p.category === 'bottom').map((partner, index) => (
                    <motion.div
                      key={partner.name}
                      variants={itemVariants}
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

      {/* Careers Section */}
      <div className="min-h-screen p-6" style={{ backgroundColor: '#21232A' }}>
        <h1 className="text-white text-4xl font-bold mb-10 pl-2">CAREERS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="relative group">
              <motion.div
                className="bg-black rounded-3xl p-8 h-64 flex flex-col justify-between"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleNavigation(job.link)}
              >
                <div>
                  <h2 className="text-white text-3xl font-extrabold leading-tight whitespace-pre-line">{job.title}</h2>
                  <p className="text-gray-400 mt-2">{job.experience}</p>
                  <p className="text-white font-bold">{job.location}</p>
                </div>
                <p className="text-gray-500 text-sm">{job.postedDate}</p>
              </motion.div>
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 rounded-full p-3 cursor-pointer z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleNavigation(job.link)}
              >
                <ArrowRight className="text-white" size={20} />
              </motion.div>
            </div>
          ))}
          <div className="relative group">
            <motion.div
              className="bg-gray-800 rounded-3xl p-8 h-64 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleNavigation('/all-jobs')}
            >
              <h2 className="text-white text-3xl font-extrabold text-center">VIEW<br />ALL</h2>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-orange-500 rounded-full p-3 cursor-pointer z-10"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigation('/all-jobs')}
            >
              <ArrowRight className="text-white" size={20} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-black text-white min-h-screen">
        <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-start mb-12 md:mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-4"
              variants={itemVariants}
            >
              LET'S GRAB A<br />COFFEE
            </motion.h1>
            <motion.p
              className="text-gray-400 mb-2"
              variants={itemVariants}
            >
              We would love to hear from you.
            </motion.p>
            <motion.p
              className="text-gray-400"
              variants={itemVariants}
            >
              <span className="font-medium text-white">Contact us today</span> to learn how Attributics can help you grow and succeed
            </motion.p>
            <motion.div
              className="mt-12"
              variants={itemVariants}
            >
              <img
                src={CoffeeImage}
                alt="Hand holding coffee cup"
                className="auto w-full"
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div>
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="firstName" className="text-gray-400 text-sm uppercase mb-2 block">FIRST NAME</label>
                <input
                  type="text"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-orange-500"
                />
              </motion.div>
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="lastName" className="text-gray-400 text-sm uppercase mb-2 block">LAST NAME</label>
                <input
                  type="text"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-orange-500"
                />
              </motion.div>
              <motion.div className="mb-6" variants={itemVariants}>
                <label htmlFor="email" className="text-gray-400 text-sm uppercase mb-2 block">E-MAIL</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-orange-500"
                />
              </motion.div>
              <motion.div className="mb-8" variants={itemVariants}>
                <label htmlFor="message" className="text-gray-400 text-sm uppercase mb-2 block">MESSAGE</label>
                <input
                  type="text"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-orange-500"
                />
              </motion.div>
              <motion.div variants={itemVariants}>
                <button
                  onClick={handleSubmit}
                  className="bg-orange-500 hover:bg-orange-600 text-black font-medium py-3 px-12 rounded-full transition-all duration-300"
                >
                  SUBMIT
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
