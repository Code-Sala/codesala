/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { CodeXml, Braces, Plug } from "lucide-react";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { Link } from "react-router-dom";
import { useState } from "react";
// import homeserviceimg from "../../assets/img/home/homeservice.png";

const services = [
  {
    title: "HTML",
    description: "HTML.",
    icon: CodeXml,
  },
  {
    title: "CSS",
    description:
      "Custom mobile and web applications tailored to your business needs.",
    icon: Braces,
    link: "/mobilecomponent",
  },
  {
    title: "JavaScript",
    description:
      "Seamlessly connect your software with third-party applications for better efficiency.",
    icon: IoLogoJavascript,
    link: "/softwarecomponent",
  },

  {
    title: "React",
    description:
      "Hire expert professionals on-demand for your short-term or long-term projects.",
    icon: FaReact,
    link: "/skillrentcomponent",
  },
  {
    title: "NodeJs",
    description:
      "Seamlessly connect your software with third-party applications for better efficiency.",
    icon: FaNodeJs,
  },
  {
    title: "ExpressJs",
    description:
      "Seamlessly connect your software with third-party applications for better efficiency.",
    icon: SiExpress,
    link: "/softwarecomponent",
  },
];

const WebCard = () => {
  return (
    <div className="container mx-auto py-12 px-6 flex flex-col items-center">
      <h1 className="text-3xl sm:text-5xl font-bold text-center  bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent py-2 leading-tight">
        What Powers Our Creation!
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12"></p>
      <div className="flex gap-6">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {services.map((service, index) => (
              <FlippingCard key={index} service={service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FlippingCard = ({ service }) => {
  const [flipped, setFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <div className="relative w-64 h-64 perspective">
      <motion.div
        className="w-full h-full absolute transition-transform duration-400"
        animate={{ rotateY: flipped ? 180 : 0 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full flex flex-col items-center justify-center bg-dark-gold text-black rounded-lg shadow-lg backface-hidden">
          <Icon className="w-14 h-14 mb-4 bg-gradient-to-br from-[#ec07c7cc] to-[#138bffcc] text-white rounded-full p-3 mask mask-image" />

          <h2 className="text-xl font-semibold  bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent">
            {service.title}
          </h2>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full flex flex-col items-center justify-center bg-white text-gray-700 rounded-lg shadow-lg rotate-y-180 backface-hidden">
          <p className="text-center px-4">{service.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default WebCard;
