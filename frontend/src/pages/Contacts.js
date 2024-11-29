import React, { useEffect, useState } from "react";
import API from "../services/api";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: "", mobile: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  const fetchContacts = async () => {
    try {
      const { data } = await API.get("/contacts");
      setContacts(data);
    } catch (error) {
      alert("Failed to fetch contacts");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await API.put(`/contacts/${editingId}`, form);
        alert("Contact updated successfully");
      } else {
        await API.post("/contacts", form);
        alert("Contact added successfully");
      }
      setForm({ name: "", mobile: "", email: "" });
      setEditingId(null);
      fetchContacts();
    } catch (error) {
      alert("Failed to save contact");
    }
  };

  const handleEdit = (contact) => {
    setForm(contact);
    setEditingId(contact._id);
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/contacts/${id}`);
      alert("Contact deleted");
      fetchContacts();
    } catch (error) {
      alert("Failed to delete contact");
    }
  };

  return (
    <div className="contacts">
      <h1>Contact Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Mobile"
          value={form.mobile}
          onChange={(e) => setForm({ ...form, mobile: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">{editingId ? "Update" : "Add"} Contact</button>
      </form>
      <ul>
        {contacts.map((contact) => (
          <li key={contact._id}>
            {contact.name} - {contact.mobile} - {contact.email}
            <button onClick={() => handleEdit(contact)}>Edit</button>
            <button onClick={() => handleDelete(contact._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
