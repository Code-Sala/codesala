import { motion } from "framer-motion";
import { Code, Smartphone, PanelsTopLeft, Server } from "lucide-react";
import { Link } from "react-router-dom";

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
];

const GridCardService = () => {
  return (
    <div className="container flex flex-col items-center justify-center px-4 container_lg mx-auto pb-4 pt-8">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12">
        Explore Our Expertise
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl ">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="relative bg-white py-8 px-2 rounded-xl shadow-xl border border-gray-200 flex flex-col items-center text-center hover:shadow-2xl transform transition-all"
            >
              <Icon className="w-16 h-16 text-vibrant-pink mb-4" />
              <h2 className="text-xl font-semibold text-vibrant-pink">
                {service.title}
              </h2>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <Link
                to={service.link}
                className="mt-4 inline-block px-4 py-2 bg-vibrant-pink text-white rounded-md hover:bg-bright-purple transition"
              >
                Read More
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default GridCardService;
