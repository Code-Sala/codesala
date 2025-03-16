import { motion } from "framer-motion";
import { FaGlobe, FaUsers, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function OurVision() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen  text-white px-6 py-10 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0  opacity-50 z-0" />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl text-center"
      >
        <h1 className="bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent text-3xl sm:text-4xl font-bold text-center pb-6">
          Our Vision
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-10 leading-relaxed">
          Our vision is to revolutionize the digital landscape by leveraging
          cutting-edge technology to solve real-world problems. We are committed
          to building innovative IT solutions that enhance connectivity, drive
          efficiency, and empower businesses and individuals globally.
        </p>
      </motion.div>

      {/* Animated Vision Diagram */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 text-center mt-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="bg-transparent p-8 rounded-2xl shadow-xl border border-pink-500"
        >
          <FaLightbulb className=" text-white-500 p-4 bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] rounded-full text-6xl mb-4 mx-auto animate-spin-slow" />
          <h3 className="text-2xl font-semibold text-gray-700 pb-4">
            Innovation
          </h3>
          <p className="text-gray-600">
            Developing next-generation IT solutions to shape the future of
            technology.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="bg-transparent p-8 rounded-2xl shadow-xl border border-pink-500"
        >
          <FaUsers className="text-white-500 p-4 bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] rounded-full text-6xl mb-4 mx-auto " />
          <h3 className="text-2xl font-semibold text-gray-700 pb-4">
            Community
          </h3>
          <p className="text-gray-600">
            Creating a collaborative IT ecosystem where knowledge and growth
            thrive.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="bg-transparent p-8 rounded-2xl shadow-xl border border-pink-500"
        >
          <FaGlobe className="text-white-500 p-4 bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] rounded-full text-6xl mb-4 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-700 pb-4">
            Global Impact
          </h3>
          <p className="text-gray-600">
            Harnessing technology to drive digital transformation worldwide.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="relative z-10 mt-12"
      >
        <button className="px-8 py-3 text-lg font-semibold rounded-full animated-gradient-btn hover:bg-pink-600 transition shadow-lg">
          <Link to="/services">Join the Movement</Link>
        </button>
      </motion.div>
    </div>
  );
}
