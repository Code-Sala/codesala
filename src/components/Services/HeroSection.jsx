import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-br from-[#00AEEF]  via-[#892890] to-[#ED1D7E] min-h-[80vh]container pb-24   pt-[8rem] flex items-center justify-center px-4 sm:px-8">
      <motion.div
        className="max-w-8xl text-center container_lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Services
        </motion.h1>
        <motion.p
          className="text-white font-semibold text-base sm:text-lg md:text-xl mt-6 px-2 sm:px-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          At CodeSala, we craft cutting-edge technology solutions that drive
          businesses forward. From web development to AI-driven applications,
          our expertise turns ideas into reality. Partner with us for scalable,
          secure, and future-ready digital experiences. 🚀
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <motion.button
            className="bg-white text-[#892890] font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:bg-transparent hover:text-white hover:border-2 border-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Book A Call
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
