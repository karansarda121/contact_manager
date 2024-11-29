import React, { useState } from "react";
import API from "../services/api";

const AddContact = () => {
  const [form, setForm] = useState({ name: "", mobile: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add the new contact
      await API.post("/contacts", form);
      alert("Contact added successfully");
      // Clear the form after submission
      setForm({ name: "", mobile: "", email: "" });
    } catch (error) {
      alert("Failed to add contact");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Add New Contact
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Mobile"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value })}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-200 ease-in-out"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
