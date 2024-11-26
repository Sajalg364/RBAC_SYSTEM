import React, { useState, useEffect } from "react";
import api from "../api/api";

const User = () => {
  const [user, setUser] = useState(null);

  const fetchCurrentUser = async () => {
    const data = await api.getUsers();
    const currentUser = data.find((u) => u.email === "john.doe@example.com"); 
    setUser(currentUser);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  if (!user) {
    return <p>Loading user data...</p>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Profile</h2>
        <div className="mb-4">
          <p className="text-sm font-medium">Name:</p>
          <p className="text-lg">{user.name}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium">Email:</p>
          <p className="text-lg">{user.email}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium">Role:</p>
          <p className="text-lg">{user.role}</p>
        </div>
        <div className="mb-4">
          <p className="text-sm font-medium">Status:</p>
          <span
            className={`px-2 py-1 text-xs rounded ${
              user.status === "Active"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {user.status}
          </span>
        </div>
        <div>
          <p className="text-sm font-medium">Permissions:</p>
          <ul className="list-disc pl-6">
            <li>Read: {user.permissions.read ? "Yes" : "No"}</li>
            <li>Write: {user.permissions.write ? "Yes" : "No"}</li>
            <li>Delete: {user.permissions.delete ? "Yes" : "No"}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default User;







// import { motion } from 'framer-motion';

// const User = () => (
//   <motion.div
//     className="p-6"
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//   >
//     <h1 className="text-4xl font-bold text-blue-600 mb-4">User Page</h1>
//     <p className="text-lg text-gray-600">
//       Users can view their personalized dashboards and manage their profiles.
//     </p>
//     <ul className="mt-4 list-disc list-inside">
//       <li>Access personal data</li>
//       <li>Manage profile settings</li>
//       <li>Track activity and achievements</li>
//     </ul>
//   </motion.div>
// );

// export default User;
