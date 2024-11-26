import { motion } from 'framer-motion';

const Settings = () => (
  <motion.div
    className="p-6"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-4xl font-bold text-purple-600 mb-4">Settings Page</h1>
    <p className="text-lg text-gray-600">
      The Settings page allows users to configure their preferences and update account details.
    </p>
    <ul className="mt-4 list-disc list-inside">
      <li>Change password and update profile information</li>
      <li>Enable/disable notifications</li>
      <li>Customize user interface settings</li>
    </ul>
    <button className="mt-6 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition-all">
      Save Changes
    </button>
  </motion.div>
);

export default Settings;
