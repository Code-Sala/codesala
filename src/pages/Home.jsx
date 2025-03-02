import Hero from "../components/Home/Hero";
import HomeServices from "../components/Home/HomeServices";
import OurAchievement from "../components/Home/OurAchievement";
import TeamSection from "../components/Home/TeamSection";
import WhatWeDo from "../components/Home/WhatWeDo";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/70 to-vibrant-pink/70 opacity-80"></div>


       <div className="absolute inset-0 bg-gradient-to-br from-purple-700/70 to-blue-500/70 opacity-80"></div>

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1740007124901-6644ebaa3c08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D')",
        }}
      ></div> */}

      {/* Content Overlay */}
      <div className="relative z-10 pb-8">
        <Hero />
        <OurAchievement />
        <WhatWeDo />
        <HomeServices />
        <TeamSection />
      </div>
    </div>
  );
};

export default Home;
