import React, { useState } from "react";
import { FaCogs } from "react-icons/fa";
import UserTable from "../components/UserManagement/UserTable";
import RoleTable from "../components/RoleManagement/RoleTable";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="dashboard">
      <nav className="dashboard-nav flex justify-between items-center bg-gray-800 py-4 px-6">
        {/* Center-aligned title */}
        <div className="flex-grow text-center text-white font-bold text-3xl">
          Rohith's Dashboard
        </div>
        {/* Left-aligned buttons */}
        <div className="flex flex-col items-end space-y-2">
        <button
          className={`mx-2 px-6 py-2 rounded-full font-semibold ${
            activeTab === "roles"
              ? "bg-gray-200 text-gray-300 hover:bg-gray-300"
              : "bg-green-500 text-white"
          } flex items-center`} 
          onClick={() => setActiveTab("roles")}
        >
          <FaCogs className="text-lg mr-2" /> 
          <span>ROLES</span>
        </button>
        <button
          className={`mx-2 px-6 py-2 rounded-full font-semibold ${
            activeTab === "users"
              ? "bg-gray-200 text-gray-300 hover:bg-gray-300"
              : "bg-red-500 text-white"
          }`}
          onClick={() => setActiveTab("users")}
        >
          BACK
        </button>
        </div>
      </nav>

      <div className="min-h-screen bg-gradient-to-b from-transparent to-yellow-500">
        {activeTab === "users" ? <UserTable /> : <RoleTable />}
      </div>
    </div>
  );
}

export default Dashboard;
