import { useEffect, useState } from "react";
import {  Routes, Route } from "react-router-dom";
import './App.css'
import './index.css'
import AnimatedCursor from "react-animated-cursor";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import WebComponents from "./components/Services/WebComponents";
import MobileComponent from "./components/Services/MobileComponent";
import UiuxSection from "./components/Services/uiuxSection";
import Domainsection from "./components/Services/Domainsection";
import SoftwareComponent from "./components/Services/SoftwareComponent";
import SkillComponent from "./components/Services/SkillComponent";
import Cookies from "./components/Cookies/Cookies";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";
import FirstLandingPage from "./components/Blog/Blogs/FirstLandingPage";
import Chatgpt from "./components/Blog/Blogs/Chatgpt";
import Lot from "./components/Blog/Blogs/Lot";
import SoftwareDevelopment from "./components/Blog/Blogs/SoftwareDevelopment";
import DataScience from "./components/Blog/Blogs/DataScience";
import CloudComputing from "./components/Blog/Blogs/CloudComputing";
import Future from "./components/Blog/Blogs/Future";
import RoleOfAi from "./components/Blog/Blogs/RoleOfAi";
import ImpactOfAi from "./components/Blog/Blogs/ImpactOfAi";
import AIAndML from "./components/Blog/Blogs/AIAndML";
import ScrollToTop from "./components/ScrollComps/ScrolltoTop";
import Portfolio from "./pages/Portfolio";
// import ScrollToTop from "./components/ScrollComps/ScrolltoTop";
const App = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  return (
    <>
     
      {!isTouchDevice && (
        <AnimatedCursor
          innerSize={14}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "purple ",
          }}
          outerStyle={{
            opacity: 0.45,
            border: "3px solid #ED1D7E",
          }}
        />
      )}
  <ScrollToTop />
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/webcomponent" element={<WebComponents />} />
            <Route path="/mobilecomponent" element={<MobileComponent />} />
            <Route path="/uiuxcomponent" element={<UiuxSection />} />
            <Route path="/domaincomponent" element={<Domainsection />} />
            <Route path="/softwarecomponent" element={<SoftwareComponent />} />
            <Route path="/skillrentcomponent" element={<SkillComponent />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/privacy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/ComingSoon" element={<FirstLandingPage />} />
            <Route path="/ChatGPT" element={<Chatgpt />} />
            <Route path="/IoT" element={<Lot />} />
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route
              path="/SoftwareDevelopment"
              element={<SoftwareDevelopment />}
            />
            <Route path="/DataScience" element={<DataScience />} />
            <Route path="/CloudComputing" element={<CloudComputing />} />
            <Route path="/Future" element={<Future />} />
            <Route path="/RoleOfAi" element={<RoleOfAi />} />
            <Route path="/ImpactOfAi" element={<ImpactOfAi />} />
            <Route path="/AIAndML" element={<AIAndML />} />
          </Route>
        </Routes>
      
    </>
  );
};

export default App;
