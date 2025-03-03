import {} from "react-router-dom";
import AboutHero from "../components/About/AboutHero";
import AboutStory from "../components/About/AboutStory";
import AboutMission from "../components/About/AboutMission";
import AboutPartnering from "../components/About/AboutPartnering";
import AboutOurGoals from "../components/About/AboutOurGoals";
import AboutInterested from "../components/About/AboutInterested";
import Contact from "../components/About/Contact";
import AboutOurValues from "../components/About/AboutOurValues";

function About() {
  return (

   <>
  <AboutHero/> 
  <AboutStory/>
  <AboutMission/>
  <AboutOurValues/>
  <AboutPartnering/>
  <AboutOurGoals/>
  <AboutInterested/>
  <Contact/>
  </>
  )
   }

    <>
      <AboutHero />
      <AboutStory />
      <AboutMission />
      <AboutPartnering />
      <AboutOurGoals />
      <AboutInterested />
      <Contact />
    </>
  );
}

export default About;
