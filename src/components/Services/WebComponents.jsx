import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import imageWeb from "../../assets/img/services/web.png";
import WebCard from "./WebCard";

const WebComponents = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] min-h-[50vh] flex items-center justify-center px-4 sm:px-8">
        <motion.div
          className="max-w-7xl mx-auto text-center"
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
            Web Development
          </motion.h1>
          <motion.p
            className="text-white font-semibold text-base sm:text-lg md:text-xl mt-6 px-2 sm:px-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            We create fast, responsive, and scalable websites tailored to your
            needs. Whether it's a sleek business site, an eCommerce platform, or
            a dynamic web app, we use cutting-edge technologies to deliver
            high-performance solutions. Let’s build a website that sets you
            apart!
          </motion.p>
        </motion.div>
      </div>

      {/* Why Choose Us Section */}
      <section className="flex flex-col md:flex-row items-center justify-between p-8 max-w-7xl mx-auto">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={imageWeb}
            alt="Web Development"
            className="pl-10 md:pl-20 w-full rounded-lg shadow-lg"
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
            At Code Sala, we don’t just build websites—we craft digital
            experiences that drive results. Here’s why we are the right choice
            for your web development needs:
          </p>
          <ul className="space-y-2 text-gray-700">
            {[
              "Cutting-Edge Technology",
              "User-Centric Design",
              "SEO & Performance Optimized",
              "Reliable Support & Maintenance",
              "Transparent Process",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center">
                <span className="text-red-500 mr-2">✔</span> {item}
              </li>
            ))}
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

      {/* Card Section */}
      <WebCard />
    </div>
  );
};

export default WebComponents;
