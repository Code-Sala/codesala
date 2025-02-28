import { motion, useInView } from "framer-motion";
import { Trophy, Globe, Palette, Smartphone } from "lucide-react";
import { useRef } from "react";

const achievements = [
  {
    title: "Web Hero",
    description: "Earned for building 5+ websites.",
    icon: <Trophy size={50} className="text-vibrant-pink" />,
  },
  {
    title: "Hosting Prodigy",
    description: "Successfully hosted 10+ domains.",
    icon: <Globe size={50} className="text-vibrant-pink" />,
  },
  {
    title: "UI/UX Virtuoso",
    description: "Designed 10+ user-friendly interfaces.",
    icon: <Palette size={50} className="text-vibrant-pink" />,
  },
  {
    title: "App Visionary",
    description: "Designed 10+ user-friendly interfaces.",
    icon: <Smartphone size={50} className="text-vibrant-pink" />,
  },
];

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// Individual card animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const OurAchievement = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="container min-h-[60vh] mx-auto flex flex-col items-center justify-center px-4"
    >
      <motion.h1
        variants={cardVariants}
        className="text-3xl sm:text-5xl font-bold text-center mb-12 text-vibrant-pink"
      >
        Our Achievements
      </motion.h1>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="relative flex flex-col items-center p-6 bg-transparent backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-transform"
          >
            <div className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-vibrant-pink transition-all"></div>
            {achievement.icon}
            <h2 className="text-2xl font-semibold mt-3 text-vibrant-pink">
              {achievement.title}
            </h2>
            <p className="text-gray-700 mt-2 text-center">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OurAchievement;
