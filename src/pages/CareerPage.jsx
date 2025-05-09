import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CareersPage() {
  const navigate = useNavigate();

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

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
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
  );
}
