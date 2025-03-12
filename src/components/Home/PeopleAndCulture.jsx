import "./home.css";

export default function PeopleAndCulture() {
  return (
    <section className="py-12 bg-white flex justify-center items-center px-6 sm:px-12 relative">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-vibrant-pink to-bright-purple opacity-20 blur-3xl z-0" />

      <div className="relative mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left px-4">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent animate-fadeInUp"
            style={{ animationDelay: "0.5s" }}
          >
            Unlock Growth
            <br /> With Us
          </h2>
          <p
            className="text-gray-600 text-base sm:text-lg md:text-xl animate-fadeInUp max-w-lg mx-auto md:mx-0 leading-relaxed"
            style={{ animationDelay: "1s" }}
          >
            We believe that our greatest asset is our people. Diverse in
            backgrounds, skills, and perspectives, we come together with a
            shared passion for creativity, problem-solving, and pushing
            boundaries. Whether you&apos;re a coding virtuoso, a design maestro,
            or a strategic guru, you&apos;ll find your tribe here.
          </p>
          <button className="mt-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300">
            Apply now
          </button>
        </div>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:w-1/2">
          <div className="flex flex-col gap-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s"
              className="w-full sm:w-72 md:w-80 rounded-lg shadow-lg transform rotate-[-5deg] mx-auto"
              alt="People 1"
            />
            <img
              src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
              className="w-full sm:w-72 md:w-80 rounded-lg shadow-lg transform rotate-3 mx-auto"
              alt="People 2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
