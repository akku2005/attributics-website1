import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

// Import your images
import Image1 from "../assets/images/OurServicePage1.jpg";
import Image2 from "../assets/images/coffeeImage.png";
import Image3 from "../assets/images/coffeeImage.png";

const HeroSection = () => {
  // Carousel data
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
      image: Image2,
      title: "Customer Success",
      description: "See how we've helped clients achieve their goals",
      buttonText: "View Case Studies"
    },
    {
      id: 3,
      image: Image3,
      title: "Future Ready",
      description: "Prepare your business for tomorrow's opportunities",
      buttonText: "Get Started"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        goToNext();
      }, 5000); // Increased interval to 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentIndex, isAutoPlaying]);

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
    setIsAutoPlaying(false); // Pause autoplay when manually navigating
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Animation variants
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

  const direction = currentIndex > 0 ? 1 : -1;

  return (
    <div id="HeroSection" className="relative w-full h-screen overflow-hidden">
      {/* Carousel container */}
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
            {/* Image as background */}
            <div className="relative w-full h-full">
              <img
                src={carouselItems[currentIndex].image}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              {/* Semi-transparent overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col justify-center items-start px-8 sm:px-16 md:px-24 lg:px-32 text-white z-10">
                <motion.div
                  className="relative z-10 max-w-2xl"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                    {carouselItems[currentIndex].title}
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl mb-8">
                    {carouselItems[currentIndex].description}
                  </p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-black font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                    {carouselItems[currentIndex].buttonText}
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center space-x-4 z-20">
        {/* Previous button */}
        <button
          onClick={goToPrev}
          className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeftIcon className="w-6 h-6 text-white" />
        </button>

        {/* Indicators */}
        <div className="flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRightIcon className="w-6 h-6 text-white" />
        </button>

        {/* Auto-play toggle */}
        <button
          onClick={toggleAutoPlay}
          className="ml-4 px-3 py-1 text-xs bg-black/50 rounded-full hover:bg-black/70 transition-colors"
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
