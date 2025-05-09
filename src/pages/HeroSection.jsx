import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/solid';

// Import your images
import Image1 from "../assets/images/OurServicePage1.jpg";
import Image2 from "../assets/images/coffeeImage.png";
import Image3 from "../assets/images/coffeeImage.png";

const HeroSection = () => {
  // Enhanced carousel data with orange theme
  const carouselItems = [
    {
      id: 1,
      image: Image1,
      title: "Innovative Solutions",
      subtitle: "Transform Your Business",
      description: "Discover our cutting-edge approaches that drive growth and innovation for forward-thinking organizations.",
      buttonText: "Explore Solutions",
      accentColor: "bg-orange-600"
    },
    {
      id: 2,
      image: Image2,
      title: "Customer Success",
      subtitle: "Real Results, Real Impact",
      description: "See how we've helped industry leaders achieve unprecedented growth and overcome complex challenges.",
      buttonText: "View Success Stories",
      accentColor: "bg-orange-500"
    },
    {
      id: 3,
      image: Image3,
      title: "Future Ready",
      subtitle: "Stay Ahead of the Curve",
      description: "Equip your organization with next-generation tools and strategies to thrive in tomorrow's landscape.",
      buttonText: "Start Your Journey",
      accentColor: "bg-orange-700"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const autoPlayRef = useRef(null);
  const progressBarRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Reset progress when slide changes
  useEffect(() => {
    setProgress(0);
  }, [currentIndex]);

  // Animation for progress bar
  useEffect(() => {
    let progressInterval;
    if (isAutoPlaying && !isHovering) {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 0.5;
        });
      }, 25);
    }

    return () => {
      if (progressInterval) clearInterval(progressInterval);
    };
  }, [isAutoPlaying, isHovering]);

  // Trigger next slide when progress reaches 100%
  useEffect(() => {
    if (progress >= 100) {
      goToNext();
    }
  }, [progress]);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);

    if (isAutoPlaying && !isHovering) {
      autoPlayRef.current = setInterval(() => {
        goToNext();
      }, 5000);
    }

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [currentIndex, isAutoPlaying, isHovering]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Animation variants with enhanced effects
  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 }
      }
    })
  };

  const textVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    },
    exit: {
      y: -30,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 15px -3px rgba(255, 165, 0, 0.3), 0 4px 6px -2px rgba(255, 165, 0, 0.2)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  };

  const navButtonVariants = {
    initial: { opacity: 0.6, scale: 1 },
    hover: { opacity: 1, scale: 1.1 },
    tap: { scale: 0.9 }
  };

  // Particle effect component with orange theme
  const ParticleBackground = ({ accentColor }) => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${accentColor} opacity-20`}
            initial={{
              x: Math.random() * 100 - 50 + "%",
              y: Math.random() * 100 - 50 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [
                Math.random() * 100 - 50 + "%",
                Math.random() * 100 - 50 + "%",
                Math.random() * 100 - 50 + "%",
              ],
              y: [
                Math.random() * 100 - 50 + "%",
                Math.random() * 100 - 50 + "%",
                Math.random() * 100 - 50 + "%",
              ],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              width: Math.random() * 200 + 50,
              height: Math.random() * 200 + 50,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      id="HeroSection"
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Carousel container */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute w-full h-full"
          >
            {/* Animated particle background */}
            <ParticleBackground accentColor={carouselItems[currentIndex].accentColor} />

            {/* Image as background */}
            <div className="relative w-full h-full">
              <img
                src={carouselItems[currentIndex].image}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover opacity-70"
                loading="lazy"
              />

              {/* Enhanced overlay for better text readability - orange theme */}
              <div className="absolute inset-0 bg-black/80"></div>

              {/* Text content with enhanced animations */}
              <div className="absolute inset-0 flex flex-col justify-center items-start px-8 sm:px-16 md:px-24 lg:px-32 text-white z-10">
                <motion.div
                  className="relative z-10 max-w-2xl"
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {/* Decorative element */}
                  <div className={`h-1 w-16 mb-6 ${carouselItems[currentIndex].accentColor} rounded-full`}></div>

                  {/* Subtitle */}
                  <h2 className="text-lg sm:text-xl uppercase tracking-widest mb-2 font-light text-orange-300">
                    {carouselItems[currentIndex].subtitle}
                  </h2>

                  {/* Title with orange color */}
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-orange-50">
                    {carouselItems[currentIndex].title}
                  </h1>

                  {/* Description */}
                  <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 font-light leading-relaxed">
                    {carouselItems[currentIndex].description}
                  </p>

                  {/* CTA Button with hover animation */}
                  <motion.button
                    className={`${carouselItems[currentIndex].accentColor} text-white font-medium py-3 px-8 rounded-full transition-all duration-300 flex items-center space-x-2 shadow-lg`}
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <span>{carouselItems[currentIndex].buttonText}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>

                  {/* Secondary action */}
                  <div className="mt-6">
                    <a href="#" className="text-orange-300 hover:text-orange-200 underline underline-offset-4 text-sm font-medium flex items-center">
                      <span>Learn about our process</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Side dots navigation with hover effects */}
      <div className="absolute top-1/2 transform -translate-y-1/2 right-8 z-20 flex flex-col space-y-3">
        {carouselItems.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.5 }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? `${carouselItems[index].accentColor} shadow-lg shadow-orange-500/30`
                : 'bg-white/30 hover:bg-orange-300/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Enhanced Navigation controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-6 z-20">
        {/* Previous button */}
        <motion.button
          onClick={goToPrev}
          className="p-3 rounded-full bg-black/40 backdrop-blur-md hover:bg-orange-900/40 transition-colors border border-orange-500/20"
          aria-label="Previous slide"
          variants={navButtonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <ChevronLeftIcon className="w-6 h-6 text-orange-300" />
        </motion.button>

        {/* Progress bar */}
        <div className="w-64 bg-black/40 h-1 rounded-full overflow-hidden border border-orange-500/10">
          <motion.div
            className={`h-full ${carouselItems[currentIndex].accentColor}`}
            style={{ width: `${progress}%` }}
            ref={progressBarRef}
          />
        </div>

        {/* Next button */}
        <motion.button
          onClick={goToNext}
          className="p-3 rounded-full bg-black/40 backdrop-blur-md hover:bg-orange-900/40 transition-colors border border-orange-500/20"
          aria-label="Next slide"
          variants={navButtonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          <ChevronRightIcon className="w-6 h-6 text-orange-300" />
        </motion.button>

        {/* Auto-play toggle with icon */}
        <motion.button
          onClick={toggleAutoPlay}
          className="ml-2 p-3 rounded-full bg-black/40 backdrop-blur-md hover:bg-orange-900/40 transition-colors border border-orange-500/20"
          variants={navButtonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
        >
          {isAutoPlaying ? (
            <PauseIcon className="w-5 h-5 text-orange-300" />
          ) : (
            <PlayIcon className="w-5 h-5 text-orange-300" />
          )}
        </motion.button>
      </div>

      {/* Slide counter */}
      <div className="absolute top-8 right-8 text-orange-300 font-mono text-sm backdrop-blur-md bg-black/40 px-3 py-1 rounded-full border border-orange-500/20">
        {currentIndex + 1}/{carouselItems.length}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/80 to-transparent z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
    </div>
  );
};

export default HeroSection;
