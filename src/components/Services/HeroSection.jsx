import React from "react";

const HeroSection = () => {
  return (
    <div className="container bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] min-h-[50vh] flex-col items-center justify-center px-4 sm:px-8 text-center">
      <div className="container_lg">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight pt-10 ">
          Services
        </h1>
        <p className="text-white font-semibold text-base sm:text-lg md:text-xl mt-6 px-2 sm:px-10 ">
          At <bold>CodeSala</bold>, we craft cutting-edge technology solutions
          that drive businesses forward. From web development to AI-driven
          applications, our expertise turns ideas into reality. Partner with us
          for scalable, secure, and future-ready digital experiences. 🚀
        </p>
      </div>
      <div className="mt-8 flex justify-center">
        <button className="bg-white text-[#892890] font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:bg-transparent hover:text-white hover:border-2 border-white">
          Book a Call
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
