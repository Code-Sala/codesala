import { useState } from "react";
import { Trophy, Globe, Palette } from "lucide-react";

const OurAchievement = () => {
  const [achievements] = useState([
    {
      title: "Web Development",
      description: "Earned for building 5+ websites.",
      icon: <Trophy size={50} className="text-vibrant-pink" />,
    },
    {
      title: "Domain Hosting",
      description: "Successfully hosted 10+ domains.",
      icon: <Globe size={50} className="text-vibrant-pink" />,
    },
    {
      title: "UI/UX Design",
      description: "Designed 10+ user-friendly interfaces.",
      icon: <Palette size={50} className="text-vibrant-pink" />,
    },
  ]);

  return (
    <div className="container min-h-[50vh] mx-auto flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12">
        Our Achievements
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl ">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center p-6 bg-white backdrop-blur-lg rounded-xl shadow-lg shadow-pink-500 hover:shadow-xl transition-transform hover:scale-105"
          >
            <div className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-vibrant-pink transition-all"></div>
            {achievement.icon}
            <h2 className="text-2xl font-semibold mt-3 text-vibrant-pink ">
              {achievement.title}
            </h2>
            <p className="text-gray-500 mt-2 text-center">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurAchievement;
