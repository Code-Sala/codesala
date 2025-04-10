/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { SiAndroidstudio } from "react-icons/si";
import { SiXcode } from "react-icons/si";
import { FaSwift } from "react-icons/fa";
import { FaFlutter } from "react-icons/fa6";

import { TbBrandReactNative } from "react-icons/tb";
import { SiExpress } from "react-icons/si";
import { Link } from "react-router-dom";
import { useState } from "react";
// import homeserviceimg from "../../assets/img/home/homeservice.png";

const services = [
  {
    title: "Android Studio",

    icon: SiAndroidstudio,
  },
  {
    title: "Xcode",

    icon: SiXcode,
    link: "/mobilecomponent",
  },
  {
    title: "Swift",
    description:
      "Seamlessly connect your software with third-party applications for better efficiency.",
    icon: FaSwift,
    link: "/softwarecomponent",
  },

  {
    title: "Flutter",
    description:
      "Hire expert professionals on-demand for your short-term or long-term projects.",
    icon: FaFlutter,
    link: "/skillrentcomponent",
  },
  {
    title: "React Native",
    description:
      "Seamlessly connect your software with third-party applications for better efficiency.",
    icon: TbBrandReactNative,
  },
];

const MobileCard = () => {
  const firstRowServices = services.slice(0, 2);
  const secondRowServices = services.slice(2);

  return (
    <div className="container mx-auto py-12 px-6 flex flex-col items-center">
      <h1 className="text-3xl sm:text-5xl font-bold text-center bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent py-2 leading-tight">
        What Powers Our Creation!
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12"></p>

      {/* First Row - 2 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {firstRowServices.map((service, index) => (
          <FlippingCard key={index} service={service} />
        ))}
      </div>

      {/* Second Row - 3 Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {secondRowServices.map((service, index) => (
          <FlippingCard key={index + 2} service={service} />
        ))}
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

export default MobileCard;
