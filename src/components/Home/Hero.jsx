import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  "ui/ux design",
  "web development",
  "app development",
  "domain hosting",
];

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  const [currentService, setCurrentService] = useState("");
  const serviceIndexRef = useRef(0);
  const letterIndexRef = useRef(0);
  const timeoutRef = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  useEffect(() => {
    const typeLetter = () => {
      const currentServiceText = services[serviceIndexRef.current];
      if (letterIndexRef.current < currentServiceText.length) {
        setCurrentService(() =>
          currentServiceText.slice(0, letterIndexRef.current + 1)
        );
        letterIndexRef.current++;
        timeoutRef.current = setTimeout(typeLetter, 150);
      } else {
        setTimeout(() => {
          letterIndexRef.current = 0;
          serviceIndexRef.current =
            (serviceIndexRef.current + 1) % services.length;
          setCurrentService("");
          timeoutRef.current = setTimeout(typeLetter, 1000);
        }, 700);
      }
    };

    typeLetter();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="container min-h-[80vh] flex items-center justify-center px-4 container_lg"
    >
      <div className="max-w-2xl text-center space-y-6">
        <motion.p
          variants={containerVariants}
          className="text-gray-600 text-lg"
        >
          CodeSala - Your digital partner
        </motion.p>
        <motion.h1
          variants={containerVariants}
          className="text-3xl sm:text-5xl font-bold leading-tight"
        >
          At CodeSala, we specialize <br /> in{" "}
          <span className="text-5xl font-bold bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent transition-all duration-1000 hover:bg-gradient-to-tl">
            {currentService}
          </span>{" "}
          services
        </motion.h1>
        <motion.div variants={containerVariants}>
          <Link
            to="/contact"
            className="inline-block animated-gradient-btn text-white px-6 py-3 rounded-md text-lg font-medium mt-2"
          >
            Let&apos;s start a project!
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
