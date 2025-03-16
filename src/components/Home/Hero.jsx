import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ParticleBackground from "../particles/ParticleBackground";
import codeImg from "../../assets/img/home/city.jpg";

const services = [
  "ui/ux design",
  "software integration",
  "app development",
  "web development",
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  const [currentService, setCurrentService] = useState("web development");
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
      className="relative min-h-screen flex flex-col items-center justify-center px-6 sm:px-12 text-white text-center"
    >
      <div className="z-10">
        <ParticleBackground />
      </div>
      {/* Gradient Overlay */}
      <div className="background_linear bg-gradient-to-br from-[#ec07c7cc] to-[#138bffcc] absolute w-full h-full z-10 opacity-40"></div>
      <div className="absolute inset-0  sm:block">
        <img
          src={codeImg}
          alt="Code Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl space-y-6">
        <motion.h1
          variants={containerVariants}
          className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          At CodeSala, we specialize in{" "}
          <span className=" capitalize bg-gradient-to-br from-[#ffffff] via-[#82b1e4] to-[#fdfdff] bg-clip-text text-transparent text-2xl sm:text-4xl lg:text-5xl font-bold transition-all duration-1000 hover:bg-gradient-to-tl">
            {currentService}
          </span>{" "}
          services
        </motion.h1>
        <motion.div variants={containerVariants}>
          <Link
            to="/contact"
            className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-medium mt-2 z-90"
          >
            Let&apos;s start a project!
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
