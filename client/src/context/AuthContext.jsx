import { createContext, useContext, useState } from 'react';

const AuthCtx = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    token: localStorage.getItem('token') || null,
    name:  localStorage.getItem('name')  || null,
    email: localStorage.getItem('email') || null,
  });

  const login = ({ token, name, email }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('name',  name);
    localStorage.setItem('email', email);
    setUser({ token, name, email });
  };

  const logout = () => {
    localStorage.clear();
    setUser({ token: null, name: null, email: null });
  };

  return (
    <AuthCtx.Provider value={{ user, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
};

export const useAuth = () => useContext(AuthCtx);
