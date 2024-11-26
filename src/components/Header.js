import React, { useState, useEffect, useRef } from 'react';
import { useRole } from '../context/RoleContext';
import { motion } from 'framer-motion';

const roleColors = {
  SUPER_ADMIN: 'bg-red-500',
  ADMIN: 'bg-orange-500',
  ORGANIZER: 'bg-green-500',
  USER: 'bg-blue-500',
};

const Header = () => {
  const { currentRole } = useRole();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <motion.div
      className={`${roleColors[currentRole]} text-white py-2 px-6 flex items-center justify-between`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Left: Logo and System Name */}
      <div className="flex items-center space-x-3">
        {/* <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold">
          RBAC
        </div> */}
        <h1 className="text-2xl font-bold">Role-Based Access System</h1>
      </div>

      {/* Right: User Info and Dropdown */}
      <div className="flex items-center space-x-4 relative" ref={dropdownRef}>
        <div className="flex flex-col items-end">
          <span className="text-sm">Welcome,</span>
          <span className="text-lg font-semibold capitalize">{currentRole}</span>
        </div>
        <div
          onClick={toggleDropdown}
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-200"
        >
          <span className="font-bold">{currentRole.charAt(0)}</span>
        </div>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute top-full mt-2 right-0 w-48 bg-white shadow-lg rounded-lg text-gray-800 z-10">
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
              <li
                className="px-4 py-2 text-red-500 hover:bg-gray-200 cursor-pointer"
                onClick={() => alert('Logged out!')}
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Header;











// import React from 'react';
// import { useRole } from '../context/RoleContext';
// import { motion } from 'framer-motion';

// const roleColors = {
//   SUPER_ADMIN: 'bg-red-500',
//   ADMIN: 'bg-orange-500',
//   ORGANIZER: 'bg-green-500',
//   USER: 'bg-blue-500',
// };

// const Header = () => {
//   const { currentRole } = useRole();

//   return (
//     <motion.div
//       className={`${roleColors[currentRole]} text-white py-4 px-6 flex items-center justify-between`}
//       initial={{ opacity: 0, y: -20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       {/* Left: Logo or System Name */}
//       <div className="flex items-center space-x-3">
//         <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black font-bold">
//           RBAC
//         </div>
//         <h1 className="text-2xl font-bold">Role-Based Access System</h1>
//       </div>

//       {/* Right: User Info */}
//       <div className="flex items-center space-x-4">
//         <div className="flex flex-col items-end">
//           <span className="text-sm">Welcome,</span>
//           <span className="text-lg font-semibold capitalize">{currentRole}</span>
//         </div>
//         <div className="relative">
//           {/* Profile Dropdown */}
//           <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 cursor-pointer hover:bg-gray-200">
//             <span className="font-bold">{currentRole.charAt(0)}</span>
//           </div>
//           <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg text-gray-800 z-10 hidden group-hover:block">
//             <ul className="py-2">
//               <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Profile</li>
//               <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
//               <li className="px-4 py-2 text-red-500 hover:bg-gray-200 cursor-pointer">Logout</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Header;










// import { useRole } from '../context/RoleContext';

// const roleColors = {
//   SUPER_ADMIN: 'bg-red-500',
//   ADMIN: 'bg-orange-500',
//   ORGANIZER: 'bg-green-500',
//   USER: 'bg-blue-500',
// };

// const Header = () => {
//   const { currentRole } = useRole();

//   return (
//     <div className={`${roleColors[currentRole]} text-white py-4 px-6`}>
//       <h1 className="text-2xl font-bold">Welcome, {currentRole}</h1>
//     </div>
//   );
// };

// export default Header;
