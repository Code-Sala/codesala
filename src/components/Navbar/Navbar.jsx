import { Link, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/img/logo/logo1.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <nav
      className={`shadow-md w-full py-2 fixed top-0 left-0 right-0 z-150 transition-all bg-white`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 container_lg">
        <Link to="/" className="text-xl font-bold text-gray-200">
          <img src={logo} alt="logo1" className="w-[9rem] h-6" />
        </Link>

        <div className="hidden lg:flex space-x-6 text-lg">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/portfolio", label: "Portfolio" },

            { to: "/blog", label: "Blogs" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`hover:text-bright-purple ${
                location.pathname === to
                  ? "text-bright-purple"
                  : "text-gray-700"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden lg:inline-block text-white px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-[3rem] hover:scale-95 "
        >
          Contact Us
        </Link>

        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 p-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>
        <nav className="mt-12 flex flex-col space-y-4">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/portfolio", label: "Portfolio" },
            { to: "/blog", label: "Blogs" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`block px-4 py-2 rounded-lg text-center text-gray-700 hover:bg-gray-200 ${
                location.pathname === to
                  ? "bg-gradient-to-br from-[#00AEEF] via-[#892890] to-[#ED1D7E] text-white"
                  : ""
              }`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
