import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ParticleBackground from "../particles/ParticleBackground";
// import groupImg from "https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/6c/9f/62/48/31/v1_E11/E114HT2R.jpg?w=1600&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=6c2d34838d9f9da9d4254bf41ebe29eecb873f1a7072381997599f6f5b56e6e4";
import codeImg from "../../assets/img/home/code.jpeg";

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
      className="container bg-cover min-h-[100vh] flex items-center justify-center px-4 opacity-40 relative bg-[(../../assets/img/home/Group.jpg)] text-white"
    >
      {/* <img src={btrfly} alt="" /> */}
      <div className="background_linear bg-gradient-to-br from-[#ec07c7cc] to-[#138bffcc] absolute w-full h-full z-10 opacity-40  "></div>
      <div className="absolute w-full h-full z-9 bg-cover overflow-hidden ">
        <img src={codeImg} alt="group image" className="w-full object-cover " />
      </div>

      <ParticleBackground />
      {/* 80deg, rgba(236, 7, 199, .8) 0%, rgba(19, 139, 255, .8) */}
      <div className="max-w-2xl text-center space-y-6 z-50">
        {/* <motion.p
          variants={containerVariants}
          className=" text-2xl bg-gradient-to-l from-[#00aeef] via-[#489ff7] via-[#7f8cf2] via-[#00aeef] via-[#00aeef] to-[#00aeef] bg-clip-text text-transparent font-mono font-bold"
        >
          Technology Will Change Humanity Forever
        </motion.p> */}
        <motion.h1
          variants={containerVariants}
          className="text-3xl sm:text-5xl font-bold leading-tight"
        >
          At CodeSala, we specialize <br /> in{" "}
          <span className="text-3xl  lg:text-5xl font-bold text-cyan-400 bg-clip-text   transition-all duration-1000 hover:bg-gradient-to-tl">
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
