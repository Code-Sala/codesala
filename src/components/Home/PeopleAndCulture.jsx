import { useState } from "react";

export default function PeopleAndCulture() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="peopleandculture py-12 bg-white flex justify-center items-center container ">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 container_lg">
        <div className="md:w-1/2 md:ml-auto text-center md:text-left">
          <h2
            className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight animate-fadeInUp"
            style={{ animationDelay: "0.5s" }}
          >
            Unlock Growth
            <br /> With Us
          </h2>
          <p
            className="text-gray-600 text-lg animate-fadeInUp max-w-lg"
            style={{ animationDelay: "1s" }}
          >
            We believe that our greatest asset is our people. Diverse in
            backgrounds, skills, and perspectives, we come together with a
            shared passion for creativity, problem-solving, and pushing
            boundaries. Whether you&apos;re a coding virtuoso, a design maestro,
            or a strategic guru, you&apos;ll find your tribe here.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 lg:inline-block text-white px-4 py-2 rounded-md animated-gradient-btn"
          >
            Apply now
          </button>
        </div>

        {/* Stacked Images */}
        <div className="stack">
          <div className="card bg-base-200 text-center shadow-md">
            <div className="card-body">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ718nztPNJfCbDJjZG8fOkejBnBAeQw5eAUA&s"
                className="w-80 rounded-lg shadow-lg transform rotate-[-5deg]"
                alt="People 1"
              />
            </div>
            <div className="card-body">
              <img
                src="https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg"
                className="w-80 rounded-lg shadow-lg transform rotate-3"
                alt="People 2"
              />
            </div>
          </div>
          <div className="card bg-base-200 text-center shadow"></div>
          <div className="card bg-base-200 text-center shadow-sm">
            <div className="card-body">
              {" "}
              <img
                src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
                className="w-80 rounded-lg shadow-lg transform rotate-[-3deg]"
                alt="People 3"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-semibold">Join Us</h3>
            <p className="mt-2 text-gray-600">
              Submit your application to be part of our amazing team.
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
