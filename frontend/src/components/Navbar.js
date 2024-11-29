import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md fixed w-full z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-400">
            Zenstudy
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-gray-200 hover:text-gray-400 focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Links for Desktop */}
        <ul className="hidden lg:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          {!token ? (
            <>
              <li>
                <Link to="/login" className="hover:text-gray-400">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-gray-400">
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/dashboard" className="hover:text-gray-400">
                  Dashboard
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="hover:text-gray-400">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="lg:hidden flex flex-col space-y-4 mt-4">
          <li>
            <Link
              to="/"
              className="block text-gray-200 hover:bg-gray-700 px-4 py-2 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          {!token ? (
            <>
              <li>
                <Link
                  to="/login"
                  className="block text-gray-200 hover:bg-gray-700 px-4 py-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="block text-gray-200 hover:bg-gray-700 px-4 py-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/dashboard"
                  className="block text-gray-200 hover:bg-gray-700 px-4 py-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-gray-200 hover:bg-gray-700 px-4 py-2 rounded"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
