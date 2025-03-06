import { motion } from "framer-motion";

const AboutOurGoals = () => {
  return (
    <motion.div
      className="container mx-auto px-4 sm:px-12 lg:px-20 pt-20 pb-24"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#ED1D7E] pb-0"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Goals
      </motion.h1>
      <p className="text-center pt-2 pb-10 text-gray-700">&quot;Focused on delivering results that make a meaningful impact.&quot;</p>

      {/* Goals Content - Responsive Text */}
      <motion.div
        className="max-w-3xl mx-auto text-center text-lg sm:text-xl leading-relaxed text-gray-800"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-gray-700">
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
