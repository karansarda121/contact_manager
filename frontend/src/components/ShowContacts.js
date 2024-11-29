// import React, { useEffect, useState } from "react";
// import API from "../services/api";

// const ShowContacts = () => {
//   const [contacts, setContacts] = useState([]);
//   const [form, setForm] = useState({ name: "", mobile: "", email: "" });
//   const [editingId, setEditingId] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const fetchContacts = async () => {
//     try {
//       const { data } = await API.get("/contacts");
//       setContacts(data);
//     } catch (error) {
//       alert("Failed to fetch contacts");
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       if (editingId) {
//         await API.put(`/contacts/${editingId}`, form);
//         alert("Contact updated successfully");
//       } else {
//         await API.post("/contacts", form);
//         alert("Contact added successfully");
//       }
//       setForm({ name: "", mobile: "", email: "" });
//       setEditingId(null);
//       setIsModalOpen(false);
//       fetchContacts();
//     } catch (error) {
//       alert("Failed to save contact");
//     }
//   };

//   const handleEdit = (contact) => {
//     setForm(contact);
//     setEditingId(contact._id);
//     setIsModalOpen(true);
//   };

//   const handleDelete = async (id) => {
//     try {
//       const response = await API.delete(`/contacts/${id}`);
//       if (response.status === 200) {
//         alert("Contact deleted successfully");
//         fetchContacts();
//       }
//     } catch (error) {
//       alert("Failed to delete contact");
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setForm({ name: "", mobile: "", email: "" });
//     setEditingId(null);
//   };

//   return (
//     <div className="p-4 lg:p-6">
//       <h1 className="text-2xl font-bold mb-4">Contacts</h1>

//       {contacts.length === 0 ? (
//         <p className="text-gray-500">No contacts added yet</p>
//       ) : (
//         <div className="max-w-4xl mx-auto">
//           {" "}
//           {/* Ensure the list container doesn't stretch */}
//           <ul className="space-y-4">
//             {" "}
//             {/* Stack items vertically */}
//             {contacts.map((contact) => (
//               <li
//                 key={contact._id}
//                 className="bg-white p-4 rounded-lg shadow-md flex flex-col hover:bg-gray-100 transition duration-300"
//               >
//                 <p className="text-lg font-semibold">{contact.name}</p>
//                 <p className="text-sm text-gray-600">{contact.mobile}</p>
//                 <p className="text-sm text-gray-600">{contact.email}</p>
//                 <div className="mt-4 flex space-x-2">
//                   <button
//                     onClick={() => handleEdit(contact)}
//                     className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(contact._id)}
//                     className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
//             <button
//               className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
//               onClick={closeModal}
//             >
//               ✖
//             </button>
//             <h2 className="text-xl font-semibold mb-4">
//               {editingId ? "Edit" : "Add"} Contact
//             </h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 value={form.name}
//                 onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="text"
//                 placeholder="Mobile"
//                 value={form.mobile}
//                 onChange={(e) => setForm({ ...form, mobile: e.target.value })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={form.email}
//                 onChange={(e) => setForm({ ...form, email: e.target.value })}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
//               >
//                 {editingId ? "Update" : "Add"} Contact
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ShowContacts;
import React, { useEffect, useState } from "react";
import API from "../services/api";

const ShowContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [form, setForm] = useState({ name: "", mobile: "", email: "" });
  const [editingId, setEditingId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      setIsModalOpen(false);
      fetchContacts();
    } catch (error) {
      alert("Failed to save contact");
    }
  };

  const handleEdit = (contact) => {
    setForm(contact);
    setEditingId(contact._id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await API.delete(`/contacts/${id}`);
      if (response.status === 200) {
        alert("Contact deleted successfully");
        fetchContacts();
      }
    } catch (error) {
      alert("Failed to delete contact");
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setForm({ name: "", mobile: "", email: "" });
    setEditingId(null);
  };

  return (
    <div className="p-4 lg:p-6">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Contacts
      </h1>

      {contacts.length === 0 ? (
        <p className="text-gray-500 text-center">No contacts added yet</p>
      ) : (
        <div className="max-w-4xl mx-auto">
          <ul className="space-y-4">
            {contacts.map((contact) => (
              <li
                key={contact._id}
                className="bg-gradient-to-r from-teal-100 via-teal-200 to-teal-300 p-4 rounded-lg shadow-md flex flex-col hover:bg-gradient-to-r hover:from-teal-200 hover:via-teal-300 hover:to-teal-400 transition duration-300"
              >
                <p className="text-lg font-semibold">{contact.name}</p>
                <p className="text-sm text-gray-600">{contact.mobile}</p>
                <p className="text-sm text-gray-600">{contact.email}</p>
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(contact)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
              onClick={closeModal}
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold mb-4">
              {editingId ? "Edit" : "Add"} Contact
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Mobile"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
              >
                {editingId ? "Update" : "Add"} Contact
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowContacts;
