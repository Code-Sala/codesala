import { useState } from "react";

const OurAchievement = () => {
  const [achievements] = useState([
    {
      title: "Web Development",
      description: "Earned for building 5+ websites.",
    },
    {
      title: "Domain Hosting",
      description: "Successfully hosted 10+ domains.",
    },
    {
      title: "UI/UX Design",
      description: "Designed 10+ user-friendly interfaces.",
    },
    // {
    //   title: "App Development",
    //   description: "Published 3+ mobile applications.",
    // },
  ]);

  return (
    <div className="container min-h-[50vh] mx-auto flex flex-col items-center justify-center px-4 contianer_lg">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12">
        Our Achievements
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200  hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-vibrant-pink">
              {achievement.title}
            </h2>
            <p className="text-gray-600 mt-2">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAchievement;
