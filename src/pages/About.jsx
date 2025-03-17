import {} from "react-router-dom";
import AboutHero from "../components/About/AboutHero";
import AboutStory from "../components/About/AboutStory";
import AboutMission from "../components/About/AboutMission";
import AboutPartnering from "../components/About/AboutPartnering";
import AboutInterested from "../components/About/AboutInterested";
import Contact from "../components/About/Contact";
import AboutOurValues from "../components/About/AboutOurValues";
import AboutOurVision from "../components/About/AboutOurVision";

function About() {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutOurVision />
      <AboutOurValues />
      <AboutPartnering />
      <AboutInterested />
      <Contact />
    </div>
  );
}

export default About;
