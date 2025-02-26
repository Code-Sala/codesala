// src/components/Layout.js
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* Navbar at the top */}
      <Navbar />

      {/* Content in the middle (using Outlet to render child routes) */}
      <div style={{ flex: 1, padding: "1rem" }}>
        <Outlet />
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Layout;
