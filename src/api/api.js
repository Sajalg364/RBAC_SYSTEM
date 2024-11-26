// Mock data for users
const users = [
    {
      user_id: "12345",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
      status: "Active",
      permissions: { read: true, write: true, delete: false },
    },
    {
      user_id: "67890",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "User",
      status: "Inactive",
      permissions: { read: true, write: false, delete: false },
    },
  ];
  
  // Mock data for roles
  const roles = [
    { role_id: "1", role_name: "Super Admin", hierarchy: 1 },
    { role_id: "2", role_name: "Admin", hierarchy: 2 },
    { role_id: "3", role_name: "Organizer", hierarchy: 3 },
    { role_id: "4", role_name: "User", hierarchy: 4 },
  ];
  
  // Simulate API calls with promises
  const api = {
    getUsers: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve([...users]), 500); // Return a copy to avoid direct mutation
      }),
  
    getRoles: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve([...roles]), 500); // Return a copy to avoid direct mutation
      }),
  
    updatePermissions: (userId, permissions) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = users.find((u) => u.user_id === userId);
          if (user) {
            user.permissions = permissions;
            resolve({ success: true, message: "Permissions updated successfully." });
          } else {
            reject({ success: false, message: "User not found." });
          }
        }, 500);
      }),
  
    updateStatus: (userId, status) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = users.find((u) => u.user_id === userId);
          if (user) {
            user.status = status;
            resolve({ success: true, message: `User status updated to ${status}.` });
          } else {
            reject({ success: false, message: "User not found." });
          }
        }, 500);
      }),
  };
  
  export default api;
  