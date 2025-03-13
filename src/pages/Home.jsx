import Hero from "../components/Home/Hero";
import HomeServices from "../components/Home/HomeServices";
import PeopleAndCulture from "../components/Home/PeopleAndCulture";
import TeamSection from "../components/Home/Team/TeamSection";
import Testimonials from "../components/Home/Testimonials";
import WhatWeDo from "../components/Home/WhatWeDo";
import SidebarNav from "../utils/Sidebar";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <SidebarNav />

      <div className="relative z-10">
        <section id="hero">
          <Hero />
        </section>
        <section id="whatwedo">
          <WhatWeDo />
        </section>
        <section id="homeservices">
          <HomeServices />
        </section>
        <section id="team">
          <TeamSection />
        </section>
        <section id="culture">
          <PeopleAndCulture />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
      </div>
    </div>
  );
};

export default Home;
