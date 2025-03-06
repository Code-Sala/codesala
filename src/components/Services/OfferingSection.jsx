import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import services from "../../Data/Services.json";

// Import images
import firstImg from "../../assets/img/services/webdevelopment.png";
import secondImg from "../../assets/img/services/mobileApp.png";
import thirdImg from "../../assets/img/services/uiux.png";
import fourthImg from "../../assets/img/services/domainandhosting.png";
import fifthImg from "../../assets/img/services/software.png";
import sixtImg from "../../assets/img/services/skill1.png";

const OfferingSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 });

  // Update services to use local images
  const updatedServices = services.map((service, index) => {
    return {
      ...service,
      img: [firstImg, secondImg, thirdImg, fourthImg, fifthImg, sixtImg][index], // Assign local images
    };
  });

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white container_lg z-50 lg:max-w-full"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-12 xl:px-24">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h3 className="font-semibold text-xl text-blue-600 uppercase tracking-wide">
            What We're Offering
          </h3>
          <h1 className="text-4xl font-extrabold text-gray-800 mt-2">
            Our Services for Clients
          </h1>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {updatedServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              {/* Image Section */}
              {service.img && (
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              )}

              {/* Service Title */}
              <h2 className="text-2xl font-bold text-gray-900">
                {service.title}
              </h2>

              {/* Service Description */}
              <p className="text-gray-600 mt-2">{service.description}</p>

              {/* Animated Button */}
              <Link to={service.link || service.button}>
                <motion.button
                  className="text-[#F1529C] hover:text-[#482977] mt-4 font-semibold transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {service.button ? "Get Started" : "Learn More"}
                </motion.button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingSection;
