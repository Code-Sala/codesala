import { motion } from "framer-motion";

function AboutMission() {
  return (
    <>
      <div className="wrappers pt-20 container">
        <motion.h1
          className="text-vibrant-pink text-[36px] font-bold text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          OUR MISSION
        </motion.h1>
        <div className="ourmission flex pt-12 pb-12 container_lg">
          <motion.div
            className="left flex-1/2 pt-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src="./src/assets/img/ourmission.webp" alt="" className="rounded-md" />
          </motion.div>
          <motion.div
            className="right flex-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="pt-6">
              Welcome to CODESALA, where innovation meets practicality. We are a dynamic digital solutions company dedicated to helping businesses thrive in the ever-evolving digital world. With expertise in UI/UX design, web development, domain and hosting, software integration, and skill rental, we offer a full range of services tailored to meet your unique needs <br /> <br />
              At CODESALA, we believe that technology should make life easier, not more complicated. That&apos;s why we focus on creating simple, secure, and scalable solutions that bring your ideas to life while enhancing your business growth. Whether you need a sleek, user-friendly design, seamless integration, or skilled professionals for your team, we&apos;ve got you covered. <br /> <br />
              We are passionate about helping you succeed by delivering reliable, efficient, and innovative solutions that elevate your business. Our approach is built on transparency, proactiveness, and a genuine commitment to your success. Let us work together to unlock your business&apos;s full potential and drive meaningful change <br /> <br />
              Partner with CODESALA and let&apos;s take your business to the next level!
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default AboutMission;