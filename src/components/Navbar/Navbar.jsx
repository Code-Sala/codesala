import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // You can adjust this threshold value as needed
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`shadow-md w-full py-2 fixed top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 container_lg">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          <img
            src="./src/assets/img/logo/CodeSala-01.png"
            alt="logo1"
            className="w-[9rem] h-6"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-vibrant-pink">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-vibrant-pink">
            About
          </Link>
          <Link
            to="/services"
            className="text-gray-700 hover:text-vibrant-pink"
          >
            Services
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-vibrant-pink">
            Blogs
          </Link>
        </div>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden lg:inline-block text-white px-4 py-2 rounded-md animated-gradient-btn"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md absolute top-16 left-0 w-full p-4 z-50">
          <Link
            to="/"
            className="block text-gray-700 py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block text-gray-700 py-2"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="block text-white bg-vibrant-pink py-2 text-center rounded-md hover:bg-deep-purple mt-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
