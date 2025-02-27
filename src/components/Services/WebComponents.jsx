import React from "react";
import { motion } from "framer-motion";

const WebComponents = () => {
  return (
    <div>
      <motion.div
        className="container bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] min-h-[40vh] flex flex-col items-center justify-center px-4 sm:px-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container_lg">
          <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight pt-10">
            Web Development
          </h1>
          <p className="text-white font-semibold text-base sm:text-lg md:text-xl mt-6 px-2 sm:px-10">
            We create fast, responsive, and scalable websites tailored to your
            needs. Whether it's a sleek business site, an eCommerce platform, or
            a dynamic web app, we use cutting-edge technologies to deliver
            high-performance solutions. Let’s build a website that sets you
            apart!
          </p>
        </div>
      </motion.div>
      <section className="flex flex-col md:flex-row items-center justify-between p-8">
        <motion.div
          className="relative w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="src\assets\img\services\web.png"
            alt="Web Development"
            className="pl-10 md:pl-20 w-full md:w-120 rounded-lg h-auto shadow-lg"
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
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔</span> Cutting-Edge
              Technology
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔</span> User-Centric Design
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔</span> SEO & Performance
              Optimized
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔</span> Reliable Support &
              Maintenance
            </li>
            <li className="flex items-center">
              <span className="text-red-500 mr-2">✔</span> Transparent Process
            </li>
          </ul>
          <motion.button
            className="mt-6 px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            About Us
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default WebComponents;
