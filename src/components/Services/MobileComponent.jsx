import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Added import
import imageMobile from "../../../src/assets/img/services/mobile.png"; // Added image import

const MobileComponent = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] min-h-[50vh] flex items-center justify-center px-4 sm:px-8">
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
            Mobile App Development
          </motion.h1>
          <motion.p
            className="text-white font-semibold text-base sm:text-lg md:text-xl mt-6 px-2 sm:px-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Transform your vision into powerful mobile experiences. We develop
            native iOS/Android and cross-platform apps with intuitive design,
            robust performance, and scalable architecture. From concept to
            deployment, we deliver secure, user-centric solutions that elevate
            your digital presence.
          </motion.p>
          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          ></motion.div>
        </motion.div>
      </div>
      <section className="flex flex-col md:flex-row items-center justify-between p-8">
        <motion.div
          className="relative w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={imageMobile}
            alt="Web Development"
            className="pl-10 md:pl-20 w-full md:w-140 rounded-lg h-100 shadow-lg"
          />
        </motion.div>
        <motion.div
          className="w-full md:w-1/2 p-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 mb-4">
            At Code Sala, we don’t just build websites, we craft digital
            experiences that drive results. Here’s why we are the right choice
            for your web development needs:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">✔</span>Native &
              cross-platform development
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">✔</span> Focus on UX/UI and
              performance
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">✔</span> End-to-end security
              and scalability
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">✔</span> Industry-specific
              solutions
            </li>
            <li className="flex items-center">
              <span className="text-pink-500 mr-2">✔</span> Ongoing support and
              updates
            </li>
          </ul>
          <motion.button
            className="mt-6 px-6 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-500 hover:text-white transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/contact">Let's Start</Link>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default MobileComponent;
