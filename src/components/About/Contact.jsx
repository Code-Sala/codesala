import { motion } from "framer-motion";
import { Facebook, Linkedin, Mail, MapPin, Phone, } from "lucide-react";

export default function Contact() {
  return (
    <motion.div
      className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Grid with 1 column on mobile, 3 columns on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Map Section */}
        <motion.div
          className="w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.104650021768!2d85.29060207535811!3d27.714054976178673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f2d306eb21%3A0xdae844496e6b4bd6!2sBhagwan%20Pau%20Taxi%20Stand!5e0!3m2!1sen!2snp!4v1740648053270!5m2!1sen!2snp"
            className="w-full h-48 sm:h-64 md:h-72 lg:h-full rounded-lg shadow-lg border"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>

        {/* Contact Information Section */}
        <div className="flex flex-col items-center space-y-6 lg:border-l lg:border-r lg:border-gray-200 lg:px-6">
  <motion.h1 
    className="text-2xl md:text-3xl font-semibold text-[#ED1D7E] mb-6 text-center"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    Contact Us
  </motion.h1>

  {/* Contact Details */}
  <div className="flex flex-col space-y-6">
    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <MapPin className="text-[#ED1D7E] w-8 h-8 flex-shrink-0" />
      <div className="flex-1">
        <p className="text-gray-700 m-0">Bhawan Pau, Kathmandu</p>
      </div>
    </motion.div>

    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <Mail className="text-[#ED1D7E] w-8 h-8 flex-shrink-0" />
      <div className="flex-1">
        <p className="text-gray-700 m-0 break-words">
          <a href="mailto:codesalaofficial@gmail.com" className="hover:underline">
          np@codesala.com
          </a>
        </p>
      </div>
    </motion.div>

    <motion.div
      className="flex items-start gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <Phone className="text-[#ED1D7E] w-8 h-8 flex-shrink-0" />
      <div className="flex-1">
        <p className="text-gray-700 m-0">
          <a href="tel:9769857456" className="hover:underline">
          +977-15924442
          </a>
        </p>
      </div>
    </motion.div>
  </div>
</div>



        {/* Follow Us Section */}
        <div className="flex flex-col space-y-6">
          <motion.h1
            className="text-2xl md:text-3xl font-semibold text-[#ED1D7E] mb-6 text-center"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Follow Us
          </motion.h1>

          <motion.div
            className="flex flex-row justify-center gap-6 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Facebook className="text-[#ED1D7E] w-10 h-10 hover:scale-110 transition-transform" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-[#ED1D7E] w-10 h-10 hover:scale-110 transition-transform" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {/* <X className="text-[#ED1D7E] w-10 h-10 hover:scale-110 transition-transform" /> */}
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}