import React, { createContext, useContext, useState } from 'react';

const RoleContext = createContext();

const roles = {
  SUPER_ADMIN: ['dashboard', 'admin', 'organizer', 'user', 'setting'],
  ADMIN: ['admin', 'organizer', 'user', 'setting'],
  ORGANIZER: ['organizer', 'user'],
  USER: ['user'],
};

export const RoleProvider = ({ children }) => {
  const [currentRole, setCurrentRole] = useState('SUPER_ADMIN');

  const hasAccess = (page) => roles[currentRole]?.includes(page);

  return (
    <RoleContext.Provider value={{ currentRole, setCurrentRole, hasAccess }}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
