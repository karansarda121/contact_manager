const express = require("express");
const {
  addContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Protected Routes for Contact Management
router.post("/", protect, addContact); // Add a new contact
router.get("/", protect, getContacts); // Get all contacts for a user
router.put("/:id", protect, updateContact); // Update a contact
router.delete("/:id", protect, deleteContact); // Delete a contact

module.exports = router;
