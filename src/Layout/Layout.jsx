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
<<<<<<< HEAD
      <div className="pt-[5rem]">
=======

      <div className="pt-[5rem]">

      <div className="">

>>>>>>> d4958e9cbc31c25e3a6ef4fb593aee131981e578
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
