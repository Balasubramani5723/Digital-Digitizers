import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.avif";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-black p-2 shadow-lg fixed top-0 w-full z-50 bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-0">
          <img src={logo} alt="logo" className="w-18 h-18 object-cover" />
          <Link to="/" className="text-xl font-bold leading-tight">
            D<span className="text-emerald-500">IGI</span>TAL
            <br />D<span className="text-emerald-500">IGI</span>TIZERS
          </Link>
        </div>

        <div className="hidden md:flex space-x-6 font-extrabold">
          <Link to="/" className="hover:text-emerald-500 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-emerald-500 transition">
            About
          </Link>
          <Link to="/services" className="hover:text-emerald-500 transition">
            Services
          </Link>
          <Link to="/portfolio" className="hover:text-emerald-500 transition">
            Portfolio
          </Link>
          <Link to="/contact" className="hover:text-emerald-500 transition">
            Contact
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 font-extrabold bg-white shadow">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-emerald-500"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-emerald-500"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block hover:text-emerald-500"
          >
            Services
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setIsOpen(false)}
            className="block hover:text-emerald-500"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-emerald-500"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
