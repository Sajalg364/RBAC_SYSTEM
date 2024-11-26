import { motion } from 'framer-motion';

const Unauthorized = () => (
  <motion.div
    className="p-6 text-red-500"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="text-4xl font-bold">Access Denied</h1>
    <p className="text-lg mt-2">You do not have the required permissions to access this page.</p>
  </motion.div>
);

export default Unauthorized;
