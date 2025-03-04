import { useState } from "react";
import BoardAdvisory from "./BoardAdvisory";
import OurPromoters from "./OurPromoters";
import OurTeam from "./OurTeam";

const TeamSection = () => {
  const [activeSection, setActiveSection] = useState("team");

  return (
    <div className="flex flex-col items-center p-6 pt-16 mt-12 bg-white">
      <h1 className="text-3xl lg:text-5xl font-bold text-center  text-vibrant-pink dark:text-white">
        Together We Innovate
      </h1>
      {/* Navigation Buttons */}
      <div className="flex gap-4  mt-12">
        <button
          className={`btn hidden lg:inline-block text-white px-4 py-2 rounded-md animated-gradient-btn`}
          onClick={() => setActiveSection("team")}
        >
          Our Team
        </button>
        <button
          className={`btn hidden lg:inline-block text-white px-4 py-2 rounded-md animated-gradient-btn`}
          onClick={() => setActiveSection("promoters")}
        >
          Our Promoters
        </button>
        <button
          className={`btn hidden lg:inline-block text-white px-4 py-2 rounded-md animated-gradient-btn`}
          onClick={() => setActiveSection("advisory")}
        >
          Board Advisory
        </button>
      </div>

      {/* Content Section */}
      <div className=" p-6 bg-transparent container_lg">
        {activeSection === "team" && <OurTeam />}
        {activeSection === "promoters" && <OurPromoters />}
        {activeSection === "advisory" && <BoardAdvisory />}
      </div>
    </div>
  );
};

export default TeamSection;
