// src/components/Layout.js
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <div className="pt-[5rem]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
