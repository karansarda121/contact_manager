const Contact = require("../models/Contact");

// Add a new contact
const addContact = async (req, res) => {
  const { name, mobile, email } = req.body;

  try {
    const contact = await Contact.create({
      user: req.user.id, // Ensure the user is associated with the contact
      name,
      mobile,
      email,
    });

    res.status(201).json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all contacts for the logged-in user
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a contact
const updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, mobile, email } = req.body;

  try {
    const contact = await Contact.findById(id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    // Ensure the contact belongs to the logged-in user
    if (contact.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized" });
    }

    contact.name = name || contact.name;
    contact.mobile = mobile || contact.mobile;
    contact.email = email || contact.email;

    const updatedContact = await contact.save();
    res.status(200).json(updatedContact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const mongoose = require("mongoose");


const deleteContact = async (req, res) => {
  const { id } = req.params;

  // Check if the ID is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid contact ID" });
  }

  try {
    // Find the contact by ID and ensure it's the logged-in user who is trying to delete it
    const contact = await Contact.findById(id);

    // If contact not found, return 404
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    // Ensure the logged-in user is the owner of the contact
    if (contact.user.toString() !== req.user.id) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this contact" });
    }

    // Delete the contact using deleteOne
    await Contact.deleteOne({ _id: id });

    // Send success response
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error("Error while deleting contact:", error); // Log the error for debugging
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addContact,
  getContacts,
  updateContact,
  deleteContact,
};
