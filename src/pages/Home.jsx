import Hero from "../components/Home/Hero";
import HomeServices from "../components/Home/HomeServices";
import OurAchievement from "../components/Home/OurAchievement";
import TeamSection from "../components/Home/Team/TeamSection";
import Testimonials from "../components/Home/Testimonials";
import WhatWeDo from "../components/Home/WhatWeDo";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-700/70 to-blue-500/70 opacity-80"></div> */}

      {/* <div
      {/* <div className="absolute inset-0 bg-gradient-to-br from-deep-purple/70 to-vibrant-pink/70 opacity-80"></div>


       <div className="absolute inset-0 bg-gradient-to-br from-purple-700/70 to-blue-500/70 opacity-80"></div>*/}

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1739793669651-3274b0768492?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Content Overlay */}
      <div className="relative z-10">
        <Hero />
        <OurAchievement />
        <WhatWeDo />
        <HomeServices />
        <TeamSection />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
