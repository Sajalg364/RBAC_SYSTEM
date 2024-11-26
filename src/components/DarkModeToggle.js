import React, { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-800 text-white rounded-full fixed bottom-4 right-4 transition-transform duration-300 transform hover:scale-105 dark:bg-gray-900"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {darkMode ? (
        <MoonIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
      ) : (
        <SunIcon className="w-6 h-6 text-yellow-400" />
      )}
    </motion.button>
  );
};

export default DarkModeToggle;
