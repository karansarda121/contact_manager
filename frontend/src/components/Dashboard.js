import React, { useState } from "react";
import ShowContacts from "./ShowContacts";
import AddContact from "./AddContact";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("show");

  const renderComponent = () => {
    switch (activeComponent) {
      case "show":
        return <ShowContacts />;
      case "add":
        return <AddContact />;
      default:
        return <ShowContacts />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row lg:pt-16 pt-0">
      {" "}
      {/* Adjusted padding-top */}
      {/* Sidebar */}
      <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md lg:w-64 w-full lg:h-auto h-auto lg:sticky top-0 mb-4 lg:mb-0">
        <h2 className="text-2xl font-extrabold mb-8 text-gray-800">
          Dashboard
        </h2>
        <ul>
          <li
            className={`cursor-pointer py-3 px-4 rounded-lg mb-4 hover:bg-teal-100 transition duration-200 ${
              activeComponent === "show" ? "bg-teal-200" : ""
            }`}
            onClick={() => setActiveComponent("show")}
          >
            Contacts
          </li>
          <li
            className={`cursor-pointer py-3 px-4 rounded-lg mb-4 hover:bg-teal-100 transition duration-200 ${
              activeComponent === "add" ? "bg-teal-200" : ""
            }`}
            onClick={() => setActiveComponent("add")}
          >
            Add Contact
          </li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-8">
        <div className="bg-white rounded-lg shadow-lg">{renderComponent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
