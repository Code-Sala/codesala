// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

const App = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={14}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "purple",
        }}
        outerStyle={{
          // backgroundColor:'#ED1D7E',
          opacity: 0.45,
          border: "3px solid #ED1D7E",
        }}
      />

      {/* <ParticleBackground /> */}

      <Router>
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
            <Route path="/privacy" element={<Policy />} />
            <Route path="/terms" element={<Terms />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
