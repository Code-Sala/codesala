import { motion, useInView } from "framer-motion";
import {
  Code,
  Smartphone,
  PanelsTopLeft,
  Server,
  Users,
  Plug,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

const services = [
  {
    title: "Web Development",
    description:
      "We build responsive and scalable websites to enhance your online presence.",
    icon: Code,
    link: "/services/web-development",
  },
  {
    title: "App Development",
    description:
      "Custom mobile and web applications tailored to your business needs.",
    icon: Smartphone,
    link: "/services/app-development",
  },
  {
    title: "UI/UX Design",
    description: "Creating visually appealing and user-friendly interfaces.",
    icon: PanelsTopLeft,
    link: "/services/ui-ux-design",
  },
  {
    title: "Domain & Hosting",
    description:
      "Secure and reliable domain registration and hosting services.",
    icon: Server,
    link: "/services/domain-hosting",
  },
  {
    title: "Skill Rental",
    description:
      "Hire expert professionals on-demand for your short-term or long-term projects.",
    icon: Users,
    link: "/services/skill-rental",
  },
  {
    title: "Software Integration",
    description:
      "Seamlessly connect your software with third-party applications for better efficiency.",
    icon: Plug,
    link: "/services/software-integration",
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

const HomeServices = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="container flex flex-col items-center justify-center px-4 container_lg mx-auto pb-4 pt-8"
    >
      <motion.h1
        variants={cardVariants}
        className="text-3xl sm:text-5xl font-bold text-center mb-12 text-vibrant-pink"
      >
        Explore Our Expertise
      </motion.h1>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mn-4"
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="relative bg-transparent py-8 px-4 rounded-xl shadow-xl flex flex-col items-center text-center hover:shadow-2xl transform transition-all"
            >
              <Icon className="w-16 h-16 text-vibrant-pink mb-4" />
              <h2 className="text-xl font-semibold text-gray-700">
                {service.title}
              </h2>
              <p className="text-gray-700 mt-2">{service.description}</p>
              <Link
                to={service.link}
                className="mt-4 inline-block px-4 py-2 bg-vibrant-pink text-white rounded-md hover:bg-bright-purple transition"
              >
                Read More
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
      <motion.div variants={cardVariants}>
        <Link
          to="/services"
          className="mt-16 inline-block px-4 py-2 bg-transparent border-2 border-vibrant-pink text-vibrant-pink rounded-md hover:bg-vibrant-pink hover:text-white transition"
        >
          More Services
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default HomeServices;
