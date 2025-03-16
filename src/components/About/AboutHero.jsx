import { motion } from "framer-motion";
import groupImg from "../../assets/img/home/Group.jpg";
import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <div className="relative min-h-[100vh] flex items-center justify-center px-4 sm:px-8 pt-[6.2rem] pb-24 z-10 bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E]">
      
      {/* Background Image with Opacity */}
      <div className="absolute top-0 left-0 w-full h-full z-1 opacity-30">
        <img src={groupImg} alt="group image" className="w-full h-full object-cover" />
      </div>

      <motion.div
        className="max-w-8xl text-center container_lg z-40"
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
          Your Partner for Ultimate <br /> Success
        </motion.h1>
        <motion.p
          className="text-white font-semibold text-base sm:text-lg md:text-md mt-6 px-2 sm:px-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Welcome to CODESALA, where innovation meets practicality. We are a
          dynamic digital solutions company dedicated to helping businesses
          thrive in the ever-evolving digital world. With expertise in UI/UX
          design, web development, domain and hosting, software integration, and
          skill rental, we offer a full range of services tailored to meet your
          unique needs.
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
           <Link to="/Contact">Book A Call</Link> 
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default AboutHero;
