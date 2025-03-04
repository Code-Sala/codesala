import { motion } from "framer-motion";

function AboutInterested() {
  return (
    <motion.div
      className="wrappers  bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] min-h-[40vh] flex items-center justify-center px-4 sm:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="aboutinterested container_lg p-10 flex flex-col items-center">
        <motion.h1
          className="text-center text-[60px] text-white font-semibold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Interested in different services?
        </motion.h1>
        <motion.p
          className="text-center text-white text-[20px] pt-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Look no further. Your challenge, our expertise. <br />Schedule a call to share your idea!
        </motion.p>
        <motion.button
          className="p-[8px] pr-[14px] pl-[14px] mt-8 rounded-lg  cursor-pointer mb-6  bg-vibrant-pink  hover:bg-deep-purple text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          GET IN TOUCH
        </motion.button>
      </div>
    </motion.div>
  );
}

export default AboutInterested;
