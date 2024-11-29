

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../services/api";

// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // Add state for error messages
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setError(""); // Reset the error before each attempt
//     try {
//       // Make the registration request
//       await axios.post("/auth/register", { name, email, password });
//       alert("Registration successful! Please login.");
//       navigate("/login");
//     } catch (error) {
//       console.error("Registration failed", error);
//       // If error.response exists, it means the backend returned a specific message
//       if (error.response && error.response.data) {
//         setError(error.response.data.message); // Set the error from the response message
//       } else {
//         setError("Registration failed. Please try again."); // Fallback error message
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 pt-20">
//       <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg space-y-6 sm:w-11/12 md:w-96 lg:w-1/2 xl:w-1/3">
//         {/* Adjusted padding and width for responsiveness */}
//         <div className="text-center mb-6">
//           <h2 className="text-3xl font-extrabold text-gray-800">Register</h2>
//           <p className="text-gray-600 mt-2">
//             Create an account to get started.
//           </p>
//         </div>
//         <form onSubmit={handleRegister} className="space-y-5">
//           <div>
//             <input
//               type="text"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm transition duration-200 ease-in-out"
//             />
//           </div>
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm transition duration-200 ease-in-out"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm transition duration-200 ease-in-out"
//             />
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="w-full py-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//         {/* Display error message if any */}
//         {error && (
//           <div className="text-center text-red-500 mt-4">
//             <p>{error}</p>
//           </div>
//         )}
//         <div className="text-center mt-6">
//           <h3 className="text-sm text-gray-600">Already have an account?</h3>
//           <p>
//             <a
//               href="/login"
//               className="text-gray-600 hover:underline font-medium"
//             >
//               Log in
//             </a>{" "}
//             to access your dashboard.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  // Regular expression for validating email format
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); // Reset the error before each attempt

    // Validate email format before making API call
    if (!validateEmail(email)) {
      setError("Invalid email format. Please check your email.");
      return; // Prevent form submission if email is invalid
    }

    try {
      // Make the registration request
      const response = await axios.post("/auth/register", {
        name,
        email,
        password,
      });
      alert("Registration successful! Please login.");
      navigate("/login");
    } catch (error) {
      console.error("Registration failed", error);
      // Handle error from the backend response
      if (error.response && error.response.data) {
        setError(error.response.data.message); // Use error message from backend if available
      } else {
        setError("Registration failed. Please try again later."); // General error message
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 pt-20">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-lg space-y-6 sm:w-11/12 md:w-96 lg:w-1/2 xl:w-1/3">
        {/* Adjusted padding and width for responsiveness */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800">Register</h2>
          <p className="text-gray-600 mt-2">
            Create an account to get started.
          </p>
        </div>
        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-sm transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-4 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Register
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
          <h3 className="text-sm text-gray-600">Already have an account?</h3>
          <p>
            <a
              href="/login"
              className="text-gray-600 hover:underline font-medium"
            >
              Log in
            </a>{" "}
            to access your dashboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
