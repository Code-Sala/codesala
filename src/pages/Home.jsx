import Hero from "../components/Home/Hero";
import HomeServices from "../components/Home/HomeServices";
// import OurAchievement from "../components/Home/OurAchievement";
import PeopleAndCulture from "../components/Home/PeopleAndCulture";
import TeamSection from "../components/Home/Team/TeamSection";
import Testimonials from "../components/Home/Testimonials";
import WhatWeDo from "../components/Home/WhatWeDo";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Content Overlay */}
      <div className="relative z-10">
        <Hero />
        {/* <OurAchievement /> */}
        <WhatWeDo />
        <HomeServices />
        <TeamSection />
        <PeopleAndCulture />
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
