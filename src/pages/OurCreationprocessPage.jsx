import { useState } from 'react';
import { motion } from 'framer-motion';
import CoCreationProcessImage from "../assets/images/CoCreationProcessImage.svg";
import TextSVG from "../assets/images/foresights.svg"

export default function CoCreationProcess() {
  return (
    <div className="min-h-screen flex items-center justify-center p-2 sm:p-4 md:p-8 "style={{ backgroundColor: '#21232A' }}>
      <div className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl w-full max-w-6xl overflow-hidden shadow-xl mt-10">
        <div className="flex flex-col lg:flex-row">
          {/* Left content section */}
          <div className="w-full lg:w-1/2 p-4 sm:p-6 md:p-10 lg:p-16 relative">
            <div className="flex flex-col items-start relative z-10">
              {/* Main heading */}
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6 md:mb-8 text-gray-800"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                OUR <br /> CO-CREATION <br /> PROCESS
              </motion.h1>

              {/* Main content with background number */}
              <motion.div
                className="mb-4 sm:mb-6 md:mb-8 relative w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {/* Background number */}
                <div className="absolute text-[100px] sm:text-[130px] md:text-[160px] font-bold text-gray-300 opacity-80 leading-none z-0 -left-2 sm:left-0 top-0 sm:-top-4 md:-top-6">
                  01
                </div>

                {/* Foreground text */}
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

          {/* Right image section */}
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
  );
}
