import { motion } from "framer-motion";
function ContactHero() {
  return (
    <>
       <div className="bg-gradient-to-br from-[#00AEEF]  via-[#892890] to-[#ED1D7E] min-h-[80vh]container pb-12 flex items-center justify-center px-4 sm:px-8 pt-12">
      <motion.div
        className="max-w-8xl text-center container_lg pt-[8rem]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight "
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Contact Us
        </motion.h1>
        <motion.p
          className="text-white font-semibold text-base sm:text-lg md:text-xl mt-6 px-2 sm:px-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          &quot;Your feedback matters. Let&apos;s connect!&quot;
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >

        </motion.div>
      </motion.div>
    </div>
    </>
  )
}

export default ContactHero