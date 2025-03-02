import { motion } from "framer-motion";

function AboutMission() {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-20">
      {/* Heading */}
      <motion.h1
        className="text-[#ED1D7E] text-3xl sm:text-4xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        OUR MISSION
      </motion.h1>

      {/* Mission Content - Responsive Layout */}
      <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start gap-12 pt-12 pb-12">
        
        {/* Left Section - Image (Hidden on Small Screens) */}
        <motion.div
          className="hidden sm:block w-full sm:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="./src/assets/img/ourmission.webp"
            alt="Our Mission"
            className="rounded-md w-full max-w-md mx-auto"
          />
        </motion.div>

        {/* Right Section - Text (Centered on Small Screens) */}
        <motion.div
          className="w-full sm:w-1/2 text-center sm:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to <strong>CODESALA</strong>, where innovation meets practicality. We are a dynamic digital solutions company dedicated to helping businesses thrive in the ever-evolving digital world. 
            With expertise in UI/UX design, web development, domain and hosting, software integration, and skill rental, we offer a full range of services tailored to meet your unique needs.
            <br /><br />
            At <strong>CODESALA</strong>, we believe that technology should make life easier, not more complicated. That&apos;s why we focus on creating simple, secure, and scalable solutions that bring your ideas to life while enhancing your business growth. 
            Whether you need a sleek, user-friendly design, seamless integration, or skilled professionals for your team, we&apos;ve got you covered.
            <br /><br />
            We are passionate about helping you succeed by delivering reliable, efficient, and innovative solutions that elevate your business. 
            Our approach is built on transparency, proactiveness, and a genuine commitment to your success.
            <br /><br />
            <strong>Partner with CODESALA</strong> and let&apos;s take your business to the next level!
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutMission;
