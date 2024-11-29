import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  // Regular expression for validating email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset the error before each attempt
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    try {
      const res = await axios.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
      // If error.response exists, it means the backend returned a specific message
      if (error.response && error.response.data) {
        setError(error.response.data.message); // Set the error from the response message
      } else {
        setError("Login failed. Please try again."); // Fallback error message
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-8">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-extrabold text-gray-800">Login</h2>
          <p className="text-gray-600 mt-2">
            Welcome back, please log in to your account.
          </p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>
        {/* Display error message if any */}
        {error && (
          <div className="text-center text-red-500 mt-4">
            <p>{error}</p>
          </div>
        )}
        <div className="text-center mt-6">
          <h3 className="text-sm text-gray-600">New here?</h3>
          <p>
            <a
              href="/register"
              className="text-gray-600 hover:underline font-medium"
            >
              Create an account
            </a>{" "}
            to get started.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
