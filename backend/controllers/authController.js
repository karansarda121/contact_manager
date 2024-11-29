// const User = require("../models/User");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");

// const register = async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const userExists = await User.findOne({ email });
//     if (userExists)
//       return res.status(400).json({ message: "User already exists" });

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashedPassword });

//     res
//       .status(201)
//       .json({ id: user.id, email: user.email, token: generateToken(user.id) });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(404).json({ message: "User not found" });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(400).json({ message: "Invalid credentials" });

//     res.json({ id: user.id, email: user.email, token: generateToken(user.id),message: "login succefull", message:"login succefull" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const generateToken = (id) =>
//   jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });

// module.exports = { register, login };
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validator = require("validator"); // Import validator

// Register function with email validation
const register = async (req, res) => {
  const { name, email, password } = req.body;

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    const userExists = await User.findOne({ email });
    if (userExists)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    res
      .status(201)
      .json({ id: user.id, email: user.email, token: generateToken(user.id) });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login function with email validation
const login = async (req, res) => {
  const { email, password } = req.body;

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    res.json({
      id: user.id,
      email: user.email,
      token: generateToken(user.id),
      message: "Login successful", // Removed duplicate message
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Function to generate JWT token
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1h" });

module.exports = { register, login };
