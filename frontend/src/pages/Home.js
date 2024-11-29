import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 text-center space-y-6 p-6 sm:p-10">
      <h1 className="text-5xl font-extrabold text-gray-800 sm:text-6xl md:text-7xl">
        Welcome to Zenstudy
      </h1>
      <p className="text-lg text-gray-600 max-w-xl sm:text-xl md:max-w-2xl">
        Manage your contacts effortlessly with our simple and secure dashboard.
        Join now and start organizing your contacts today!
      </p>

      {/* Conditionally render the "Get Started" button based on login state */}
      {!token ? (
        <a
          href="/login"
          className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Get Started
        </a>
      ) : (
        <p className="text-xl text-gray-700 mt-4">You are already logged in!</p>
      )}
    </div>
  );
};

export default Home;
