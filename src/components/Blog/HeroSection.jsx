import React from "react";
import Blog from "../../Data/Blog.json";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 w-full">
      {Blog.map((blog, index) => (
        <div
          key={index}
          className="card lg:card-side bg-white shadow-sm h-70 flex my-10 mx-2 lg:ml-5 w-full lg:w-220 transition-transform transform hover:scale-105 duration-300 hover:shadow-[#892890]"
        >
          <figure className="p-5 w-full lg:w-1/2">
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-lg w-full"
            />
          </figure>
          <div className="card-body flex flex-col justify-center w-full lg:w-1/2">
            <h2 className="text-gray-500 text-sm">{blog.time}</h2>
            <h2 className="card-title">{blog.title}</h2>
            <p className="flex">{blog.mainBlog}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary animate-bounce">
                Read More!
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroSection;
