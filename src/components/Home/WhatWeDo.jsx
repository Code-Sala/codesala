import { Brain, DollarSign, Users, Layers } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";

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
    title: "Long-lasting product",
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

  // Track which card is hovered
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="container min-h-screen flex flex-col items-center justify-center px-4 mx-auto pb-4 pt-12"
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-2  bg-gradient-to-br from-[#ec07c7cc] to-[#138bffcc] bg-clip-text text-transparent">
        What <span>We Offer</span>
      </h1>
      <p className="text-lg text-center text-gray-600 mb-16">
        We provide trusted solutions that stand the test of time.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl px-4 lg:py-0 sm:py-4">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={cardVariants}
              className="bg-transparent shadow-lg rounded-lg flex flex-col items-center text-center hover:shadow-xl px-6 py-8 transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="p-4 bg-gradient-to-br from-[#ec07c7cc] to-[#138bffcc] rounded-full">
                <Icon className="h-16 w-16 text-white" />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mt-4 px-4">
                {value.title}
              </h2>

              {/* Smooth Content Reveal */}
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={
                  hoveredIndex === index
                    ? {
                        opacity: 1,
                        height: "auto",
                        transition: { duration: 0.3 },
                      }
                    : { opacity: 0, height: 0, transition: { duration: 0.2 } }
                }
                className="text-gray-500 mt-2 overflow-hidden text-sm"
              >
                {value.description}
              </motion.p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default WhatWeDo;
