import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className=" shadow-md w-full
     py-2"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 container_lg">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-gray-800">
          MyLogo
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-blue-500">
            About
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-500">
            Services
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-blue-500">
            Blogs
          </Link>
        </div>

        {/* Contact Button */}
        <Link
          to="/contact"
          className="hidden lg:inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
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
        <div className="lg:hidden bg-white shadow-md absolute top-16 left-0 w-full p-4">
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
            className="block text-white bg-blue-500 py-2 text-center rounded-md hover:bg-blue-600 mt-2"
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
