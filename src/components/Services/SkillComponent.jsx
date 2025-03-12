import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Added import
import imageSkill from "../../../src/assets/img/services/skill.png";

const SkillComponent = () => {
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
              Skill Rental
            </motion.h1>
            <motion.p
              className="text-white font-semibold text-base sm:text-lg md:text-xl mt-6 px-2 sm:px-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Need specialized skills for a project? Our Skill Rental service
              connects you with top-tier professionals for short-term or
              long-term engagements. Whether it’s developers, designers,
              marketers, or more, you get access to the best talent, exactly
              when you need it. Scale your team with ease and drive results
              faster!
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
              src={imageSkill}
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
              At Code Sala, we believe that every project deserves the perfect
              blend of talent and expertise. That's why we've curated a diverse
              pool of highly skilled professionals ready to jump into action and
              help you achieve your goals. Here’s why we stand out
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span> Flexibility &
                Convenience
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span> Cost-Effective
                Solutions
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span>Quality Assurance
              </li>
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span> Support &
                Reliability
              </li>
              {/* <li className="flex items-center">
                <span className="text-red-500 mr-2">✔</span> Ongoing Support &
                Maintenance
              </li> */}
            </ul>
            <motion.button
              className="mt-6 px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-pink-500 hover:text-white transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link to="/contact">Let's Start</Link>
            </motion.button>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default SkillComponent;
