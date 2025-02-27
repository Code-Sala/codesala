import Hero from "../components/Home/Hero";
import HomeServices from "../components/Home/HomeServices";
import OurAchievement from "../components/Home/OurAchievement";
import WhatWeDo from "../components/Home/WhatWeDo";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Reduced Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1740007124901-6644ebaa3c08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D')",
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <Hero />
        <OurAchievement />
        <WhatWeDo />
        <HomeServices />
      </div>
    </div>
  );
};

export default Home;
