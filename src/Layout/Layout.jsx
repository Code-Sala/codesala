// src/components/Layout.js
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import OpenMusic from "../utils/OpenMusic";

const Layout = () => {
  return (
    <div className="sm:cursor-none md:cursor-none lg:cursor-auto">
      <Navbar />
      {/* <ParticleBackground /> */}
   
      <div className="pt-[5rem]">

      <div className="pt-[5rem] bg-#fff">
        <Outlet />
      </div>

      <OpenMusic />
      <Footer />
    </div>
  );
};

export default Layout;
