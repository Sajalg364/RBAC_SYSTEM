import React, { useState, useEffect } from "react";
import api from "../api/api"; // Import the mock API

const Organizer = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [roleFilter, setRoleFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const data = await api.getUsers();
    setUsers(data);
    setFilteredUsers(data);
  };

  const handleFilterChange = () => {
    let filtered = users;

    if (roleFilter !== "All") {
      filtered = filtered.filter((user) => user.role === roleFilter);
    }

    if (statusFilter !== "All") {
      filtered = filtered.filter((user) => user.status === statusFilter);
    }

    setFilteredUsers(filtered);
  };

  useEffect(() => {
    handleFilterChange();
  }, [roleFilter, statusFilter]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Organizer Dashboard</h1>

      <div className="mb-4 flex gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Filter by Role</label>
          <select
            className="border border-gray-300 rounded px-3 py-2"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Filter by Status</label>
          <select
            className="border border-gray-300 rounded px-3 py-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">Users</h2>
        <table className="w-full text-left table-auto border-collapse">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.user_id} className="border-b hover:bg-gray-100">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 text-xs rounded ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Organizer;








// import { motion } from 'framer-motion';

// const Organizer = () => (
//   <motion.div
//     className="p-6"
//     initial={{ opacity: 0, x: 20 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.5 }}
//   >
//     <h1 className="text-4xl font-bold text-green-600 mb-4">Organizer Page</h1>
//     <p className="text-lg text-gray-600">
//       Organizers are responsible for managing events and resources efficiently.
//     </p>
//     <ul className="mt-4 list-disc list-inside">
//       <li>Schedule and manage events</li>
//       <li>Coordinate resources and tasks</li>
//       <li>Monitor event performance</li>
//     </ul>
//   </motion.div>
// );

// export default Organizer;
