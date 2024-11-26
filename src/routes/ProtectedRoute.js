import React from 'react';
import { Navigate } from 'react-router-dom';
import { useRole } from '../context/RoleContext';

const ProtectedRoute = ({ page, children }) => {
  const { hasAccess } = useRole();

  return hasAccess(page) ? children : <Navigate to="/unauthorized" />;
};

export default ProtectedRoute;
