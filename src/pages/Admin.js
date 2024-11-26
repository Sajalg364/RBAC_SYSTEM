import React, { useState, useEffect } from "react";
import api from "../api/api"; // Import the mock API

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    const data = await api.getUsers();
    setUsers(data);
    setLoading(false);
  };

  const handleStatusToggle = async (user) => {
    try {
      const response = await api.updateStatus(user.user_id, user.status === "Active" ? "Inactive" : "Active");
      alert(response.message);
      fetchUsers(); // Refresh users list
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>

      <div className="bg-white shadow rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-4">User Management</h2>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <table className="w-full text-left table-auto border-collapse">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Role</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
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
                  <td className="px-4 py-2">
                    <button
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                      onClick={() => handleStatusToggle(user)}
                    >
                      Toggle Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Admin;




// import { motion } from 'framer-motion';

// const Admin = () => (
//   <motion.div
//     className="p-6"
//     initial={{ opacity: 0, x: -20 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.5 }}
//   >
//     <h1 className="text-4xl font-bold text-orange-600 mb-4">Admin Page</h1>
//     <p className="text-lg text-gray-600">
//       As an Admin, you have access to advanced settings and user management tools.
//     </p>
//     <ul className="mt-4 list-disc list-inside">
//       <li>Manage user accounts</li>
//       <li>View detailed system logs</li>
//       <li>Assign roles and permissions</li>
//     </ul>
//   </motion.div>
// );

// export default Admin;
