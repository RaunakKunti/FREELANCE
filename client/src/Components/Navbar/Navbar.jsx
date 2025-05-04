import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../Store/Auth";

const Navbar = () => {
  const { isloggedIn } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-10 top-0 left-0 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-black/60 shadow-md" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-indigo-400">Raunak Ai</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-700 ${
                  isActive ? "text-indigo-400" : "text-gray-300"
                } hover:text-indigo-400 lg:border-0 lg:p-0`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-700 ${
                  isActive ? "text-indigo-400" : "text-gray-300"
                } hover:text-indigo-400 lg:border-0 lg:p-0`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-700 ${
                  isActive ? "text-indigo-400" : "text-gray-300"
                } hover:text-indigo-400 lg:border-0 lg:p-0`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 pr-4 pl-3 duration-200 border-b border-gray-700 ${
                  isActive ? "text-indigo-400" : "text-gray-300"
                } hover:text-indigo-400 lg:border-0 lg:p-0`
              }
            >
              Contact
            </NavLink>

            {/* Auth Buttons */}
            {isloggedIn ? (
              <NavLink
                to="/logout"
                className="px-4 py-1 rounded-md text-sm font-medium text-gray-200 border border-indigo-500 hover:bg-indigo-500 transition"
              >
                Logout
              </NavLink>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="px-4 py-1 rounded-md text-sm font-medium text-gray-200 border border-indigo-500 hover:bg-indigo-500 transition"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/signup"
                  className="px-4 py-1 rounded-md text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition"
                >
                  Signup
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md shadow-md px-4 pb-4">
          <NavLink
            to="/"
            className="block py-2 text-gray-300 hover:text-indigo-400"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block py-2 text-gray-300 hover:text-indigo-400"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="block py-2 text-gray-300 hover:text-indigo-400"
          >
            Contact
          </NavLink>

          <div className="mt-3 flex flex-col gap-2">
            <Link
              to="/login"
              className="text-center px-4 py-2 rounded-md text-sm font-medium text-gray-200 border border-indigo-500 hover:bg-indigo-500 transition"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-center px-4 py-2 rounded-md text-sm font-medium text-white border-indigo-500 hover:bg-indigo-500 transition"
            >
              Signup
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
