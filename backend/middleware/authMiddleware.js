const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  let token;

  // Check for the Authorization header and extract the token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]; // Get token after 'Bearer'

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get the user from the token (excluding password)
      req.user = await User.findById(decoded.id).select("-password");

      next(); // Continue to the next middleware or controller
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, invalid token" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token provided" });
  }
};

module.exports = protect;
