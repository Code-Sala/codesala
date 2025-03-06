import React from "react";
import popularPosts from "../../Data/popularPosts.json";

const SideBar = () => {
  return (
    <div className="w-100  lg:w-1/2 xl:w-70 xl:mt-10 lg:mt-0 lg:ml-80  ml-8 ">
      <div className="bg-white shadow-lg rounded-lg p-5 my-10">
        <h3 className="text-xl font-semibold mb-4 text-pink-400">
          Popular Posts
        </h3>
        <div className="space-y-4">
          {popularPosts.map((post, index) => (
            <div key={index} className="border-b pb-3">
              <p className="text-gray-500 text-sm">{post.date}</p>
              <h4 className="text-lg font-medium mt-1">
                <a href={post.link} className="text-blue-600 hover:underline">
                  {post.title}
                </a>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
