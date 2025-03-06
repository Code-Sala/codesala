import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imageDomain from "../../../src/assets/img/services/domain1.png";

const Domainsection = () => {
  return (
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
            Domain & Hosting
          </motion.h1>
          <motion.p
            className="text-white font-semibold text-base sm:text-lg md:text-xl mt-6 px-2 sm:px-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Secure your online presence with our trusted domain registration and
            high-speed hosting services. We provide reliable uptime, strong
            security, and seamless performance to keep your website running
            smoothly. Get the perfect domain and hosting plan tailored to your
            needs! 🚀
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
            src={imageDomain}
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
            At Code Sala, we provide reliable, secure, and high-performance
            domain and hosting solutions tailored to your needs. Here’s why we
            stand out:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔</span> Fast & Secure Hosting
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔</span> Easy Domain
              Management
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔</span> SSL & Security
              Protection
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔</span> Scalable Solutions
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔</span> Affordable Pricing &
              No Hidden Fees
            </li>
          </ul>
          <motion.button
            className="mt-6 px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
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

export default Domainsection;
