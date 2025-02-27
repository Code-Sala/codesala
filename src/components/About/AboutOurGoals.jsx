// import { useState } from "react";
import { motion } from "framer-motion";
import {
  // CheckCircle,
  // UserCheck,
  // Clock,
  // Eye,
  // Users,
  // DollarSign,
} from "lucide-react";



const AboutOurGoals = () => {
  return (
    <motion.div
      className="wrapper container pt-30 pb-40"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-3xl sm:text-5xl font-bold text-center text-vibrant-pink pb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Goals
      </motion.h1>
      <motion.div
        className="ourgoals container_lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-center p-60 pb-0 pt-4 text-[20px]">
          We strategize our solutions to help you revolutionize your business and produce the desired results.
          We create aesthetically inspiring software solutions for your business to take it to new heights.
          We assist in transforming your ideas into well-executed projects.
          Our team works with you to solve any challenges along the way.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutOurGoals;
