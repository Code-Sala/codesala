import React from "react";
import popularPosts from "../../Data/popularPosts.json";

const SideSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-100 sm:w-[50%] md:w-[50%] lg:w-[350px] xl:w-[400px] mt-10">
        <div className="bg-white shadow-lg rounded-lg p-5 w-full">
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
    </div>
  );
};

export default SideSection;
