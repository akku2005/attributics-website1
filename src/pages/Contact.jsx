import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CoffeeImage from "../assets/images/coffeeImage.png"

const ContactPage = () => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle submit
  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

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

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        {/* Left side - Text and Image */}
        <motion.div 
          className="w-full md:w-1/2 flex flex-col items-start mb-12 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Heading */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            LET'S GRAB A<br />COFFEE
          </motion.h1>
          
          {/* Text */}
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
          
          {/* Coffee Cup Image */}
          <motion.div 
            className="mt-12"
            variants={itemVariants}
          >
            <img
              src={CoffeeImage}
              alt="Hand holding coffee cup"
              className="auto w-full "
            />
          </motion.div>
        </motion.div>
        
        {/* Right side - Form */}
        <motion.div 
          className="w-full md:w-1/2 p-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div>
            {/* First Name */}
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
            
            {/* Last Name */}
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
            
            {/* Email */}
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
            
            {/* Message */}
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
            
            {/* Submit Button */}
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
  );
};

export default ContactPage;