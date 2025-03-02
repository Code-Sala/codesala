// src/components/Layout.js
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// import ParticleBackground from "../components/particles/ParticleBackground";

const Layout = () => {
  return (
    <div>
      {/* <ParticleBackground /> */}
      <Navbar />
      <div className="">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
