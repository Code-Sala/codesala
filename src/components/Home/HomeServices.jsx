/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { Code, Smartphone, Users, Plug } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import homeserviceimg from "../../assets/img/home/homeservice.png";

const services = [
  {
    title: "Web Development",
    description:
      "We build responsive and scalable websites to enhance your online presence.",
    icon: Code,
    link: "/webcomponent",
  },
  {
    title: "App Development",
    description:
      "Custom mobile and web applications tailored to your business needs.",
    icon: Smartphone,
    link: "/mobilecomponent",
  },

  {
    title: "Skill Rental",
    description:
      "Hire expert professionals on-demand for your short-term or long-term projects.",
    icon: Users,
    link: "/skillrentcomponent",
  },
  {
    title: "Software Integration",
    description:
      "Seamlessly connect your software with third-party applications for better efficiency.",
    icon: Plug,
    link: "/softwarecomponent",
  },
];

const HomeServices = () => {
  return (
    <div className="container mx-auto py-12 px-6 flex flex-col items-center">
      <h1 className="text-3xl sm:text-5xl font-bold text-center  bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent py-2 leading-tight">
        Explore Our Expertise
      </h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Explore the depth of our skills and capabilities in every solution we
        offer.
      </p>
      <div className="flex gap-6">
        <div className="max-w-6xl bg-amber-700 shadow-lg contain-content relative hidden md:hidden lg:block">
          <img
            src={homeserviceimg}
            alt="service image"
            className="h-full w-full object-cover"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-10" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 z-20">
            <h1 className="text-3xl md:text-5xl font-bold py-2">
              Our Services
            </h1>
            <p className="mt-4 text-sm md:text-lg max-w-md">
              We offer a wide range of services to meet your needs, from
              professional solutions to innovative ideas.
            </p>
          </div>

          <Link
            to="/services#serviceHome"
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-2 border-2 rounded-[3rem] border-bright-purple text-white hover:text-gray-900 hover:border-white hover:bg-white z-20"
          >
            More Services
          </Link>
        </div>

        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl">
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
    <div
      className="relative w-64 h-64 perspective"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
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
          <Link
            to={service.link}
            className="mt-4 px-4 py-2 bg-gold text-bright-purple rounded-md hover:underline"
          >
            Read More
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeServices;
