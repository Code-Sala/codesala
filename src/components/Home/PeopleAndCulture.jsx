import "./home.css";
export default function PeopleAndCulture() {
  return (
    <section className="py-12 bg-white flex justify-center items-center container relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-vibrant-pink to-bright-purple opacity-20 blur-3xl z-10" />

      <div className="mx-auto flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Text Section */}
        <div className="md:w-1/2 md:ml-auto text-center md:text-left px-4">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-vibrant-pink mb-6 leading-tight animate-fadeInUp"
            style={{ animationDelay: "0.5s" }}
          >
            Unlock Growth
            <br /> With Us
          </h2>
          <p
            className="text-gray-600 text-base sm:text-lg animate-fadeInUp max-w-lg mx-auto md:mx-0"
            style={{ animationDelay: "1s" }}
          >
            We believe that our greatest asset is our people. Diverse in
            backgrounds, skills, and perspectives, we come together with a
            shared passion for creativity, problem-solving, and pushing
            boundaries. Whether you&apos;re a coding virtuoso, a design maestro,
            or a strategic guru, you&apos;ll find your tribe here.
          </p>
          <button className="mt-6 lg:inline-block text-white px-6 py-3 rounded-md animated-gradient-btn">
            Apply now
          </button>
        </div>

        {/* Image Section */}
        <div className="stack flex flex-col md:flex-row justify-center items-center gap-6 md:w-1/2 px-4 z-10    ">
          <div className="card bg-base-200 text-center shadow-md">
            <div className="card-body">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s"
                className="w-80 rounded-lg shadow-lg transform rotate-[-5deg] mx-auto"
                alt="People 1"
              />
            </div>
            <div className="card-body">
              <img
                src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
                className="w-80 rounded-lg shadow-lg transform rotate-3 mx-auto"
                alt="People 2"
              />
            </div>
          </div>

          {/* <div className="card bg-base-200 text-center shadow-sm">
            <div className="card-body">
              <img
                src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
                className="w-80 rounded-lg shadow-lg transform rotate-[-3deg] mx-auto"
                alt="People 3"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
