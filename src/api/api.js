const users = [
    {
      user_id: "12345",
      name: "Virat Kohli",
      email: "vk18.k@example.com",
      role: "Super Admin",
      status: "Active",
      permissions: { read: true, write: true, delete: true },
    },
    {
      user_id: "67890",
      name: "Rohit Sharma",
      email: "rs19.s@example.com",
      role: "Admin",
      status: "Active",
      permissions: { read: true, write: true, delete: false },
    },
    {
      user_id: "12346",
      name: "Hardik Pandya",
      email: "hk20.p@example.com",
      role: "User",
      status: "Inactive",
      permissions: { read: true, write: false, delete: false },
    },
    {
      user_id: "12347",
      name: "Ronaldo",
      email: "rr21.r@example.com",
      role: "User",
      status: "Active",
      permissions: { read: true, write: false, delete: false },
    },
    {
      user_id: "12348",
      name: "Messi",
      email: "mm22.m@example.com",
      role: "User",
      status: "Inactive",
      permissions: { read: true, write: false, delete: false },
    },
  ];
  
  // Mock data for roles
  const roles = [
    { role_id: "1", role_name: "Super_Admin", hierarchy: 1 },
    { role_id: "2", role_name: "Admin", hierarchy: 2 },
    { role_id: "3", role_name: "Organizer", hierarchy: 3 },
    { role_id: "4", role_name: "User", hierarchy: 4 },
  ];
  
  // Simulate API calls with promises
  const api = {
    getUsers: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve([...users]), 500); 
      }),
  
    getRoles: () =>
      new Promise((resolve) => {
        setTimeout(() => resolve([...roles]), 500); 
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
  