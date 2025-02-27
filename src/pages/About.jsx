import {} from "react-router-dom";
import AboutHero from "../components/About/AboutHero";
import AboutStory from "../components/About/AboutStory";
import AboutMission from "../components/About/AboutMission";
import AboutPartnering from "../components/About/AboutPartnering";
import AboutOurGoals from "../components/About/AboutOurGoals";
import AboutInterested from "../components/About/AboutInterested";
import Contact from "../components/Contact/Contact";

function About() {
  return (

    <>
  

  <AboutHero/> 
  <AboutStory/>
  <AboutMission/>
  <AboutPartnering/>
  <AboutOurGoals/>
  <AboutInterested/>
  <Contact/>
  </>
  )
   }

export default About;
