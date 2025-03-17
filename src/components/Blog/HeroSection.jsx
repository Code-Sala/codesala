import React from "react";
import popularPosts from "../../Data/popularPosts.json";
import { Link } from "react-router-dom";

const HeroSection = ({ posts }) => {
  return (
    <div className="container mx-auto px-4 w-full bg-white">
      <div className="flex flex-wrap justify-center lg:flex-nowrap gap-8 bg-white">
        <div className="w-full lg:w-500 bg-white">
          <div className="flex flex-wrap justify-center bg-white">
            {posts.map((blog, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-[95%] md:w-[85%] lg:w-[80%] xl:w-[75%] my-6 transition-transform transform hover:scale-105 duration-300 hover:shadow-[#892890]"
              >
                <div className="flex flex-col lg:flex-row bg-white">
                  <figure className="w-full lg:w-1/2">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-56 object-cover lg:h-full"
                    />
                  </figure>
                  <div className="p-5 flex flex-col justify-center w-full lg:w-1/2">
                    <h2 className="text-gray-500 text-xs sm:text-sm mb-2">
                      {blog.time}
                    </h2>
                    <h2 className="text-md sm:text-lg font-semibold mb-2 text-black ">
                      {blog.title}
                    </h2>
                    <p className="text-gray-700 mb-4 text-sm sm:text-base">
                      {blog.mainBlog}
                    </p>
                    <div className="flex justify-end">
                      <button className="btn bg-[#892890] text-white px-4 py-2 rounded-md hover:bg-[#6e1f6e] transition duration-300 text-sm sm:text-base">
                        <Link to={blog.link}>Read More!</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hide Popular Posts on screens 1024px and below */}
        <div className="hidden lg:block w-auto lg:w-auto justify-center lg:justify-start mb-auto mt-10 bg-white">
          <div className="bg-white shadow-lg rounded-lg p-5 w-full sm:w-[90%] md:w-[85%] lg:w-full">
            <h3 className="text-xl  mb-4 font-bold   bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent py-2 leading-tight">
              Popular Posts
            </h3>
            <div className="space-y-4">
              {popularPosts.map((post, index) => (
                <div key={index} className="border-b pb-3">
                  <p className="text-gray-500 text-sm">{post.date}</p>
                  <h4 className="text-lg font-medium mt-1">
                    <Link
                      to={post.link}
                      className="text-blue-600 hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
