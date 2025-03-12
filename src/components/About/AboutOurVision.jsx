import { motion } from "framer-motion";
import AboutVisionImg from  "../../assets/img/ourvission.png"
const AboutOurVision = () => {
  return (
    <motion.div
      className="container mx-auto px-4 sm:px-12 lg:px-20 pt-20 pb-24 "
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
        Our Vision
      </motion.h1>
      <p className="text-center pt-2 pb-10 text-gray-700">&quot;Focused on delivering results that make a meaningful impact.&quot;</p>
      <div className="wrap flex gap-20">
      <div className="right w-400 px-5  text-[16px] text-gray-700 pt-15">
        <p className="leading-loose">To be a global leader in digital innovation, empowering businesses of all sizes with simple, scalable, and secure solutions that drive growth and success in the ever-evolving digital landscape. We envision a future where technology seamlessly enhances lives and businesses, enabling them to reach their full potential.</p>
       </div>
       <div className="left bg-amber-300 h-30 w-200 ">
         <img src= {AboutVisionImg} alt="" className="rounded-md w-full max-w-md mx-auto"/>
       </div>
      </div>     
    </motion.div>
  );
};

export default AboutOurVision;
