// src/components/Layout.js
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <Navbar />

      <div style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
