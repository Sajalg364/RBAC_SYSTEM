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
        return 'focus:ring-2 focus:ring-red-500'; // Red for Super Admin
      case 'ADMIN':
        return 'focus:ring-2 focus:ring-orange-500'; // Blue for Admin
      case 'ORGANIZER':
        return 'focus:ring-2 focus:ring-green-500'; // Green for Organizer
      case 'USER':
        return 'focus:ring-2 focus:ring-blue-500'; // Yellow for User
      default:
        return 'focus:ring-2 focus:ring-yellow-500'; // Default gray ring
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











// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useRole } from '../context/RoleContext';

// const Sidebar = () => {
//   const { currentRole, setCurrentRole } = useRole();

//   const menu = {
//     SUPER_ADMIN: [
//       { name: 'Dashboard', path: '/' },
//       { name: 'Admin', path: '/admin' },
//       { name: 'Organizer', path: '/organizer' },
//       { name: 'User', path: '/user' },
//       { name: 'Setting', path: '/setting' },
//     ],
//     ADMIN: [
//       { name: 'Admin', path: '/admin' },
//       { name: 'Organizer', path: '/organizer' },
//       { name: 'User', path: '/user' },
//       { name: 'Setting', path: '/setting' },
//     ],
//     ORGANIZER: [
//       { name: 'Organizer', path: '/organizer' },
//       { name: 'User', path: '/user' },
//     ],
//     USER: [{ name: 'User', path: '/user' }],
//   };

//   const handleRoleChange = (e) => {
//     setCurrentRole(e.target.value);
//   };

//   return (
//     <div className="w-64 bg-gray-800 text-white h-screen p-4">
//       {/* Role selector */}
//       <h1 className="text-xl font-bold mb-6 text-center">Role: {currentRole}</h1>
//       <select
//         onChange={handleRoleChange}
//         className="w-full bg-gray-700 text-white p-3 mb-6 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
//         value={currentRole}
//       >
//         {Object.keys(menu).map((role) => (
//           <option
//             key={role}
//             value={role}
//             className="bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
//           >
//             {role}
//           </option>
//         ))}
//       </select>

//       {/* Navigation Menu */}
//       <ul>
//         {menu[currentRole].map((item) => (
//           <li key={item.name} className="py-2 px-4 mb-2 rounded-lg hover:bg-gray-700 transition duration-300">
//             <Link
//               to={item.path}
//               className="block py-2 px-4 rounded-lg hover:bg-gray-700 transition-all text-lg"
//             >
//               {item.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;






// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useRole } from '../context/RoleContext';

// const Sidebar = () => {
//   const { currentRole, setCurrentRole } = useRole();

//   const menu = {
//     SUPER_ADMIN: [
//       { name: 'Dashboard', path: '/' },
//       { name: 'Admin', path: '/admin' },
//       { name: 'Organizer', path: '/organizer' },
//       { name: 'User', path: '/user' },
//       { name: 'Setting', path: '/setting' },
//     ],
//     ADMIN: [
//       { name: 'Admin', path: '/admin' },
//       { name: 'Organizer', path: '/organizer' },
//       { name: 'User', path: '/user' },
//       { name: 'Setting', path: '/setting' },
//     ],
//     ORGANIZER: [
//       { name: 'Organizer', path: '/organizer' },
//       { name: 'User', path: '/user' },
//     ],
//     USER: [{ name: 'User', path: '/user' }],
//   };

//   const handleRoleChange = (e) => {
//     setCurrentRole(e.target.value);
//   };

//   return (
//     <div className="w-64 bg-gray-800 text-white h-screen p-4">
//       <h1 className="text-xl font-bold mb-6">Role: {currentRole}</h1>
//       <select
//         onChange={handleRoleChange}
//         className="bg-gray-700 text-white p-2 mb-6 rounded"
//         value={currentRole}
//       >
//         {Object.keys(menu).map((role) => (
//           <option key={role} value={role}>
//             {role}
//           </option>
//         ))}
//       </select>
//       <ul>
//         {menu[currentRole].map((item) => (
//           <li key={item.name} className="py-2 px-4 hover:bg-gray-700 rounded">
//             <Link to={item.path} className="block py-2 px-4 rounded hover:bg-gray-700 transition-all">{item.name}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;













// // import React from 'react';
// // import { useRole } from '../context/RoleContext';

// // const Sidebar = () => {
// //   const { currentRole, setCurrentRole } = useRole();

// //   const menu = {
// //     SUPER_ADMIN: ['Dashboard', 'Admin', 'Organizer', 'User', 'Setting'],
// //     ADMIN: ['Admin', 'Organizer', 'User', 'Setting'],
// //     ORGANIZER: ['Organizer', 'User'],
// //     USER: ['User'],
// //   };

// //   const handleRoleChange = (e) => {
// //     setCurrentRole(e.target.value);
// //   };

// //   return (
// //     <div className="w-64 bg-gray-800 text-white h-screen p-4">
// //       <h1 className="text-xl font-bold mb-6">Role: {currentRole}</h1>
// //       <select
// //         onChange={handleRoleChange}
// //         className="bg-gray-700 text-white p-2 mb-6 rounded"
// //         value={currentRole}
// //       >
// //         {Object.keys(menu).map((role) => (
// //           <option key={role} value={role}>
// //             {role}
// //           </option>
// //         ))}
// //       </select>
// //       <ul>
// //         {menu[currentRole].map((item) => (
// //           <li key={item} className="py-2 px-4 hover:bg-gray-700 rounded">
// //             {item}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Sidebar;
