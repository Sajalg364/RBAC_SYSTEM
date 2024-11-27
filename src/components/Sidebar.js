import React from 'react';
import { Link } from 'react-router-dom';
import { useRole } from '../context/RoleContext';

const Sidebar = () => {
  const { currentRole, setCurrentRole } = useRole();

  // Define the menu for each role
  const menu = {
    SUPER_ADMIN: [
      { name: 'Dashboard', path: '/' },
      { name: 'Admin', path: '/admin' },
      { name: 'Organizer', path: '/organizer' },
      { name: 'User', path: '/user' },
      { name: 'Setting', path: '/setting' },
    ],
    ADMIN: [
      { name: 'Admin', path: '/admin' },
      { name: 'Organizer', path: '/organizer' },
      { name: 'User', path: '/user' },
      { name: 'Setting', path: '/setting' },
    ],
    ORGANIZER: [
      { name: 'Organizer', path: '/organizer' },
      { name: 'User', path: '/user' },
    ],
    USER: [{ name: 'User', path: '/user' }],
  };

  // Function to handle role change
  const handleRoleChange = (e) => {
    setCurrentRole(e.target.value);
  };

  // Dynamic focus outline color based on current role
  const getOutlineColor = (role) => {
    switch (role) {
      case 'SUPER_ADMIN':
        return 'focus:ring-2 focus:ring-red-500';
      case 'ADMIN':
        return 'focus:ring-2 focus:ring-orange-500'; 
      case 'ORGANIZER':
        return 'focus:ring-2 focus:ring-green-500'; 
      case 'USER':
        return 'focus:ring-2 focus:ring-blue-500'; 
      default:
        return 'focus:ring-2 focus:ring-yellow-500'; 
    }
  };

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      {/* Role selector */}
      <h1 className="text-xl font-bold mb-6 text-center">Role: {currentRole}</h1>
      <select
        onChange={handleRoleChange}
        className={`w-full bg-gray-700 text-white p-3 mb-6 rounded-lg border-none focus:outline-none transition duration-200 ${getOutlineColor(currentRole)}`}
        value={currentRole}
      >
        {Object.keys(menu).map((role) => (
          <option
            key={role}
            value={role}
            className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
          >
            {role}
          </option>
        ))}
      </select>

      {/* Navigation Menu */}
      <ul>
        {menu[currentRole].map((item) => (
          <li key={item.name} className="py-2 px-4 mb-2 rounded-lg hover:bg-gray-700 transition duration-300">
            <Link
              to={item.path}
              className="block py-2 px-4 rounded-lg hover:bg-gray-700 transition-all text-lg"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
