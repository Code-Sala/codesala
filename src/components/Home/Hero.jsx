import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
// import ParticleBackground from "../particles/ParticleBackground";

const services = [
  "ui/ux design",
  "software integration",
  "app development",
  "web development",
];

// Parent container animation
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
      className="container bg-cover min-h-[80vh] flex items-center justify-center px-4 opacity-40 relative bg-[url(https://images.unsplash.com/photo-1485470733090-0aae1788d5af?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhbGxwYXBlciUyMDRrfGVufDB8fDB8fHww)] text-white"
    >
      <div className="background_linear bg-gradient-to-br from-[#ec07c7cc] to-[#138bffcc] absolute w-full h-full z-10 opacity-90  "></div>
      {/* <ParticleBackground /> */}
      {/* 80deg, rgba(236, 7, 199, .8) 0%, rgba(19, 139, 255, .8) */}
      <div className="max-w-2xl text-center space-y-6 z-50">
        <motion.p
          variants={containerVariants}
          className="text-gray-200 text-2xl "
        >
          CodeSala - Your digital partner
        </motion.p>
        <motion.h1
          variants={containerVariants}
          className="text-3xl sm:text-5xl font-bold leading-tight"
        >
          At CodeSala, we specialize <br /> in{" "}
          <span className="text-3xl  lg:text-5xl font-bold bg-gradient-to-l from-[#00aeef] via-[#489ff7] via-[#7f8cf2] via-[#ae73df] via-[#d354bd] to-[#00aeef] bg-clip-text text-transparent  transition-all duration-1000 hover:bg-gradient-to-tl">
            {currentService}
          </span>{" "}
          services
        </motion.h1>
        <motion.div variants={containerVariants}>
          <Link
            to="/contact"
            className="inline-block z-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-[3rem] text-lg font-medium mt-2"
          >
            Let&apos;s start a project!
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
