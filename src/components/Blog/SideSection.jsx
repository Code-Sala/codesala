import React from "react";
import popularPosts from "../../Data/popularPosts.json";
import { Link } from "react-router-dom";

const SideSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-100 sm:w-[50%] md:w-[50%] lg:w-[350px] xl:w-[400px] my-10">
        <div className="bg-white shadow-lg rounded-lg p-5 w-full">
          <h3 className="text-xl  mb-4 font-bold   bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent py-2 leading-tight">
            Popular Posts
          </h3>
          <div className="space-y-4">
            {popularPosts.map((post, index) => (
              <div key={index} className="border-b pb-3">
                <p className="text-gray-500 text-sm">{post.date}</p>
                <h4 className="text-lg font-medium mt-1">
                  {post.link ? (
                    <Link
                      to={post.link}
                      className="text-blue-600 hover:underline"
                    >
                      {post.title}
                    </Link>
                  ) : (
                    <span className="text-gray-400">{post.title}</span>
                  )}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideSection;
