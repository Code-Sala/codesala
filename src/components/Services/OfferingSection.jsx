import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import services from "../../Data/Services.json";

const OfferingSection = () => {
  const sectionRef = useRef(null); // Step 1: Create a ref
  const isInView = useInView(sectionRef, { triggerOnce: true, threshold: 0.2 }); // Step 2: Track when in viewport

  return (
    <section ref={sectionRef} className="py-20 bg-gray-100 container z-50">
      <div className="max-w-6xl mx-auto px-6">
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
          {services.map((service, index) => (
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
