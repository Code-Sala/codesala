import { Brain, DollarSign, Users, Layers } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    title: "Innovation & Creativity",
    description:
      "We drive innovation through cutting-edge technology, ensuring our solutions are modern, efficient, and future-proof.",
    icon: Brain,
  },
  {
    title: "Cost-Effective Solutions",
    description:
      "Our focus is on delivering high-quality results while optimizing costs, making technology accessible for businesses of all sizes.",
    icon: DollarSign,
  },
  {
    title: "User-Centric Approach",
    description:
      "We prioritize user experience, ensuring our products and services meet the needs of customers and provide seamless interactions.",
    icon: Users,
  },
  {
    title: "Reliable Products",
    description:
      "Our solutions are designed for longevity and scalability, supporting business growth and technological advancements.",
    icon: Layers,
  },
];

// Container animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Individual card animation
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.2 },
  }),
};

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="container min-h-screen flex flex-col items-center justify-center px-4 mx-auto container_lg pb-4"
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12 text-vibrant-pink">
        What We Offer!
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl p-4">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="bg-transparent shadow-lg rounded-lg p-6  flex flex-col items-center text-center hover:shadow-xl"
            >
              <Icon className="h-12 w-12 text-vibrant-pink mb-4" />
              <h2 className="text-xl font-semibold text-vibrant-pink">
                {value.title}
              </h2>
              <p className="text-gray-700 mt-2">{value.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default WhatWeDo;
