function AboutHero() {
  return (
    <div className="bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] min-h-[80vh] flex items-center justify-center px-4 sm:px-8 ">
      <div className="max-w-8xl text-center container_lg">
        <h1 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl leading-tight">
          Your Partner for Ultimate <br /> Success
        </h1>
        <p className="text-white font-semibold text-base sm:text-lg md:text-xl mt-6 px-2 sm:px-10">
          Welcome to CODESALA, where innovation meets practicality. We are a
          dynamic digital solutions company dedicated to helping businesses
          thrive in the ever-evolving digital world. With expertise in UI/UX
          design, web development, domain and hosting, software integration,
          and skill rental, we offer a full range of services tailored to meet
          your unique needs.
        </p>
        <div className="mt-8 flex justify-center">
          <button className="bg-white text-[#892890] font-semibold px-6 py-3 rounded-md transition-all duration-300 hover:bg-transparent hover:text-white hover:border-2 border-white">
            Book A Call
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
