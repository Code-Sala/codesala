import { motion } from "framer-motion";
import {Mail, MapPin, Phone} from "lucide-react";
// import xlogo from "../../assets/svg/logo-black.svg"
// import Facebook from "../../assets/svg/facebook.svg"
// import Linkedin from "../../assets/svg/linkedin.svg"



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
    className="text-2xl md:text-3xl font-semibold bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent mb-6 text-center"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
  >
    Contact Us
  </motion.h1>

  {/* Contact Details */}
  <div className="flex flex-col space-y-6">
    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   stroke="url(#gradientColors)">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00AEEF" /> 
      <stop offset="50%" stopColor="#892890" /> 
      <stop offset="100%" stopColor="#ED1D7E" />  
      
        </linearGradient>
      </defs>
      <MapPin
        width={18}
        height={24}
        stroke="url(#gradient)"  
      />
    </svg>
      {/* <MapPin className="w-8 h-8 flex-shrink-0" /> */}
      <div className="flex-1">
        <p className="text-gray-700 m-0">Bhagwan Pau, Kathmandu</p>
      </div>
    </motion.div>

    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   stroke="url(#gradientColors)">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00AEEF" /> 
      <stop offset="50%" stopColor="#892890" /> 
      <stop offset="100%" stopColor="#ED1D7E" />  
      
        </linearGradient>
      </defs>
      <Mail
        width={18}
        height={24}
        stroke="url(#gradient)"  // Applying gradient to the icon
      />
    </svg>
      {/* <Mail className="w-8 h-8 flex-shrink-0" /> */}
      <div className="flex-1">
        <p className="text-gray-700 m-0 break-words">
          <a href="mailto:codesalaofficial@gmail.com" className="hover:underline">
          np@codesala.com
          </a>
        </p>
      </div>
    </motion.div>

    <motion.div
      className="flex items-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >

      <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"   stroke="url(#gradientColors)">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00AEEF" /> 
      <stop offset="50%" stopColor="#892890" /> 
      <stop offset="100%" stopColor="#ED1D7E" />  
      
        </linearGradient>
      </defs>
      <Phone
        width={18}
        height={24}
        stroke="url(#gradient)"  // Applying gradient to the icon
      />
    </svg>
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
            className="text-2xl md:text-3xl font-semibold bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent  mb-6 text-center"
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
              {/* <Facebook className="text-[#ED1D7E] w-10 h-10 hover:scale-110 transition-transform" /> */}
              {/* <img src={Facebook} alt=""  className="h-9" /> */}
              <svg
  fill="#ED1D7E"
  width="40"
  height="40"
  viewBox="0 0 1920 1920"
  xmlns="http://www.w3.org/2000/svg"
  stroke="url(#gradientColors)"
>
  <defs>
    <linearGradient id="gradientColors" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#00AEEF" /> 
      <stop offset="50%" stopColor="#892890" /> 
      <stop offset="100%" stopColor="#ED1D7E" />  
    </linearGradient>
  </defs>
  <g id="SVGRepo_iconCarrier">
    <path
      d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"
      fill="url(#gradientColors)"
      fillRule="evenodd"
    />
  </g>
</svg>







            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {/* <Linkedin className="text-[#ED1D7E] w-10 h-10 hover:scale-110 transition-transform" /> */}
              {/* <img src={Linkedin} alt=""  className="h-10 "/>  */}
              <svg
  fill="#0077B5"
  width="40"
  height="40"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  stroke="url(#gradientColors)"
>
  <defs>
    <linearGradient id="gradientColors" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#00AEEF" /> 
      <stop offset="50%" stopColor="#892890" /> 
      <stop offset="100%" stopColor="#ED1D7E" />  
    </linearGradient>
  </defs>
  <g>
    <path
      d="M4.8 3.2a1.6 1.6 0 1 1 0 3.2 1.6 1.6 0 0 1 0-3.2ZM1.6 8.8h6.4V22.4H1.6V8.8ZM9.6 8.8h6.4v2h.092c.532-.902 1.836-1.844 3.308-1.844 3.532 0 4.2 2.328 4.2 5.356V22.4H17.6v-5.644c0-1.348-.024-3.08-1.876-3.08-1.876 0-2.164 1.468-2.164 2.976V22.4H9.6V8.8Z"
      fill="#FFFFFF"
    />
  </g>
</svg>



            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              {/* <X className="text-[#ED1D7E] w-10 h-10 hover:scale-110 transition-transform" /> */}
              {/* <img src={xlogo} alt=""  className="h-9"/> */}
              {/* <i className="fa-brands fa-x-twitter"></i> */}
              <a target="_blank" href="https://icons8.com/icon/fJp7hepMryiw/x"></a><a target="_blank" href="https://icons8.com"></a>
              <svg
              fill="#ED1D7E"
                width="40"
                height="40"
              xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" stroke="url(#gradientColors)">
                <defs>
                <linearGradient id="gradientColors" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stopColor="#00AEEF" /> 
      <stop offset="50%" stopColor="#892890" /> 
      <stop offset="100%" stopColor="#ED1D7E" />  
    </linearGradient>
  </defs>  
  <g id="SVGRepo_iconCarrier">            
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"
                fill="url(#gradientColors)"
                fillRule="evenodd"
                />
                </g>
              </svg>
            </a>
            

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}