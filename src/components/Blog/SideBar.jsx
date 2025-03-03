import React from "react";

const SideBar = () => {
  const posts = [
    {
      date: "April 5, 2023",
      title: "Hire Remote Developers India to Save Infrastructure Costs",
    },
    {
      date: "August 1, 2024",
      title: "Salesforce Development Services in United States",
    },
    {
      date: "March 17, 2023",
      title: "Why Choose a Website Design Company in India?",
    },
  ];

  return (
    <aside className="text-pink-700 rounded-lg text-center lg:w-30  my-10 border-black ">
      <div className="bg-white text-pink-700 font-bold text-lg py-2 rounded-t-lg">
        Popular Posts
      </div>
      <ul className="bg-white text-black p-4 rounded-b-lg">
        {posts.map((post, index) => (
          <li
            key={index}
            className="mb-3 border-b border-gray-300 pb-2 last:border-none"
          >
            <p className="text-sm text-gray-500">{post.date}</p>
            <a
              href="#"
              className="text-black font-semibold hover:underline block mt-1"
            >
              {post.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
