import { motion } from 'framer-motion';

const roleColors = {
  SUPER_ADMIN: 'bg-red-500',
  ADMIN: 'bg-orange-500',
  ORGANIZER: 'bg-green-500',
  USER: 'bg-blue-500',
};

const RoleBadge = ({ role }) => (
  <motion.div
    className={`${roleColors[role]} text-white py-1 px-3 rounded-full text-sm font-medium`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
  >
    {role}
  </motion.div>
);

export default RoleBadge;
