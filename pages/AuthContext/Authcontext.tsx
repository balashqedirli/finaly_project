

import React, { ReactNode, createContext, useContext, useState } from 'react';

const AuthContext = createContext<null | any>(null);

export const AuthProvider = ({ children }: {children: ReactNode}) => {
  const [user, setUser] = useState(null);

  const login = (userData: any) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
