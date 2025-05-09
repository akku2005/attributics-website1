import { useState } from "react";
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

  const activeServiceData = services.find(service => service.id === activeService);

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

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
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

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col md:flex-row p-8 md:p-16 lg:p-24">
          {/* Left Section - Service Title */}
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

          {/* Right Section - Service Cards */}
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

        {/* Bottom Section - Service Categories */}
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

      {/* Image Viewer Modal */}
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

              {/* Navigation buttons */}
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

              {/* Close button */}
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

              {/* Image indicators */}
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
  );
}
