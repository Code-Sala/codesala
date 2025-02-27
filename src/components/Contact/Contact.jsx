import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function Contact() {
  return (
    <>
      <motion.div
        className="wrapeers container pt-35 pb-25"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="contact container_lg flex">
          {/* Left section with map */}
          <div className="left flex-1/2">
            <motion.div
              className="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.104650021768!2d85.29060207535811!3d27.714054976178673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f2d306eb21%3A0xdae844496e6b4bd6!2sBhagwan%20Pau%20Taxi%20Stand!5e0!3m2!1sen!2snp!4v1740648053270!5m2!1sen!2snp"
                width="300"
                height="250"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>

          {/* Middle section with contact details */}
          <div className="mid flex-1/2 pl-20">
            <motion.h1
              className="pt-4 pl-10 pb-6 text-[30px] text-vibrant-pink font-semibold"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Contact
            </motion.h1>

            <motion.div
              className="icons flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <MapPin
                className="p-2 rounded-full border-3 border-vibrant-pink -mt-4 ml-10"
                size={40}
              />
              <p className="-mt-2 pl-4">Bhawan Pau , Kathmandu</p>
            </motion.div>

            <motion.div
              className="icons flex mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Mail
                className="p-2 rounded-full border-3 border-vibrant-pink -mt-4 ml-10"
                size={40}
              />
              <p className="-mt-2 pl-4">
                <a href="mailto:codesalaofficial@gmail.com">
                  codesalaofficial@gmail.com
                </a>
              </p>
            </motion.div>

            <motion.div
              className="icons flex mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Phone
                className="p-2 rounded-full border-3 border-vibrant-pink -mt-4 ml-10"
                size={40}
              />
              <p className="-mt-2 pl-4">
                <a href="tel:9769857456">+977 9769857456</a>
              </p>
            </motion.div>
          </div>

          {/* Right section with social media */}
          <div className="right flex-1/2">
            <motion.h1
              className="pt-4 pl-10 pb-6 text-[30px] text-vibrant-pink font-semibold text-center"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Follow Us
            </motion.h1>

            <motion.div
              className="icons flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Facebook
                className="p-2 rounded-full border-3 border-vibrant-pink ml-58 mb-4"
                size={40}
              />
            </motion.div>

            <motion.div
              className="icons flex mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Linkedin
                className="p-2 rounded-full border-3 border-vibrant-pink ml-58"
                size={40}
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
