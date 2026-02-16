
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, VcdData } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, name: string) => void;
  logout: () => void;
  saveVcd: (vcd: VcdData) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem('mynode_user');
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (email: string, name: string) => {
    const newUser: User = {
      email,
      name,
      savedVcds: [],
      projects: [{ name: 'Initial Consult', status: 'Active' }]
    };
    setUser(newUser);
    localStorage.setItem('mynode_user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mynode_user');
  };

  const saveVcd = (vcd: VcdData) => {
    if (!user) return;
    const updated = { ...user, savedVcds: [...user.savedVcds, vcd] };
    setUser(updated);
    localStorage.setItem('mynode_user', JSON.stringify(updated));
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, saveVcd }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
