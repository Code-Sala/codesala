import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Added import
import imageSoftware from "../../assets/img/services/software1.png";
import DomainCard from "./DomainCard";

const SoftwareComponent = () => {
  return (
    <div>
      <div>
        <div className="bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] min-h-[50vh] flex items-center justify-center px-4 sm:px-8">
          <motion.div
            className="max-w-screen-lg text-center"
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
              Software Integration
            </motion.h1>
            <motion.p
              className="text-white font-semibold text-base sm:text-lg md:text-xl mt-6 px-2 sm:px-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              We specialize in integrating diverse software systems to
              streamline your business operations. From connecting third-party
              apps to automating workflows, our solutions ensure smooth
              communication between platforms, improving efficiency and
              productivity. Let’s simplify your tech stack and unlock new
              possibilities!
            </motion.p>
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
              src={imageSoftware}
              alt="UI/UX Design"
              className="pl-10 md:pl-20 w-full md:w-[30rem] rounded-lg h-auto shadow-lg"
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
              At Code Sala, we specialize in seamless software integration that
              enhances efficiency, reduces manual work, and streamlines your
              business operations. Here’s why we’re the right choice
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span> Seamless
                Connectivity
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span> Custom Integration
                Solutions
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span> API & Legacy
                System Expertise
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span> Enhanced
                Automation & Productivity
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span> Ongoing Support &
                Maintenance
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
      <DomainCard />
    </div>
  );
};

export default SoftwareComponent;
