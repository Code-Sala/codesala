import { useState } from "react";
import BoardAdvisory from "./BoardAdvisory";
import OurPromoters from "./OurPromoters";
import OurTeam from "./OurTeam";

const TeamSection = () => {
  const [activeSection, setActiveSection] = useState("team");

  return (
    <div className="flex flex-col items-center p-6 pt-16 mt-12 bg-white">
      <h1 className="text-3xl lg:text-5xl font-bold text-center bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] bg-clip-text text-transparent dark:text-white mb-2 leading-tight">
        Together We Innovate
      </h1>
      <p className="text-lg text-center text-gray-600 mb-4">
        Together, we push boundaries and redefine possibilities.
      </p>
      {/* Navigation Buttons */}
      <div className="flex gap-4  mt-12">
        <button
          id="btn"
          className={` hidden lg:inline-block animated-gradient-btn px-4 py-2 rounded-[3rem] `}
          onClick={() => setActiveSection("team")}
        >
          Our Team
        </button>
        <button
          className={` hidden lg:inline-block animated-gradient-btn px-4 py-2 rounded-[3rem] `}
          onClick={() => setActiveSection("promoters")}
        >
          Our Promoters
        </button>
        <button
          className={` hidden lg:inline-block animated-gradient-btn hover:text-white px-4 py-2 rounded-[3rem] `}
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
