import React, { useState, useEffect } from "react";
import api from "../api/api";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [permissions, setPermissions] = useState({ read: false, write: false, delete: false });
  const [loading, setLoading] = useState(false);

  // Fetch users and roles on component load
  useEffect(() => {
    fetchUsers();
    fetchRoles();
  }, []);

  const fetchUsers = async () => {
    const data = await api.getUsers();
    setUsers(data);
  };

  const fetchRoles = async () => {
    const data = await api.getRoles();
    setRoles(data);
  };

  const handleUserSelection = (user) => {
    setSelectedUser(user);
    setPermissions({
      read: user.permissions?.read || false,
      write: user.permissions?.write || false,
      delete: user.permissions?.delete || false,
    });
  };

  const handlePermissionChange = (e) => {
    setPermissions({ ...permissions, [e.target.name]: e.target.checked });
  };

  const handleSavePermissions = async () => {
    if (!selectedUser) return;

    setLoading(true);
    try {
      const response = await api.updatePermissions(selectedUser.user_id, permissions);
      alert(response.message);
      fetchUsers(); // Refresh users list
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
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
      <h1 className="text-2xl font-bold mb-4">Super Admin Dashboard</h1>

      <div className="grid grid-cols-2 gap-6">
        {/* Users List */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Users</h2>
          <ul className="divide-y">
            {users.map((user) => (
              <li
                key={user.user_id}
                className="py-2 px-4 flex justify-between items-center hover:bg-gray-100 cursor-pointer"
                onClick={() => handleUserSelection(user)}
              >
                <div>
                  <p className="font-medium">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.status}
                  </span>
                  <button
                    className="text-blue-500 underline text-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleStatusToggle(user);
                    }}
                  >
                    Toggle Status
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Permissions Management */}
        {selectedUser && (
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Manage Permissions for {selectedUser.name}</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Role</label>
              <select
                className="w-full border border-gray-300 rounded px-3 py-2"
                value={selectedUser.role}
                onChange={(e) => setSelectedUser({ ...selectedUser, role: e.target.value })}
              >
                {roles.map((role) => (
                  <option key={role.role_id} value={role.role_name}>
                    {role.role_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Permissions</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="checkbox"
                    name="read"
                    checked={permissions.read}
                    onChange={handlePermissionChange}
                  />{" "}
                  Read
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="write"
                    checked={permissions.write}
                    onChange={handlePermissionChange}
                  />{" "}
                  Write
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="delete"
                    checked={permissions.delete}
                    onChange={handlePermissionChange}
                  />{" "}
                  Delete
                </label>
              </div>
            </div>

            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleSavePermissions}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
