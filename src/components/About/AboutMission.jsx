import { motion } from "framer-motion";
import { Check } from "lucide-react";
import AboutMissionImg from  "../../assets/img/ourmission.webp"
function AboutMission() {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-20">
      {/* Heading */}
      <motion.h1
        className="bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent text-3xl sm:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Mission
      </motion.h1>
   
      {/* Mission Content - Responsive Layout */}
      <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-12 pt-12 pb-12">
        {/* Left Section - Image (Hidden on Small Screens) */}
        <motion.div
          className="hidden sm:block w-full sm:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src= {AboutMissionImg}
            className="rounded-md w-full max-w-md mx-auto"
          />
        </motion.div>

        {/* Right Section - Text (Centered on Small Screens) */}
        <motion.div
          className="w-full sm:w-1/2 text-center sm:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-700 leading-loose pt-2 text-md">
          <strong>CODESALA</strong>, we are committed to delivering high-quality, innovative solutions that help businesses and individuals thrive in the digital era. Our mission is to create user-friendly, cutting-edge technologies that empower our customers to achieve their goals effortlessly. <br />
          </p>
          <div className="wrap flex justify-evenly pt-6 list-none">
            <div className="first">
            <li className="flex gap-3"><span><Check className="text-vibrant-pink"/></span><p>Innovation </p></li>
            <li className="flex gap-3"><span><Check className="text-vibrant-pink"/></span><p>Customer-Centricity </p></li>
            </div>
            <div className="second">
            <li className="flex gap-3"><span><Check className="text-vibrant-pink"/></span><p>Excellence</p></li>
            <li className="flex gap-3"><span><Check className="text-vibrant-pink"/></span><p>Integrity </p></li>
            </div>
          </div><br />
          <p className="text-loose">We dream of a future where businesses, big or small, have the tools they need to scale effortlessly. Our goal is to be a global leader in digital solutions, helping millions transform their dreams into reality.</p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMission;
